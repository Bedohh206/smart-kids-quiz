import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { grade, subject, topic } = useParams();
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});
  const [finished, setFinished] = useState(false);

  // 🔊 Simple text-to-speech
  function speak(text) {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.pitch = 1;
    speechSynthesis.speak(utter);
  }

  // 💾 Save progress locally when quiz is finished
  function saveProgress(finalScore) {
    try {
      const key = "skqProgress";
      const existing = JSON.parse(localStorage.getItem(key) || "{}");

      const g = grade;
      const s = subject;
      const t = topic;

      const updated = {
        ...existing,
        [g]: {
          ...(existing[g] || {}),
          [s]: {
            ...(existing[g]?.[s] || {}),
            [t]: {
              completed: true,
              score: finalScore,
              total: lesson.quiz?.length || 0,
              topic: lesson.topic,
              subject: lesson.subject || subject,
              date: new Date().toISOString(),
            },
          },
        },
      };

      localStorage.setItem(key, JSON.stringify(updated));
    } catch (e) {
      console.error("Progress save failed:", e);
    }
  }

  function chooseAnswer(qIndex, option, correct) {
    if (answered[qIndex]) return;

    setAnswered(prev => ({ ...prev, [qIndex]: option }));

    if (option === correct) {
      setScore(prev => prev + 1);
      new Audio("/correct.mp3").play();
    } else {
      new Audio("/wrong.mp3").play();
    }

    const newCount = Object.keys(answered).length + 1;
    if (lesson.quiz && newCount === lesson.quiz.length) {
      setFinished(true);
      saveProgress(option === correct ? score + 1 : score);
    }
  }

  useEffect(() => {
    async function loadLesson() {
      try {
        const res = await fetch("/api/lesson", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            grade,    // keep as string for AI prompt
            subject,
            topic,
          }),
        });

        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setLesson(data);
      } catch (err) {
        console.error("Lesson fetch failed:", err);
        setError("Couldn't load lesson. Please try again.");
      }
    }

    loadLesson();
  }, [grade, subject, topic]);

  if (error) return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;
  if (!lesson) return <div style={{ padding: "2rem" }}>Loading lesson...</div>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {lesson.topic} — Grade {lesson.grade || grade}
      </h1>

      <p style={{ fontStyle: "italic" }}>Standard: {lesson.standard}</p>

      <h2>Learning Objective</h2>
      <p>{lesson.objective}</p>

      {lesson.vocabulary?.length > 0 && (
        <>
          <h2>Vocabulary Words</h2>
          <ul>
            {lesson.vocabulary.map((word, i) => (
              <li key={i}>{word}</li>
            ))}
          </ul>
        </>
      )}

      <h2>Lesson</h2>

      {/* 🔊 Listen button */}
      <button
        onClick={() =>
          speak(
            lesson.media?.tts_script ||
            `Today we are learning about ${lesson.topic} in ${subject} for grade ${grade}.`
          )
        }
        style={{ marginBottom: "1rem" }}
      >
        🔊 Listen to Introduction
      </button>

      <p style={{ lineHeight: "1.6" }}>{lesson.lesson}</p>

      {lesson.activities?.length > 0 && (
        <>
          <h2>Activities</h2>
          <ul>
            {lesson.activities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </>
      )}

      {lesson.quiz?.length > 0 && (
        <>
          <h2>Quiz</h2>
          <ol>
            {lesson.quiz.map((q, i) => (
              <li key={i} style={{ marginBottom: "1rem" }}>
                <p>{q.q}</p>

                {q.options.map((op, j) => (
                  <button
                    key={j}
                    onClick={() => chooseAnswer(i, op, q.answer)}
                    style={{
                      background:
                        answered[i] === op
                          ? op === q.answer
                            ? "lightgreen"
                            : "salmon"
                          : "white",
                      padding: "0.5rem 1rem",
                      margin: "0.3rem",
                      borderRadius: "8px",
                      cursor: answered[i] ? "not-allowed" : "pointer",
                      border: "1px solid #444",
                    }}
                  >
                    {op}
                  </button>
                ))}
              </li>
            ))}
          </ol>

          {finished && (
            <div style={{ marginTop: "2rem", fontSize: "1.5rem" }}>
              🎉 You scored {score} out of {lesson.quiz.length}!
            </div>
          )}
        </>
      )}

      {lesson.media && (
        <>
          <h2>Media Suggestions</h2>
          <p><strong>Audio script:</strong> {lesson.media.tts_script}</p>
          <p><strong>Video idea:</strong> {lesson.media.video}</p>
          <p><strong>Image prompt:</strong> {lesson.media.image_prompt}</p>
        </>
      )}
    </div>
  );
}
