// src/components/WorldMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useLesson } from "../hooks/useLesson.js";
import { useUserProfile, getRank } from "../hooks/useUserProfile.js";

// STATIC ASSETS (served from public/assets)
const worldMapImg = "/assets/worldmap/worldmap.png";

const icons = {
  africa: "/assets/africa/africa.png",
  asia: "/assets/asia/asia.png",
  europe: "/assets/europe/europe.png",
  northamerica: "/assets/north-america/north-america.png",
  southamerica: "/assets/south-america/south-america.png",
  australia: "/assets/australia/australia.png",
  antarctica: "/assets/antarctica/antarctica.png",

  english: "/assets/english/english.png",
  math: "/assets/math/math.png",
  science: "/assets/science/science.png",
  biology: "/assets/biology/biology.png",
  chemistry: "/assets/chemistry/chemistry.png",
  geography: "/assets/geography/geography.png",
  health: "/assets/health/health.png",
  history: "/assets/history/history.png",
  computer: "/assets/computer/computer.png",
};

const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";

export default function WorldMap() {
  const navigate = useNavigate();
  const { loadLesson } = useLesson();
  const { profile, updateProfile } = useUserProfile();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  // Load intro lesson
  useEffect(() => {
    loadLesson({ topic: "geography", age: 10 });
  }, []);

  // Auto-play music
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

  // XP requirements
  const XP_UNLOCKS = {
    africa: 0,
    southamerica: 200,
    northamerica: 400,
    europe: 700,
    asia: 1200,
    australia: 1700,
    antarctica: 2500,
  };

  // USER CLICKS CONTINENT
  const handleContinentClick = (id) => {
    playClick();

    if (profile.xp < XP_UNLOCKS[id]) {
      alert(
        `🔒 Locked!\nNeed ${XP_UNLOCKS[id]} XP.\nYou have ${profile.xp} XP.`
      );
      return;
    }

    updateProfile({ continent: id });
    navigate(`/quiz/${id}`); // FIXED — was /grades
  };

  const continents = [
    { id: "northamerica", name: "North America", x: "22%", y: "32%" },
    { id: "southamerica", name: "South America", x: "28%", y: "62%" },
    { id: "europe", name: "Europe", x: "55%", y: "28%" },
    { id: "africa", name: "Africa", x: "52%", y: "52%" },
    { id: "asia", name: "Asia", x: "72%", y: "40%" },
    { id: "australia", name: "Australia", x: "82%", y: "72%" },
    { id: "antarctica", name: "Antarctica", x: "50%", y: "90%" },
  ];

  const subjects = [
    { id: "english", name: "English Language" },
    { id: "math", name: "Mathematics" },
    { id: "science", name: "Basic Science" },
    { id: "biology", name: "Biology" },
    { id: "chemistry", name: "Chemistry" },
    { id: "geography", name: "Geography" },
    { id: "health", name: "Health Education" },
    { id: "history", name: "History" },
    { id: "computer", name: "Computer Science" },
  ];

  return (
    <div className="worldmap-container">
      <img src={worldMapImg} alt="World Map" className="worldmap-image" />

      {/* CONTINENT ICONS */}
      {continents.map((c) => (
        <motion.img
          key={c.id}
          src={icons[c.id]}
          className="continent-icon"
          style={{ left: c.x, top: c.y }}
          onClick={() => handleContinentClick(c.id)}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      ))}

      {/* SUBJECT ICONS */}
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
            <img src={icons[s.id]} alt={s.name} className="subject-icon" />
            <p>{s.name}</p>
          </div>
        ))}
      </div>

      {/* MUSIC BUTTON */}
      <button className="music-btn" onClick={toggleMusic}>
        {muted ? "🔈" : "🔊"}
      </button>
    </div>
  );
}
