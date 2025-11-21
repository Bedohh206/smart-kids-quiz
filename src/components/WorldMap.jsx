import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLesson } from "../hooks/uselesson.js";

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

const backgroundMusic = "/sounds/background.mp3";
const clickSound = "/sounds/click.wav";

export default function WorldMap() {
  const navigate = useNavigate();

  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);

  // ✅ FIXED — These variables MUST be included properly
  const { steps, loading, error, loadLesson } = useLesson();

  // Load the default AI lesson
  useEffect(() => {
    loadLesson({ topic: "geography", age: 10, language: "en" });
  }, []);

  // Background music setup
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
    return () => document.removeEventListener("click", start);
  }, []);

  const toggleMusic = () => {
    if (!musicRef.current) return;
    muted ? musicRef.current.play() : musicRef.current.pause();
    setMuted(!muted);
  };

  const playClick = () => {
    const snd = new Audio(clickSound);
    snd.play().catch(() => {});
  };

  const goToQuiz = (id) => {
    playClick();
    navigate(`/quiz/${id}`);
  };

  const [unlocked, setUnlocked] = useState(() => {
    return JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
    setUnlocked(saved);
  }, []);

  const handleContinentClick = (id) => {
    if (!unlocked.includes(id)) {
      alert("❌ This continent is locked. Complete the earlier continent to unlock it!");
      return;
    }
    goToQuiz(id);
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
      <header className="hero-section">
        <h1 className="hero-title">Smart Kids Quiz</h1>
        <button className="music-btn" onClick={toggleMusic}>
          {muted ? "🔇 Music Off" : "🎵 Music On"}
        </button>
      </header>

      <div className="two-column-layout">
        <section className="worldmap-area" style={{ backgroundImage: `url(${worldMapImg})` }}>
          <img src={smartQuizLogo} alt="Smart Quiz Logo" className="smartquiz-logo" />

          {continents.map((c) => (
            <motion.button
              key={c.id}
              className={`continent-button ${unlocked.includes(c.id) ? "" : "locked"}`}
              onClick={() => handleContinentClick(c.id)}
              whileHover={unlocked.includes(c.id) ? { scale: 1.15, rotate: 3 } : {}}
              whileTap={unlocked.includes(c.id) ? { scale: 0.9 } : {}}
              style={{ left: c.x, top: c.y }}
            >
              <img src={c.icon} className="continent-icon" alt={c.name} />
              <span className="continent-label">{c.name}</span>
            </motion.button>
          ))}

          <button className="leaderboard-btn" onClick={() => navigate("/leaderboard")}>
            🏆 Leaderboard
          </button>

          <div className="antarctica-waves" />
        </section>

        <section className="right-pane">
          <div className="subjects-box">
            <h2>📘 Subjects</h2>
            <div className="items-grid">
              {subjects.map((s) => (
                <motion.button
                  key={s.id}
                  className="item-card"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToQuiz(s.id)}
                >
                  <img src={s.icon} className="item-icon" alt={s.name} />
                  <span className="item-label">{s.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="ai-box">
            <h2>🤖 AI Tutor</h2>
            <ul className="ai-list">
              <li>🔊 Reads questions aloud</li>
              <li>🎤 Voice answering</li>
              <li>✨ AI Lesson Mode</li>
              <li>🌍 Multi-language support</li>
              <li>⭐ Leaderboard (coming soon)</li>
            </ul>

            <div className="ai-lesson-preview">
              {loading && <p>Loading AI lesson…</p>}
              {steps && (
                <div className="lesson-box">
                  <h3>AI Lesson</h3>
                  <p>{steps}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
