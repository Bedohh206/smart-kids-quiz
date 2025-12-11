// src/components/WorldMap.jsx

// CONTINENT ICONS
import africaIcon from "../assets/africa/africa.png";
import antarcticaIcon from "../assets/antarctica/antarctica.png";
import asiaIcon from "../assets/asia/asia.png";
import australiaIcon from "../assets/australia/australia.png";
import europeIcon from "../assets/europe/europe.png";
import northAmericaIcon from "../assets/north-america/north-america.png";
import southAmericaIcon from "../assets/south-america/south-america.png";

// SUBJECT ICONS
import englishIcon from "../assets/english/english.png";
import mathIcon from "../assets/math/math.png";
import scienceIcon from "../assets/science/science.png";
import biologyIcon from "../assets/biology/biology.png";
import chemistryIcon from "../assets/chemistry/chemistry.png";
import geographyIcon from "../assets/geography/geography.png";
import healthIcon from "../assets/health/health.png";
import historyIcon from "../assets/history/history.png";
import computerIcon from "../assets/computer/computer.png";

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useLesson } from "../hooks/useLesson.js";
import { useUserProfile } from "../hooks/useUserProfile.js";

// STATIC ASSETS FROM PUBLIC
const worldMapImg = "/assets/worldmap/worldmap.png";
const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";

export default function WorldMap() {
  const navigate = useNavigate();
  const { loadLesson } = useLesson();
  const { profile, updateProfile } = useUserProfile();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  useEffect(() => {
    loadLesson({ topic: "geography", age: 10 });
  }, []);

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

  // CONTINENTS WITH FIXED COORDINATES
  const continents = [
    { id: "africa", name: "Africa", icon: africaIcon, x: "52%", y: "58%" },
    { id: "antarctica", name: "Antarctica", icon: antarcticaIcon, x: "48%", y: "85%" },
    { id: "asia", name: "Asia", icon: asiaIcon, x: "70%", y: "40%" },
    { id: "australia", name: "Australia", icon: australiaIcon, x: "78%", y: "70%" },
    { id: "europe", name: "Europe", icon: europeIcon, x: "55%", y: "32%" },
    { id: "northAmerica", name: "North America", icon: northAmericaIcon, x: "28%", y: "35%" },
    { id: "southAmerica", name: "South America", icon: southAmericaIcon, x: "35%", y: "62%" },
  ];

  const subjects = [
    { id: "english", icon: englishIcon, name: "English" },
    { id: "math", icon: mathIcon, name: "Math" },
    { id: "science", icon: scienceIcon, name: "Science" },
    { id: "biology", icon: biologyIcon, name: "Biology" },
    { id: "chemistry", icon: chemistryIcon, name: "Chemistry" },
    { id: "geography", icon: geographyIcon, name: "Geography" },
    { id: "health", icon: healthIcon, name: "Health" },
    { id: "history", icon: historyIcon, name: "History" },
    { id: "computer", icon: computerIcon, name: "Computer" },
  ];

  return (
    <div className="worldmap-container">
      <img src={worldMapImg} alt="World Map" className="worldmap-image" />

      {continents.map((c) => (
        <motion.img
          key={c.id}
          src={c.icon}
          className="continent-icon"
          style={{ left: c.x, top: c.y }}
          onClick={() => handleContinentClick(c.id)}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      ))}

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
            <img src={s.icon} alt={s.name} className="subject-icon" />
            <p>{s.name}</p>
          </div>
        ))}
      </div>

      <button className="music-btn" onClick={toggleMusic}>
        {muted ? "🔈" : "🔊"}
      </button>
    </div>
  );
}
