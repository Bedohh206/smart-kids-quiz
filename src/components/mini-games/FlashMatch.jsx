import React, { useEffect, useState } from "react";
import "../../css/MiniGames.css";

const cardsData = [
  { term: "Sun", def: "Star at center" },
  { term: "Moon", def: "Earth satellite" },
  { term: "Atom", def: "Smallest unit" },
  { term: "River", def: "Flows to sea" },
  { term: "Plant", def: "Makes food" },
  { term: "Cloud", def: "Water vapor" },
  { term: "Heart", def: "Pumps blood" },
  { term: "Math", def: "Numbers study" },
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function FlashMatch({ onClose }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]); // indexes
  const [matched, setMatched] = useState([]); // indexes
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  // Build pairs (term/def) and shuffle
  useEffect(() => {
    const pairs = cardsData.flatMap((c) => [
      { text: c.term, pair: c.def },
      { text: c.def, pair: c.term },
    ]);
    setCards(shuffle(pairs));
    setRunning(true);
  }, []);

  // timer
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const handleFlip = (idx) => {
    if (flipped.includes(idx) || matched.includes(idx)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next;
      const isMatch = cards[a].pair === cards[b].text;
      if (isMatch) {
        setMatched((m) => [...m, a, b]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  const resetGame = () => {
    const pairs = cardsData.flatMap((c) => [
      { text: c.term, pair: c.def },
      { text: c.def, pair: c.term },
    ]);
    setCards(shuffle(pairs));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTimer(0);
    setRunning(true);
  };

  const done = matched.length === cards.length && cards.length > 0;

  return (
    <div className="minigame-shell">
      <div className="minigame-header">
        <h3>Flash Match</h3>
        <button onClick={onClose} className="mini-close">✕</button>
      </div>
      <div className="mini-stats">
        <span>Time: {timer}s</span>
        <span>Moves: {moves}</span>
        {done && <span className="mini-done">Completed!</span>}
      </div>
      <div className="mini-grid">
        {cards.map((c, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(idx);
          return (
            <button
              key={idx}
              className={`mini-card ${isFlipped ? "flipped" : ""} ${matched.includes(idx) ? "matched" : ""}`}
              onClick={() => handleFlip(idx)}
            >
              {isFlipped ? c.text : "?"}
            </button>
          );
        })}
      </div>
      <div className="mini-actions">
        <button onClick={resetGame}>Replay</button>
      </div>
    </div>
  );
}
