// src/components/WorldMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useLesson } from "../hooks/useLesson.js";
import { useUserProfile, getRank } from "../hooks/useUserProfile.js";

// 🖼️ ASSETS
import smartQuizLogo from "../assets/smartquiz/smartquiz.png";
import africaIcon from "../assets/africa/africa.png";
import asiaIcon from "../assets/asia/asia.png";
import europeIcon from "../assets/europe/europe.png";
import northAmericaIcon from "../assets/north-america/north-america.png";
import southAmericaIcon from "../assets/south-america/south-america.png";
import australiaIcon from "../assets/australia/australia.png";
import antarcticaIcon from "../assets/antarctica/antarctica.png";
import worldMapImg from "../assets/worldmap/worldmap.png";

import englishIcon from "../assets/english/english.png";
import mathIcon from "../assets/math/math.png";
import scienceIcon from "../assets/science/science.png";
import biologyIcon from "../assets/biology/biology.png";
import chemistryIcon from "../assets/chemistry/chemistry.png";
import geographyIcon from "../assets/geography/geography.png";
import healthIcon from "../assets/health/health.png";
import historyIcon from "../assets/history/history.png";
import computerIcon from "../assets/computer/computer.png";

import "./WorldMap.css";

// 🎵 These MUST be inside /public/sounds/
const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";

export default function WorldMap() {
  const navigate = useNavigate();
  const { steps, loading, error, loadLesson } = useLesson();
  const { profile, updateProfile } = useUserProfile();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  /* ---------- AI MINI LESSON ---------- */
  useEffect(() => {
    loadLesson({ topic: "geography", age: 10, language: "en" });
  }, [loadLesson]);

  /* ---------- BACKGROUND MUSIC ---------- */
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
    if (!musicRef.current) return;
    muted ? musicRef.current.play() : musicRef.current.pause();
    setMuted(!muted);
  };

  const playClick = () => new Audio(clickSound).play().catch(() => {});

  const goToQuiz = (subjectId) => {
    playClick();
    navigate(`/quiz/${subjectId}`);
  };

  /* ---------- CONTINENT UNLOCKS ---------- */
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
    const required = XP_UNLOCKS[id];

    if ((profile.xp || 0) < required) {
      alert(
        `🔒 Locked!\nYou need ${required} XP.\nYou have ${profile.xp} XP.\nPlay quizzes to unlock!`
      );
      return;
    }

    updateProfile({ continent: id, level: profile.level || 1 });
    navigate("/grades");
  };

  /* ---------- DATA ---------- */
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

  /* ---------- UI ---------- */
  return (
    <div className="worldmap-container">
      <header className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">Smart Kids Quiz</h1>
          <p className="hero-tagline">Explore the world and unlock your knowledge!</p>
        </div>

        <button className="music-btn" onClick={toggleMusic}>
          {muted ? "🔇 Music Off" : "🎵 Music On"}
        </button>
      </header>

      {/* ⭐ XP + RANK BAR */}
      <div className="xp-bar-container">
        <span className="xp-rank">
          {getRank(profile.xp).emoji} {getRank(profile.xp).title}
        </span>

        <div className="xp-bar">
          <div
            className="xp-fill"
            style={{ width: `${(profile.xp % 1000) / 10}%` }}
          />
        </div>

        <span className="xp-value">{profile.xp} XP</span>
      </div>

      <div className="two-column-layout">
        {/* ---------- MAP ---------- */}
        <section
          className="worldmap-area"
          style={{ backgroundImage: `url('${worldMapImg}')` }}  // <-- FIXED
        >
          <img src={smartQuizLogo} alt="Smart Kids" className="smartquiz-logo" />

          {continents.map((c) => (
            <motion.button
              key={c.id}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="continent-button"
              style={{ left: c.x, top: c.y }}
              onClick={() => handleContinentClick(c.id)}
            >
              <img src={c.icon} className="continent-icon" alt={c.name} />
              <span className="continent-label">{c.name}</span>
            </motion.button>
          ))}

          <button className="leaderboard-btn" onClick={() => navigate("/leaderboard")}>
            🏆 Leaderboard
          </button>
        </section>

        {/* ---------- SUBJECTS + AI ---------- */}
        <section className="right-pane">
          <div className="subjects-box">
            <h2>📘 Subjects</h2>
            <div className="items-grid">
              {subjects.map((s) => (
                <motion.button key={s.id} className="item-card" whileHover={{ scale: 1.1 }} onClick={() => goToQuiz(s.id)}>
                  <img src={s.icon} className="item-icon" alt={s.name} />
                  <span className="item-label">{s.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="ai-box">
            <h2>🤖 AI Tutor</h2>
            {loading && <p>Loading mini-lesson…</p>}
            {error && <p className="ai-error">AI unavailable right now.</p>}

            {!loading && !error && steps?.length > 0 && (
              <div className="lesson-box">
                <h3>Today's Mini-Lesson</h3>
                <ol>
                  {steps.slice(0, 3).map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
