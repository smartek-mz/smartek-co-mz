"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "dark" | "light";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as Theme;
      if (storedTheme === "dark" || storedTheme === "light") {
        setTheme(storedTheme);
        applyTheme(storedTheme);
      } else {
        setTheme("light");
        applyTheme("light");
      }
    }
  }, []);

  function toggleDarkMode() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  function applyTheme(theme: Theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 text-lg transition-colors duration-200 rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Alternar Modo Escuro"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-900" />
      )}
    </button>
  );
}