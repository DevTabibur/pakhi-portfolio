"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="relative p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/40 cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45 text-amber-400" />
      )}
    </button>
  );
}
