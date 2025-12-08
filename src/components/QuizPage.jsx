import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

import "./QuizPage.css";
import { useLesson } from "../hooks/useLesson.js";
import AnimatedIcon from "./AnimatedIcon";
import { useUserProfile } from "../hooks/useUserProfile.js";

import {
  africaQuestions,
  antarcticaQuestions,
  asiaQuestions,
  australiaQuestions,
  englishQuestions,
  europeQuestions,
  mathQuestions,
  northAmericaQuestions,
  scienceQuestions,
  southAmericaQuestions,
  biologyQuestions,
  chemistryQuestions,
  geographyQuestions,
  healthQuestions,
  historyQuestions,
  computerQuestions,
} from "../data/index.js";

import mascotImg from "../assets/kids-mascot.png";

// ⭐ XP per correct answer
const XP_PER_CORRECT = 10;

export default function QuizPage() {
  const { continent } = useParams();
  const navigate = useNavigate();
  const { profile, updateProfile } = useUserProfile();
  const { steps, loading: lessonLoading, error: lessonError, loadLesson } = useLesson();

  // ⭐ Adaptive difficulty & streak
  const [difficulty, setDifficulty] = useState("easy");
  const [correctStreak, setCorrectStreak] = useState(0);

  /* ---------------- NORMALIZATION ---------------- */
  const normalize = (str) =>
    (str || "").toLowerCase().replace(/[^a-z]/g, "").replace(/s$/, "");

  const aliasMap = {
    mathematic: "math",
    mathematics: "math",
    maths: "math",
    mathquestion: "math",
    mathquestions: "math",
  };

  const finalKey = aliasMap[normalize(continent)] || normalize(continent);

  /* ---------------- QUESTION HELPERS ---------------- */
  const removeDuplicates = (arr) =>
    Array.isArray(arr)
      ? arr.filter(
          (q, i, self) =>
            i === self.findIndex(
              (x) => x.q?.toLowerCase().trim() === q.q?.toLowerCase().trim()
            )
        )
      : [];

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const prepareQuestions = (arr) =>
    shuffleArray(removeDuplicates(arr))
      .slice(0, 25)
      .map((q) => ({ ...q, options: shuffleArray(q.options || []) }));

  /* ---------------- QUESTION SETS ---------------- */
  const questionSets = {
    africa: africaQuestions,
    antarctica: antarcticaQuestions,
    asia: asiaQuestions,
    australia: australiaQuestions,
    english: englishQuestions,
    europe: europeQuestions,
    math: mathQuestions,
    northamerica: northAmericaQuestions,
    southamerica: southAmericaQuestions,
    science: scienceQuestions,
    biology: biologyQuestions,
    chemistry: chemistryQuestions,
    geography: geographyQuestions,
    health: healthQuestions,
    history: historyQuestions,
    computer: computerQuestions,
  };

  const selectedSet = questionSets[finalKey] || null;

  /* ---------------- STATE ---------------- */
  const [playerName, setPlayerName] = useState(localStorage.getItem("playerName") || "");
  const [ageGroup, setAgeGroup] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [mascotMessage, setMascotMessage] = useState("Hi! I'm RoboTutor — ready to help! 🤖");
  const [lessonMode, setLessonMode] = useState(false);

  /* ---------------- LOAD QUESTIONS ---------------- */
  useEffect(() => {
    if (!selectedSet || !selectedLevel || !ageGroup) return;
    const base = selectedSet[selectedLevel];
    if (!Array.isArray(base)) return;
    setQuestions(prepareQuestions(base.filter((q) => !q.age || q.age === ageGroup)));
    setCurrent(0);
    setSelected("");
    setScore(0);
    setShowResult(false);
    setShowConfetti(false);
    setCorrectStreak(0);
    setDifficulty("easy");
  }, [selectedSet, selectedLevel, ageGroup]);

  /* ---------------- SAVE LEADERBOARD ---------------- */
  useEffect(() => {
    if (!showResult) return;
    const name = localStorage.getItem("playerName") || "Player";
    const old = JSON.parse(localStorage.getItem("smartKidsLeaderboard")) || [];
    old.push({ name, score, topic: finalKey, level: selectedLevel });
    localStorage.setItem("smartKidsLeaderboard", JSON.stringify(old));
  }, [showResult]);

  /* ---------------- NAVIGATION ---------------- */
  const goHome = () => navigate("/");

  /* ---------------- ANSWER HANDLER WITH XP + DIFFICULTY ---------------- */
  const handleAnswer = (option) => {
    const q = questions[current];
    if (!q) return;

    setSelected(option);

    if (option === q.a) {
      setScore((s) => s + 1);
      setCorrectStreak((s) => s + 1);
      setMascotMessage("Correct! You are amazing! 🎉");

      // XP scaled by difficulty
      const multiplier = difficulty === "hard" ? 3 : difficulty === "medium" ? 2 : 1;
      updateProfile({ xp: (profile.xp || 0) + XP_PER_CORRECT * multiplier });

      // Difficulty progression
      if (correctStreak >= 3 && difficulty === "easy") setDifficulty("medium");
      if (correctStreak >= 4 && difficulty === "medium") setDifficulty("hard");
    } else {
      setCorrectStreak(0);
      setMascotMessage("Oops, try again! 😊");

      // Ease difficulty down
      if (difficulty === "hard") setDifficulty("medium");
      else if (difficulty === "medium") setDifficulty("easy");
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected("");
      } else {
        setShowConfetti(true);
        setShowResult(true);
      }
    }, 700);
  };

  /* ---------------- COMPUTED ---------------- */
  const q = questions[current];
  const progressPercent = questions.length ? ((current + 1) / questions.length) * 100 : 0;

  /* -------- RETURN SCREENS BELOW THIS POINT -------- */
  // (keep your existing UI return here — not modified)
}
