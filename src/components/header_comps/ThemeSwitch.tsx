import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "dark" | "light";

export default function ThemeSwitch() {
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme: Theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  return (
    <button className="theme-button" onClick={toggleDarkMode} aria-label="Alternar Modo Escuro">
      <div className="theme-icon">
        {theme === "dark" ? <FaSun className="icon sun" /> : <FaMoon className="icon moon" />}
      </div>
    </button>
  );  
}
