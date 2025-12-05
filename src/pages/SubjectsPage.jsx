import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubjectsPage.css";

const subjects = [
  { id: "english", name: "English" },
  { id: "math", name: "Mathematics" },
  { id: "science", name: "Science" },
  { id: "geography", name: "Geography" },
];

export default function SubjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="subjects-container">
      <h1>Choose a Subject</h1>

      <div className="subjects-grid">
        {subjects.map((s) => (
          <button
            key={s.id}
            className="subject-btn"
            onClick={() => navigate(`/lesson/${s.id}`)}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
