import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <NavLink to="/" className="site-header-brand">
        <span className="site-header-logo">🍽</span>
        <span className="site-header-title">Foodie's Recipe</span>
      </NavLink>
      <div className="site-header-actions">
        <NavLink to="/" className="site-header-link">
          Home
        </NavLink>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
