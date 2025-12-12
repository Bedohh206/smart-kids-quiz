// src/components/WorldMap.jsx

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useLesson } from "../hooks/useLesson.js";
import { useUserProfile } from "../hooks/useUserProfile.js";

import "./WorldMap.css";

// STATIC FILE PATHS (PUBLIC DIRECTORY)
const worldMapImg = "/assets/worldmap/worldmap.png";
const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";
const smartQuizLogo = "/assets/smartquiz/smartquiz.png";

export default function WorldMap() {
  const navigate = useNavigate();
  const { loadLesson } = useLesson();
  const { profile, updateProfile } = useUserProfile();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  // 🔥 FIXED: UNLOCKED STATE MUST BE HERE, NOT INSIDE JSX
  const [unlocked, setUnlocked] = useState(() => {
    return JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
  });

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
    setUnlocked(saved);
  }, []);

  // Load a sample AI lesson
  useEffect(() => {
    loadLesson({ topic: "geography", age: 10 });
  }, []);

  // Background music setup
  useEffect(() => {
    const music = new Audio(backgroundMusic);
    music.loop = true;
    music.volume = 0.35;
    musicRef.current = music;

    const startMusic = () => {
      music.play().catch(() => {});
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      music.pause();
    };
  }, []);

  const playClick = () => new Audio(clickSound).play().catch(() => {});
  const toggleMusic = () => {
    muted ? musicRef.current.play() : musicRef.current.pause();
    setMuted(!muted);
  };

  const XP_UNLOCKS = {
    africa: 0,
    southamerica: 200,
    northamerica: 400,
    europe: 700,
    asia: 1200,
    australia: 1700,
    antarctica: 2500,
  };

  const handleContinentClick = (id) => {
    playClick();
    if (profile.xp < XP_UNLOCKS[id]) {
      alert(`Locked. Need ${XP_UNLOCKS[id]} XP.`);
      return;
    }
    updateProfile({ continent: id });
    navigate(`/quiz/${id}`);
  };

  // PUBLIC folder icons
  const continents = [
    { id: "africa", name: "Africa", icon: "/assets/africa/africa.png", x: "52%", y: "58%" },
    { id: "europe", name: "Europe", icon: "/assets/europe/europe.png", x: "55%", y: "35%" },
    { id: "asia", name: "Asia", icon: "/assets/asia/asia.png", x: "70%", y: "42%" },
    { id: "northamerica", name: "North America", icon: "/assets/north-america/north-america.png", x: "28%", y: "38%" },
    { id: "southamerica", name: "South America", icon: "/assets/south-america/south-america.png", x: "35%", y: "63%" },
    { id: "australia", name: "Australia", icon: "/assets/australia/australia.png", x: "82%", y: "68%" },
    { id: "antarctica", name: "Antarctica", icon: "/assets/antarctica/antarctica.png", x: "50%", y: "92%" },
  ];

  const subjects = [
    { id: "english", label: "English", icon: "/assets/english/english.png" },
    { id: "math", label: "Math", icon: "/assets/math/math.png" },
    { id: "science", label: "Science", icon: "/assets/science/science.png" },
    { id: "biology", label: "Biology", icon: "/assets/biology/biology.png" },
    { id: "chemistry", label: "Chemistry", icon: "/assets/chemistry/chemistry.png" },
    { id: "geography", label: "Geography", icon: "/assets/geography/geography.png" },
    { id: "history", label: "History", icon: "/assets/history/history.png" },
    { id: "health", label: "Health", icon: "/assets/health/health.png" },
    { id: "computer", label: "Computer", icon: "/assets/computer/computer.png" },
  ];

  return (
    <div className="worldmap-container">
      <img src={worldMapImg} alt="World Map" className="worldmap-image" />

      {/* CONTINENT ICONS */}
      {continents.map((c) => {
        const isUnlocked = unlocked.includes(c.id);

        return (
          <motion.button
            key={c.id}
            className={`continent-button ${isUnlocked ? "unlocked" : "locked"}`}
            style={{ left: c.x, top: c.y }}
            onClick={() => handleContinentClick(c.id)}
            whileHover={isUnlocked ? { scale: 1.15, rotate: 3, y: -4 } : {}}
            whileTap={isUnlocked ? { scale: 0.9 } : {}}
          >
            <img src={c.icon} className="continent-icon" alt={c.name} />

            <span className="continent-label">
              {c.name}
              {!isUnlocked && <span className="lock-badge">🔒</span>}
            </span>
          </motion.button>
        );
      })}

      {/* SUBJECT PANEL */}
      <div className="subjects-panel">
        {subjects.map((s) => (
          <div
            key={s.id}
            className="subject-card"
            onClick={() => {
              playClick();
              navigate(`/lesson/${s.id}`);
            }}
          >
            <img src={s.icon} alt={s.label} className="subject-icon" />
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      <button className="music-btn" onClick={toggleMusic}>
        {muted ? "🔈" : "🔊"}
      </button>
    </div>
  );
}
