import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function LessonPage() {
  const { subject } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLesson() {
      try {
        // TEMPORARY LESSON DATA – replace anytime you want!
        const lessons = {
          english: "This is the English lesson. You will learn vocabulary, grammar, and reading skills.",
          science: "This is the Basic Science lesson. Learn about living things, energy, and matter.",
          chemistry: "This is the Chemistry lesson. You will learn atoms, molecules, and reactions.",
          health: "This is the Health Education lesson. Learn hygiene, safety, and the human body.",
          computer: "This is the Computer Science lesson. Learn about computers, coding, and technology."
        };

        setLesson(lessons[subject] || "Lesson not available yet.");
        setLoading(false);
      } catch (error) {
        setLesson("Error loading lesson.");
        setLoading(false);
      }
    }

    getLesson();
  }, [subject]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>📘 Lesson Mode</h1>

      {loading ? (
        <p>Loading lesson...</p>
      ) : (
        <>
          <h2 style={{ textTransform: "capitalize" }}>{subject} Lesson</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{lesson}</p>
        </>
      )}

      <button
        onClick={() => navigate(`/quiz/${subject}`)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#ff9800",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Start Quiz →
      </button>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "block"
        }}
      >
        Exit
      </button>
    </div>
  );
}

export default LessonPage;
