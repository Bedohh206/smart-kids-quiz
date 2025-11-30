export const config = { runtime: "nodejs" };

export default function handler() {
  return new Response(
    JSON.stringify({ status: "AI service running 🚀" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
