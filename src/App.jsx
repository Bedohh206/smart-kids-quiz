import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import WorldMap from "./components/WorldMap";
import QuizPage from "./components/QuizPage";
import LessonPage from "./pages/LessonPage";
import SubjectsPage from "./pages/SubjectsPage";
import AlphabetPage from "./pages/AlphabetPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* CONTINENT EXPLORATION */}
        <Route path="/world" element={<WorldMap />} />
        <Route path="/quiz/:continent" element={<QuizPage />} />

        {/* SUBJECT SELECTION + AI LESSONS */}
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/lesson/:subject" element={<LessonPage />} />

        {/* ALPHABET LAB */}
        <Route path="/alphabet" element={<AlphabetPage />} />

        {/* CATCH-ALL 404 */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h2>404 - Page Not Found</h2>
              <p>Return to the main menu</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
