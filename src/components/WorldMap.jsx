// src/components/WorldMap.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./WorldMap.css";

const worldMapImg = "/assets/worldmap/worldmap.png";

export default function WorldMap() {
  const navigate = useNavigate();

  const continents = [
    { id: "africa", name: "Africa", icon: "/assets/africa/africa.png", x: "52%", y: "58%" },
    { id: "europe", name: "Europe", icon: "/assets/europe/europe.png", x: "55%", y: "35%" },
    { id: "asia", name: "Asia", icon: "/assets/asia/asia.png", x: "70%", y: "42%" },
    { id: "northamerica", name: "North America", icon: "/assets/north-america/north-america.png", x: "28%", y: "38%" },
    { id: "southamerica", name: "South America", icon: "/assets/south-america/south-america.png", x: "35%", y: "63%" },
    { id: "australia", name: "Australia", icon: "/assets/australia/australia.png", x: "82%", y: "68%" },
    { id: "antarctica", name: "Antarctica", icon: "/assets/antarctica/antarctica.png", x: "50%", y: "92%" },
  ];

  return (
    <div className="worldmap-container">
      <div
        className="worldmap-area"
        style={{ backgroundImage: `url(${worldMapImg})` }}
      >
        {continents.map((c) => (
          <motion.button
            key={c.id}
            className="continent-button"
            style={{ left: c.x, top: c.y }}
            onClick={() => navigate(`/quiz/${c.id}`)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={c.icon} className="continent-icon" alt={c.name} />
            <span className="continent-label">{c.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
