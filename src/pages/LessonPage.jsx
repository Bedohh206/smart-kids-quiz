import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LessonPage() {
  const { subject } = useParams();
  const [steps, setSteps] = useState(["Loading..."]);

  useEffect(() => {
    async function loadLesson() {
      try {
        const res = await fetch("/api/lesson", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            topic: subject,
            age: 10,          // You can change dynamically later
            language: "en"    // English for now
          }),
        });

        const data = await res.json();

        if (data.steps && Array.isArray(data.steps)) {
          setSteps(data.steps);
        } else {
          setSteps(["No lesson available."]);
        }
      } catch (err) {
        console.error("Lesson fetch failed:", err);
        setSteps(["Error loading lesson."]);
      }
    }

    loadLesson();
  }, [subject]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{subject.toUpperCase()} Lesson</h1>

      {steps.map((step, i) => (
        <p key={i} style={{ fontSize: "1.3rem", margin: "1rem 0" }}>
          👉 {step}
        </p>
      ))}
    </div>
  );
}
