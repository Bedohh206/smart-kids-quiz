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
  console.log("📩 /api/lesson HIT");
  console.log("Request body:", req.body);

  try {
    const { topic, age, language } = req.body;

    if (!topic || !age || !language) {
      return res.status(400).json({
        error: "Missing topic, age, or language",
      });
    }

    const lesson = await createLesson(topic, age, language);

    console.log("✅ Lesson generated:", lesson);
    res.json(lesson);

  } catch (error) {
    console.error("❌ Lesson error:", error);
    res.status(500).json({
      steps: ["Lesson not available right now"],
    });
  }
});

/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
