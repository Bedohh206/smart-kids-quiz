import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("❌ Missing OpenAI API key. Please add it to your .env file.");
  process.exit(1);
}

console.log("🔑 API key loaded successfully!");

// ✅ Correct OpenAI initialization
const openai = new OpenAI({ apiKey });

/* -------------------------------------------
   TEST ROUTE
--------------------------------------------*/
app.get("/", (req, res) => {
  res.send("✅ Smart Kids Quiz API is running!");
});

/* -------------------------------------------
   AI LESSON GENERATOR
--------------------------------------------*/
app.post("/api/lesson", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a kids-friendly teacher." },
        { role: "user", content: `Create a simple lesson about: ${topic}` }
      ]
    });

    res.json({ lesson: completion.choices[0].message.content });
  } catch (error) {
    console.error("❌ Error in /api/lesson:", error);
    res.status(500).json({ error: "Lesson generation failed" });
  }
});

/* -------------------------------------------
   AI EXPLAIN ANSWERS
--------------------------------------------*/
app.post("/api/explain", async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Question and answer required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Explain answers to kids in a simple way." },
        {
          role: "user",
          content: `Explain why this is the correct answer:\nQuestion: ${question}\nAnswer: ${answer}`
        }
      ]
    });

    res.json({ explanation: completion.choices[0].message.content });
  } catch (error) {
    console.error("❌ Error in /api/explain:", error);
    res.status(500).json({ error: "Explanation generation failed" });
  }
});

/* -------------------------------------------
   START SERVER
--------------------------------------------*/
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
