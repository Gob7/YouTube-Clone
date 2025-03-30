import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    let saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  function toggleTheme() {
    setDark(!dark);
    localStorage.setItem("darkMode", !dark);
  }

  useEffect(() => {
    document.body.className = dark ? "dark-mode" : "light-mode";
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? "dark-mode" : "light-mode"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("use useTheme within ThemeProvider");
  return context;
};
