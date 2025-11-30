export const config = { runtime: "nodejs" };
export { runAI };

export default function handler() {
  return new Response(
    JSON.stringify({ status: "AI service running 🚀" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
export async function runAI(system, user) {
  const completion = await client.responses.create({
    model: "gpt-4o-mini",
    input: [
      { role: "system", content: system },
      { role: "user", content: user }
    ]
  });

  return completion.output_text.trim();
}
