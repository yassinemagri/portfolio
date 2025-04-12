"use client"

import { Brush, Figma, Github, Hand, MonitorSmartphone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

export default function InfiniteSkillsScroll({ direction = "left", speed = "normal" }) {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Define skills with their icons and categories
  const skills = [
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "JavaScript", icon: "𝙅𝙎", category: "language" },
    { name: "TypeScript", icon: "𝙏𝙎", category: "language" },
    { name: "Tailwind CSS", icon: "🌊", category: "frontend" },
    { name: "UI/UX Design", icon: <Brush />, category: "design" },
    { name: "Figma", icon: <Figma />, category: "design" },
    { name: "Responsive Design", icon: <MonitorSmartphone />, category: "design" },
    { name: "Git", icon: "🔄", category: "tool" },
    { name: "GitHuh", icon: <Github />, category: "tool" },
    { name: "RESTful API", icon: "🔌", category: "backend" },
    { name: "Accessibility", icon: <Hand />, category: "frontend" },
  ]

  // Duplicate skills array to create seamless loop
  const duplicatedSkills = [...skills, ...skills]

  // Set animation speed based on prop
  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return "60s"
      case "fast":
        return "20s"
      default:
        return "40s"
    }
  }

  // Calculate container width on mount and resize
  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 2)
      }
    }

    calculateWidth()
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [])

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "frontend":
        return "bg-rose-500 dark:bg-rose-600"
      case "backend":
        return "bg-purple-500 dark:bg-purple-600"
      case "language":
        return "bg-blue-500 dark:bg-blue-600"
      case "design":
        return "bg-amber-500 dark:bg-amber-600"
      case "tool":
        return "bg-emerald-500 dark:bg-emerald-600"
      default:
        return "bg-gray-500 dark:bg-gray-600"
    }
  }

  return (
    <div className="w-full overflow-hidden bg-rose-50/70 dark:bg-gray-900/70 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-3xl font-hi-melody tracking-tight text-rose-800 dark:text-rose-300 text-center transition-colors duration-300">
          {t("skills.title")}
        </h2>
        <p className="mt-2 text-center text-rose-600 dark:text-rose-400 transition-colors duration-300">
          {t("skills.subtitle")}
        </p>
      </div>

      {/* Single row with fading edges */}
      <div className="relative w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden group">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-rose-50/95 dark:from-gray-900/95 to-transparent"></div>

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-rose-50/95 dark:from-gray-900/95 to-transparent"></div>

        <div
          ref={containerRef}
          className={`flex whitespace-nowrap py-2 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} pause-on-hover`}
          style={{
            "--scroll-distance": direction === "left"
              ? `-${containerWidth}px`
              : `${containerWidth}px`,
            "--scroll-duration": getAnimationDuration(),
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`inline-flex items-center m-2 px-4 py-3 rounded-full text-white shadow-md ${getCategoryColor(skill.category)} transition-transform hover:scale-110 duration-300`}
            >
              <span className="mr-2">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
