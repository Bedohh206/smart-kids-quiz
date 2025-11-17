export default function handler(req, res) {
  const { subject } = req.query;

  const lessons = {
    math: "Math is the study of numbers, shapes, and patterns.",
    english: "English helps us read, write, and communicate.",
    science: "Science teaches us about the world around us.",
    chemistry: "Chemistry studies substances and reactions.",
    health: "Health education teaches how to stay healthy.",
    computer: "Computer Science teaches how computers work."
  };

  const content = lessons[subject] || "Lesson not found.";
  res.status(200).json({ subject, content });
}
