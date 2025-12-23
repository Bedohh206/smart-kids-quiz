import React, { useState } from "react";

export default function QuizMenu({ continent, onSelectSubject, onBack, onPlayground }) {
  const [aiQuestion, setAiQuestion] = useState(null);
  const [aiExplanation, setAiExplanation] = useState(null);

  const subjects = ["Math", "English", "Science"];

  // ✅ Fetch a question from backend
  async function fetchAIQuestion(subject = "math") {
    try {
      const res = await fetch("http://localhost:5000/api/generate-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject }),
      });

      const data = await res.json();
      console.log("🤖 AI Question:", data);
      setAiQuestion(data);
      setAiExplanation(null);
    } catch (error) {
      console.error("Error fetching AI question:", error);
      alert("❌ Could not connect to the ChatGPT server.");
    }
  }

  // ✅ Ask ChatGPT to explain the answer
  async function explainAnswer(question, answer) {
    try {
      const res = await fetch("http://localhost:5000/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
      });

      const data = await res.json();
      setAiExplanation(data.explanation);
    } catch (error) {
      console.error("Error getting explanation:", error);
      alert("❌ Failed to fetch explanation.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ color: "#1565c0" }}>🌍 Explore {continent}</h2>
      <p style={{ fontSize: "18px", color: "#444" }}>
        Choose a subject to begin your learning adventure:
      </p>

      {/* 🌟 ChatGPT Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => fetchAIQuestion("math")}>
          ✨ Generate Math Question
        </button>
        {aiQuestion && (
          <button
            onClick={() =>
              explainAnswer(aiQuestion.question, aiQuestion.answer)
            }
          >
            💬 Ask ChatGPT: Why is this correct?
          </button>
        )}
      </div>

      {/* 📘 Display AI-generated question */}
      {aiQuestion && (
        <div
          style={{
            border: "2px solid #90caf9",
            borderRadius: "10px",
            padding: "15px",
            margin: "20px auto",
            width: "80%",
            maxWidth: "500px",
            background: "#e3f2fd",
          }}
        >
          <h3>{aiQuestion.question}</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {aiQuestion.options?.map((opt, i) => (
              <li
                key={i}
                style={{
                  background: "#bbdefb",
                  margin: "6px 0",
                  padding: "8px",
                  borderRadius: "6px",
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 💡 AI Explanation */}
      {aiExplanation && (
        <div
          style={{
            background: "#fff8e1",
            border: "1px solid #fdd835",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "15px",
            maxWidth: "500px",
            margin: "10px auto",
          }}
        >
          <h4>💡 ChatGPT Explains:</h4>
          <p>{aiExplanation}</p>
        </div>
      )}

      {/* 📚 Subject Buttons */}
      <div style={{ marginTop: "20px" }}>
        {subjects.map((sub) => (
          <button
            key={sub}
            onClick={() => onSelectSubject(sub.toLowerCase())}
            style={{
              margin: "5px",
              padding: "10px 20px",
              borderRadius: "8px",
              background: "#42a5f5",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start {sub}
          </button>
        ))}
        <button
          onClick={onPlayground}
          style={{
            margin: "5px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#ab47bc",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🎲 Word Scramble
        </button>
        <button
          onClick={onBack}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#ef5350",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
}
