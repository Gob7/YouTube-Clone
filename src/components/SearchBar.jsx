import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function SearchBar() {
  const { dark } = useTheme();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  }

  return (
    <form onSubmit={handleSearch} className={dark ? "dark-mode" : ""}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search" type="submit">
        Search
      </button>
    </form>
  );
}
