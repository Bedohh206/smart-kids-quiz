import React from "react";
import { useNavigate } from "react-router-dom";

const GRADES = ["PreK", "K", "1", "2", "3", "4", "5"];

export default function GradePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Select Grade</h1>
      {GRADES.map(g => (
        <button
          key={g}
          onClick={() => navigate(`/subjects/${g}`)}
          style={{ margin: "0.5rem", padding: "1rem" }}
        >
          {g === "K" ? "Kindergarten" : g === "PreK" ? "Pre-K" : `Grade ${g}`}
        </button>
      ))}
    </div>
  );
}
