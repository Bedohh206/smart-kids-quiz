// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import { runAI } from "../src/api/chatgptService.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

/* ===============================
   HEALTH CHECK
   (moved to /api/health so static root can be served)
================================ */
app.get("/api/health", (req, res) => {
  res.send("Smart Kids Quiz API is running 🚀");
});

/* ===============================
   AI LESSON ROUTE
================================ */
app.post("/api/lesson", async (req, res) => {
  const { topic, age, language = "English", mode = "auto" } = req.body;

  const prompt = `
You are an AI teacher for kids.

Create EXACTLY 4 short lesson steps.

Topic: ${topic}
Age: ${age}
Language: ${language}

FORMAT RULES (VERY IMPORTANT):
- Return ONLY plain text
- Separate each step with: ||
- Example:
Step 1 || Step 2 || Step 3 || Step 4
- NO markdown
- NO JSON
- NO explanations
`;

  // Helper: generate a simple static 4-step lesson (fallback)
  const staticSteps = (topic, age, language) => {
    const t = topic ? topic.replace(/[-_]/g, " ") : "this topic";
    return [
      `Learn what ${t} is.`,
      `See one example of ${t}.`,
      `Try a short activity about ${t}.`,
      `Review what you learned about ${t}.`,
    ];
  };

  // If explicit static mode requested, return deterministic static steps
  if (mode === "static") {
    return res.json({ steps: staticSteps(topic, age, language) });
  }

  const text = await runAI(prompt);

  if (!text) {
    // If auto mode, fallback to static steps; if strict ai mode, return an error message
    if (mode === "auto") {
      return res.json({ steps: staticSteps(topic, age, language) });
    }

    return res.json({ steps: ["Lesson unavailable right now."] });
  }

  // ✅ SAFE parsing — NEVER fails
  const steps = text
    .split("||")
    .map((s) => s.trim())
    .filter(Boolean);

  console.log("🧠 Parsed lesson steps:", steps);

  res.json({ steps });
});


// Serve built frontend (if present) — placed after API routes so /api/* still works
const buildPath = path.resolve(__dirname, '..', 'build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  // Serve index.html for non-API GET requests (avoid registering wildcard route)
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api/')) {
      return res.sendFile(path.join(buildPath, 'index.html'));
    }
    next();
  });
}


/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
