import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

/* ---------------------------------------------------------
   🔧 HELPER — CALL OPENAI (single source of truth)
--------------------------------------------------------- */
async function callOpenAI(messages) {
  if (!OPENAI_API_KEY) {
    console.error("❌ Missing OPENAI_API_KEY");
    return null;
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.4,
      }),
    });

    const data = await res.json();

    if (!data.choices?.[0]?.message?.content) {
      console.error("❌ Bad OpenAI response:", data);
      return null;
    }

    return data.choices[0].message.content;
  } catch (err) {
    console.error("🔥 OpenAI Error:", err);
    return null;
  }
}

/* ---------------------------------------------------------
   📘 AI LESSON MODE
--------------------------------------------------------- */
app.post("/api/lesson", async (req, res) => {
  const { topic, age, language } = req.body;

  const prompt = `
Create a kid-friendly lesson.
Topic: ${topic}
Age group: ${age}
Language: ${language || "English"}

Rules:
- Return EXACTLY 5 short steps
- 1–2 sentences per step
- Return ONLY valid JSON array of strings
`;

  const result = await callOpenAI([{ role: "user", content: prompt }]);

  try {
    const steps = JSON.parse(result);
    res.json({ steps });
  } catch {
    res.json({ steps: ["Lesson unavailable. Please try again later."] });
  }
});

/* ---------------------------------------------------------
   🎯 AI QUESTION GENERATOR
--------------------------------------------------------- */
app.post("/api/generate-question", async (req, res) => {
  const { subject, level, age } = req.body;

  const prompt = `
Generate 5 multiple-choice questions.
Subject: ${subject}
Level: ${level}
Age: ${age}

Format:
[
  {
    "q": "...",
    "a": "...",
    "options": ["A","B","C","D"]
  }
]

Return ONLY JSON.
`;

  const result = await callOpenAI([{ role: "user", content: prompt }]);

  try {
    const questions = JSON.parse(result);
    res.json({ questions });
  } catch {
    res.json({ questions: [] });
  }
});

/* ---------------------------------------------------------
   🤖 AI EXPLAIN ANSWER
--------------------------------------------------------- */
app.post("/api/explain", async (req, res) => {
  const { question, answer, language } = req.body;

  const prompt = `
Explain simply for a child.
Question: ${question}
Answer: ${answer}
Language: ${language}
`;

  const explanation = await callOpenAI([{ role: "user", content: prompt }]);
  res.json({ explanation });
});

/* ---------------------------------------------------------
   🌐 TRANSLATOR
--------------------------------------------------------- */
app.post("/api/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  const prompt = `
Translate the following JSON to ${targetLang}.
Keep keys unchanged.
Return ONLY JSON.

${text}
`;

  const translated = await callOpenAI([{ role: "user", content: prompt }]);
  res.json({ translated });
});

/* ---------------------------------------------------------
   🩺 HEALTH CHECK
--------------------------------------------------------- */
app.get("/", (_, res) => {
  res.send("Smart Kids Quiz API running 🚀");
});

/* ---------------------------------------------------------
   🚀 START SERVER
--------------------------------------------------------- */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
