// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { createLesson } from "./lesson.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

/* ===============================
   HEALTH CHECK
================================ */
app.get("/", (req, res) => {
  res.send("Smart Kids Quiz API is running 🚀");
});

/* ===============================
   AI LESSON ROUTE
================================ */
app.post("/api/lesson", async (req, res) => {
  const { topic, age, language = "English" } = req.body;

  const prompt = `
You are an AI teacher for kids.

Create EXACTLY 5 short lesson steps.

Topic: ${topic}
Age: ${age}
Language: ${language}

FORMAT RULES (VERY IMPORTANT):
- Return ONLY plain text
- Separate each step with: ||
- Example:
Step 1 || Step 2 || Step 3 || Step 4 || Step 5
- NO markdown
- NO JSON
- NO explanations
`;

  const text = await callOpenAI(prompt);

  if (!text) {
    return res.json({
      steps: ["Lesson unavailable right now."],
    });
  }

  // ✅ SAFE parsing — NEVER fails
  const steps = text
    .split("||")
    .map((s) => s.trim())
    .filter(Boolean);

  console.log("🧠 Parsed lesson steps:", steps);

  res.json({ steps });
});


/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
