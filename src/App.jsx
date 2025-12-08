import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GradePage from "./pages/GradePage";
import SubjectPage from "./pages/SubjectPage";
import TopicPage from "./pages/TopicPage";
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
        <Route path="/shop" element={<AvatarShop />} />
      </Routes>
    </Router>
  );
}

export default App;
