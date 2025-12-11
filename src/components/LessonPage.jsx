import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { subject } = useParams();

  const grade = "General";
  const topic = subject;

  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});
  const [finished, setFinished] = useState(false);

  /* -----------------------------
      Text-to-Speech
  ----------------------------- */
  function speak(text) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    u.pitch = 1;
    speechSynthesis.speak(u);
  }

  /* -----------------------------
      Save Lesson Progress
  ----------------------------- */
  function saveProgress(finalScore) {
    try {
      const key = "skqProgress";
      const existing = JSON.parse(localStorage.getItem(key) || "{}");

      const updated = {
        ...existing,
        [grade]: {
          ...(existing[grade] || {}),
          [subject]: {
            ...(existing[grade]?.[subject] || {}),
            [topic]: {
              completed: true,
              score: finalScore,
              total: lesson.quiz?.length || 0,
              topic: lesson.topic,
              subject,
              date: new Date().toISOString(),
            },
          },
        },
      };

      localStorage.setItem(key, JSON.stringify(updated));
    } catch (e) {
      console.error("Save failed:", e);
    }
  }

  /* -----------------------------
      Handle Quiz Answers
  ----------------------------- */
  function chooseAnswer(i, option, correct) {
    if (answered[i]) return;

    setAnswered((prev) => ({ ...prev, [i]: option }));

    if (option === correct) {
      setScore((s) => s + 1);
      new Audio("/correct.mp3").play();
    } else {
      new Audio("/wrong.mp3").play();
    }

    const totalAnswered = Object.keys(answered).length + 1;
    if (lesson.quiz && totalAnswered === lesson.quiz.length) {
      setFinished(true);
      saveProgress(option === correct ? score + 1 : score);
    }
  }

  /* -----------------------------
      Load Lesson From API
  ----------------------------- */
  useEffect(() => {
    async function loadLesson() {
      try {
        const res = await fetch(
          "https://smart-kids-quiz-api.onrender.com/api/lesson",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ subject }),
          }
        );

        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setLesson(data);
      } catch (e) {
        console.error("Lesson load error:", e);
        setError("Couldn't load lesson. Please try again.");
      }
    }

    loadLesson();
  }, [subject]);

  /* -----------------------------
      Rendering States
  ----------------------------- */

  if (error)
    return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;

  if (!lesson)
    return (
      <div
        style={{
          padding: "2rem",
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#555",
        }}
      >
        Loading lesson...
      </div>
    );

  /* -----------------------------
      * * BEAUTIFUL UI STARTS BELOW * *
  ----------------------------- */

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Inter, system-ui",
        color: "#333",
      }}
    >
      {/* HEADER CARD */}
      <div
        style={{
          background: "#f0f7ff",
          borderRadius: "14px",
          padding: "1.6rem",
          marginBottom: "1.8rem",
          boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2rem", color: "#0057b8" }}>
          {lesson.topic}
        </h1>
        <p style={{ marginTop: "10px", fontSize: "1rem", color: "#555" }}>
          Grade: {lesson.grade || grade}
        </p>

        {/* Listen Button */}
        <button
          onClick={() =>
            speak(
              lesson.media?.tts_script ||
                `Today we are learning about ${lesson.topic}.`
            )
          }
          style={{
            marginTop: "1rem",
            padding: "10px 16px",
            borderRadius: "10px",
            background: "#0057b8",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          🔊 Read Aloud
        </button>
      </div>

      {/* OBJECTIVE */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "1.4rem",
          marginBottom: "1.4rem",
          boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h2>Learning Objective</h2>
        <p style={{ fontSize: "1.05rem" }}>{lesson.objective}</p>
      </div>

      {/* VOCABULARY */}
      {lesson.vocabulary?.length > 0 && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "1.4rem",
            marginBottom: "1.4rem",
            boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2>Vocabulary Words</h2>
          <ul>
            {lesson.vocabulary.map((w, i) => (
              <li key={i} style={{ padding: "4px 0" }}>
                {w}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* LESSON SECTION */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "1.4rem",
          marginBottom: "1.4rem",
          boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
        }}
      >
        <h2>Lesson</h2>
        <p style={{ lineHeight: 1.7 }}>{lesson.lesson}</p>
      </div>

      {/* ACTIVITIES */}
      {lesson.activities?.length > 0 && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "1.4rem",
            marginBottom: "1.4rem",
            boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2>Activities</h2>
          <ul>
            {lesson.activities.map((a, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* QUIZ */}
      {lesson.quiz?.length > 0 && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "1.4rem",
            marginBottom: "1.4rem",
            boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2>Quiz Time 🎯</h2>

          <ol>
            {lesson.quiz.map((q, i) => (
              <li key={i} style={{ marginBottom: "1.2rem" }}>
                <p style={{ fontWeight: 600 }}>{q.q}</p>

                {/* BUTTON GRID */}
                <div style={{ marginTop: "6px" }}>
                  {q.options.map((op, j) => {
                    const selected = answered[i] === op;
                    const correct = op === q.answer;

                    let bg = "white";
                    if (selected) bg = correct ? "#b2f7b2" : "#ffb3b3";

                    return (
                      <button
                        key={j}
                        onClick={() => chooseAnswer(i, op, q.answer)}
                        style={{
                          background: bg,
                          border: "1px solid #aaa",
                          padding: "8px 12px",
                          margin: "4px",
                          borderRadius: "10px",
                          cursor: answered[i] ? "not-allowed" : "pointer",
                        }}
                      >
                        {op}
                      </button>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>

          {finished && (
            <div
              style={{
                marginTop: "1.5rem",
                fontSize: "1.4rem",
                fontWeight: 600,
                textAlign: "center",
                color: "#0057b8",
              }}
            >
              🎉 You scored {score} out of {lesson.quiz.length}!
            </div>
          )}
        </div>
      )}

      {/* MEDIA */}
      {lesson.media && (
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "1.4rem",
            marginBottom: "1.4rem",
            boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2>Media Suggestions</h2>
          <p>
            <strong>Audio Script:</strong> {lesson.media.tts_script}
          </p>
          <p>
            <strong>Video Idea:</strong> {lesson.media.video}
          </p>
          <p>
            <strong>Image Prompt:</strong> {lesson.media.image_prompt}
          </p>
        </div>
      )}
    </div>
  );
}
