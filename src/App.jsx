import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
        {/* NEW LANDING PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* CONTINENT EXPLORATION */}
        <Route path="/map" element={<WorldMap />} />
        <Route path="/quiz/:continent" element={<QuizPage />} />

        {/* SUBJECT LEARNING */}
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/lesson/:subject" element={<LessonPage />} />

        {/* SPECIAL MODES */}
        <Route path="/alphabet" element={<AlphabetPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />

        {/* 404 HANDLER */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h2>404 - Page Not Found</h2>
              <p>Return to the dashboard to continue learning.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
