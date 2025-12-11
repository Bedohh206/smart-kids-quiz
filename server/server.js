import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------
// 🔑 OpenAI Key
// -------------------------------
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 🔧 Shared OpenAI call helper
async function callOpenAI(messages) {
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
        temperature: 0.6,
      }),
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (err) {
    console.error("OpenAI request failed", err);
    return null;
  }
}

// =========================================================
// 📘 OFFICIAL FULL LESSON ENDPOINT (THE ONE LessonPage.jsx USES)
// =========================================================
app.post("/api/lesson", async (req, res) => {
  const { grade, subject, topic } = req.body;

  const prompt = `
You are an educational AI. Generate a complete lesson for Grade ${grade} about "${topic}" in the subject ${subject}.
Return ONLY valid JSON in this exact format:

{
  "grade": "${grade}",
  "subject": "${subject}",
  "topic": "${topic}",
  "standard": "Academic standard text.",
  "objective": "One simple learning objective.",
  "vocabulary": ["word1","word2","word3"],
  "lesson": "Short explanation suitable for kids.",
  "activities": ["Activity 1","Activity 2"],
  "quiz": [
    {"q":"Question?","answer":"Correct","options":["A","B","C","D"]},
    {"q":"Another?","answer":"Correct","options":["A","B","C","D"]}
  ],
  "media": {
    "tts_script": "Intro script for TTS.",
    "video": "Short idea for a student-friendly video.",
    "image_prompt": "Simple prompt for DALLE-style images."
  }
}
`;

  try {
    const aiText = await callOpenAI([{ role: "user", content: prompt }]);
    const lesson = JSON.parse(aiText);
    res.json(lesson);
  } catch (err) {
    console.error("Lesson error:", err);
    res.status(500).json({ error: "Lesson generation failed." });
  }
});

// =========================================================
// 🎯 Question Generator
// =========================================================
app.post("/api/generate-question", async (req, res) => {
  const { subject, level, age } = req.body;

  const prompt = `
Generate 5 multiple-choice quiz questions for:
Subject: ${subject}
Age: ${age}
Level: ${level}

Format:
[
  {"q":"...","answer":"...","options":["A","B","C","D"]},
  ...
]

Rules:
- EXACTLY 4 options
- Correct answer INCLUDED in the options
- Return ONLY valid JSON
`;

  try {
    const aiText = await callOpenAI([{ role: "user", content: prompt }]);
    const questions = JSON.parse(aiText);
    res.json({ questions });
  } catch {
    res.json({ questions: [] });
  }
});

// =========================================================
// 🤖 Explain Answer
// =========================================================
app.post("/api/explain", async (req, res) => {
  const { question, answer } = req.body;

  const prompt = `
Explain the answer to this question like a friendly tutor:
Question: ${question}
Correct answer: ${answer}
Use 2–4 very simple sentences.
`;

  const explanation = await callOpenAI([{ role: "user", content: prompt }]);
  res.json({ explanation });
});

// =========================================================
// 🌍 Translation
// =========================================================
app.post("/api/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  const prompt = `
Translate this JSON into ${targetLang}.
Keep the same keys.
Return ONLY valid JSON.
Content:
${text}
`;

  const translated = await callOpenAI([{ role: "user", content: prompt }]);
  res.json({ translated });
});

// =========================================================
// 🩺 Health Check
// =========================================================
app.get("/", (req, res) => {
  res.send("AI Smart Kids Quiz API is running 🚀");
});

// =========================================================
// 🚀 Start Server
// =========================================================
const PORT = 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
