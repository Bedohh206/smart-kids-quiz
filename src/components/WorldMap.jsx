// src/components/WorldMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useLesson } from "../hooks/useLesson.js";
import { useUserProfile, getRank } from "../hooks/useUserProfile.js";

// 🔁 NO MORE IMPORTS FOR IMAGES
const smartQuizLogo = "/assets/smartquiz/smartquiz.png";
const africaIcon = "/assets/africa/africa.png";
const asiaIcon = "/assets/asia/asia.png";
const europeIcon = "/assets/europe/europe.png";
const northAmericaIcon = "/assets/north-america/north-america.png";
const southAmericaIcon = "/assets/south-america/south-america.png";
const australiaIcon = "/assets/australia/australia.png";
const antarcticaIcon = "/assets/antarctica/antarctica.png";
const worldMapImg = "/assets/worldmap/worldmap.png";

// SUBJECT ICONS
const englishIcon = "/assets/english/english.png";
const mathIcon = "/assets/math/math.png";
const scienceIcon = "/assets/science/science.png";
const biologyIcon = "/assets/biology/biology.png";
const chemistryIcon = "/assets/chemistry/chemistry.png";
const geographyIcon = "/assets/geography/geography.png";
const healthIcon = "/assets/health/health.png";
const historyIcon = "/assets/history/history.png";
const computerIcon = "/assets/computer/computer.png";

// 🎵 MUST LIVE IN /public/sounds
const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";

export default function WorldMap() {
  const navigate = useNavigate();
  const { steps, loading, error, loadLesson } = useLesson();
  const { profile, updateProfile } = useUserProfile();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  useEffect(() => {
    loadLesson({ topic: "geography", age: 10, language: "en" });
  }, [loadLesson]);

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

  const toggleMusic = () => {
    muted ? musicRef.current.play() : musicRef.current.pause();
    setMuted(!muted);
  };

  const playClick = () => new Audio(clickSound).play().catch(() => {});

  const goToQuiz = (subjectId) => {
    playClick();
    navigate(`/quiz/${subjectId}`);
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
      alert(`🔒 Locked!\nNeed ${XP_UNLOCKS[id]} XP.\nYou have ${profile.xp} XP.`);
      return;
    }
    updateProfile({ continent: id, level: profile.level || 1 });
    navigate("/grades");
  };

  const continents = [
    { id: "northamerica", name: "North America", icon: northAmericaIcon, x: "22%", y: "32%" },
    { id: "southamerica", name: "South America", icon: southAmericaIcon, x: "28%", y: "62%" },
    { id: "europe", name: "Europe", icon: europeIcon, x: "55%", y: "28%" },
    { id: "africa", name: "Africa", icon: africaIcon, x: "52%", y: "52%" },
    { id: "asia", name: "Asia", icon: asiaIcon, x: "72%", y: "40%" },
    { id: "australia", name: "Australia", icon: australiaIcon, x: "82%", y: "72%" },
    { id: "antarctica", name: "Antarctica", icon: antarcticaIcon, x: "50%", y: "90%" },
  ];

  const subjects = [
    { id: "english", name: "English Language", icon: englishIcon },
    { id: "math", name: "Mathematics", icon: mathIcon },
    { id: "science", name: "Basic Science", icon: scienceIcon },
    { id: "biology", name: "Biology", icon: biologyIcon },
    { id: "chemistry", name: "Chemistry", icon: chemistryIcon },
    { id: "geography", name: "Geography", icon: geographyIcon },
    { id: "health", name: "Health Education", icon: healthIcon },
    { id: "history", name: "History", icon: historyIcon },
    { id: "computer", name: "Computer Science", icon: computerIcon },
  ];

  return (
    <div className="worldmap-container">
      {/* XP BAR */}
      {/* REST OF UI — unchanged */}
    </div>
  );
}
