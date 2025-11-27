import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/smartquiz/smartquiz.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={logo} alt="Smart Kids Academy Logo" className="home-logo" />
      
      {/* 🔥 Updated Branding */}
      <h1 className="home-title">Smart Kids Academy</h1>
      <p className="home-tagline">Knowledge Without Borders</p>

      <div className="home-buttons">
        <button className="home-btn" onClick={() => navigate("/world")}>
          🌍 World Exploration
        </button>

        <button className="home-btn" onClick={() => navigate("/alphabet")}>
          🔤 Alphabet Learning
        </button>

        <button className="home-btn" onClick={() => navigate("/subjects")}>
          🧠 Subject Quiz
        </button>
      </div>

      <footer className="home-footer">
        ⭐ Earn stars • 🎖 Unlock badges • 🚀 Become a global learner!
      </footer>
    </div>
  );
}
