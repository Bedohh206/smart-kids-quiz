import { useState } from "react";

export function useLesson() {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadLesson = async ({ topic, age, language }) => {
    setLoading(true);
    setError("");
    setSteps([]);

    try {
      const res = await fetch("/api/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, age, language }),
      });

      const data = await res.json();

      if (Array.isArray(data.steps)) {
        setSteps(data.steps);
      } else {
        setSteps(["No AI lesson available at this time."]);
      }
    } catch (err) {
      console.error("Lesson error:", err);
      setError("AI lesson service unavailable.");
    }

    setLoading(false);
  };

  return { steps, loading, error, loadLesson };
}
