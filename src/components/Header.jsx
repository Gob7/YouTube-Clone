import "./Header.css";
import { Link } from "react-router-dom";
import ThemeToggle from "../context/ThemeToggle";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        YouTube Clone
      </Link>
      <SearchBar />
      <ThemeToggle />
      <div className="profile-icon">👤</div>
    </header>
  );
}
