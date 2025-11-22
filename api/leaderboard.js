export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method === "GET") {
    const board = JSON.parse(localStorage.getItem("smartKidsLeaderboard") || "[]");
    return new Response(JSON.stringify({ leaderboard: board }), {
      status: 200
    });
  }

  if (req.method === "POST") {
    const body = await req.json();
    const { name, score, topic, level } = body;

    if (!name || score == null) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const old = JSON.parse(localStorage.getItem("smartKidsLeaderboard") || "[]");
    old.push({ name, score, topic, level });

    localStorage.setItem("smartKidsLeaderboard", JSON.stringify(old));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response("Method not allowed", { status: 405 });
}
