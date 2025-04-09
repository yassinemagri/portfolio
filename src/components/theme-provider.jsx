"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create a context for theme management
const ThemeContext = createContext(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}) {
  // Get initial theme from localStorage or default to system
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme")
    return storedTheme || defaultTheme
  })

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement

    // Remove existing theme classes
    root.classList.remove("light", "dark")

    // Apply new theme
    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      // Also update data-theme attribute for components that use it
      root.setAttribute("data-theme", systemTheme)
    } else {
      root.classList.add(theme)
      // Also update data-theme attribute for components that use it
      root.setAttribute("data-theme", theme)
    }
  }, [theme, enableSystem])

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(systemTheme)
        document.documentElement.setAttribute("data-theme", systemTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, enableSystem])

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  // Disable transitions during theme change if requested
  useEffect(() => {
    if (!disableTransitionOnChange) return

    // Add a class to disable transitions
    const handleTransitionDisable = () => {
      document.documentElement.classList.add("disable-transitions")
      window.setTimeout(() => {
        document.documentElement.classList.remove("disable-transitions")
      }, 0)
    }

    // Call once on mount and then on theme changes
    handleTransitionDisable()
    window.addEventListener("themeChange", handleTransitionDisable)
    return () => window.removeEventListener("themeChange", handleTransitionDisable)
  }, [disableTransitionOnChange])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
      // Dispatch event for other components that might need to know about theme changes
      window.dispatchEvent(new Event("themeChange"))
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
