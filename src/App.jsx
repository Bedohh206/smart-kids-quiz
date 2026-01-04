import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldMap from "./components/WorldMap";
import QuizPage from "./components/QuizPage";
import InstallPrompt from "./components/InstallPrompt";

function App() {
  return (
    <BrowserRouter>
      <InstallPrompt />
      <Routes>
        <Route path="/" element={<WorldMap />} />
        <Route path="/quiz/:continent" element={<QuizPage />} />
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
