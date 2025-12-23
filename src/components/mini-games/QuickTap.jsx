import React, { useEffect, useState, useRef } from "react";
import "../../css/MiniGames.css";

const prompts = ["Tap Red", "Tap Blue", "Tap Green", "Tap Yellow", "Tap Star", "Tap Heart"];

const colors = [
  { id: "red", label: "Red", className: "qt-red" },
  { id: "blue", label: "Blue", className: "qt-blue" },
  { id: "green", label: "Green", className: "qt-green" },
  { id: "yellow", label: "Yellow", className: "qt-yellow" },
  { id: "star", label: "★", className: "qt-star" },
  { id: "heart", label: "❤", className: "qt-heart" },
];

function pickPrompt() {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

export default function QuickTap({ onClose }) {
  const [prompt, setPrompt] = useState(pickPrompt());
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleTap = (id) => {
    if (timeLeft <= 0) return;
    const needs = prompt.toLowerCase().includes(id);
    if (needs) {
      setScore((s) => s + 5);
      setPrompt(pickPrompt());
    } else {
      setScore((s) => Math.max(0, s - 2));
    }
  };

  const restart = () => {
    setPrompt(pickPrompt());
    setScore(0);
    setTimeLeft(30);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  return (
    <div className="minigame-shell">
      <div className="minigame-header">
        <h3>Quick Tap</h3>
        <button onClick={onClose} className="mini-close">✕</button>
      </div>
      <div className="mini-stats">
        <span>Prompt: {prompt}</span>
        <span>Score: {score}</span>
        <span>Time: {timeLeft}s</span>
      </div>
      <div className="qt-grid">
        {colors.map((c) => (
          <button
            key={c.id}
            className={`qt-btn ${c.className}`}
            onClick={() => handleTap(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="mini-actions">
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
}
