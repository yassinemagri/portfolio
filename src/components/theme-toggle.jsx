"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Determine the current effective theme (accounting for system preference)
  const effectiveTheme =
    theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme

  const toggleTheme = () => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      aria-label={effectiveTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {effectiveTheme === "dark" ? (
        <Sun className="h-5 w-5 text-rose-300" />
      ) : (
        <Moon className="h-5 w-5 text-rose-600" />
      )}
    </button>
  )
}
