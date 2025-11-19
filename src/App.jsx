import Leaderboard from "./pages/Leaderboard";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldMap from "./components/WorldMap";
import QuizPage from "./components/QuizPage";
import LessonPage from "./pages/LessonPage";
import LeaderboardPage from "./pages/LeaderboardPage";

<Route path="/leaderboard" element={<LeaderboardPage />} />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorldMap />} />
        <Route path="/quiz/:continent" element={<QuizPage />} />
       <Route path="/lesson/:subject" element={<LessonPage />} />
<Route path="/leaderboard" element={<Leaderboard />} />

        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h2>404 - Page Not Found</h2>
              <p>Try returning to the main map.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
