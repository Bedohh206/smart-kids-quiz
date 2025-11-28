import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { subject } = useParams();
  const [lesson, setLesson] = useState("Loading lesson...");

  useEffect(() => {
    async function loadLesson() {
      try {
        const res = await fetch("/api/lesson", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            topic: subject,
            age: 10,
            language: "en",
          }),
        });

        const data = await res.json();

        if (data.steps && Array.isArray(data.steps)) {
          setLesson(data.steps.join(" → "));
        } else {
          setLesson("No lesson found.");
        }
      } catch (err) {
        console.error("Lesson fetch error:", err);
        setLesson("Sorry, lesson not available.");
      }
    }

    loadLesson();
  }, [subject]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{subject.toUpperCase()} Lesson</h1>
      <p style={{ fontSize: "1.3rem", marginTop: "1rem", lineHeight: "2rem" }}>
        {lesson}
      </p>
    </div>
  );
}
