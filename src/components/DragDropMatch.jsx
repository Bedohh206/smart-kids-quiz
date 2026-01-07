import React, { useState, useEffect } from "react";
import "./DragDropMatch.css";

// Default matching pairs for different subjects
const defaultPairs = {
  math: [
    { left: "2 + 2", right: "4" },
    { left: "5 × 3", right: "15" },
    { left: "10 - 4", right: "6" },
    { left: "20 ÷ 5", right: "4" },
    { left: "3²", right: "9" },
    { left: "√16", right: "4" }
  ],
  science: [
    { left: "Sun", right: "Star" },
    { left: "Moon", right: "Satellite" },
    { left: "H₂O", right: "Water" },
    { left: "CO₂", right: "Carbon Dioxide" },
    { left: "Oxygen", right: "O₂" },
    { left: "Photosynthesis", right: "Plants make food" }
  ],
  biology: [
    { left: "Heart", right: "Pumps blood" },
    { left: "Lungs", right: "Breathe oxygen" },
    { left: "Brain", right: "Controls body" },
    { left: "Stomach", right: "Digests food" },
    { left: "Liver", right: "Filters toxins" },
    { left: "Kidneys", right: "Filter waste" }
  ],
  chemistry: [
    { left: "H", right: "Hydrogen" },
    { left: "O", right: "Oxygen" },
    { left: "C", right: "Carbon" },
    { left: "N", right: "Nitrogen" },
    { left: "Na", right: "Sodium" },
    { left: "Fe", right: "Iron" }
  ],
  geography: [
    { left: "Asia", right: "Largest continent" },
    { left: "Africa", right: "Second largest" },
    { left: "Pacific", right: "Largest ocean" },
    { left: "Nile", right: "Longest river" },
    { left: "Everest", right: "Tallest mountain" },
    { left: "Sahara", right: "Largest desert" }
  ],
  history: [
    { left: "1776", right: "American Independence" },
    { left: "1492", right: "Columbus voyage" },
    { left: "1969", right: "Moon landing" },
    { left: "Ancient Egypt", right: "Pyramids" },
    { left: "Roman Empire", right: "Caesar" },
    { left: "Industrial Revolution", right: "Steam engine" }
  ],
  english: [
    { left: "Noun", right: "Person, place, thing" },
    { left: "Verb", right: "Action word" },
    { left: "Adjective", right: "Describes noun" },
    { left: "Adverb", right: "Describes verb" },
    { left: "Pronoun", right: "Replaces noun" },
    { left: "Conjunction", right: "Connects words" }
  ],
  computer: [
    { left: "CPU", right: "Brain of computer" },
    { left: "RAM", right: "Temporary memory" },
    { left: "Hard Drive", right: "Permanent storage" },
    { left: "Monitor", right: "Display screen" },
    { left: "Keyboard", right: "Typing device" },
    { left: "Mouse", right: "Pointing device" }
  ],
  coding: [
    { left: "Variable", right: "Stores data" },
    { left: "Function", right: "Reusable code block" },
    { left: "Loop", right: "Repeats code" },
    { left: "If statement", right: "Makes decisions" },
    { left: "Array", right: "List of items" },
    { left: "String", right: "Text data" }
  ],
  algebra: [
    { left: "x + 5 = 10", right: "x = 5" },
    { left: "2x = 12", right: "x = 6" },
    { left: "x - 3 = 7", right: "x = 10" },
    { left: "3x + 2 = 11", right: "x = 3" },
    { left: "x/4 = 2", right: "x = 8" },
    { left: "2(x + 1) = 8", right: "x = 3" }
  ],
  geometry: [
    { left: "Triangle", right: "3 sides" },
    { left: "Square", right: "4 equal sides" },
    { left: "Circle", right: "Curved shape" },
    { left: "Pentagon", right: "5 sides" },
    { left: "90°", right: "Right angle" },
    { left: "180°", right: "Straight angle" }
  ],
  music: [
    { left: "Piano", right: "Keyboard instrument" },
    { left: "Guitar", right: "String instrument" },
    { left: "Drums", right: "Percussion instrument" },
    { left: "Trumpet", right: "Brass instrument" },
    { left: "Violin", right: "Bowed string instrument" },
    { left: "Flute", right: "Woodwind instrument" }
  ],
  art: [
    { left: "Red + Blue", right: "Purple" },
    { left: "Red + Yellow", right: "Orange" },
    { left: "Blue + Yellow", right: "Green" },
    { left: "Primary Colors", right: "Red, Blue, Yellow" },
    { left: "Complementary", right: "Opposite on color wheel" },
    { left: "Warm Colors", right: "Red, Orange, Yellow" }
  ],
  health: [
    { left: "Protein", right: "Builds muscles" },
    { left: "Carbohydrates", right: "Gives energy" },
    { left: "Vitamins", right: "Keeps body healthy" },
    { left: "Water", right: "Hydrates body" },
    { left: "Exercise", right: "Strengthens body" },
    { left: "Sleep", right: "Rests body" }
  ],
  // Continents
  africa: [
    { left: "Egypt", right: "Pyramids of Giza" },
    { left: "Kenya", right: "Safari & Wildlife" },
    { left: "Nigeria", right: "Most populous" },
    { left: "Sahara Desert", right: "World's largest hot desert" },
    { left: "Nile River", right: "Longest river" },
    { left: "Mount Kilimanjaro", right: "Highest peak in Africa" }
  ],
  northamerica: [
    { left: "USA", right: "Statue of Liberty" },
    { left: "Canada", right: "Maple syrup" },
    { left: "Mexico", right: "Aztec pyramids" },
    { left: "Grand Canyon", right: "Famous canyon" },
    { left: "Niagara Falls", right: "Massive waterfall" },
    { left: "Rocky Mountains", right: "Major mountain range" }
  ],
  southamerica: [
    { left: "Brazil", right: "Amazon rainforest" },
    { left: "Argentina", right: "Tango dance" },
    { left: "Peru", right: "Machu Picchu" },
    { left: "Amazon River", right: "Largest by volume" },
    { left: "Andes Mountains", right: "Longest mountain range" },
    { left: "Galápagos Islands", right: "Unique wildlife" }
  ],
  europe: [
    { left: "France", right: "Eiffel Tower" },
    { left: "Italy", right: "Colosseum" },
    { left: "Greece", right: "Ancient Olympics" },
    { left: "United Kingdom", right: "Big Ben" },
    { left: "Alps", right: "Major mountain range" },
    { left: "Danube River", right: "Second longest river" }
  ],
  asia: [
    { left: "China", right: "Great Wall" },
    { left: "India", right: "Taj Mahal" },
    { left: "Japan", right: "Mount Fuji" },
    { left: "Mount Everest", right: "Highest peak on Earth" },
    { left: "Himalayas", right: "Tallest mountain range" },
    { left: "Yangtze River", right: "Longest river in Asia" }
  ],
  australia: [
    { left: "Sydney", right: "Opera House" },
    { left: "Great Barrier Reef", right: "Largest coral reef" },
    { left: "Uluru", right: "Sacred rock formation" },
    { left: "Kangaroo", right: "Iconic marsupial" },
    { left: "Koala", right: "Eucalyptus eater" },
    { left: "Outback", right: "Remote interior" }
  ],
  antarctica: [
    { left: "South Pole", right: "Southernmost point" },
    { left: "Ice Sheet", right: "Covers 98% of land" },
    { left: "Emperor Penguin", right: "Largest penguin" },
    { left: "Vinson Massif", right: "Highest mountain" },
    { left: "Research Stations", right: "Scientific bases" },
    { left: "Midnight Sun", right: "24-hour daylight in summer" }
  ],
  default: [
    { left: "Cat", right: "Meow" },
    { left: "Dog", right: "Bark" },
    { left: "Cow", right: "Moo" },
    { left: "Duck", right: "Quack" },
    { left: "Bee", right: "Buzz" },
    { left: "Snake", right: "Hiss" }
  ]
};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function DragDropMatch({ subject = "default", customPairs, onClose }) {
  const pairs = customPairs || defaultPairs[subject] || defaultPairs.default;
  
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [matches, setMatches] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Initialize items
    const left = pairs.map((pair, idx) => ({ id: `left-${idx}`, text: pair.left, pairId: idx }));
    const right = shuffle(pairs.map((pair, idx) => ({ id: `right-${idx}`, text: pair.right, pairId: idx })));
    
    setLeftItems(left);
    setRightItems(right);
    setMatches({});
    setScore(0);
    setFeedback("");
    setCompleted(false);
  }, [subject, customPairs]);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetItem) => {
    e.preventDefault();
    
    if (!draggedItem) return;

    // Check if it's a correct match
    if (draggedItem.pairId === targetItem.pairId) {
      // Correct match!
      setMatches(prev => ({
        ...prev,
        [draggedItem.id]: targetItem.id
      }));
      setScore(prev => prev + 10);
      setFeedback("✅ Correct!");
      
      // Check if all matched
      if (Object.keys(matches).length + 1 === pairs.length) {
        setCompleted(true);
        setFeedback("🎉 Perfect! All matched!");
      }
      
      setTimeout(() => setFeedback(""), 1500);
    } else {
      // Incorrect match
      setFeedback("❌ Try again!");
      setTimeout(() => setFeedback(""), 1500);
    }
    
    setDraggedItem(null);
  };

  const handleReset = () => {
    const left = pairs.map((pair, idx) => ({ id: `left-${idx}`, text: pair.left, pairId: idx }));
    const right = shuffle(pairs.map((pair, idx) => ({ id: `right-${idx}`, text: pair.right, pairId: idx })));
    
    setLeftItems(left);
    setRightItems(right);
    setMatches({});
    setScore(0);
    setFeedback("");
    setCompleted(false);
  };

  return (
    <div className="dragdrop-overlay" onClick={onClose}>
      <div className="dragdrop-modal" onClick={(e) => e.stopPropagation()}>
        <button className="dragdrop-close-btn" onClick={onClose}>✕</button>
        
        <div className="dragdrop-header">
          <h2>🎯 Match the Pairs</h2>
          <p className="dragdrop-subtitle">Drag items from left to matching items on right</p>
        </div>

        <div className="dragdrop-stats">
          <div className="stat-item">
            <span className="stat-label">Score:</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Matched:</span>
            <span className="stat-value">{Object.keys(matches).length}/{pairs.length}</span>
          </div>
          {feedback && <div className="feedback-message">{feedback}</div>}
        </div>

        {completed && (
          <div className="completion-banner">
            <span>🏆 Excellent Work!</span>
          </div>
        )}

        <div className="dragdrop-game">
          {/* Left Column */}
          <div className="dragdrop-column left-column">
            {leftItems.map(item => (
              <div
                key={item.id}
                className={`dragdrop-item left-item ${matches[item.id] ? 'matched' : ''} ${draggedItem?.id === item.id ? 'dragging' : ''}`}
                draggable={!matches[item.id]}
                onDragStart={(e) => handleDragStart(e, item)}
              >
                {item.text}
                {matches[item.id] && <span className="match-indicator">✓</span>}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="dragdrop-column right-column">
            {rightItems.map(item => {
              const isMatched = Object.values(matches).includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`dragdrop-item right-item ${isMatched ? 'matched' : ''}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, item)}
                >
                  {item.text}
                  {isMatched && <span className="match-indicator">✓</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="dragdrop-actions">
          <button className="reset-btn" onClick={handleReset}>
            🔄 Reset
          </button>
          {completed && (
            <button className="next-btn" onClick={onClose}>
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
