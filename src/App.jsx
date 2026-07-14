import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";
import ResearchPage from "./pages/ResearchPage/ResearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage/NewsDetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;