import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";
import SearchResults from "./pages/SearchResult";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function AppContent() {
  const { dark } = useTheme();
  const location = useLocation();
  const isVideoPage = location.pathname.includes("/video/");

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>
      <Header />
      <main>
        {!isVideoPage && <Sidebar />}
        <div className={`container ${isVideoPage ? "full-width" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
