import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

import "./QuizPage.css";
import { useLesson } from "../hooks/useLesson.js";
import AnimatedIcon from "./AnimatedIcon";
import africaIcon from "../assets/africa/africa.png";

<AnimatedIcon src={africaIcon} size={80} delay={0.2} />

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

export default function QuizPage() {
  const { continent } = useParams();
  const navigate = useNavigate();

  // 🔹 AI Lesson hook (for lesson mode)
  const { steps, loading: lessonLoading, error: lessonError, loadLesson } = useLesson();

  /* ---------------------- NORMALIZE KEY ---------------------- */
  const normalize = (str) => {
    if (!str) return "";
    return str.toLowerCase().replace(/[^a-z]/g, "").replace(/s$/, "");
  };

  const rawKey = normalize(continent);

  const aliasMap = {
    mathematic: "math",
    mathematics: "math",
    maths: "math",
    mathquestion: "math",
    mathquestions: "math",
  };

  const finalKey = aliasMap[rawKey] || rawKey;

  /* ---------------------- REMOVE DUPLICATES & SHUFFLE ---------------------- */
  const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) return [];
    return arr.filter(
      (q, index, self) =>
        index ===
        self.findIndex(
          (x) =>
            String(x.q || "").toLowerCase().trim() ===
            String(q.q || "").toLowerCase().trim()
        )
    );
  };

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const prepareQuestions = (arr) => {
    const unique = removeDuplicates(arr);
    return unique.map((q) => {
      const opts = Array.isArray(q.options) ? q.options : [];
      return { ...q, options: shuffleArray(opts) };
    });
  };

  /* ---------------------- QUESTION SETS ---------------------- */
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

  /* ---------------------- STATE ---------------------- */
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("playerName") || ""
  );
  const [ageGroup, setAgeGroup] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [mascotMessage, setMascotMessage] = useState(
    "Hi! I'm RoboTutor — ready to help! 🤖"
  );
  const [showConfetti, setShowConfetti] = useState(false);

  const [lessonMode, setLessonMode] = useState(false);

  /* ---------------------- LOAD QUESTIONS WHEN LEVEL/AGE CHANGES ---------------------- */
  useEffect(() => {
    if (!selectedSet || !selectedLevel || !ageGroup) return;

    const base = selectedSet[selectedLevel];
    if (!Array.isArray(base)) {
      setQuestions([]);
      return;
    }

    const filtered = base.filter((q) => !q.age || q.age === ageGroup);
    const prepared = prepareQuestions(filtered);

    setQuestions(prepared);
    setCurrent(0);
    setSelected("");
    setScore(0);
    setShowResult(false);
    setShowConfetti(false);
  }, [selectedSet, selectedLevel, ageGroup]);

  /* ---------------------- LEADERBOARD SAVE ---------------------- */
  useEffect(() => {
    if (!showResult) return;

    const name = localStorage.getItem("playerName") || "Player";
    const entry = { name, score, topic: finalKey, level: selectedLevel };

    const old =
      JSON.parse(localStorage.getItem("smartKidsLeaderboard")) || [];

    old.push(entry);
    localStorage.setItem("smartKidsLeaderboard", JSON.stringify(old));
  }, [showResult, score, finalKey, selectedLevel]);

  /* ---------------------- HELPERS ---------------------- */
  const goHome = () => navigate("/");

  const handleAnswer = (option) => {
    const q = questions[current];
    if (!q) return;

    setSelected(option);

    if (option === q.a) {
      setScore((s) => s + 1);
      setMascotMessage("Correct! You are amazing! 🎉");
    } else {
      setMascotMessage("Oops, try again! 😊");
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

  const startLessonMode = () => {
    if (!ageGroup) {
      alert("Please select your age group first.");
      return;
    }
    setLessonMode(true);
    loadLesson({ topic: finalKey, age: ageGroup, language: "en" });
  };

  const totalQuestions = questions.length || 1;
  const progressPercent =
    totalQuestions > 0 ? ((current + 1) / totalQuestions) * 100 : 0;

  /* ---------------------- SCREENS ---------------------- */

  // 1) Ask for player name
  if (!playerName) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">Welcome to Smart Kids Quiz 🎓</h2>
          <p className="quiz-subtitle">
            Tell me your name so I can cheer for you!
          </p>

          <input
            type="text"
            className="name-input"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />

          <button
            className="primary-btn"
            onClick={() => {
              if (playerName.trim()) {
                localStorage.setItem("playerName", playerName.trim());
                setMascotMessage(
                  `Awesome, ${playerName.trim()}! Let's begin!`
                );
              } else {
                alert("Please enter a valid name.");
              }
            }}
          >
            Continue →
          </button>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor" className="mascot-img" />
            <p className="mascot-text">I’m RoboTutor. I’ll guide you! 🤖</p>
          </div>
        </div>
      </div>
    );
  }

  // 2) Ask for age group
  if (!ageGroup) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">Hi {playerName}! 👋</h2>
          <p className="quiz-subtitle">Choose your age group:</p>

          <div className="age-grid">
            <button className="age-btn" onClick={() => setAgeGroup("5-7")}>
              Ages 5–7
            </button>
            <button className="age-btn" onClick={() => setAgeGroup("8-10")}>
              Ages 8–10
            </button>
            <button className="age-btn" onClick={() => setAgeGroup("11-14")}>
              Ages 11–14
            </button>
          </div>

          <button className="secondary-btn" onClick={goHome}>
            ⟵ Back to Map
          </button>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  // 3) Ask for level OR start AI lesson
  if (!selectedLevel && !lessonMode) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">
            {(continent || "").toUpperCase()}
          </h2>
          <p className="quiz-subtitle">
            Great, {playerName}! Choose your level:
          </p>

          <div className="level-grid">
            {selectedSet &&
              Object.keys(selectedSet).map((lvl) => (
                <button
                  key={lvl}
                  className="level-btn"
                  onClick={() => setSelectedLevel(lvl)}
                >
                  {lvl.toUpperCase()}
                </button>
              ))}
          </div>

          <div className="cta-row">
            <button className="primary-btn" onClick={startLessonMode}>
              📘 Start AI Lesson First
            </button>
            <button className="secondary-btn" onClick={goHome}>
              ⟵ Back to Map
            </button>
          </div>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  // 4) AI Lesson Mode screen
  if (lessonMode) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">📘 AI Lesson Mode</h2>

          {lessonLoading && <p>Loading lesson…</p>}
          {lessonError && <p className="error">{lessonError}</p>}

          {Array.isArray(steps) && steps.length > 0 ? (
            <div className="lesson-steps">
              {steps.map((s, i) => (
                <p key={i}>
                  <strong>Step {i + 1}:</strong> {s}
                </p>
              ))}
            </div>
          ) : (
            !lessonLoading && <p>No lesson available yet.</p>
          )}

          <div className="lesson-actions">
            <button
              className="primary-btn"
              onClick={() =>
                loadLesson({ topic: finalKey, age: ageGroup, language: "en" })
              }
            >
              🔄 Regenerate Lesson
            </button>
            <button
              className="secondary-btn"
              onClick={() => setLessonMode(false)}
            >
              Start Quiz →
            </button>
            <button className="secondary-btn" onClick={goHome}>
              Exit to Map
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 5) No questions for this level
  if (!questions.length) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">No Questions Found 😅</h2>
          <p className="quiz-subtitle">
            This level doesn’t have questions yet. Try another level or subject.
          </p>

          <button className="secondary-btn" onClick={goHome}>
            ⟵ Back to Map
          </button>
        </div>
      </div>
    );
  }

  // 6) Results screen
  if (showResult) {
    return (
      <div className="quiz-page premium-layout">
        {showConfetti && <Confetti />}

        <div className="quiz-card fade-in">
          <h2 className="quiz-title">🎉 Quiz Complete!</h2>
          <p className="quiz-subtitle">
            {playerName}, you scored{" "}
            <strong>
              {score} / {questions.length}
            </strong>
          </p>

          <div className="result-actions">
            <button className="primary-btn" onClick={goHome}>
              ⟵ Back to Map
            </button>
          </div>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

 // 7) Main quiz screen
const q = questions[current];

// Clean question text to remove accidental leading '?'
const cleanQuestion = (str) => {
  if (!str) return "";
  return str.replace(/^[?\s]+/, "").trim();
};

return (
  <div className="quiz-page premium-layout">
    <div className="quiz-card slide-up">
      <div className="quiz-header-row">
        <h2 className="quiz-title">
          {(continent || "").toUpperCase()} — Level {selectedLevel.toUpperCase()}
        </h2>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="progress-text">
        Question {current + 1} of {questions.length}
      </p>

      <div className="question-card">
        <h3 className="question-text">{cleanQuestion(q.q)}</h3>

        <div className="options-grid">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              disabled={!!selected}
              className={
                selected
                  ? opt === q.a
                    ? "option-btn correct"
                    : opt === selected
                    ? "option-btn wrong"
                    : "option-btn"
                  : "option-btn"
              }
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="bottom-row">
        <button className="secondary-btn" onClick={goHome}>
          ⟵ Back to Map
        </button>

        <div className="mascot-row">
          <img src={mascotImg} alt="RoboTutor" className="mascot-img" />
          <p className="mascot-text">{mascotMessage}</p>
        </div>
      </div>
    </div>
  </div>
);
}   //  <-- ADD THIS FINAL CLOSING BRACE
