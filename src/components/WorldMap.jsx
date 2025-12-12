// src/components/WorldMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useLesson } from "../hooks/useLesson.js";
import { useUserProfile } from "../hooks/useUserProfile.js";
import "./WorldMap.css";

// PUBLIC ASSETS
const worldMapImg = "/assets/worldmap/worldmap.png";
const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";

export default function WorldMap() {
  const navigate = useNavigate();
  const { loadLesson } = useLesson();
  const { profile, updateProfile } = useUserProfile();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  /* ------------------ UNLOCK SYSTEM ------------------ */
  const [unlocked, setUnlocked] = useState(() => {
    return JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
  });

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
    setUnlocked(saved);
  }, []);

  /* ------------------ AI LESSON ------------------ */
  useEffect(() => {
    loadLesson({ topic: "geography", age: 10 });
  }, [loadLesson]);

  /* ------------------ MUSIC ------------------ */
  useEffect(() => {
    const music = new Audio(backgroundMusic);
    music.loop = true;
    music.volume = 0.35;
    musicRef.current = music;

    const start = () => {
      music.play().catch(() => {});
      document.removeEventListener("click", start);
    };

    document.addEventListener("click", start);
    return () => {
      document.removeEventListener("click", start);
      music.pause();
    };
  }, []);

  const playClick = () => new Audio(clickSound).play().catch(() => {});
  const toggleMusic = () => {
    muted ? musicRef.current.play() : musicRef.current.pause();
    setMuted(!muted);
  };

  /* ------------------ DATA ------------------ */
  const continents = [
    { id: "africa", name: "Africa", icon: "/assets/africa/africa.png", x: "52%", y: "58%" },
    { id: "europe", name: "Europe", icon: "/assets/europe/europe.png", x: "55%", y: "35%" },
    { id: "asia", name: "Asia", icon: "/assets/asia/asia.png", x: "70%", y: "42%" },
    { id: "northamerica", name: "North America", icon: "/assets/north-america/north-america.png", x: "28%", y: "38%" },
    { id: "southamerica", name: "South America", icon: "/assets/south-america/south-america.png", x: "35%", y: "63%" },
    { id: "australia", name: "Australia", icon: "/assets/australia/australia.png", x: "82%", y: "68%" },
    { id: "antarctica", name: "Antarctica", icon: "/assets/antarctica/antarctica.png", x: "50%", y: "92%" },
  ];

  /* ------------------ HANDLERS ------------------ */
  const handleContinentClick = (id) => {
    playClick();
    if (!unlocked.includes(id)) {
      alert("🔒 This continent is locked.");
      return;
    }
    updateProfile({ continent: id });
    navigate(`/quiz/${id}`);
  };

  /* ------------------ RENDER ------------------ */
  return (
    <div
      className="worldmap-area"
      style={{ backgroundImage: `url(${worldMapImg})` }}
    >
      {continents.map((c) => {
        const isUnlocked = unlocked.includes(c.id);

        return (
          <motion.button
            key={c.id}
            className={`continent-button ${isUnlocked ? "unlocked" : "locked"}`}
            style={{ left: c.x, top: c.y }}
            onClick={() => handleContinentClick(c.id)}
            whileHover={isUnlocked ? { scale: 1.15 } : {}}
          >
            <img src={c.icon} className="continent-icon" alt={c.name} />
            <span className="continent-label">{c.name}</span>
          </motion.button>
        );
      })}

      <button className="music-btn" onClick={toggleMusic}>
        {muted ? "🔈" : "🔊"}
      </button>
    </div>
  );
}
