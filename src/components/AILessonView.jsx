import { useState } from "react";

export default function AILessonView({ topic, age, language }) {
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLesson = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, age, language }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Lesson failed");

      if (!Array.isArray(data.steps)) throw new Error("Invalid lesson format");

      setLesson(data.steps);
    } catch (err) {
      console.error("Lesson fetch error:", err);
      setError(err.message || "Something went wrong");
      setLesson(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lesson-container">
      <h2>AI Lesson Mode</h2>

      {loading && <p>Loading your lesson…</p>}

      {!loading && error && (
        <p className="error">No AI lesson is available right now. Let's try the quiz instead!</p>
      )}

      {!loading && lesson && (
        <div className="lesson-steps">
          {lesson.map((step, i) => (
            <p key={i}><strong>Step {i + 1}:</strong> {step}</p>
          ))}
        </div>
      )}

      <div className="lesson-actions">
        <button onClick={fetchLesson}>Read Lesson</button>
        <button onClick={() => {/* start quiz logic */}}>Start Quiz</button>
        <a href="/map">Exit to Map</a>
      </div>
    </div>
  );
}