import React, { useState } from 'react';
import { quizData } from './questions';
import './Quiz.css';
function Quiz() {
  //  1. State Declarations
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
const [scoreHistory, setScoreHistory] = useState(() => {
  return JSON.parse(localStorage.getItem("scoreHistory")) || [];
});
const [filterGrade, setFilterGrade] = useState("All");
const [filterSubject, setFilterSubject] = useState("All");
const filteredHistory = scoreHistory.filter(entry => {
  const gradeMatch = filterGrade === "All" || entry.grade === filterGrade;
  const subjectMatch = filterSubject === "All" || entry.subject === filterSubject;
  return gradeMatch && subjectMatch;
  const exportCSV = () => {
  if (scoreHistory.length === 0) return;

  const headers = ['Grade', 'Subject', 'Score', 'Total', 'Date'];
  const rows = scoreHistory.map(entry => [
    entry.grade,
    entry.subject,
    entry.score,
    entry.total,
    entry.date
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'score_history.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
});
  //  2. Load Questions Based on Grade + Category
  const questions = selectedGrade && selectedCategory
    ? quizData[selectedGrade][selectedCategory]
    : [];
    const progress = ((current + 1) / questions.length) * 100;
const [showHistory, setShowHistory] = useState(false);
const clearHistory = () => {
  localStorage.removeItem('scoreHistory');
  setScoreHistory([]); // if you're using state to track it
};
  //  3. Grade Level Selector
  if (!selectedGrade) {
    return (
      <div className="quiz-container">
        <h2>Select Your Grade Level</h2>
        <div className="category-buttons">
          {Object.keys(quizData).map((grade) => (
            <button key={grade} onClick={() => setSelectedGrade(grade)}>
              {grade}
            </button>
          ))}
        </div>
      </div>
    );
  }

  //  4. Subject Selector (after grade is chosen)
  if (!selectedCategory) {
    return (
      <div className="quiz-container">
        <h2>Select a Subject</h2>
        <div className="category-buttons">
          {Object.keys(quizData[selectedGrade]).map((subject) => (
            <button key={subject} onClick={() => setSelectedCategory(subject)}>
              {subject}
            </button>
          ))}
        </div>
      </div>
    );
  }

  //  5. Quiz Logic
  const handleAnswer = (option) => {
  if (option === questions[current].answer) {
    setScore(score + 1);
  }

  const next = current + 1;
  if (next < questions.length) {
    setCurrent(next);
  } else {
    setShowResult(true);
    localStorage.setItem('lastScore', JSON.stringify({
      grade: selectedGrade,
      subject: selectedCategory,
      score: option === questions[current].answer ? score + 1 : score,
      total: questions.length,
      date: new Date().toLocaleString()
    }));
  }
}; //  closes handleAnswer closes handleAnswer

//  6. Quiz Rendering
return (
  <div className="quiz-container">
    {showResult ? (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={() => {
          setSelectedGrade(null);
          setSelectedCategory(null);
          setScore(0);
          setCurrent(0); //  fixed typo
          setShowResult(false);
        }}>
          Try Again
        </button>
        <button onClick={exportCSV} disabled={scoreHistory.length === 0}>
  Export History to CSV
</button>

      </div>
    ) : (
      <div>
        );
        <h2>{selectedCategory} Quiz</h2>
        <p>Question {current + 1} of {questions.length}</p>
        <p>{questions[current].question}</p>
        <ul>
          {questions[current].options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleAnswer(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    )}
  </div>
);
} //  

export default Quiz;