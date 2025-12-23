import React, { useState, useEffect } from "react";
import { wordBanks, scrambleWord, getRandomWord } from "../data/wordBanks";
import { loadLeaderboard, saveLeaderboard } from "./LeaderboardPanel";
import "../css/WordScramble.css";

const WordScramble = ({ onBack, onAchievement, language = "en" }) => {
  // Map app language codes to Web Speech API locales
  const langMap = {
    en: "en-US",
    fr: "fr-FR",
    es: "es-ES",
    ar: "ar-SA",
    zh: "zh-CN",
    pt: "pt-BR",
    sw: "sw-KE",
    kr: "kr-KR",
    hi: "hi-IN",
    de: "de-DE",
    it: "it-IT",
    ja: "ja-JP",
    ko: "ko-KR",
  };
  const speechLang = langMap[language] || "en-US";

  const [mode, setMode] = useState("select"); // select, play, results
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [round, setRound] = useState(1);
  const [feedback, setFeedback] = useState("");
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);

  const MAX_ROUNDS = 5;
  const MAX_HINTS = 2;

  // Load a new word
  const loadNewWord = () => {
    const word = getRandomWord(subject, difficulty);
    if (word) {
      setCorrectAnswer(word);
      setScrambled(scrambleWord(word));
      setUserGuess("");
      setFeedback("");
      setShowHint(false);
    }
  };

  // When entering play mode, or changing round/subject/difficulty, load a word
  useEffect(() => {
    if (mode === "play") {
      loadNewWord();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, round, subject, difficulty]);

  // Start game
  const startGame = (selectedSubject, selectedDifficulty) => {
    setSubject(selectedSubject);
    setDifficulty(selectedDifficulty);
    setScore(0);
    setRound(1);
    setHintsUsed(0);
    setStreak(0);
    // Load high score for this subject/difficulty
    try {
      const key = `scrambleHighScore:${selectedSubject}:${selectedDifficulty}`;
      const raw = localStorage.getItem(key);
      setHighScore(raw ? Number(raw) : 0);
    } catch {
      setHighScore(0);
    }
    setMode("play");
  };

  // Handle guess submission
  const handleGuess = () => {
    const trimmedGuess = userGuess.trim().toUpperCase();
    if (trimmedGuess === correctAnswer) {
      setFeedback("✓ Correct!");
      setScore(score + (MAX_HINTS - hintsUsed) * 10); // Bonus for fewer hints used
      setStreak(streak + 1);
      setTimeout(() => {
        if (round >= MAX_ROUNDS) {
          setMode("results");
          // Award achievement if perfect score
          if (hintsUsed === 0 && round === MAX_ROUNDS) {
            onAchievement?.("Scramble Master", "Solved 5 words without hints!");
          }
          updateLeaderboard(score + (MAX_HINTS - hintsUsed) * 10);
          // Persist high score
          try {
            const key = `scrambleHighScore:${subject}:${difficulty}`;
            const best = Math.max(score, highScore);
            localStorage.setItem(key, String(best));
            setHighScore(best);
          } catch {}
        } else {
          setRound(round + 1);
          setUserGuess("");
          setHintsUsed(0);
          setShowHint(false);
          setFeedback("");
        }
      }, 800);
    } else {
      setFeedback("✗ Try again!");
      setUserGuess("");
      setStreak(0);
    }
  };

  // Get hint
  const getHint = () => {
    if (hintsUsed < MAX_HINTS) {
      setShowHint(true);
      setHintsUsed(hintsUsed + 1);
    }
  };

  // Get hint text
  const getHintText = () => {
    if (!showHint) return "";
    if (hintsUsed === 1) {
      return `First letter: ${correctAnswer[0]}`;
    } else if (hintsUsed === 2) {
      const lastLetter = correctAnswer[correctAnswer.length - 1];
      return `Last letter: ${lastLetter} (${correctAnswer.length} letters total)`;
    }
    return "";
  };

  // Voice helpers
  const speak = (text) => {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = speechLang;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } catch {}
  };

  const updateLeaderboard = (finalScore) => {
    const key = "leaderboard:scramble";
    const existing = loadLeaderboard(key);
    const entry = {
      score: finalScore,
      subject: subject || "Any",
      difficulty,
      when: new Date().toISOString(),
    };
    const next = [...existing, entry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    saveLeaderboard(key, next);
    setHighScore(Math.max(highScore, finalScore));
  };

  // Render subject selection
  if (mode === "select") {
    return (
      <div className="word-scramble-container">
        <div className="scramble-header">
          <h1>🎲 Word Scramble Playground</h1>
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
        </div>

        <div className="subject-grid">
          <h2>Pick a Topic:</h2>
          <div className="subjects">
            {Object.keys(wordBanks).map((subj) => (
              <div key={subj} className="subject-card">
                <h3>{subj.charAt(0).toUpperCase() + subj.slice(1)}</h3>
                <div className="difficulty-buttons">
                  {["easy", "medium", "hard"].map((diff) => (
                    <button
                      key={diff}
                      className={`difficulty-btn ${diff}`}
                      onClick={() => startGame(subj, diff)}
                    >
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Render game
  if (mode === "play") {
    return (
      <div className="word-scramble-container">
        <div className="scramble-header">
          <h1>🎲 Word Scramble</h1>
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
        </div>

        <div className="game-info">
          <div className="info-item">
            <strong>Round</strong> {round}/{MAX_ROUNDS}
          </div>
          <div className="info-item">
            <strong>Score</strong> {score}
          </div>
          <div className="info-item">
            <strong>Topic</strong> {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </div>
          <div className="info-item">
            <strong>Best</strong> {highScore}
          </div>
          {streak >= 2 && (
            <div className="info-item">
              <strong>Streak</strong> 🔥 {streak}
            </div>
          )}
        </div>

        <div className={`scramble-card ${feedback === "✓ Correct!" ? "correct" : feedback === "✗ Try again!" ? "wrong" : ""}`}>
          <p className="scramble-label">Unscramble this word:</p>
          <div className="scrambled-word">{scrambled}</div>

          <div className="button-row">
            <button className="voice-btn" onClick={() => speak(scrambled)}>
              🔊 Read Scramble
            </button>
            {showHint && (
              <button className="voice-btn" onClick={() => speak(getHintText())}>
                🔊 Read Hint
              </button>
            )}
          </div>

          {showHint && <div className="hint-text">💡 {getHintText()}</div>}

          <input
            type="text"
            className="guess-input"
            placeholder="Type your answer..."
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            autoFocus
          />

          <div className="button-group">
            <button className="guess-btn" onClick={handleGuess}>
              Submit
            </button>
            <button
              className={`hint-btn ${hintsUsed >= MAX_HINTS ? "disabled" : ""}`}
              onClick={getHint}
              disabled={hintsUsed >= MAX_HINTS}
            >
              💡 Hint ({MAX_HINTS - hintsUsed})
            </button>
          </div>

          {feedback && <p className={`feedback ${feedback === "✓ Correct!" ? "correct" : "wrong"}`}>{feedback}</p>}
        </div>
      </div>
    );
  }

  // Render results
  if (mode === "results") {
    const maxScore = MAX_ROUNDS * (MAX_HINTS * 10);
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="word-scramble-container">
        <div className="results-card">
          <h2>🎉 Round Complete!</h2>
          <div className="results-stats">
            <div className="stat">
              <span className="stat-label">Final Score</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Accuracy</span>
              <span className="stat-value">{percentage}%</span>
            </div>
            <div className="stat">
              <span className="stat-label">Best (Topic/Difficulty)</span>
              <span className="stat-value">{highScore}</span>
            </div>
          </div>

          <div className="results-buttons">
            <button
              className="play-again-btn"
              onClick={() => {
                setRound(1);
                setScore(0);
                setHintsUsed(0);
                setMode("play");
              }}
            >
              Play Again
            </button>
            <button className="menu-btn" onClick={() => setMode("select")}>
              Choose Topic
            </button>
            <button className="back-btn" onClick={onBack}>
              Back to Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default WordScramble;
