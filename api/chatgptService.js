import OpenAI from "openai";

export const config = { runtime: "edge" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/** 🔥 UNIVERSAL AI CALLER */
export async function runAI(system, user) {
  try {
    const resp = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 250,
      temperature: 0.4,
    });

    return resp.output_text.trim();
  } catch (err) {
    console.error("🔥 OpenAI Failure:", err.message);
    return "AI failed";
  }
}

/** 🛠 TEST ROUTE */
export default function handler() {
  return new Response(
    JSON.stringify({ status: "AI Online 🚀" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
