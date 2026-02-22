import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorldMap from "./components/WorldMap";
import QuizPage from "./components/QuizPage";
import InstallPrompt from "./components/InstallPrompt";
import AdsenseGate from "./components/AdsenseGate";
import LearnPage from "./components/LearnPage";
import LearnHubPage from "./components/LearnHubPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PrivacyPage from "./components/PrivacyPage";
import AdFreeRoutePage from "./components/AdFreeRoutePage";

function App() {
  return (
    <BrowserRouter>
      <AdsenseGate />
      <InstallPrompt />
      <Routes>
        <Route path="/" element={<WorldMap />} />
        <Route path="/quiz/:continent" element={<QuizPage />} />
        <Route path="/learn" element={<LearnHubPage />} />
        <Route path="/learn/:slug" element={<LearnPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route
          path="/play/*"
          element={
            <AdFreeRoutePage
              title="Play"
              message="This game path is ad-free and redirects to the main learning experience."
            />
          }
        />
        <Route
          path="/rewards/*"
          element={
            <AdFreeRoutePage
              title="Rewards"
              message="This rewards path is ad-free and redirects to the main learning experience."
            />
          }
        />
        <Route
          path="/loading"
          element={
            <AdFreeRoutePage
              title="Loading"
              message="Loading pages are ad-free by policy."
            />
          }
        />
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
