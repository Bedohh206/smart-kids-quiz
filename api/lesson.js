export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return new Response(JSON.stringify({ error: "Missing topic" }), {
        status: 400,
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Create a VERY SHORT kid-friendly lesson. Return 3–5 steps. Format EXACTLY as: Step 1 || Step 2 || Step 3. No other text.",
        },
        {
          role: "user",
          content: `Create a mini-lesson for kids about: ${topic}`,
        },
      ],
    });

    let raw = completion?.choices?.[0]?.message?.content || "";

    // 🔥 Clean markdown ` ``` `
    raw = raw.replace(/```(?:json)?|```/g, "").trim();

    // 🔥 If AI ignored instructions, fix bullets or numbered lists
    raw = raw
      .replace(/\n/g, " ") // remove line breaks
      .replace(/•/g, "") // remove bullet symbols
      .replace(/\*\s*/g, "") // remove markdown bullets
      .replace(/\d+\.\s*/g, "") // remove numbered steps
      .replace(/\s{2,}/g, " "); // remove extra spaces

    // 🔥 Ensure there are separators — fallback method
    if (!raw.includes("||")) {
      const sentences = raw.split(/[.!?]/).filter((s) => s.trim().length > 3);
      raw = sentences.join(" || ");
    }

    let steps = raw.split("||").map((s) => s.trim());

    // Final cleanup: remove empty steps
    steps = steps.filter((s) => s && s.length > 2);

    return new Response(JSON.stringify({ steps }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}
