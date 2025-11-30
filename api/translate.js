export const config = { runtime: "edge" };
import { runAI } from "./chatgptService.js";

export default async function handler(req) {
  try {
    // Safely parse JSON body
    let text, targetLang;
    try {
      const body = await req.json();
      text = body.text;
      targetLang = body.targetLang;
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!text || !targetLang) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `
      You translate JSON object *values only*.
      - Do NOT translate the keys.
      - Do NOT change the JSON structure.
      - Do NOT add explanations.
      - Return ONLY valid JSON.
      - If a value is already translated, leave it as is.
    `;

    const userPrompt = `
      Translate this JSON object into: ${targetLang}
      JSON: ${text}
    `;

    let raw;
    try {
      raw = await runAI(systemPrompt, userPrompt);
    } catch (err) {
      console.error("runAI failed:", err);
      return new Response(
        JSON.stringify({ error: "AI translation failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!raw || typeof raw !== "string") {
      return new Response(
        JSON.stringify({ error: "AI returned invalid response." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    raw = raw.replace(/```json|```/g, "").trim();

    let translatedObj;
    try {
      translatedObj = JSON.parse(raw);
    } catch (err) {
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) {
        return new Response(
          JSON.stringify({ error: "AI returned invalid JSON format." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
      try {
        translatedObj = JSON.parse(match[0]);
      } catch (err) {
        return new Response(
          JSON.stringify({ error: "Failed to parse fallback JSON." }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(
      JSON.stringify({ translated: JSON.stringify(translatedObj) }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Translate API error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Translate error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}