export const config = { runtime: "edge" };

export default async function handler() {
  const levels = [
    { id: "level1", name: "Level 1" },
    { id: "level2", name: "Level 2" },
    { id: "level3", name: "Level 3" }
  ];

  return new Response(JSON.stringify({ levels }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
