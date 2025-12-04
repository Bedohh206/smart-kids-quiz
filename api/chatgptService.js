import OpenAI from "openai";

export const config = { runtime: "edge" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/** 🔥 UNIVERSAL AI CALLER FOR EDGE RUNTIME */
export async function runAI(system, user) {
  try {
    const resp = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 250,
      temperature: 0.4
    });

    // 🟢 CORRECT way to extract text
    const text = resp.output[0].content[0].text.trim();

    return text;

  } catch (err) {
    console.error("🔥 OpenAI Failure:", err);
    return null;
  }
}

/** 🟣 TESTING ROUTE */
export default function handler() {
  return new Response(
    JSON.stringify({ status: "AI Online 🚀" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
