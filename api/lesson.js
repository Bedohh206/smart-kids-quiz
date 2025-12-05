import { runAI } from "./chatgptService.js";
export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8 } = await req.json();
    const sys = `Create a kids mini-lesson in 4 steps about ${topic}`;

    const result = await runAI(sys, "Begin now.");
    if (!result) throw new Error("AI failed");

    return new Response(JSON.stringify({
      steps: result.split("||").map(s => s.trim())
    }));
  } catch (err) {
    return new Response(
      JSON.stringify({ steps: ["AI unavailable — try again later"] })
    );
  }
}
