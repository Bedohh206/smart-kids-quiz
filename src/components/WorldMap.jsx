// 🌍 CONTINENT ICONS
import smartQuizLogo from "../assets/smartquiz/smartquiz.png";

import africaIcon from "../assets/africa/africa.png";
import asiaIcon from "../assets/asia/asia.png";
import europeIcon from "../assets/europe/europe.png";
import northAmericaIcon from "../assets/north-america/north-america.png";
import southAmericaIcon from "../assets/south-america/south-america.png";
import australiaIcon from "../assets/australia/australia.png";
import antarcticaIcon from "../assets/antarctica/antarctica.png";
import worldMapImg from "../assets/worldmap/worldmap.png";

// 📘 SUBJECT ICONS
import englishIcon from "../assets/english/english.png";
import mathIcon from "../assets/math/math.png";
import scienceIcon from "../assets/science/science.png";
import biologyIcon from "../assets/biology/biology.png";
import chemistryIcon from "../assets/chemistry/chemistry.png";
import geographyIcon from "../assets/geography/geography.png";
import healthIcon from "../assets/health/health.png";
import historyIcon from "../assets/history/history.png";
import computerIcon from "../assets/computer/computer.png";

// React + Framer Motion
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MiniGamesLauncher from "./MiniGamesLauncher";
import LeaderboardPanel, { loadLeaderboard, saveLeaderboard } from "./LeaderboardPanel";
import VideoExplorer from "./VideoExplorer";

// Analytics
import { trackContinentSelect, trackPageView, trackLeaderboardView, trackMiniGamePlay } from "../utils/analytics";
import { continentVideos } from "../data/continentVideos";

import "./WorldMap.css";

const BASE = import.meta.env.BASE_URL;

const backgroundMusic = `${BASE}sounds/background.mp3`;
const clickSound = `${BASE}sounds/click.wav`;

export default function WorldMap() {
  const navigate = useNavigate();
  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);
  const leaderboardRef = useRef(null);
  const [leaderboard, setLeaderboard] = useState(() => loadLeaderboard("leaderboard:scramble"));
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState(null);

  /* 🎵 MUSIC INIT */
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

  const scrollToLeaderboard = () => {
    trackLeaderboardView();
    if (leaderboardRef.current) {
      leaderboardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToQuiz = (id) => {
    playClick();
    navigate(`/quiz/${id}`);
  };

  const openVideos = (continentId) => {
    playClick();
    setSelectedContinent(continentId);
    setShowVideos(true);
  };

  /* 🎮 GAME MODE: UNLOCKED CONTINENTS */
  const [unlocked, setUnlocked] = useState(() => {
    return JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
  });

  // Refresh unlocked list whenever user returns to this page
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("unlockedContinents")) || ["africa"];
    setUnlocked(saved);
    
    // Track page view
    trackPageView('/', 'Smart Kids Quiz - Home');
  }, []);

  // Refresh leaderboard on load
  useEffect(() => {
    setLeaderboard(loadLeaderboard("leaderboard:scramble"));
  }, []);

  const handleContinentClick = (id) => {
    if (!unlocked.includes(id)) {
      alert("❌ This continent is locked. Complete the earlier continent to unlock it!");
      return;
    }
    
    // Track continent selection
    trackContinentSelect(id);
    
    // Show options: Take Quiz or Watch Videos
    const choice = confirm(`🌍 ${id.toUpperCase()}\n\nOK = 📝 Take Quiz\nCancel = 🎥 Watch Videos`);
    if (choice) {
      goToQuiz(id);
    } else {
      openVideos(id);
    }
  };

  const clearLeaderboard = () => {
    saveLeaderboard("leaderboard:scramble", []);
    setLeaderboard([]);
  };

  /* 🌍 CONTINENTS WITH X/Y POSITIONS */
  const continents = [
    {
      id: "northamerica",
      name: "North America",
      icon: northAmericaIcon,
      x: "22%",
      y: "32%",
    },
    {
      id: "southamerica",
      name: "South America",
      icon: southAmericaIcon,
      x: "28%",
      y: "62%",
    },
    {
      id: "europe",
      name: "Europe",
      icon: europeIcon,
      x: "55%",
      y: "28%",
    },
    {
      id: "africa",
      name: "Africa",
      icon: africaIcon,
      x: "52%",
      y: "52%",
    },
    {
      id: "asia",
      name: "Asia",
      icon: asiaIcon,
      x: "72%",
      y: "40%",
    },
    {
      id: "australia",
      name: "Australia",
      icon: australiaIcon,
      x: "82%",
      y: "72%",
    },
    {
      id: "antarctica",
      name: "Antarctica",
      icon: antarcticaIcon,
      x: "50%",
      y: "90%",
    },
  ];

  /* 📘 SUBJECTS PANEL */
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
    { id: "algebra", name: "Algebra 1", icon: mathIcon },
    { id: "geometry", name: "Geometry", icon: mathIcon },
    { id: "music", name: "Music", icon: englishIcon },
    { id: "art", name: "Art & Art History", icon: geographyIcon },
    { id: "coding", name: "Coding & Programming", icon: computerIcon },
  ];

  /* ======================================================
     FINAL JSX RETURN
  ====================================================== */
  return (
    <div className="worldmap-container">
      {/* HEADER */}
      <header className="hero-section">
        <h1 className="hero-title">Smart Kids Quiz</h1>
        <button className="music-btn" onClick={toggleMusic}>
          {muted ? "🔇 Music Off" : "🎵 Music On"}
        </button>
        <div className="hero-actions">
          <button className="hero-link" onClick={scrollToLeaderboard}>🏆 Leaderboard</button>
          <button className="hero-link" onClick={() => setShowMiniGames(true)}>🎮 Mini-Games</button>
        </div>
      </header>

      {/* TWO-COLUMN LAYOUT */}
      <div className="two-column-layout">
        {/* LEFT — WORLD MAP */}
        <section
          className="worldmap-area"
          style={{ backgroundImage: `url(${worldMapImg})` }}
        >
          {/* Floating logo */}
          <img
            src={smartQuizLogo}
            alt="Smart Quiz Logo"
            className="smartquiz-logo"
          />

          {/* Floating continent buttons */}
          {continents.map((c) => (
            <motion.button
              key={c.id}
              className={`continent-button ${
                unlocked.includes(c.id) ? "" : "locked"
              }`}
              onClick={() => handleContinentClick(c.id)}
              whileHover={
                unlocked.includes(c.id) ? { scale: 1.15, rotate: 3 } : {}
              }
              whileTap={unlocked.includes(c.id) ? { scale: 0.9 } : {}}
              style={{ left: c.x, top: c.y }}
            >
              <img src={c.icon} className="continent-icon" alt={c.name} />
              <span className="continent-label">{c.name}</span>
            </motion.button>
          ))}

          {/* Antarctica water effect */}
          <div className="antarctica-waves" />
        </section>

        {/* RIGHT — SUBJECTS + AI */}
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
                  <img src={s.icon} className="item-icon" alt="" />
                  <span className="item-label">{s.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="subjects-box">
            <h2>🏆 Leaderboard</h2>
            <LeaderboardPanel
              title="Word Scramble"
              entries={leaderboard}
              onClear={clearLeaderboard}
              ref={leaderboardRef}
            />
          </div>

          <div className="subjects-box">
            <h2>🎮 Mini-Games</h2>
            <div className="mini-menu-buttons">
              <button onClick={() => setShowMiniGames(!showMiniGames)}>
                {showMiniGames ? "Close Mini-Games" : "Open Mini-Games"}
              </button>
            </div>
            {showMiniGames && <MiniGamesLauncher />}
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
          </div>
        </section>
      </div>

      {/* Mobile floating mini-games shortcut */}
      <button
        className="mini-fab"
        onClick={() => setShowMiniGames((v) => !v)}
        aria-label="Open Mini-Games"
      >
        🎮
      </button>

      {/* Video Explorer Modal */}
      {showVideos && selectedContinent && (
        <VideoExplorer
          continent={selectedContinent}
          videos={continentVideos[selectedContinent]}
          onClose={() => setShowVideos(false)}
        />
      )}

      {/* Footer with contact */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        borderTop: '2px solid rgba(255,255,255,0.2)',
        color: 'rgba(255,255,255,0.9)',
        fontSize: '14px'
      }}>
        <p style={{ margin: '5px 0' }}>© 2026 Smart Kids Quiz - Educational Learning Platform</p>
        <p style={{ margin: '5px 0' }}>
          Contact: <a href="mailto:alphabay@email.com" style={{ color: '#FFD700', textDecoration: 'none' }}>alphabay@email.com</a>
        </p>
        <p style={{ margin: '5px 0', fontSize: '12px', opacity: 0.8 }}>
          <a href="/privacy-policy.html" style={{ color: '#FFF', marginRight: '15px' }}>Privacy Policy</a>
          <a href="/terms.html" style={{ color: '#FFF' }}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
