import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

// Styles
import "./QuizPage.css";

// Question banks
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

// Mascot
import mascotImg from "../assets/mascot-hero.png";

// 🌍 Order used for adventure unlocking
const CONTINENT_ORDER = [
  "africa",
  "northamerica",
  "southamerica",
  "europe",
  "asia",
  "australia",
  "antarctica",
];

export default function QuizPage() {
  const { continent } = useParams();
  const navigate = useNavigate();

  /* ---------------------- NORMALIZE CATEGORY ---------------------- */
  const normalize = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .replace(/s$/, ""); // math → math, sciences → science
  };

  const key = normalize(continent);

  const aliasMap = {
    mathematic: "math",
    mathematics: "math",
    maths: "math",
    mathquestion: "math",
    mathquestions: "math",
  };

  const finalKey = aliasMap[key] || key;

  /* ---------------------- MATCH SET ---------------------- */
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
  const [ageGroup, setAgeGroup] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);

  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [lessonMode, setLessonMode] = useState(false);
  const [lessonSteps, setLessonSteps] = useState([]);
  const [lessonIndex, setLessonIndex] = useState(0);

  const [mascotMessage, setMascotMessage] = useState(
    "Hi! I'm RoboTutor — ready to help!"
  );

  const [showConfetti, setShowConfetti] = useState(false);

  // Translation
  const [language, setLanguage] = useState("en");
  const [translatedQuestion, setTranslatedQuestion] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);

  /* ---------------------- VOICE ---------------------- */
  let mic = null;
  if (typeof window !== "undefined") {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      mic = new SR();
      mic.lang = "en-US";
      mic.continuous = false;
    }
  }

  /* ---------------------- TEXT-TO-SPEECH ---------------------- */
  const voices = {
    en: "en-US",
    fr: "fr-FR",
    es: "es-ES",
    ar: "ar-SA",
    zh: "zh-CN",
    pt: "pt-PT",
    sw: "sw-KE",
    kr: "en-SL",
    hi: "hi-IN",
    de: "de-DE",
    it: "it-IT",
    ja: "ja-JP",
    ko: "ko-KR",
  };

  const speak = (text) => {
    if (!text) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voices[language] || "en-US";
    window.speechSynthesis.speak(u);
  };

  /* ---------------------- TRANSLATE ---------------------- */
  useEffect(() => {
    if (!questions.length) return;
    if (language === "en") {
      setTranslatedQuestion(null);
      return;
    }

    const translate = async () => {
      setIsTranslating(true);
      try {
        const response = await fetch(`/api/translate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: JSON.stringify(questions[current]),
            targetLang: language,
          }),
        });

        const data = await response.json();
        if (data.translated) {
          setTranslatedQuestion(JSON.parse(data.translated));
        }
      } catch (err) {
        console.log("Translation failed");
      }
      setIsTranslating(false);
    };

    translate();
  }, [language, current, questions]);

  /* ---------------------- LOAD QUESTIONS ---------------------- */
  useEffect(() => {
    if (!selectedSet || !selectedLevel || !ageGroup) return;

    const base = selectedSet[selectedLevel];
    if (!Array.isArray(base)) {
      setQuestions([]);
      return;
    }

    const filtered = base.filter((q) => !q.age || q.age === ageGroup);

    setQuestions(filtered);
    setCurrent(0);
    setSelected("");
    setShowResult(false);
    setShowConfetti(false);
    setScore(0);
  }, [selectedLevel, ageGroup, selectedSet]);

  /* ---------------------- UPDATE XP ---------------------- */
  const updateAdventureProgress = () => {
    if (!questions.length) return;

    const storageKey = "smartKidsProgress";
    const raw = localStorage.getItem(storageKey);
    const data = raw
      ? JSON.parse(raw)
      : { xp: 0, level: 1, continents: {}, subjects: {} };

    const id = finalKey;
    const isContinent = CONTINENT_ORDER.includes(id);

    const earnedXP = questions.length * 5;
    data.xp += earnedXP;
    data.level = 1 + Math.floor(data.xp / 100);

    if (isContinent) {
      if (!data.continents[id]) {
        data.continents[id] = { answered: 0, badgeUnlocked: false };
      }
      data.continents[id].answered += questions.length;

      if (data.continents[id].answered >= 20) {
        data.continents[id].badgeUnlocked = true;
      }

      const unlockedRaw = localStorage.getItem("unlockedContinents");
      const unlockedList = unlockedRaw ? JSON.parse(unlockedRaw) : ["africa"];

      if (!unlockedList.includes(id)) unlockedList.push(id);

      const currentIndex = CONTINENT_ORDER.indexOf(id);
      const nextId =
        currentIndex >= 0 ? CONTINENT_ORDER[currentIndex + 1] : null;

      if (nextId && !unlockedList.includes(nextId))
        unlockedList.push(nextId);

      localStorage.setItem(
        "unlockedContinents",
        JSON.stringify(unlockedList)
      );
    } else {
      if (!data.subjects[id]) {
        data.subjects[id] = { answered: 0, badgeUnlocked: false };
      }

      data.subjects[id].answered += questions.length;

      if (data.subjects[id].answered >= 30) {
        data.subjects[id].badgeUnlocked = true;
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  useEffect(() => {
    if (showResult) updateAdventureProgress();
  }, [showResult]);

  /* ---------------------- ANSWER ---------------------- */
  const handleAnswer = (option) => {
    const q = translatedQuestion || questions[current];
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

  /* ---------------------- VOICE ANSWER ---------------------- */
  const handleVoiceAnswer = () => {
    if (!mic) return alert("Voice recognition not supported.");

    const correct = questions[current]?.a?.toLowerCase();
    if (!correct) return;

    mic.start();
    setMascotMessage("Listening… 🎤");

    mic.onresult = (e) => {
      const spoken = e.results[0][0].transcript.toLowerCase();
      if (spoken.includes(correct)) {
        handleAnswer(questions[current].a);
      } else {
        setMascotMessage(`You said "${spoken}". Try again!`);
      }
    };
  };

  /* ---------------------- EXPLAIN ANSWER ---------------------- */
  const handleExplain = async () => {
    const q = questions[current];
    if (!q) return;

    const response = await fetch(`/api/explain`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: q.q,
        answer: q.a,
        language,
      }),
    });

    const data = await response.json();
    setMascotMessage(data.explanation || "I can't explain right now 😅");
  };

  /* ---------------------- GENERATE AI QUESTIONS ---------------------- */
  const fetchAIQuestions = async () => {
    const response = await fetch(`/api/generate-question`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: finalKey,
        level: selectedLevel,
        age: ageGroup,
      }),
    });

    const data = await response.json();

    if (data.questions) {
      setQuestions(data.questions);
      setCurrent(0);
      setSelected("");
      setShowResult(false);
      setShowConfetti(false);
      setScore(0);
    }
  };

  /* ---------------------- LESSON MODE ---------------------- */
  const startLessonMode = async () => {
    setLessonMode(true);

    const res = await fetch(`/api/lesson/${finalKey}`);
    const data = await res.json();

    setLessonSteps(data.steps || []);
    setLessonIndex(0);
  };

  /* ---------------------- NAVIGATION ---------------------- */
  const goHome = () => navigate("/");

  /* ---------------------- LANG OPTIONS ---------------------- */
  const languageOptions = [
    { code: "en", label: "English" },
    { code: "fr", label: "French" },
    { code: "es", label: "Spanish" },
    { code: "ar", label: "Arabic" },
    { code: "zh", label: "Chinese" },
    { code: "pt", label: "Portuguese" },
    { code: "sw", label: "Swahili" },
    { code: "kr", label: "Krio" },
    { code: "hi", label: "Hindi" },
    { code: "de", label: "German" },
    { code: "it", label: "Italian" },
    { code: "ja", label: "Japanese" },
    { code: "ko", label: "Korean" },
  ];

  /* ---------------------- SCREEN 1 — AGE ---------------------- */
  if (!ageGroup) {
    return (
      <div className="quiz-page">
        <h2>Select Your Age Group</h2>
        <div className="levels">
          <button onClick={() => setAgeGroup("5-7")}>Ages 5–7</button>
          <button onClick={() => setAgeGroup("8-10")}>Ages 8–10</button>
          <button onClick={() => setAgeGroup("11-14")}>Ages 11–14</button>
        </div>

        <button className="back-btn" onClick={goHome}>
          Back
        </button>

        <div className="mascot">
          <img src={mascotImg} alt="RoboTutor mascot" />
          <p>{mascotMessage}</p>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN 2 — LEVEL SELECT ---------------------- */
  if (!selectedLevel && !lessonMode) {
    return (
      <div className="quiz-page">
        <select
          className="lang-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languageOptions.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>

        <h2>{(continent || "").toUpperCase()}</h2>
        <p>Select Level:</p>

        <div className="levels">
          {selectedSet &&
            Object.keys(selectedSet).map((lvl) => (
              <button key={lvl} onClick={() => setSelectedLevel(lvl)}>
                {lvl.toUpperCase()}
              </button>
            ))}
        </div>

        <button className="ai-btn" onClick={startLessonMode}>
          📘 AI Lesson Mode
        </button>

        <button className="back-btn" onClick={goHome}>
          Back
        </button>

        <div className="mascot">
          <img src={mascotImg} alt="RoboTutor mascot" />
          <p>{mascotMessage}</p>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN 3 — LESSON MODE ---------------------- */
  if (lessonMode) {
    const step = lessonSteps[lessonIndex] || "Loading lesson...";

    return (
      <div className="quiz-page">
        <h2>📘 Lesson Mode</h2>

        <p className="lesson-step">{step}</p>

        <button className="voice-btn" onClick={() => speak(step)}>
          🔊 Read Lesson
        </button>

        {lessonIndex < lessonSteps.length - 1 ? (
          <button
            className="ai-btn"
            onClick={() => setLessonIndex((i) => i + 1)}
          >
            Next →
          </button>
        ) : (
          <button className="ai-btn" onClick={() => setLessonMode(false)}>
            Start Quiz →
          </button>
        )}

        <button className="back-btn" onClick={goHome}>
          Exit
        </button>

        <div className="mascot">
          <img src={mascotImg} alt="RoboTutor mascot" />
          <p>{mascotMessage}</p>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN 4 — NO QUESTIONS ---------------------- */
  if (!questions.length) {
    return (
      <div className="quiz-page">
        <h2>No Questions Found 😅</h2>
        <button onClick={goHome}>Back Home</button>
      </div>
    );
  }

  /* ---------------------- SCREEN 5 — RESULTS ---------------------- */
  if (showResult) {
    return (
      <div className="quiz-page">
        {showConfetti && <Confetti />}

        <h2>🎉 Quiz Complete!</h2>
        <p>
          Score: <strong>{score}</strong> / {questions.length}
        </p>

        <button className="ai-btn" onClick={fetchAIQuestions}>
          ✨ Try AI Questions
        </button>

        <button className="back-btn" onClick={goHome}>
          Back
        </button>

        <div className="mascot">
          <img src={mascotImg} alt="RoboTutor mascot" />
          <p>{mascotMessage}</p>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN 6 — MAIN QUIZ ---------------------- */
  const q = translatedQuestion || questions[current];

  return (
    <div className={`quiz-page ${language === "ar" ? "rtl" : ""}`}>
      <select
        className="lang-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languageOptions.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>

      <h2>
        {(continent || "").toUpperCase()} — Level{" "}
        {selectedLevel.toUpperCase()}
      </h2>
      <p>
        Question {current + 1} / {questions.length}
        {isTranslating && " • Translating…"}
      </p>

      <div className="quiz-page-inner">
        <h3>{q.q}</h3>

        <button className="voice-btn" onClick={() => speak(q.q)}>
          🔊 Read Question
        </button>

        <button className="mic-btn" onClick={handleVoiceAnswer}>
          🎤 Voice Answer
        </button>

        <button className="ask-btn" onClick={handleExplain}>
          🤖 Explain
        </button>

        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              disabled={!!selected}
              className={
                selected
                  ? opt === q.a
                    ? "correct"
                    : opt === selected
                    ? "wrong"
                    : ""
                  : ""
              }
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="mascot">
        <img src={mascotImg} alt="RoboTutor mascot" />
        <p>{mascotMessage}</p>
      </div>
    </div>
  );
}
