import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/smartquiz/smartquiz.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={logo} alt="Smart Kids Quiz Logo" className="home-logo" />
      
      <h1 className="home-title">Smart Kids Quiz</h1>
      <p className="home-subtitle">Explore • Learn • Play • Grow</p>

      <div className="home-buttons">
        <button className="home-btn" onClick={() => navigate("/world")}>
          🌍 Start World Exploration
        </button>

        <button className="home-btn" onClick={() => navigate("/alphabet")}>
          🔤 Alphabet Learning
        </button>

        <button className="home-btn" onClick={() => navigate("/subjects")}>
          🧠 Subject Quiz
        </button>
      </div>

      <footer className="home-footer">
        ⭐ Earn stars • 🎖️ Unlock badges • 🚀 Become a global learner!
      </footer>
    </div>
  );
}
