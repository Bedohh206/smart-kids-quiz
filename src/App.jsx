import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorldMap from "./components/WorldMap";
import QuizPage from "./components/QuizPage";
import LessonPage from "./pages/LessonPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import HomePage from "./pages/HomePage";
import AlphabetPage from "./pages/AlphabetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<WorldMap />} />
        <Route path="/quiz/:continent" element={<QuizPage />} />
        <Route path="/lesson/:subject" element={<LessonPage />} />
        <Route path="/alphabet" element={<AlphabetPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h2>404 - Page Not Found</h2>
              <p>Try returning to the Home Page.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
