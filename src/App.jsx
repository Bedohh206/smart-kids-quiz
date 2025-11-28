import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WorldMap from "./components/WorldMap";
import QuizPage from "./components/QuizPage";
import LessonPage from "./pages/LessonPage";
import SubjectsPage from "./pages/SubjectsPage";
import AlphabetPage from "./pages/AlphabetPage";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME SCREEN */}
        <Route path="/" element={<Home />} />

        {/* WORLD CONTINENT QUIZZES */}
        <Route path="/quiz/:continent" element={<QuizPage />} />

        {/* SUBJECT QUIZZES */}
        <Route path="/subjects" element={<SubjectsPage />} />

        {/* SUBJECT → AI LESSON ENGINE */}
        <Route path="/lesson/:subject" element={<LessonPage />} />

        {/* ALPHABET MODE */}
        <Route path="/alphabet" element={<AlphabetPage />} />

        {/* WORLD MAP BUTTON */}
        <Route path="/world" element={<WorldMap />} />

        {/* LEADERBOARD */}
        <Route path="/leaderboard" element={<LeaderboardPage />} />

        {/* 404 FALLBACK */}
        <Route path="*" element={<h2 style={{textAlign:'center',marginTop:'3rem'}}>
          🚫 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;