<<<<<<< HEAD
import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { topic, age = 8, language = 'English', mode = 'auto' } = req.body || {};

    const staticSteps = (t) => {
      const s = t ? String(t).replace(/[-_]/g, ' ') : 'this topic';
      return [
        `Learn what ${s} is.`,
        `See one example of ${s}.`,
        `Try a short activity about ${s}.`,
        `Review what you learned about ${s}.`,
      ];
    };

    if (mode === 'static') {
      res.json({ steps: staticSteps(topic) });
      return;
    }

    const prompt = `You are an AI teacher for kids.

Create EXACTLY 4 short lesson steps about: ${topic}
Age: ${age}
Language: ${language}

FORMAT (CRITICAL):
Return 4 sentences separated by ||
DO NOT include "Step 1" or "Step 2" labels
DO NOT use numbering
DO NOT use markdown
Just write: Sentence 1 || Sentence 2 || Sentence 3 || Sentence 4

Example: Learn about planets. || See pictures of planets. || Try naming planets. || Quiz yourself.`;

    let text = null;
    try {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const cc = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You format lessons for kids exactly as instructed." },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 256,
      });
      const content = cc?.choices?.[0]?.message?.content;
      if (content && String(content).trim()) {
        text = String(content).trim();
      } else {
        console.warn("[lesson] OpenAI returned no content");
      }
    } catch (err) {
      console.error("[lesson] OpenAI error:", err.message || err);
    }

    if (!text) {
      if (mode === 'auto') {
        res.json({ steps: staticSteps(topic) });
        return;
      }
      res.json({ steps: ["Lesson unavailable right now."] });
      return;
    }

    const steps = text.split('||').map(s => s.trim()).filter(Boolean);
    if (steps.length !== 4) {
      console.warn(`[lesson] Unexpected steps length: ${steps.length}; mode=${mode}`);
    }
    // If the AI did not produce exactly 4 steps, handle according to mode
    if (steps.length !== 4) {
      if (mode === 'auto') {
        res.json({ steps: staticSteps(topic) });
        return;
      }
      res.json({ steps: ["Lesson unavailable right now."] });
      return;
    }
    res.json({ steps });
  } catch (err) {
    res.status(200).json({ steps: ["Lesson unavailable right now."] });
=======
// Lesson.js (or api/lesson.js depending on your structure)
import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { grade, subject, topic } = await req.json();

    if (!grade || !subject || !topic) {
      return new Response(
        JSON.stringify({ error: "grade, subject, and topic are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const prompt = `
You are an AI elementary school teacher for students in PreK–5 (ages 4–11).
Use a HYBRID tone:
- When teaching: warm, friendly, encouraging, kid-friendly.
- When listing objectives, standards, and quiz answers: clear, calm, teacher-like.

The user is building an educational app called "Smart Kids Quiz" for children.
Generate a FULL lesson for the following:

Grade: ${grade}
Subject: ${subject}
Topic: ${topic}

The lesson must be suitable for U.S. elementary school students in that grade.
Align the content with appropriate U.S. curriculum standards (for example: CCSS for Math/English, NGSS for Science, or reasonable approximations if you don't know the exact code).

RETURN THE RESULT AS **PURE JSON ONLY**, NO MARKDOWN, NO EXPLANATION, NO BACKTICKS.

Use this exact JSON structure:

{
  "grade": "number or range as string",
  "subject": "string",
  "topic": "string",
  "standard": "short string with an approximate standard code or label",
  "objective": "one or two clear learning objectives in plain language",
  "vocabulary": ["word1", "word2", "word3"],
  "lesson": "a friendly but structured lesson explanation, 4–8 short paragraphs max, written directly to the student in age-appropriate language.",
  "activities": [
    "simple classroom or at-home activity 1, kid-friendly",
    "simple classroom or at-home activity 2, kid-friendly"
  ],
  "quiz": [
    {
      "q": "multiple choice question 1",
      "options": ["A", "B", "C", "D"],
      "answer": "the correct option exactly as it appears in options"
    },
    {
      "q": "multiple choice question 2",
      "options": ["A", "B", "C", "D"],
      "answer": "..."
    },
    {
      "q": "multiple choice question 3",
      "options": ["A", "B", "C", "D"],
      "answer": "..."
    },
    {
      "q": "multiple choice question 4",
      "options": ["A", "B", "C", "D"],
      "answer": "..."
    },
    {
      "q": "multiple choice question 5",
      "options": ["A", "B", "C", "D"],
      "answer": "..."
    }
  ],
  "media": {
    "tts_script": "a short, smooth script the teacher could read aloud to introduce the topic in 30–60 seconds, kid-friendly tone",
    "video": "a short suggestion or description of the type of YouTube video that would fit this lesson (no specific link is required, but you may suggest a search phrase)",
    "image_prompt": "a description that could be used to generate a kid-friendly illustration for this topic"
  }
}

Rules:
- Output MUST be valid JSON.
- Do NOT include any commentary outside the JSON.
- Keep everything age-appropriate for Grade ${grade}.
- Use the hybrid tone: warm with kids, structured and precise for objectives and quiz.
`;

    const raw = await runAI(prompt);
    if (!raw) {
      throw new Error("AI returned no content");
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (parseErr) {
      console.error("❌ JSON parse error from AI:", parseErr, "RAW:", raw);
      // Fallback: wrap raw text into a simple object so the app doesn't crash
      data = {
        grade: String(grade),
        subject,
        topic,
        standard: "",
        objective: "Lesson generated, but formatting was not JSON.",
        vocabulary: [],
        lesson: raw,
        activities: [],
        quiz: [],
        media: {
          tts_script: "",
          video: "",
          image_prompt: ""
        }
      };
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("🔥 LESSON API ERROR:", err);
    return new Response(
      JSON.stringify({
        error: "Lesson not available right now.",
        details: err?.message || "Unknown error"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
>>>>>>> ef5b9374f057458b367c8e53e155a7ebe4383463
  }
}
