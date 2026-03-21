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
import { Link, useNavigate } from "react-router-dom";
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

const continentLearningModules = {
  africa: {
    name: "Africa",
    intro:
      "Africa is the second-largest continent and home to rich landscapes, wildlife, and cultures. This learning path helps children read, observe, compare, and solve.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Warm-up, build curiosity, and set the scene.",
        text: "Africa includes deserts, rainforests, mountains, and savannas. Learners can discover animals, places, and communities while practicing key reading skills.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Teach science and geography through fun facts.",
        text: "From the Sahara Desert to the Congo Rainforest, children explore habitats and how animals adapt to climate, food, and movement.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Introduce diversity, traditions, and historical learning.",
        text: "Africa has thousands of languages and many cultural traditions in music, art, and storytelling. Learners can also explore ancient and modern achievements.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Add math and logic in a playful way.",
        text: "Children can compare distances, count countries, and use real facts to practice number sense, estimation, and pattern spotting.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Connect continent learning to school and real life.",
        text: "This section helps children connect school topics to everyday routines, communication, health, and community life across Africa.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  },
  asia: {
    name: "Asia",
    intro:
      "Asia is the largest continent, with many climates, languages, and inventions. Kids can connect map skills with science, history, and daily life.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Warm-up with key location and scale ideas.",
        text: "Learners explore how Asia stretches from snowy mountains to tropical islands and includes many countries and cultures.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Build science understanding through habitats.",
        text: "Children can compare monsoon forests, deserts, and mountain ecosystems while learning how species adapt to their environments.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Learn traditions, civilizations, and innovation.",
        text: "Asia includes long historical timelines, major civilizations, and modern technology hubs that support cross-subject learning.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Practice measurement, comparison, and logic.",
        text: "Kids can compare population sizes, mountain heights, and travel distances to build numeracy in meaningful contexts.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Connect home life, schooling, and global citizenship.",
        text: "Learners explore food, festivals, languages, and school routines while building respect for diverse communities.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  },
  europe: {
    name: "Europe",
    intro:
      "Europe includes varied landscapes, historical cities, and modern innovation. Children can connect history, geography, language, and science learning.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Build context and map awareness.",
        text: "Children locate Europe on the world map and compare regions such as coastal areas, plains, and mountain zones.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Teach climate and habitat patterns.",
        text: "Learners compare forests, rivers, and alpine ecosystems to understand weather, adaptation, and environmental care.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Explore culture and historical change.",
        text: "This section introduces art, architecture, languages, and important historical periods that shaped societies.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Practice analytical and numerical thinking.",
        text: "Children use real data such as distances, temperatures, and travel times to apply number operations.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Bridge school subjects with real communities.",
        text: "Learners connect daily routines, transportation, health, and communication to classroom topics.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  },
  northamerica: {
    name: "North America",
    intro:
      "North America features arctic zones, deserts, forests, and major cities. It offers strong cross-curricular learning opportunities for kids.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Set learning goals and map orientation.",
        text: "Children identify countries and regions while practicing direction words and location reading.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Use ecosystems to build science skills.",
        text: "Learners compare wildlife in forests, grasslands, and polar areas to understand adaptation and food chains.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Highlight communities, heritage, and change over time.",
        text: "Children explore Indigenous histories, migration stories, and cultural traditions through age-appropriate examples.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Apply math to real-world comparisons.",
        text: "Kids analyze distances, temperatures, and population patterns to practice operations and reasoning.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Relate content to daily life and school learning.",
        text: "This section links language use, sports, health habits, and social routines to classroom topics.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  },
  southamerica: {
    name: "South America",
    intro:
      "South America includes the Amazon rainforest, Andes mountains, and vibrant cultures. Children can build strong reading and inquiry skills through regional studies.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Create context with place and environment.",
        text: "Learners identify major regions and discuss how geography affects climate and life patterns.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Use biodiversity for science exploration.",
        text: "Children learn about rainforest ecosystems, river systems, and adaptation in different habitats.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Understand diversity and historical development.",
        text: "This section covers languages, traditions, and important historical milestones in accessible language.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Build numeracy using authentic facts.",
        text: "Learners compare river lengths, mountain heights, and country counts while practicing data reading.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Connect school learning to real communities.",
        text: "Children connect food, transport, schooling, and communication habits to what they study in class.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  },
  australia: {
    name: "Australia",
    intro:
      "Australia combines unique wildlife, deserts, reefs, and modern cities. Kids can connect nature studies with math, language, and history.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Orient learners with map and region basics.",
        text: "Children explore where Australia is located and how coastlines, outback regions, and cities differ.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Build scientific curiosity with habitat facts.",
        text: "Learners study species adaptation, reef ecosystems, and dry-environment survival strategies.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Introduce traditions and historical perspectives.",
        text: "Children learn about Aboriginal and Torres Strait Islander heritage and modern multicultural communities.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Use real data for math thinking.",
        text: "Kids compare distances between regions, temperature ranges, and simple population data for practice.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Link global learning to personal experiences.",
        text: "This section connects school routines, sports, language, and health habits with classroom subjects.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  },
  antarctica: {
    name: "Antarctica",
    intro:
      "Antarctica is the coldest continent and a unique place for science discovery. It helps children learn observation, data use, and environmental care.",
    sections: [
      {
        emoji: "🧩",
        title: "Section 1 — Introduction to the Continent",
        purpose: "Set context with location and extreme conditions.",
        text: "Learners discover why Antarctica is mostly ice-covered and how it differs from other continents.",
        subjectLinks: ["geography", "english"]
      },
      {
        emoji: "🐾",
        title: "Section 2 — Animals and Nature",
        purpose: "Use polar habitats to teach science concepts.",
        text: "Children study penguins, seals, and food chains while exploring adaptation in cold ecosystems.",
        subjectLinks: ["science", "geography"]
      },
      {
        emoji: "🏛️",
        title: "Section 3 — People, Culture, and History",
        purpose: "Introduce exploration and research history.",
        text: "This section covers scientific missions, cooperation, and how researchers study climate and ice data.",
        subjectLinks: ["history", "english"]
      },
      {
        emoji: "🧮",
        title: "Section 4 — Numbers, Patterns, and Fun Facts",
        purpose: "Apply math to weather and measurement.",
        text: "Learners compare temperatures, daylight hours, and ice measurements using child-friendly number tasks.",
        subjectLinks: ["math", "science"]
      },
      {
        emoji: "🌟",
        title: "Section 5 — Everyday Life and Learning Connections",
        purpose: "Connect science learning with responsibility.",
        text: "Children reflect on conservation, teamwork, and healthy habits needed for exploration and research work.",
        subjectLinks: ["english", "health", "history"]
      }
    ]
  }
};

const subjectRouteLabels = {
  geography: "Geography",
  english: "English",
  science: "Science",
  history: "History",
  math: "Math",
  health: "Health Education"
};

export default function WorldMap() {
  const navigate = useNavigate();
  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);
  const leaderboardRef = useRef(null);
  const [leaderboard, setLeaderboard] = useState(() => loadLeaderboard("leaderboard:scramble"));
  const [showMiniGames, setShowMiniGames] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const learningContent = continentLearningModules.africa;

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

      {/* Continent Learning Content */}
      <section style={{
        maxWidth: '900px',
        margin: '30px auto 20px',
        padding: '30px',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'left'
      }}>
        <h2 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.8em' }}>Continent Learning Journey 🌍</h2>
        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
          Read this educational guide below the continent map, then use the linked subject quizzes. This keeps the home page simple while adding rich publisher content for learners.
        </p>
        <article>
          <h3 style={{ color: '#333', marginBottom: '8px' }}>{learningContent.name}</h3>
          <p style={{ color: '#555', lineHeight: '1.75', marginBottom: '14px' }}>{learningContent.intro}</p>

          {learningContent.sections.map((section) => (
            <section key={section.title} style={{ marginTop: '14px' }}>
              <h4 style={{ marginBottom: '6px', color: '#3b4a9f' }}>{section.emoji} {section.title}</h4>
              <p style={{ marginBottom: '6px', color: '#444' }}>
                <strong>Purpose:</strong> {section.purpose}
              </p>
              <p style={{ marginBottom: '8px', color: '#555', lineHeight: '1.7' }}>{section.text}</p>
              <p style={{ margin: 0, color: '#444' }}>
                <strong>Subject links:</strong>{' '}
                {section.subjectLinks.map((subjectId, index) => (
                  <React.Fragment key={`${section.title}-${subjectId}`}>
                    <Link to={`/quiz/${subjectId}`} style={{ color: '#667eea', textDecoration: 'none', fontWeight: 600 }}>
                      {subjectRouteLabels[subjectId] || subjectId}
                    </Link>
                    {index < section.subjectLinks.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </p>
            </section>
          ))}

          <p style={{ marginTop: '14px' }}>
            <Link to="/quiz/africa" style={{ color: '#667eea', fontWeight: 700, textDecoration: 'none', marginRight: '14px' }}>
              Take Africa Quiz
            </Link>
            <Link to="/learn" style={{ color: '#667eea', fontWeight: 700, textDecoration: 'none' }}>
              Explore More Learning Guides
            </Link>
          </p>
        </article>
      </section>

      {/* Welcome / Intro Section */}
      <section style={{
        maxWidth: '900px',
        margin: '40px auto 20px',
        padding: '30px',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.8em' }}>Welcome to Smart Kids Quiz! 🎓</h2>
        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '12px', fontSize: '1.1em' }}>
          Smart Kids Quiz is a fun, interactive learning world designed for children ages 4–10.
          Our quizzes help kids build confidence in:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 16px', maxWidth: 480, textAlign: 'left', display: 'inline-block' }}>
          {[
            '📖 Early reading',
            '🔢 Math and counting',
            '🔷 Shapes and colors',
            '🐾 Animals and nature',
            '🧩 Problem-solving',
            '🧠 Memory and logic',
          ].map((item) => (
            <li key={item} style={{ color: '#444', fontSize: '1.05em', padding: '4px 0' }}>{item}</li>
          ))}
        </ul>
        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.05em', marginBottom: '12px' }}>
          Every quiz is crafted to be simple, colorful, and engaging — perfect for young learners.
          Kids learn while having fun, and parents get peace of mind knowing the content is safe,
          educational, and ad-free during gameplay.
        </p>
        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.0em' }}>
          Questions or feedback? Reach us at{' '}
          <a href="mailto:smartkidsquiz@mail.com" style={{ color: '#667eea', fontWeight: 'bold', textDecoration: 'none' }}>
            smartkidsquiz@mail.com
          </a>
        </p>
      </section>

      {/* Learning Categories Section */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto 30px',
        padding: '30px',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'left'
      }}>
        <h2 style={{ color: '#667eea', marginBottom: '8px', fontSize: '1.6em', textAlign: 'center' }}>Learning Categories 📚</h2>
        <p style={{ color: '#555', textAlign: 'center', marginBottom: '20px', fontSize: '1.05em' }}>
          Choose a topic and start learning:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
          {[
            { emoji: '🔢', label: 'Math Skills', desc: 'Counting, shapes, patterns', path: '/quiz/math' },
            { emoji: '📖', label: 'Reading Skills', desc: 'Letters, simple words, phonics', path: '/quiz/english' },
            { emoji: '🐾', label: 'Animals & Nature', desc: 'Habitats, sounds, fun facts', path: '/quiz/science' },
            { emoji: '🔷', label: 'Colors & Shapes', desc: 'Early visual learning', path: '/quiz/geometry' },
            { emoji: '🧠', label: 'Memory Games', desc: 'Matching, recall, attention', path: '/quiz/africa' },
            { emoji: '🌍', label: 'General Knowledge', desc: 'Everyday learning for kids', path: '/quiz/geography' },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={cat.path}
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%)',
                borderRadius: '10px',
                padding: '16px 18px',
                textDecoration: 'none',
                border: '1px solid #c7d7fb',
                transition: 'transform 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ fontSize: '1.5em', marginBottom: '4px' }}>{cat.emoji} <strong style={{ color: '#3b4a9f' }}>{cat.label}</strong></div>
              <div style={{ color: '#666', fontSize: '0.95em' }}>{cat.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '28px 20px',
        marginTop: '20px',
        borderTop: '2px solid rgba(255,255,255,0.2)',
        color: 'rgba(255,255,255,0.9)',
        fontSize: '14px'
      }}>
        <p style={{ margin: '5px 0', fontSize: '15px' }}>© 2026 Smart Kids Quiz — Educational Learning Platform</p>
        <p style={{ margin: '5px 0' }}>
          Contact: <a href="mailto:smartkidsquiz@mail.com" style={{ color: '#FFD700', textDecoration: 'none' }}>smartkidsquiz@mail.com</a>
        </p>
        <p style={{ margin: '10px 0 5px', fontWeight: 600, opacity: 0.85, textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.07em' }}>Learning Categories</p>
        <p style={{ margin: '4px 0 10px', fontSize: '13px' }}>
          <Link to="/quiz/math" style={{ color: '#FFF', marginRight: '14px' }}>Math Skills</Link>
          <Link to="/quiz/english" style={{ color: '#FFF', marginRight: '14px' }}>Reading Skills</Link>
          <Link to="/quiz/science" style={{ color: '#FFF', marginRight: '14px' }}>Animals &amp; Nature</Link>
          <Link to="/quiz/geometry" style={{ color: '#FFF', marginRight: '14px' }}>Colors &amp; Shapes</Link>
          <Link to="/quiz/geography" style={{ color: '#FFF' }}>General Knowledge</Link>
        </p>
        <p style={{ margin: '4px 0', fontSize: '13px' }}>
          <Link to="/about" style={{ color: '#FFF', marginRight: '14px' }}>About</Link>
          <Link to="/contact" style={{ color: '#FFF', marginRight: '14px' }}>Contact</Link>
          <Link to="/privacy" style={{ color: '#FFF', marginRight: '14px' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#FFF', marginRight: '14px' }}>Terms</Link>
          <Link to="/learn" style={{ color: '#FFF' }}>Learning Guides</Link>
        </p>
      </footer>
    </div>
  );
}
