// scripts/generateQuestions.js
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// =======================
// Clean JSON safely
// =======================
function cleanJSON(text) {
  if (!text) return "[]";

  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .replace(/[\u0000-\u001F]+/g, "") // remove control chars
    .trim();
}

// =======================
// Generate 25 questions
// =======================
async function generateQuestions(subject, level, age = "11-14") {
  console.log(`📘 Generating ${subject} → ${level}`);

  const prompt = `
Generate EXACTLY 25 multiple-choice questions for kids age ${age}.
Subject: ${subject}
Level: ${level}

Return ONLY valid JSON array with this format:

[
  {
    "q": "Question text",
    "a": "Correct answer",
    "options": ["opt1","opt2","opt3","opt4"],
    "age": "${age}"
  }
]

Rules:
- EXACTLY 4 options
- Correct answer MUST be included
- NO comments
- NO markdown
- JSON ONLY
`;

  try {
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
    let content = data?.choices?.[0]?.message?.content || "[]";
    content = cleanJSON(content);

    return JSON.parse(content);
  } catch (err) {
    console.log("❌ Parse error:", err);
    return [];
  }
}

// =======================
// Subjects to generate
// =======================
const SUBJECTS = [
  "africa",
  "antarctica",
  "asia",
  "australia",
  "europe",
  "northamerica",
  "southamerica",
  "english",
  "math",
  "science",
  "biology",
  "chemistry",
  "geography",
  "health",
  "history",
  "computer",
];

// =======================
// MAIN EXECUTION
// =======================
async function run() {
  console.log("🚀 Generating questions...\n");

  for (const subject of SUBJECTS) {
    const output = {
      level1: [],
      level2: [],
      level3: []
    };

    output.level1 = await generateQuestions(subject, "level1");
    output.level2 = await generateQuestions(subject, "level2");
    output.level3 = await generateQuestions(subject, "level3");

    const filePath = path.join("src", "data", `${subject}Questions.js`);
    const jsExport = `export const ${subject}Questions = ${JSON.stringify(output, null, 2)};`;

    fs.writeFileSync(filePath, jsExport);
    console.log(`💾 Saved → ${filePath}\n`);
  }

  console.log("🎉 ALL DONE!");
}

run();
