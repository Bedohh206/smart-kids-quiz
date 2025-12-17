import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ⭐ IMPORTANT: Replace with your OpenAI key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

/* ---------------------------------------------------------
   🔧 HELPER — CALL OPENAI
--------------------------------------------------------- */
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
        temperature: 0.4,
      }),
    });

    const data = await res.json();

    if (!data.choices || !data.choices[0]) {
      console.log("OpenAI bad response:", data);
      return null;
    }

    return data.choices[0].message.content;
  } catch (err) {
    console.log("🔥 OpenAI Error:", err);
    return null;
  }
}

/* ---------------------------------------------------------
   📘 1. AI LESSON MODE
--------------------------------------------------------- */
app.post("/api/lesson", async (req, res) => {
  const { topic, age, language } = req.body;

  const prompt = `
Create a simple step-by-step kid-friendly lesson.
Topic: ${topic}
Age group: ${age}
Language: ${language || "English"}

Rules:
- Produce EXACTLY 5–7 very short steps.
- Each step must be 1–2 sentences.
- Do NOT number them; return as a JSON array of strings.
Return ONLY valid JSON.
`;

  const result = await callOpenAI([{ role: "user", content: prompt }]);

  try {
    const steps = JSON.parse(result);
    res.json({ steps });
  } catch (e) {
    res.json({ steps: ["Sorry, I couldn't load the lesson."] });
  }
});

/* ---------------------------------------------------------
   🎯 2. AI QUESTION GENERATOR
--------------------------------------------------------- */
app.post("/api/generate-question", async (req, res) => {
  const { subject, level, age } = req.body;

  const prompt = `
Generate 5 multiple-choice quiz questions.
Subject: ${subject}
Difficulty level: ${level}
Age group: ${age}

Format each item in JSON:
{
  "q": "question text",
  "a": "correct answer",
  "options": ["A","B","C","D"]
}

Rules:
- Options must contain EXACTLY 4 items.
- The correct answer must be included inside the options.
- Return ONLY a JSON array.
`;

  const result = await callOpenAI([{ role: "user", content: prompt }]);

  try {
    const questions = JSON.parse(result);
    res.json({ questions });
  } catch (e) {
    res.json({ questions: [] });
  }
});

/* ---------------------------------------------------------
   🤖 3. AI EXPLAIN ANSWER
--------------------------------------------------------- */
app.post("/api/explain", async (req, res) => {
  const { question, answer, language } = req.body;

  const prompt = `
Explain this quiz question like a friendly tutor.
Question: ${question}
Correct answer: ${answer}
Language: ${language}

Rules:
- 2–4 sentences max.
- Very easy to understand for kids.
`;

  const explanation = await callOpenAI([{ role: "user", content: prompt }]);

  res.json({ explanation });
});

/* ---------------------------------------------------------
   🌐 4. TRANSLATOR
--------------------------------------------------------- */
app.post("/api/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  const prompt = `
Translate this JSON object into ${targetLang}.
Keep keys exactly the same.
Return ONLY JSON.
Content:
${text}
`;

  const translated = await callOpenAI([{ role: "user", content: prompt }]);

  res.json({ translated });
});

/* ---------------------------------------------------------
   🩺 5. HEALTH CHECK
--------------------------------------------------------- */
app.get("/", (req, res) => {
  res.send("AI Smart Kids Quiz API is running 🚀");
});

/* ---------------------------------------------------------
   🚀 START SERVER
--------------------------------------------------------- */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
app.post("/api/lesson", async (req, res) => {
  const { topic, age, language } = req.body;

  try {
    const prompt = `
      Create a 5-step simplified lesson for a child age ${age}.
      Topic: ${topic}.
      Write in ${language}. 
      Make each step short, fun, and educational.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;
    const steps = text.split("\n").filter((line) => line.trim() !== "");

    res.json({ steps });
  } catch (err) {
    console.log(err);
    res.json({ steps: ["Sorry, I couldn’t load the lesson. Try again!"] });
  }
});
