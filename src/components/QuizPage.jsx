import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

import "./QuizPage.css";
import React, { useEffect } from "react";
import { useLesson } from "../hooks/useLesson";

export default function QuizPage() {
  const { steps, loading, error, loadLesson } = useLesson();

  useEffect(() => {
    loadLesson({ topic: "gravity", age: 10, language: "en" }); // customize as needed
  }, []);

  return (
    <div className="quiz-page">
      <h2>AI Lesson Mode</h2>

      {loading && <p>Loading lesson…</p>}
      {error && <p className="error">{error}</p>}
      {steps && steps.map((s, i) => (
        <p key={i}><strong>Step {i + 1}:</strong> {s}</p>
      ))}

      <div className="lesson-actions">
        <button onClick={() => loadLesson({ topic: "gravity", age: 10, language: "en" })}>
          🔄 Regenerate Lesson
        </button>
        <button onClick={() => {/* start quiz logic */}}>Start Quiz</button>
        <a href="/map">Exit to Map</a>
      </div>
    </div>
  );
}
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

// Mascot (kids image)
import mascotImg from "../assets/kids-mascot.png";

export default function QuizPage() {
  const { continent } = useParams();
  const navigate = useNavigate();

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

  /* ---------------------- REMOVE DUPLICATES ---------------------- */
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

  /* ---------------------- SHUFFLE OPTIONS ---------------------- */
  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Prepare questions: dedupe + randomize options order
  const prepareQuestions = (arr) => {
    const unique = removeDuplicates(arr);
    return unique.map((q) => {
      const opts = Array.isArray(q.options) ? q.options : [];
      const shuffledOptions = shuffleArray(opts);
      return {
        ...q,
        options: shuffledOptions, // keep q.a as the correct text
      };
    });
  };

  /* ---------------------- MATCH QUESTION SET ---------------------- */
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

  const [lessonMode, setLessonMode] = useState(false);
  const [lessonSteps, setLessonSteps] = useState([]);
  const [lessonIndex, setLessonIndex] = useState(0);

  const [mascotMessage, setMascotMessage] = useState(
    "Hi! I'm RoboTutor — ready to help!"
  );

  const [showConfetti, setShowConfetti] = useState(false);

  const [language, setLanguage] = useState("en");
  const [translatedQuestion, setTranslatedQuestion] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);

  /* ---------------------- LANGUAGE OPTIONS ---------------------- */
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

  /* ---------------------- VOICE RECOGNITION ---------------------- */
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
    if (!text || typeof window === "undefined") return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = voices[language] || "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  /* ---------------------- TRANSLATE CURRENT QUESTION ---------------------- */
  useEffect(() => {
    if (!questions.length) return;
    if (language === "en") {
      setTranslatedQuestion(null);
      return;
    }

    const translate = async () => {
      setIsTranslating(true);
      try {
        const response = await fetch("/api/translate", {
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
        console.log("Translation failed", err);
      }
      setIsTranslating(false);
    };

    translate();
  }, [language, current, questions]);

  /* ---------------------- LOAD QUESTIONS FOR LEVEL & AGE ---------------------- */
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
  }, [selectedLevel, ageGroup, selectedSet]);

  /* ---------------------- SAVE SCORE TO LEADERBOARD ---------------------- */
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

  const handleVoiceAnswer = () => {
    if (!mic) {
      alert("Voice recognition not supported on this device.");
      return;
    }

    const q = translatedQuestion || questions[current];
    if (!q) return;

    const correct = String(q.a || "").toLowerCase();

    mic.start();
    setMascotMessage("Listening… 🎤");

    mic.onresult = (e) => {
      const speech = e.results[0][0].transcript.toLowerCase();
      if (speech.includes(correct)) {
        handleAnswer(q.a);
      } else {
        setMascotMessage(`You said "${speech}". Try again!`);
      }
    };
  };

  const handleExplain = async () => {
    const q = translatedQuestion || questions[current];
    if (!q) return;

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q.q,
          answer: q.a,
          language,
        }),
      });

      const data = await res.json();
      if (data.explanation) {
        setMascotMessage(data.explanation);
      } else {
        setMascotMessage("I can't explain right now 😅");
      }
    } catch (err) {
      console.log("Explain failed", err);
      setMascotMessage("AI helper is not available right now.");
    }
  };

  const fetchAIQuestions = async () => {
    if (!selectedLevel || !ageGroup) {
      alert("Please select your age and level first.");
      return;
    }

    try {
      setMascotMessage("Generating fresh questions for you… ✨");

      const res = await fetch("/api/generate-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: finalKey,
          level: selectedLevel,
          age: ageGroup,
        }),
      });

      const data = await res.json();

      if (Array.isArray(data.questions) && data.questions.length > 0) {
        const prepared = prepareQuestions(data.questions);
        setQuestions(prepared);
        setCurrent(0);
        setSelected("");
        setShowResult(false);
        setShowConfetti(false);
        setScore(0);
        setMascotMessage("Here are brand-new AI-powered questions! 🚀");
      } else {
        setMascotMessage("AI could not generate new questions right now.");
      }
    } catch (err) {
      console.log("AI question generation failed", err);
      setMascotMessage("AI question service is not available.");
    }
  };

  const startLessonMode = async () => {
    if (!ageGroup) {
      alert("Please choose your age group first.");
      return;
    }

    setLessonMode(true);
    setLessonSteps([]);
    setLessonIndex(0);
    setMascotMessage("Building a mini-lesson just for you… 📘");

    try {
      const res = await fetch("/api/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: finalKey,
          age: ageGroup,
          language,
        }),
      });

      const data = await res.json();
      if (Array.isArray(data.steps) && data.steps.length > 0) {
        setLessonSteps(data.steps);
      } else {
        setLessonSteps([
          "No AI lesson is available right now. Let's try the quiz instead!",
        ]);
      }
    } catch (err) {
      console.log("Lesson mode failed", err);
      setLessonSteps([
        "AI lesson service is not available. You can still enjoy the quiz! 😊",
      ]);
    }
  };

  /* ---------------------- PREMIUM UI HELPERS ---------------------- */
  const totalQuestions = questions.length || 1;
  const progressPercent =
    totalQuestions > 0 ? ((current + 1) / totalQuestions) * 100 : 0;

  /* ---------------------- SCREEN: PLAYER NAME ---------------------- */
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
                setMascotMessage(`Awesome, ${playerName.trim()}! Let's begin!`);
              } else {
                alert("Please enter a valid name.");
              }
            }}
          >
            Continue →
          </button>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor mascot" className="mascot-img" />
            <p className="mascot-text">I’m RoboTutor. I’ll guide you! 🤖</p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN: AGE SELECT ---------------------- */
  if (!ageGroup) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">Hi {playerName}! 👋</h2>
          <p className="quiz-subtitle">Choose your age group to get started:</p>

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
            <img src={mascotImg} alt="RoboTutor mascot" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN: LEVEL SELECT ---------------------- */
  if (!selectedLevel && !lessonMode) {
    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <div className="quiz-header-row">
            <h2 className="quiz-title">
              {(continent || "").toUpperCase()}
            </h2>

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
          </div>

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
            <img src={mascotImg} alt="RoboTutor mascot" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN: LESSON MODE ---------------------- */
  if (lessonMode) {
    const step = lessonSteps[lessonIndex] || "Loading lesson...";

    return (
      <div className="quiz-page premium-layout">
        <div className="quiz-card fade-in">
          <h2 className="quiz-title">📘 AI Lesson Mode</h2>

          <p className="lesson-step">{step}</p>

          <div className="lesson-controls">
            <button className="ghost-btn" onClick={() => speak(step)}>
              🔊 Read Lesson
            </button>

            {lessonIndex < lessonSteps.length - 1 ? (
              <button
                className="primary-btn"
                onClick={() => setLessonIndex((i) => i + 1)}
              >
                Next →
              </button>
            ) : (
              <button
                className="primary-btn"
                onClick={() => setLessonMode(false)}
              >
                Start Quiz →
              </button>
            )}
          </div>

          <button className="secondary-btn" onClick={goHome}>
            Exit to Map
          </button>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor mascot" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------- SCREEN: NO QUESTIONS ---------------------- */
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

  /* ---------------------- SCREEN: RESULTS ---------------------- */
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
            <button className="primary-btn" onClick={fetchAIQuestions}>
              ✨ Try AI-Generated Questions
            </button>
            <button className="secondary-btn" onClick={goHome}>
              ⟵ Back to Map
            </button>
          </div>

          <div className="mascot-row">
            <img src={mascotImg} alt="RoboTutor mascot" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------- MAIN QUIZ SCREEN ---------------------- */
  const q = translatedQuestion || questions[current];

  return (
    <div
      className={`quiz-page premium-layout ${
        language === "ar" ? "rtl" : ""
      }`}
    >
      <div className="quiz-card slide-up">
        <div className="quiz-header-row">
          <h2 className="quiz-title">
            {(continent || "").toUpperCase()} — Level{" "}
            {selectedLevel.toUpperCase()}
          </h2>

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
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="progress-text">
          Question {current + 1} of {questions.length}
          {isTranslating && " • Translating…"}
        </p>

        <div className="question-card">
          <h3 className="question-text">{q.q}</h3>

          <div className="question-actions">
            <button className="ghost-btn" onClick={() => speak(q.q)}>
              🔊 Read Question
            </button>
            <button className="ghost-btn" onClick={handleVoiceAnswer}>
              🎤 Voice Answer
            </button>
            <button className="ghost-btn" onClick={handleExplain}>
              🤖 Explain
            </button>
          </div>

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
            <img src={mascotImg} alt="RoboTutor mascot" className="mascot-img" />
            <p className="mascot-text">{mascotMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
