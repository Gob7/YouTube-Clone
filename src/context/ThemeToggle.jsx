import "./ThemeToggle.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <>
          🌞 <span className="tooltip">Light Mode</span>
        </>
      ) : (
        <>
          🌙 <span className="tooltip">Dark Mode</span>
        </>
      )}
    </button>
  );
}
