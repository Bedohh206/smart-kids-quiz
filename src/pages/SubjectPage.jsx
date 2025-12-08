import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SUBJECTS = [
  { id: "math", label: "Math" },
  { id: "english", label: "English / Language Arts" },
  { id: "science", label: "Science" },
  { id: "geography", label: "Geography" },
  { id: "computer", label: "Computer / Technology" },
  { id: "art", label: "Art" },
  { id: "health", label: "Health" },
];

export default function SubjectPage() {
  const { grade } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Select Subject — Grade {grade}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {SUBJECTS.map(s => (
          <button
            key={s.id}
            onClick={() => navigate(`/topics/${grade}/${s.id}`)}
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "10px",
              border: "1px solid #444",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
