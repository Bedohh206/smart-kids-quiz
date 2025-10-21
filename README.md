import React, { useState } from "react";
import Button from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import { motion } from "framer-motion";

const levels = ["Colors", "Alphabets", "Numbers"];
const continents = [
  "Africa", "Asia", "Europe", "North America",
  "South America", "Australia", "Antarctica"
];

const questions = {
  Colors: [
    { question: "Identify the color Red", answer: "Red", options: ["Blue", "Red", "Green"] },
    { question: "Identify the color Blue", answer: "Blue", options: ["Red", "Yellow", "Blue"] },
    { question: "Pick Yellow", answer: "Yellow", options: ["Green", "Yellow", "Purple"] },
  ],
  Alphabets: [
    { question: "What is the first letter of the alphabet?", answer: "A", options: ["B", "C", "A"] },
    { question: "Which letter comes after B?", answer: "C", options: ["C", "D", "A"] },
    { question: "Which letter is a vowel?", answer: "E", options: ["G", "H", "E"] },
  ],
  Numbers: [
    { question: "What number comes after 2?", answer: "3", options: ["3", "2", "1"] },
    { question: "What is 1 + 1?", answer: "2", options: ["2", "3", "1"] },
    { question: "How many sides does a triangle have?", answer: "3", options: ["3", "4", "2"] },
  ],
};

export default function KidsGameApp() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [continentIndex, setContinentIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scoreStreak, setScoreStreak] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const currentLevel = levels[levelIndex];
  const currentContinent = continents[continentIndex];
  const currentQuestion = questions[currentLevel][questionIndex];

  function handleAnswer(option) {
    if (gameOver) return;

    if (option === currentQuestion.answer) {
      const newStreak = scoreStreak + 1;
      setScoreStreak(newStreak);
      setMessage("✅ Correct!");

      if (newStreak >= 3) {
        if (levelIndex < levels.length - 1) {
          setLevelIndex(levelIndex + 1);
          setQuestionIndex(0);
        } else if (continentIndex < continents.length - 1) {
          setContinentIndex(continentIndex + 1);
          setLevelIndex(0);
          setQuestionIndex(0);
        } else {
          setGameOver(true);
          setMessage("🎉 You've completed the game!");
          return;
        }
        setScoreStreak(0);
      } else {
        setQuestionIndex((questionIndex + 1) % questions[currentLevel].length);
      }
    } else {
      setMessage("❌ Try Again!");
      setScoreStreak(0);
    }
  }

  function handleRestart() {
    setLevelIndex(0);
    setContinentIndex(0);
    setQuestionIndex(0);
    setScoreStreak(0);
    setMessage("");
    setGameOver(false);
  }

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        🌍 Learn & Explore — {currentContinent}
      </motion.h1>

      {!gameOver && (
        <>
          <Card className="mb-4">
            <CardContent className="text-lg font-semibold">
              {currentQuestion.question}
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {currentQuestion.options.map((opt, idx) => (
              <Button key={idx} onClick={() => handleAnswer(opt)}>
                {opt}
              </Button>
            ))}
          </div>
        </>
      )}

      <div className="text-green-600 font-semibold mb-4">{message}</div>

      <div className="text-sm text-gray-700 mb-6">
        Level: {currentLevel} | Continent: {currentContinent} | Streak: {scoreStreak}
      </div>

      <Button onClick={handleRestart}>🔄 Restart Game</Button>
    </div>
  );
}
