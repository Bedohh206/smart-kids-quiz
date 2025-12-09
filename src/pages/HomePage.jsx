import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

// Import icons from assets folder
import africaIcon from "./assets/africa.png";
import subjectsIcon from "./assets/subjects.png";
import alphabetIcon from "./assets/alphabet.png";
import biologyIcon from "./assets/biology.png";
import leaderboardIcon from "./assets/leaderboard.png";

const HomePage = () => {
  const navigate = useNavigate();

  // Buttons array with labels, paths, and icons
  const buttons = [
    { label: "Explore Continents", path: "/map", icon: africaIcon },
    { label: "Learn Subjects", path: "/subjects", icon: subjectsIcon },
    { label: "Alphabet Lab", path: "/alphabet", icon: alphabetIcon },
    { label: "Science & Biology", path: "/lesson/biology", icon: biologyIcon },
    { label: "Leaderboard", path: "/leaderboard", icon: leaderboardIcon }
  ];

  return (
    <div className="home-container">
      <h1 className="title">Smart Kids Quiz</h1>
      <p className="subtitle">Your Adventure Into Global Learning Starts Here</p>

      <div className="menu-grid">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className="menu-btn"
            onClick={() => navigate(btn.path)}
          >
            <img src={btn.icon} alt={btn.label} width="40" />
            <span>{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
