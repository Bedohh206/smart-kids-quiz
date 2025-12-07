import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GradePage from "./components/GradePage";
import SubjectPage from "./components/SubjectPage";
import TopicPage from "./components/TopicPage";
import LessonPage from "./components/LessonPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GradePage />} />
        <Route path="/grades" element={<GradePage />} />
        <Route path="/subjects/:grade" element={<SubjectPage />} />
        <Route path="/topics/:grade/:subject" element={<TopicPage />} />
        <Route path="/lesson/:grade/:subject/:topic" element={<LessonPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
