import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

// Styles
import "./QuizPage.css";

// Analytics
import { trackQuizStart, trackQuizCompletion, trackAILesson, trackLanguageChange } from "../utils/analytics";

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
  algebraQuestions,
  geometryQuestions,
  musicQuestions,
  artQuestions,
  codingQuestions,
} from "../data/index.js";

// Mascot
import mascotImg from "../assets/smartquiz/smartquiz.png";
import Spinner from "./Spinner";
import Achievements from "./Achievements";
import WordScramble from "./WordScramble";

// New Interactive Features
import ResourcesPanel from "./ResourcesPanel";
import DragDropMatch from "./DragDropMatch";
import SimulationLab from "./SimulationLab";
import { educationalResources } from "../data/educationalResources";

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

  /* ---------------------------------------------------------
     NORMALIZE CATEGORY NAME
  --------------------------------------------------------- */
  const normalize = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "") // remove spaces, hyphens, symbols
      .replace(/s$/, ""); // maths → math, sciences → science
  };

  const key = normalize(continent);

  // Aliases (handles variants like "mathematics", "mathquestions", etc.)
  const aliasMap = {
    mathematic: "math",
    mathematics: "math",
    maths: "math",
    mathquestion: "math",
    mathquestions: "math",
  };

  const finalKey = aliasMap[key] || key;

  /* ---------------------------------------------------------
     MAP SUBJECT/CONTINENT → QUESTION SET
  --------------------------------------------------------- */
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
    algebra: algebraQuestions,
    geometry: geometryQuestions,
    music: musicQuestions,
    art: artQuestions,
    coding: codingQuestions,
  };

  const selectedSet = questionSets[finalKey] || null;

  // Subjects that support dual-mode (kids/advanced)
  const dualModeSubjects = ["algebra", "math", "geometry", "science", "english", "computer", "music", "art", "coding"];

  /* ---------------------------------------------------------
     STATE
  --------------------------------------------------------- */
  const [ageGroup, setAgeGroup] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [subjectMode, setSubjectMode] = useState(""); // "kids" or "advanced" for subjects that support it

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);

  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [lessonMode, setLessonMode] = useState(false);
  const [playgroundMode, setPlaygroundMode] = useState(false);
  const [lessonSteps, setLessonSteps] = useState([]);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [lessonApiMode, setLessonApiMode] = useState("auto");

  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [preparingLesson, setPreparingLesson] = useState(false);

  const [mascotMessage, setMascotMessage] = useState(
    "Hi! I'm RoboTutor — ready to help!"
  );

  const [showConfetti, setShowConfetti] = useState(false);

  // Gamification
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [stars, setStars] = useState(0);
  const [feedbackAnimation, setFeedbackAnimation] = useState("");
  const [newBadges, setNewBadges] = useState([]);

  // Translation
  const [language, setLanguage] = useState("en");
  const [translatedQuestion, setTranslatedQuestion] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);

  // Sound effects
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Avoid repeats across sessions
  const loadAvoidRepeats = () => {
    try {
      const v = localStorage.getItem('avoidRepeats');
      return v ? JSON.parse(v) : false;
    } catch { return false; }
  };
  const [avoidRepeats, setAvoidRepeats] = useState(loadAvoidRepeats());

  const seenStorageKey = (subject, level, age) => `seenQuestions:${subject}:${level}:${age}`;
  const loadSeenSet = (subject, level, age) => {
    try {
      const raw = localStorage.getItem(seenStorageKey(subject, level, age));
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(arr);
    } catch { return new Set(); }
  };
  const saveSeenSet = (subject, level, age, set) => {
    try {
      localStorage.setItem(seenStorageKey(subject, level, age), JSON.stringify(Array.from(set)));
    } catch {}
  };

  // Load stats from localStorage
  const loadStats = () => {
    try {
      const saved = localStorage.getItem('quizStats');
      return saved ? JSON.parse(saved) : {
        totalCorrect: 0,
        quizzesCompleted: 0,
        maxStreak: 0,
        perfectQuizzes: 0,
      };
    } catch { return { totalCorrect: 0, quizzesCompleted: 0, maxStreak: 0, perfectQuizzes: 0 }; }
  };

  const [stats, setStats] = useState(loadStats());

  // New feature states
  const [showResources, setShowResources] = useState(false);
  const [showDragDrop, setShowDragDrop] = useState(false);
  const [showSimulation, setShowSimulation] = useState(false);

  // Save stats
  const saveStats = (newStats) => {
    try {
      localStorage.setItem('quizStats', JSON.stringify(newStats));
      setStats(newStats);
    } catch { /* ignore */ }
  };

  const playSound = (type) => {
    if (!soundEnabled) return;
    try {
      const sounds = {
        correct: '/sounds/click.wav',
        wrong: '/sounds/click.wav',
        complete: '/sounds/backgroundMusic.wav'
      };
      const audio = new Audio(sounds[type] || sounds.correct);
      audio.volume = type === 'complete' ? 0.3 : 0.5;
      audio.play().catch(() => {});
    } catch { /* ignore */ }
  };

  /* ---------------------------------------------------------
     VOICE RECOGNITION
  --------------------------------------------------------- */
  let mic = null;
  if (typeof window !== "undefined") {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      mic = new SR();
      mic.lang = "en-US";
      mic.continuous = false;
    }
  }

  /* ---------------------------------------------------------
     TEXT-TO-SPEECH
  --------------------------------------------------------- */
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
    
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const u = new SpeechSynthesisUtterance(text);
      u.lang = voices[language] || "en-US";
      u.rate = 0.9; // Slightly slower for better clarity
      u.pitch = 1.0;
      u.volume = 1.0;
      
      u.onstart = () => {
        console.log("Speech started");
      };
      
      u.onerror = (event) => {
        console.error("Speech error:", event);
        alert("Voice feature not available. Please check your browser settings.");
      };
      
      window.speechSynthesis.speak(u);
    } catch (error) {
      console.error("Speech synthesis error:", error);
      alert("Text-to-speech is not supported in this browser.");
    }
  };

  /* ---------------------------------------------------------
     TRANSLATE CURRENT QUESTION
  --------------------------------------------------------- */
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
        console.log("Translation failed");
      }
      setIsTranslating(false);
    };

    translate();
  }, [language, current, questions]);

  /* ---------------------------------------------------------
     LOAD QUESTIONS BASED ON LEVEL & AGE
  --------------------------------------------------------- */
  useEffect(() => {
    if (!selectedSet || !selectedLevel || !ageGroup) return;

    // For dual-mode subjects, prefix the level with the mode (kids_level1 or advanced_level1)
    let levelKey = selectedLevel;
    if (dualModeSubjects.includes(finalKey) && subjectMode) {
      levelKey = `${subjectMode}_${selectedLevel}`;
    }

    const base = selectedSet[levelKey];

    if (!Array.isArray(base)) {
      setQuestions([]);
      return;
    }

    const filtered = base.filter((q) => !q.age || q.age === ageGroup);

    const cleanPrefix = (s) =>
      String(s)
        .replace(/^[A-Za-z\s-]*(?:Easy|Medium|Hard)?\s*#\d+:\s*/i, "")
        .trim()
        .toLowerCase();
    const shuffleArr = (arr) => [...arr].sort(() => Math.random() - 0.5);

    const transform = (arr) => {
      const seen = new Set();
      const unique = [];
      const sessionSeen = avoidRepeats ? loadSeenSet(finalKey, selectedLevel, ageGroup) : new Set();
      for (const item of arr) {
        const key = cleanPrefix(item.q);
        if (!seen.has(key) && (!avoidRepeats || !sessionSeen.has(key))) {
          seen.add(key);
          const opts = Array.isArray(item.options) ? [...item.options] : [];
          if (!opts.includes(item.a)) opts.unshift(item.a);
          const uniqOpts = Array.from(new Set(opts));
          const shuffledOpts = shuffleArr(uniqOpts);
          unique.push({ ...item, options: shuffledOpts });
        }
      }
      // If filtering removed too many, allow fallback by ignoring repeats to ensure we have content
      if (unique.length < 10 && avoidRepeats) {
        for (const item of arr) {
          const key = cleanPrefix(item.q);
          if (!seen.has(key)) {
            seen.add(key);
            const opts = Array.isArray(item.options) ? [...item.options] : [];
            if (!opts.includes(item.a)) opts.unshift(item.a);
            const uniqOpts = Array.from(new Set(opts));
            const shuffledOpts = shuffleArr(uniqOpts);
            unique.push({ ...item, options: shuffledOpts });
          }
          if (unique.length >= 10) break;
        }
      }
      return shuffleArr(unique);
    };

    setQuestions(transform(filtered));
    setCurrent(0);
    setSelected("");
    setShowResult(false);
    setShowConfetti(false);
    setScore(0);
    
    // Track quiz start
    if (filtered.length > 0) {
      trackQuizStart(finalKey, selectedLevel);
    }
  }, [selectedLevel, ageGroup, selectedSet, subjectMode, finalKey]);

  /* ---------------------------------------------------------
     ADVENTURE PROGRESS (XP, LEVELS, BADGES, UNLOCKS)
  --------------------------------------------------------- */
  const updateAdventureProgress = () => {
    if (!questions.length) return;

    const storageKey = "smartKidsProgress";
    const raw = localStorage.getItem(storageKey);
    const data = raw
      ? JSON.parse(raw)
      : { xp: 0, level: 1, continents: {}, subjects: {} };

    const id = finalKey;
    const isContinent = CONTINENT_ORDER.includes(id);

    // XP: e.g. 5 XP per question answered
    const earnedXP = questions.length * 5;
    data.xp += earnedXP;

    // Simple level system: every 100 XP = +1 level
    data.level = 1 + Math.floor(data.xp / 100);

    if (isContinent) {
      if (!data.continents[id]) {
        data.continents[id] = { answered: 0, badgeUnlocked: false };
      }
      data.continents[id].answered += questions.length;

      // 🎖 Badge when they answer at least 20 questions for that continent
      if (data.continents[id].answered >= 20) {
        data.continents[id].badgeUnlocked = true;
      }

      // 🔓 Unlock next continent in sequence
      const unlockedRaw = localStorage.getItem("unlockedContinents");
      const unlockedList = unlockedRaw
        ? JSON.parse(unlockedRaw)
        : ["africa"];

      // Ensure current is unlocked
      if (!unlockedList.includes(id)) {
        unlockedList.push(id);
      }

      const currentIndex = CONTINENT_ORDER.indexOf(id);
      const nextId =
        currentIndex >= 0 ? CONTINENT_ORDER[currentIndex + 1] : null;

      if (nextId && !unlockedList.includes(nextId)) {
        unlockedList.push(nextId);
      }

      localStorage.setItem(
        "unlockedContinents",
        JSON.stringify(unlockedList)
      );
    } else {
      // Subject progress
      if (!data.subjects[id]) {
        data.subjects[id] = { answered: 0, badgeUnlocked: false };
      }
      data.subjects[id].answered += questions.length;

      // 🎖 Badge when they answer at least 30 questions for that subject
      if (data.subjects[id].answered >= 30) {
        data.subjects[id].badgeUnlocked = true;
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  // Run once when results screen is shown
  useEffect(() => {
    if (showResult) {
      updateAdventureProgress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResult]);

  /* ---------------------------------------------------------
     HANDLE ANSWER CLICK
  --------------------------------------------------------- */
  const handleAnswer = (option) => {
    const q = translatedQuestion || questions[current];
    if (!q) return;

    setSelected(option);
    const isCorrect = option === q.a;

    // Mark question as seen for no-repeats mode
    try {
      const keyNorm = String(q.q).replace(/^[A-Za-z\s-]*(?:Easy|Medium|Hard)?\s*#\d+:\s*/i, "").trim().toLowerCase();
      const setSeen = loadSeenSet(finalKey, selectedLevel, ageGroup);
      setSeen.add(keyNorm);
      saveSeenSet(finalKey, selectedLevel, ageGroup, setSeen);
    } catch {}

    if (isCorrect) {
      setScore((s) => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      
      playSound('correct');
      setFeedbackAnimation('correct-pulse');
      
      const messages = [
        "Correct! You are amazing! 🎉",
        "Brilliant! Keep it up! ⭐",
        "Perfect! You're on fire! 🔥",
        "Awesome work! 💪",
        "Excellent! You're a star! 🌟"
      ];
      setMascotMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      // Update stats
      const newStats = { ...stats, totalCorrect: stats.totalCorrect + 1 };
      if (newStreak > stats.maxStreak) newStats.maxStreak = newStreak;
      saveStats(newStats);
    } else {
      setStreak(0);
      playSound('wrong');
      setFeedbackAnimation('wrong-shake');
      setMascotMessage("Oops, try again! 😊");
    }

    setTimeout(() => {
      setFeedbackAnimation("");
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected("");
      } else {
        const finalScore = isCorrect ? score + 1 : score;
        const percentage = (finalScore / questions.length) * 100;
        const earnedStars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : percentage >= 50 ? 1 : 0;
        setStars(earnedStars);
        
        const isPerfect = finalScore === questions.length;
        const updatedStats = {
          ...stats,
          totalCorrect: stats.totalCorrect + (isCorrect ? 1 : 0),
          quizzesCompleted: stats.quizzesCompleted + 1,
          perfectQuizzes: stats.perfectQuizzes + (isPerfect ? 1 : 0),
          maxStreak: Math.max(stats.maxStreak, maxStreak)
        };
        saveStats(updatedStats);
        
        // Track quiz completion
        trackQuizCompletion(finalKey, selectedLevel, finalScore, questions.length);
        
        playSound('complete');
        setShowConfetti(true);
        setShowResult(true);
      }
    }, 700);
  };

  /* ---------------------------------------------------------
     VOICE ANSWER
  --------------------------------------------------------- */
  const handleVoiceAnswer = () => {
    if (!mic) return alert("Voice recognition not supported in this browser.");

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

  /* ---------------------------------------------------------
     AI – EXPLAIN ANSWER
  --------------------------------------------------------- */
  const handleExplain = async () => {
    const q = questions[current];
    if (!q) return;

    try {
      setMascotMessage("Thinking... 🤔");
      
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q.q,
          answer: q.a,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const explanation = data.explanation || "I can't explain right now 😅";
      setMascotMessage(explanation);
      
      // Automatically read the explanation aloud
      speak(explanation);
    } catch (error) {
      console.error("Explain error:", error);
      const fallback = `The correct answer is "${q.a}". This is an important fact to remember.`;
      setMascotMessage(fallback);
      speak(fallback);
    }
  };

  /* ---------------------------------------------------------
     AI – GENERATE QUESTIONS
  --------------------------------------------------------- */
  const fetchAIQuestions = async () => {
    const response = await fetch(
      "/api/generate-question",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: finalKey,
          level: selectedLevel,
          age: ageGroup,
        }),
      }
    );

    const data = await response.json();
    if (data.questions) {
      const shuffleArr = (arr) => [...arr].sort(() => Math.random() - 0.5);
      const transform = (arr) => {
        const seen = new Set();
        const unique = [];
        const clean = (s) => String(s).trim().toLowerCase();
        const sessionSeen = avoidRepeats ? loadSeenSet(finalKey, selectedLevel, ageGroup) : new Set();
        for (const item of arr) {
          const key = clean(item.q);
          if (!seen.has(key) && (!avoidRepeats || !sessionSeen.has(key))) {
            seen.add(key);
            const opts = Array.isArray(item.options) ? [...item.options] : [];
            if (!opts.includes(item.a)) opts.unshift(item.a);
            const uniqOpts = Array.from(new Set(opts));
            const shuffledOpts = shuffleArr(uniqOpts);
            unique.push({ ...item, options: shuffledOpts });
          }
        }
        if (unique.length < 10 && avoidRepeats) {
          for (const item of arr) {
            const key = clean(item.q);
            if (!seen.has(key)) {
              seen.add(key);
              const opts = Array.isArray(item.options) ? [...item.options] : [];
              if (!opts.includes(item.a)) opts.unshift(item.a);
              const uniqOpts = Array.from(new Set(opts));
              const shuffledOpts = shuffleArr(uniqOpts);
              unique.push({ ...item, options: shuffledOpts });
            }
            if (unique.length >= 10) break;
          }
        }
        return shuffleArr(unique);
      };
      setQuestions(transform(data.questions));
      setCurrent(0);
      setSelected("");
      setShowResult(false);
      setShowConfetti(false);
      setScore(0);
    }
  };

  /* ---------------------------------------------------------
     AI – LESSON MODE
  --------------------------------------------------------- */
  const startLessonMode = async (mode = "auto") => {
    // Defer entering lesson view until both lesson steps and questions are prepared.
    setPreparingLesson(true);

    try {
      // Fetch lesson steps first (AI or static per mode)
      const lessonResp = await fetch("/api/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: finalKey,
          age: ageGroup,
          language,
          mode,
        }),
      });

      const lessonData = await lessonResp.json();
      setLessonSteps(lessonData.steps || []);
      setLessonIndex(0);

      // Prepare questions depending on mode
      if (mode === "static") {
        // Use built-in question bank for static mode
        // For dual-mode subjects, use the prefixed level key
        let levelKey = selectedLevel;
        if (dualModeSubjects.includes(finalKey) && subjectMode) {
          levelKey = `${subjectMode}_${selectedLevel}`;
        }
        const base = selectedSet && selectedSet[levelKey];
        const filtered = Array.isArray(base)
          ? base.filter((q) => !q.age || q.age === ageGroup)
          : [];
        const cleanPrefix = (s) =>
          String(s)
            .replace(/^[A-Za-z\s-]*(?:Easy|Medium|Hard)?\s*#\d+:\s*/i, "")
            .trim()
            .toLowerCase();
        const shuffleArr = (arr) => [...arr].sort(() => Math.random() - 0.5);
        const transform = (arr) => {
          const seen = new Set();
          const unique = [];
          const sessionSeen = avoidRepeats ? loadSeenSet(finalKey, selectedLevel, ageGroup) : new Set();
          for (const item of arr) {
            const key = cleanPrefix(item.q);
            if (!seen.has(key) && (!avoidRepeats || !sessionSeen.has(key))) {
              seen.add(key);
              const opts = Array.isArray(item.options) ? [...item.options] : [];
              if (!opts.includes(item.a)) opts.unshift(item.a);
              const uniqOpts = Array.from(new Set(opts));
              const shuffledOpts = shuffleArr(uniqOpts);
              unique.push({ ...item, options: shuffledOpts });
            }
          }
          if (unique.length < 10 && avoidRepeats) {
            for (const item of arr) {
              const key = cleanPrefix(item.q);
              if (!seen.has(key)) {
                seen.add(key);
                const opts = Array.isArray(item.options) ? [...item.options] : [];
                if (!opts.includes(item.a)) opts.unshift(item.a);
                const uniqOpts = Array.from(new Set(opts));
                const shuffledOpts = shuffleArr(uniqOpts);
                unique.push({ ...item, options: shuffledOpts });
              }
              if (unique.length >= 10) break;
            }
          }
          return shuffleArr(unique);
        };
        setQuestions(transform(filtered));
        setCurrent(0);
        setSelected("");
        setShowResult(false);
        setShowConfetti(false);
        setScore(0);
      } else {
        // AI or auto: request AI-generated questions
        try {
          setLoadingQuestions(true);
          await fetchAIQuestions();
        } catch (err) {
          console.warn("AI questions fetch failed:", err);
        } finally {
          setLoadingQuestions(false);
        }
      }

      // All prepared — enter lesson mode
      setLessonMode(true);
    } catch (err) {
      console.error("Failed to prepare lesson:", err);
      // fallback: enter lesson mode with whatever we have
      setLessonMode(true);
    } finally {
      setPreparingLesson(false);
    }
  };

  /* ---------------------------------------------------------
     HELPERS
  --------------------------------------------------------- */
  const goHome = () => navigate("/");

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

  /* ---------------------------------------------------------
     SCREEN 1.5 — PLAYGROUND MODE
  --------------------------------------------------------- */
  if (playgroundMode) {
    return (
      <WordScramble 
        onBack={() => setPlaygroundMode(false)}
        onAchievement={(title, description) => {
          setNewBadges([...newBadges, { title, description }]);
          setTimeout(() => setNewBadges([]), 4000);
        }}
        language={language}
      />
    );
  }

  /* ---------------------------------------------------------
     SCREEN 1 — DIFFICULTY LEVEL
  --------------------------------------------------------- */
  if (!ageGroup) {
    return (
      <div className="quiz-page">
        <h2>Select Difficulty Level</h2>
        <div className="levels">
          <button onClick={() => setAgeGroup("5-7")}>Level 1</button>
          <button onClick={() => setAgeGroup("8-10")}>Level 2</button>
          <button onClick={() => setAgeGroup("11-14")}>Level 3</button>
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

  /* ---------------------------------------------------------
     SCREEN 1.5 — MODE SELECT (FOR DUAL-MODE SUBJECTS)
  --------------------------------------------------------- */
  if (dualModeSubjects.includes(finalKey) && !subjectMode && !lessonMode) {
    const subjectNames = {
      algebra: "ALGEBRA",
      math: "MATHEMATICS",
      geometry: "GEOMETRY",
      science: "SCIENCE",
      english: "ENGLISH",
      computer: "COMPUTER SCIENCE",
      music: "MUSIC",
      art: "ART & ART HISTORY",
      coding: "CODING & PROGRAMMING"
    };
    
    return (
      <div className="quiz-page">
        <h2>{subjectNames[finalKey] || finalKey.toUpperCase()}</h2>
        <p>Select Your Mode:</p>
        
        <div className="levels">
          <button 
            onClick={() => setSubjectMode("kids")}
            style={{ padding: "20px 40px", margin: "10px", fontSize: "18px" }}
          >
            👶 KIDS MODE
            <div style={{ fontSize: "14px", marginTop: "8px" }}>
              Beginner Level<br/>
              Easy to Medium
            </div>
          </button>
          
          <button 
            onClick={() => setSubjectMode("advanced")}
            style={{ padding: "20px 40px", margin: "10px", fontSize: "18px" }}
          >
            🎓 ADVANCED MODE
            <div style={{ fontSize: "14px", marginTop: "8px" }}>
              Advanced Level<br/>
              Medium to Hard
            </div>
          </button>
        </div>
        
        <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
          ← Back
        </button>
      </div>
    );
  }

  /* ---------------------------------------------------------
     SCREEN 2 — LEVEL SELECT
  --------------------------------------------------------- */
  if (!selectedLevel && !lessonMode) {
    return (
      <div className="quiz-page">
        <select
          className="lang-select"
          value={language}
          onChange={(e) => {
            const newLang = e.target.value;
            setLanguage(newLang);
            trackLanguageChange(newLang);
          }}
        >
          {languageOptions.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>

        <h2>
          {(continent || "").toUpperCase()}
          {dualModeSubjects.includes(finalKey) && subjectMode && (
            <span style={{ fontSize: "16px", marginLeft: "10px" }}>
              ({subjectMode === "kids" ? "👶 Kids Mode" : "🎓 Advanced Mode"})
            </span>
          )}
        </h2>
        <p>Select Level:</p>

        {/* New Interactive Features Menu */}
        <div className="interactive-features">
          <button className="feature-btn resources-btn" onClick={() => setShowResources(true)}>
            📚 Resources
          </button>
          <button className="feature-btn dragdrop-btn" onClick={() => setShowDragDrop(true)}>
            🎯 Drag & Drop
          </button>
          <button className="feature-btn simulation-btn" onClick={() => setShowSimulation(true)}>
            🔬 Simulations
          </button>
        </div>

        <div className="levels">
          {selectedSet &&
            Object.keys(selectedSet)
              .filter((lvl) => {
                // For dual-mode subjects, only show levels matching the selected mode
                if (dualModeSubjects.includes(finalKey) && subjectMode) {
                  return lvl.startsWith(`${subjectMode}_`);
                }
                return true;
              })
              .map((lvl) => {
                // Display name: remove mode prefix for dual-mode subjects
                let displayName = lvl;
                if (dualModeSubjects.includes(finalKey) && subjectMode) {
                  displayName = lvl.replace(`${subjectMode}_`, "");
                }
                return (
                  <button key={lvl} onClick={() => setSelectedLevel(displayName)}>
                    {displayName.toUpperCase()}
                  </button>
                );
              })}
        </div>

        <div style={{ marginTop: 12 }}>
          <label style={{ marginRight: 8 }}>Lesson Source:</label>
          <select
            value={lessonApiMode}
            onChange={(e) => setLessonApiMode(e.target.value)}
          >
            <option value="auto">Auto (AI → fallback)</option>
            <option value="ai">AI only</option>
            <option value="static">Static only</option>
          </select>
        </div>

        <div style={{ marginTop: 12 }}>
          <label style={{ marginRight: 8 }}>
            <input
              type="checkbox"
              checked={avoidRepeats}
              onChange={(e) => {
                const v = e.target.checked;
                setAvoidRepeats(v);
                try { localStorage.setItem('avoidRepeats', JSON.stringify(v)); } catch {}
              }}
            />{" "}
            Avoid repeats across sessions
          </label>
          <button
            style={{ marginLeft: 12 }}
            onClick={() => {
              try {
                // Clear only for current subject
                const keys = Object.keys(localStorage);
                const prefix = `seenQuestions:${finalKey}:`;
                keys.forEach((k) => { if (k.startsWith(prefix)) localStorage.removeItem(k); });
                setMascotMessage("Seen questions reset for this subject! 🔄");
              } catch {}
            }}
          >
            Reset seen (subject)
          </button>
          <button
            style={{ marginLeft: 8 }}
            onClick={() => {
              try {
                // Clear ALL seen questions for all subjects
                const keys = Object.keys(localStorage);
                keys.forEach((k) => { if (k.startsWith('seenQuestions:')) localStorage.removeItem(k); });
                setMascotMessage("All seen questions cleared globally! 🌍");
              } catch {}
            }}
          >
            Reset all seen (global)
          </button>
        </div>

        <button
          className="ai-btn"
          onClick={() => startLessonMode(lessonApiMode)}
          style={{ marginTop: 12 }}
        >
          📘 Start Lesson
        </button>

        <button
          className="ai-btn"
          onClick={() => setPlaygroundMode(true)}
          style={{ marginTop: 12, background: "#ab47bc" }}
        >
          🎲 Word Scramble Playground
        </button>

        {dualModeSubjects.includes(finalKey) && subjectMode && (
          <button 
            onClick={() => {
              setSubjectMode("");
              setSelectedLevel("");
            }}
            style={{ marginTop: 12, background: "#ff9800" }}
          >
            ← Change Mode
          </button>
        )}

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

  /* ---------------------------------------------------------
     SCREEN 3 — LESSON MODE
  --------------------------------------------------------- */
  if (lessonMode) {
    const step = lessonSteps[lessonIndex] || "Loading lesson...";
    // If we're preparing the lesson (waiting for questions), show a waiting screen
    if (preparingLesson) {
      return (
        <div className="quiz-page">
          <h2>Preparing your lesson…</h2>
          <p>Please wait while we create questions and arrange the lesson.</p>
          <div style={{ marginTop: 16 }}>
             <Spinner />
          </div>

          <button className="back-btn" onClick={goHome} style={{ marginTop: 16 }}>
            Cancel
          </button>
        </div>
      );
    }

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
            disabled={loadingQuestions}
          >
            Next →
            {loadingQuestions && (
              <span style={{ marginLeft: 8, fontSize: 12 }}>Loading questions...</span>
            )}
          </button>
        ) : (
          <button
            className="ai-btn"
            onClick={() => setLessonMode(false)}
            disabled={loadingQuestions}
          >
            Start Quiz →
            {loadingQuestions && (
              <span style={{ marginLeft: 8, fontSize: 12 }}>Loading questions...</span>
            )}
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

  /* ---------------------------------------------------------
     SCREEN 4 — NO QUESTIONS
  --------------------------------------------------------- */
  if (!questions.length) {
    return (
      <div className="quiz-page">
        <h2>No Questions Found 😅</h2>
        <button onClick={goHome}>Back Home</button>
      </div>
    );
  }

  /* ---------------------------------------------------------
     SCREEN 5 — RESULTS
  --------------------------------------------------------- */
  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const starDisplay = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    
    return (
      <div className="quiz-page">
        {showConfetti && <Confetti />}

        <h2>🎉 Quiz Complete!</h2>
        <div className="stars-display">{starDisplay}</div>
        <p className="score-display">
          Score: <strong>{score}</strong> / {questions.length}
          <span className="percentage"> ({percentage.toFixed(0)}%)</span>
        </p>
        
        {maxStreak >= 3 && (
          <p className="streak-badge">
            🔥 Best Streak: {maxStreak}
          </p>
        )}
        
        <Achievements stats={stats} newBadges={newBadges} />

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

  /* ---------------------------------------------------------
     MAIN QUIZ SCREEN
  --------------------------------------------------------- */
  const q = translatedQuestion || questions[current];

  return (
    <div className={`quiz-page ${language === "ar" ? "rtl" : ""} ${feedbackAnimation}`}>
      <select
        className="lang-select"
        value={language}
        onChange={(e) => {
          const newLang = e.target.value;
          setLanguage(newLang);
          trackLanguageChange(newLang);
        }}
      >
        {languageOptions.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      
      <button 
        className="sound-toggle"
        onClick={() => setSoundEnabled(!soundEnabled)}
        title={soundEnabled ? "Sound On" : "Sound Off"}
      >
        {soundEnabled ? "🔊" : "🔇"}
      </button>

      <h2>
        {(continent || "").toUpperCase()} — Level{" "}
        {selectedLevel.toUpperCase()}
      </h2>
      <p>
        Question {current + 1} / {questions.length}
        {isTranslating && " • Translating…"}
      </p>
      
      {streak >= 2 && (
        <div className="streak-indicator">
          🔥 Streak: {streak}
        </div>
      )}

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

      {/* New Interactive Feature Modals */}
      {showResources && (
        <ResourcesPanel
          subject={(continent || "").toUpperCase()}
          resources={educationalResources[finalKey] || []}
          onClose={() => setShowResources(false)}
        />
      )}

      {showDragDrop && (
        <DragDropMatch
          subject={finalKey}
          onClose={() => setShowDragDrop(false)}
        />
      )}

      {showSimulation && (
        <SimulationLab
          subject={finalKey}
          onClose={() => setShowSimulation(false)}
        />
      )}
    </div>
  );
}
