import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "🌍 Explore Continents", path: "/map" },
    { label: "📚 Learn Subjects", path: "/subjects" },
    { label: "🔡 Alphabet Lab", path: "/alphabet" },
    { label: "🧪 Science & Biology", path: "/lesson/biology" },
    { label: "🏆 Leaderboard", path: "/leaderboard" }
  ];

  return (
    <div className="home-container">
      <h1 className="title">Smart Kids Quiz</h1>
      <p className="subtitle">Your Adventure Into Global Learning Starts Here</p>

      <div className="menu-grid">
        {buttons.map((btn, i) => (
          <button key={i} className="menu-btn" onClick={() => navigate(btn.path)}>
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
