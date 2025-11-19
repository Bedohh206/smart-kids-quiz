export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question, answer } = req.body;

  const explanation = `The correct answer is "${answer}" because it best matches the question: "${question}".`;

  res.status(200).json({ explanation });
}
