// lesson.js
import fetch from "node-fetch";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function createLesson(topic, age, language) {
  const prompt = `
Create a kid-friendly lesson.

Topic: ${topic}
Age group: ${age}
Language: ${language}

RULES:
- EXACTLY 5 steps
- Each step 1 short sentence
- Return ONLY a JSON array of strings
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    }),
  });

  const data = await res.json();

  const text = data?.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("OpenAI returned empty response");
  }

  return { steps: JSON.parse(text) };
}
