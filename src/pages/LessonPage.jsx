import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { subject } = useParams();
  const [steps, setSteps] = useState(["Loading lesson..."]);

  useEffect(() => {
    async function loadLesson() {
      try {
        const res = await fetch("/api/lesson", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic: subject })
        });

        const data = await res.json();

        if (Array.isArray(data.steps)) {
          setSteps(data.steps);
        } else {
          setSteps(["Lesson not available"]);
        }
      } catch (err) {
        console.error("Lesson fetch failed:", err);
        setSteps(["Error contacting AI server"]);
      }
    }

    loadLesson();
  }, [subject]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{subject.toUpperCase()} Lesson</h1>
      {steps.map((s, i) => (
        <p key={i} style={{ fontSize: "1.2rem", margin: "1rem 0" }}>
          {s}
        </p>
      ))}
    </div>
  );
}
