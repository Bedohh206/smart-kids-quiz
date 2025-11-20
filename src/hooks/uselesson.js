import { useState } from "react";
import { fetchLesson } from "../utils/fetchLesson";

export function useLesson() {
  const [steps, setSteps] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadLesson = async ({ topic, age, language }) => {
    setLoading(true);
    setError("");
    const { steps, error } = await fetchLesson({ topic, age, language });

    if (error) {
      setError(error);
      setSteps(null);
    } else {
      setSteps(steps);
    }

    setLoading(false);
  };

  return { steps, loading, error, loadLesson };
}