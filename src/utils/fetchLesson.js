export async function fetchLesson({ topic, age, language }) {
  try {
    const res = await fetch("/api/lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, age, language }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Lesson failed");

    if (!Array.isArray(data.steps)) throw new Error("Invalid lesson format");

    return { steps: data.steps };
  } catch (err) {
    console.error("Lesson fetch error:", err);
    return { error: err.message || "Something went wrong" };
  }
}
