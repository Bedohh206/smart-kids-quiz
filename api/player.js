export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method === "GET") {
    const name = localStorage.getItem("playerName") || "";
    return new Response(JSON.stringify({ name }), { status: 200 });
  }

  if (req.method === "POST") {
    const { name } = await req.json();

    if (!name) {
      return new Response(JSON.stringify({ error: "Missing name" }), { status: 400 });
    }

    localStorage.setItem("playerName", name);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response("Method not allowed", { status: 405 });
}
