import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

export default function Timeline() {
  const { t } = useTranslation()
  
  // Timeline data - you can replace this with your actual timeline data
  const timelineItems = [
    {
      id: 1,
      year: "2023 - Present",
      title: t("timeline.job1.title"),
      company: t("timeline.job1.company"),
      description: t("timeline.job1.description"),
      icon: "briefcase",
    },
    {
      id: 2,
      year: "2021 - 2023",
      title: t("timeline.job2.title"),
      company: t("timeline.job2.company"),
      description: t("timeline.job2.description"),
      icon: "code",
    },
    {
      id: 3,
      year: "2019 - 2021",
      title: t("timeline.education1.title"),
      company: t("timeline.education1.institution"),
      description: t("timeline.education1.description"),
      icon: "graduation-cap",
    },
    {
      id: 4,
      year: "2018",
      title: t("timeline.project1.title"),
      company: t("timeline.project1.type"),
      description: t("timeline.project1.description"),
      icon: "layout",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "briefcase":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case "code":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      case "graduation-cap":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        )
      case "layout":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        )
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
    }
  }
  const currentYear = new Date().getFullYear();

  const ageCalculator = timelineItems.map((item) => {
    const yearParts = item.year.split(" - ");
    const startYear = parseInt(yearParts[0]);
    const endYear = yearParts[1] === "Present" || !yearParts[1] ? currentYear : parseInt(yearParts[1]);
    const duration = endYear - startYear;
    return {
      ...item,
      duration: `${duration} years`
    };
  });
const age = ageCalculator.map(age=> age.duration)

  return (
    <section className="py-16 bg-rose-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-hi-melody tracking-tight text-rose-800 dark:text-rose-300 transition-colors duration-300">
            {t("timeline.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-rose-600 dark:text-rose-400 transition-colors duration-300">
            {t("timeline.subtitle")}
          </p>
        </div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-300 dark:bg-rose-800 transition-colors duration-300" />

          {timelineItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`relative mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col md:flex-row items-center`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-rose-500 dark:bg-rose-600 flex items-center justify-center text-white shadow-lg transition-colors duration-300">
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"} mb-10 md:mb-0`}>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-sm font-semibold text-rose-500 dark:text-rose-400 transition-colors duration-300">
                    {item.year}
                    
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="text-rose-700 dark:text-rose-300 font-medium transition-colors duration-300">
                    {item.company}
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="w-full md:w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
