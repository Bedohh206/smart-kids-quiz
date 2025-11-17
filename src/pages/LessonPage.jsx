import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { subject } = useParams();
  const [lesson, setLesson] = useState("Loading lesson...");

  useEffect(() => {
    async function loadLesson() {
      try {
        const res = await fetch(`/api/lesson/${subject}`);
        const data = await res.json();
        setLesson(data.content);
      } catch (err) {
        console.error("Lesson fetch failed:", err);
        setLesson("Sorry, lesson not available.");
      }
    }

    loadLesson();
  }, [subject]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{subject.toUpperCase()} Lesson</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>{lesson}</p>
    </div>
  );
}
