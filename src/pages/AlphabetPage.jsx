import React, { useState } from "react";
import "./AlphabetPage.css";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetPage = () => {
  const [audio, setAudio] = useState(null);

  const playSound = (letter) => {
    if (audio) audio.pause();
    const sound = new Audio(`/sounds/alphabet/${letter}.mp3`);
    setAudio(sound);
    sound.play();
  };

  return (
    <div className="alphabet-container">
      <h1 className="alphabet-title">🔡 Alphabet Lab</h1>
      <p className="alphabet-subtitle">Tap a letter to hear how it sounds!</p>

      <div className="alphabet-grid">
        {letters.map((ltr) => (
          <button 
            key={ltr} 
            className="alphabet-card" 
            onClick={() => playSound(ltr)}
          >
            {ltr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetPage;
