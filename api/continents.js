export const config = { runtime: "edge" };

export default async function handler() {
  const continents = [
    { id: "africa", name: "Africa", route: "/quiz/africa" },
    { id: "asia", name: "Asia", route: "/quiz/asia" },
    { id: "europe", name: "Europe", route: "/quiz/europe" },
    { id: "northamerica", name: "North America", route: "/quiz/northamerica" },
    { id: "southamerica", name: "South America", route: "/quiz/southamerica" },
    { id: "australia", name: "Australia", route: "/quiz/australia" },
    { id: "antarctica", name: "Antarctica", route: "/quiz/antarctica" }
  ];

  return new Response(JSON.stringify({ continents }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
