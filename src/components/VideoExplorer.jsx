import React, { useState, useRef, useEffect } from "react";
import "./VideoExplorer.css";

export default function VideoExplorer({ continent, videos, onClose }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const videoRef = useRef(null);

  // Quiz questions for videos (sample data)
  const videoQuizzes = {
    0: {
      question: "What did you learn from this video?",
      options: ["Geography facts", "History", "Science", "Math"],
      correct: 0
    },
    1: {
      question: "What was the main topic?",
      options: ["Animals", "Culture", "Climate", "Sports"],
      correct: 1
    }
  };

  const currentQuiz = videoQuizzes[currentVideoIndex] || {
    question: "Did you enjoy this video?",
    options: ["Yes, very much!", "It was interesting", "I learned a lot", "All of the above"],
    correct: 3
  };

  useEffect(() => {
    setShowQuiz(false);
    setQuizAnswered(false);
    setSelectedAnswer(null);
  }, [currentVideoIndex]);

  const handleQuizAnswer = (answerIndex) => {
    if (quizAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setQuizAnswered(true);
    
    if (answerIndex === currentQuiz.correct) {
      setScore(prev => prev + 10);
    }
  };

  const handleVideoEnd = () => {
    setShowQuiz(true);
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="video-explorer-overlay" onClick={onClose}>
        <div className="video-explorer-modal" onClick={(e) => e.stopPropagation()}>
          <button className="video-close-btn" onClick={onClose}>✕</button>
          <h2>🎥 No videos available yet</h2>
          <p>Videos for this continent are coming soon!</p>
        </div>
      </div>
    );
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="video-explorer-overlay" onClick={onClose}>
      <div className="video-explorer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-close-btn" onClick={onClose}>✕</button>
        
        <div className="video-header">
          <h2>🌍 Explore {continent}</h2>
          <p className="video-subtitle">Educational Videos for Kids</p>
          <div className="video-score">Score: {score} 🌟</div>
        </div>

        <div className="video-player-container">
          <iframe
            ref={videoRef}
            className="video-player"
            src={currentVideo.embedUrl}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Interactive Quiz Overlay */}
          {showQuiz && (
            <div className="quiz-overlay">
              <div className="quiz-box">
                <h3>📝 Quick Quiz!</h3>
                <p className="quiz-question">{currentQuiz.question}</p>
                <div className="quiz-options">
                  {currentQuiz.options.map((option, index) => (
                    <button
                      key={index}
                      className={`quiz-option ${
                        quizAnswered && index === currentQuiz.correct
                          ? 'correct'
                          : quizAnswered && index === selectedAnswer
                          ? 'incorrect'
                          : ''
                      }`}
                      onClick={() => handleQuizAnswer(index)}
                      disabled={quizAnswered}
                    >
                      {option}
                      {quizAnswered && index === currentQuiz.correct && ' ✓'}
                      {quizAnswered && index === selectedAnswer && index !== currentQuiz.correct && ' ✗'}
                    </button>
                  ))}
                </div>
                {quizAnswered && (
                  <button
                    className="quiz-continue"
                    onClick={() => setShowQuiz(false)}
                  >
                    Continue Watching
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="video-controls">
          <button
            className="video-control-btn"
            onClick={() => setShowQuiz(!showQuiz)}
          >
            {showQuiz ? '▶ Resume Video' : '❓ Take Quiz'}
          </button>
        </div>

        <div className="video-info">
          <h3>{currentVideo.title}</h3>
          <p>{currentVideo.description}</p>
        </div>

        <div className="video-navigation">
          <button
            className="video-nav-btn"
            onClick={() => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
            disabled={videos.length <= 1}
          >
            ← Previous
          </button>
          
          <div className="video-indicators">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`video-indicator ${index === currentVideoIndex ? "active" : ""}`}
                onClick={() => setCurrentVideoIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="video-nav-btn"
            onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
            disabled={videos.length <= 1}
          >
            Next →
          </button>
        </div>

        <div className="video-list">
          <h4>More Videos:</h4>
          <div className="video-thumbnails">
            {videos.map((video, index) => (
              <button
                key={index}
                className={`video-thumbnail ${index === currentVideoIndex ? "active" : ""}`}
                onClick={() => setCurrentVideoIndex(index)}
              >
                <span className="thumbnail-number">{index + 1}</span>
                <span className="thumbnail-title">{video.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
