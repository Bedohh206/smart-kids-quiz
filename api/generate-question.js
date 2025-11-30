import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { subject, level, age } = await req.json();

    const system = `
Generate 5 multiple choice questions for subject: ${subject}, level: ${level}, age: ${age}.
Return ONLY JSON array: [{"q":"", "a":"", "options":["","","",""]}]
`;

    const text = await runAI(system, "Generate quiz questions");
    const questions = JSON.parse(text);

    return new Response(JSON.stringify({ questions }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ questions: [] }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
