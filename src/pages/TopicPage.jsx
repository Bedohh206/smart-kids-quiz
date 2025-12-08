import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CURRICULUM } from "../data/curriculum";

export default function TopicPage() {
  const { grade, subject } = useParams();
  const navigate = useNavigate();

  const gradeData = CURRICULUM[grade];
  const subjectData = gradeData ? gradeData[subject] : null;

  if (!gradeData || !subjectData) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Topics</h1>
        <p>Sorry, no topics are set up yet for this grade and subject.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>
        Topics —{" "}
        {grade === "PreK"
          ? "Pre-K"
          : grade === "K"
          ? "Kindergarten"
          : `Grade ${grade}`}{" "}
        • {subjectData.displayName}
      </h1>

      {subjectData.units.map((unit) => (
        <div key={unit.id} style={{ marginTop: "1.5rem" }}>
          <h2>{unit.name}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {unit.topics.map((t, i) => (
              <li key={i} style={{ margin: "0.4rem 0" }}>
                <button
                  onClick={() =>
                    navigate(
                      `/lesson/${grade}/${subject}/${encodeURIComponent(t)}`
                    )
                  }
                  style={{
                    padding: "0.7rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid #444",
                    cursor: "pointer",
                    fontSize: "0.95rem",
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
      ))}
    </div>
  );
}
