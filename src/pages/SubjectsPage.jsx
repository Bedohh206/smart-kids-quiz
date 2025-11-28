import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubjectsPage.css";

export default function SubjectsPage() {
  const navigate = useNavigate();

  const subjects = [
    "math",
    "english",
    "science",
    "biology",
    "history",
    "geography",
    "computer",
    "chemistry"
  ];

  return (
    <div className="subjects-container">
      <h1 className="subjects-title">Choose a Subject</h1>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <div
            key={subject}
            className="subject-card"
            onClick={() => navigate(`/lesson/${subject}`)}
          >
            {subject.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
