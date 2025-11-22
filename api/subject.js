export const config = { runtime: "edge" };

export default async function handler() {
  const subjects = [
    { id: "english", name: "English Language", route: "/quiz/english" },
    { id: "math", name: "Mathematics", route: "/quiz/math" },
    { id: "science", name: "Basic Science", route: "/quiz/science" },
    { id: "biology", name: "Biology", route: "/quiz/biology" },
    { id: "chemistry", name: "Chemistry", route: "/quiz/chemistry" },
    { id: "geography", name: "Geography", route: "/quiz/geography" },
    { id: "health", name: "Health Education", route: "/quiz/health" },
    { id: "computer", name: "Computer Science", route: "/quiz/computer" }
  ];

  return new Response(JSON.stringify({ subjects }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
