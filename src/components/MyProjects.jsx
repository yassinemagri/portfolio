import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const MyProjects = () => {
  const { t } = useTranslation();
  // const { theme } = useTheme()
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const projects = [
    {
      id: "1",
      name: "Dof101",
      img: "/imgs/dof101.png",
      type: [t("home.projectType.design"), t("home.projectType.frontend")],
      url: "https://dof101.netlify.app/",
      date: "11/23/2024",
    },
    {
      id: "2",
      name: "Noir",
      img: "https://i.ibb.co/bMhcpRDy/Noir.png",
      type: t("home.projectType.design"),
      url: "https://github.com/LIZEWESKI/noir",
      date: "2/17/2025",
    },
  ];
  return (
    <motion.div
      id="projects"
      className="my-16"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <h2
        className={`text-3xl font-hi-melody tracking-tight text-rose-800 dark:text-rose-300 transition-colors duration-300`}
      >
        {t("home.myProjects")}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full  min-h-auto bg-rose-200 dark:bg-gray-900 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none transition-colors duration-300">
              <img
                src={item.img || "/placeholder.svg"}
                alt="Project thumbnail"
                loading="lazy"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Project+Image";
                }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-rose-700 dark:text-rose-300 transition-colors duration-300">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {item.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-rose-500 dark:text-rose-400 transition-colors duration-300">
                  {Array.isArray(item.type) ? (
                    item.type.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs rounded-full ml-1 bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-200"
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-200">
                      {item.type}
                    </span>
                  )}
                </p>
              </div>
              <p className="text-sm font-medium text-rose-900 dark:text-rose-200 transition-colors duration-300">
                {item.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyProjects;
