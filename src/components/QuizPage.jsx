// 7) Main quiz screen
const q = questions[current];

// Clean question text to prevent leading "?"
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
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
      <p className="progress-text">
        Question {current + 1} of {questions.length}
      </p>

      <div className="question-card">
        <h3 className="question-text">
          {cleanQuestion(q.q)}
        </h3>

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
