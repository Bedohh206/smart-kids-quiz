import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TOPICS = {
  math: [
    "addition basics",
    "subtraction basics",
    "shapes",
    "fractions",
  ],
  english: [
    "short vowels",
    "reading a story",
    "nouns and verbs",
  ],
  science: [
    "volcanoes",
    "plant life cycle",
    "the water cycle",
  ],
  geography: [
    "continents",
    "oceans",
    "maps and symbols",
  ],
  computer: [
    "parts of a computer",
    "internet safety",
  ],
  art: [
    "primary colors",
    "drawing shapes",
  ],
  health: [
    "handwashing",
    "healthy foods",
  ],
};

export default function TopicPage() {
  const { grade, subject } = useParams();
  const navigate = useNavigate();

  const topics = TOPICS[subject] || [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>
        Topics — Grade {grade}, {subject.toUpperCase()}
      </h1>

      {topics.length === 0 && <p>No topics configured yet.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {topics.map((t, i) => (
          <li key={i} style={{ margin: "0.5rem 0" }}>
            <button
              onClick={() => navigate(`/lesson/${grade}/${subject}/${encodeURIComponent(t)}`)}
              style={{
                padding: "0.8rem 1.2rem",
                borderRadius: "10px",
                border: "1px solid #444",
                cursor: "pointer",
                fontSize: "1rem",
                width: "100%",
                textAlign: "left",
              }}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
