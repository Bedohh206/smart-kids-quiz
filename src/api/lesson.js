import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8, mode = "auto", language = "English" } = await req.json();

    // Static fallback generator
    const staticSteps = (topic) => {
      const t = topic ? topic.replace(/[-_]/g, " ") : "this topic";
      return [
        `Learn what ${t} is.`,
        `See one example of ${t}.`,
        `Try a short activity about ${t}.`,
        `Review what you learned about ${t}.`,
      ];
    };

    if (mode === "static") {
      return new Response(JSON.stringify({ steps: staticSteps(topic) }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const system = `
      You are an AI teacher for kids.
      Create a kid-friendly lesson in EXACTLY 4 steps.
      Topic: ${topic}
      Age: ${age}
      Language: ${language}
      
      FORMAT RULES:
      - Return ONLY: Step 1 || Step 2 || Step 3 || Step 4
      - Each step must be 1 short sentence.
      - No titles, no markdown, no bullets, no extra text.
      - No explanations. Just the steps.
    `;

    const text = await runAI(system, "Begin.");

    if (!text) {
      if (mode === "auto") {
        return new Response(JSON.stringify({ steps: staticSteps(topic) }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ steps: ["Lesson not available"] }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const steps = text.split("||").map((s) => s.trim());

    return new Response(JSON.stringify({ steps }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ steps: ["Lesson not available"] }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
