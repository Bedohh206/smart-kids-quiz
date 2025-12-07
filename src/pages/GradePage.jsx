import React from "react";
import { useNavigate } from "react-router-dom";

const GRADES = [
  { id: "PreK", label: "PreK" },
  { id: "K", label: "Kindergarten" },
  { id: "1", label: "Grade 1" },
  { id: "2", label: "Grade 2" },
  { id: "3", label: "Grade 3" },
  { id: "4", label: "Grade 4" },
  { id: "5", label: "Grade 5" },
];

export default function GradePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Select Grade</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {GRADES.map(g => (
          <button
            key={g.id}
            onClick={() => navigate(`/subjects/${g.id}`)}
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "10px",
              border: "1px solid #444",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  );
}
