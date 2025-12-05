import { runAI } from "./chatgptService.js";
export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8 } = await req.json();

    const system = `
You are a kids lesson generator. Create a fun mini-lesson for children age ${age}.
The lesson MUST have EXACTLY 4 steps.
Each step MUST be one simple sentence.
ABSOLUTELY NO markdown, no headers, no bullet points, no emojis.
Format MUST be:

Step 1: <sentence> || Step 2: <sentence> || Step 3: <sentence> || Step 4: <sentence>
`;

    const raw = await runAI(system, `Generate a lesson about ${topic}`);
    if (!raw) throw new Error("AI failed");

    const steps = raw.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    // If AI fails, provide safe default response
    return new Response(
      JSON.stringify({ steps: ["Lesson not available"] }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}
