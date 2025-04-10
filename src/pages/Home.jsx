import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-rose-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          {/* Fix the image source with a reliable URL or local image */}
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            alt="Abstract art background"
            className="object-cover w-full h-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/1920x1080?text=Background+Image";
            }}
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>
        </div>
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1
            className={`text-4xl font-hi-melody tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg`}
          >
            <span className="block">{t("home.brand")}</span>
            <span className="block text-rose-100">{t("home.title")}</span>
          </h1>
          <p className="mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl max-w-2xl mx-auto drop-shadow-lg">
            {t("home.subtitle")}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-rose-900 dark:text-rose-100 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 backdrop-blur-sm"
              >
                {t("home.viewProjects")}
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/cv"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
              >
                {t("home.viewCV")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          id="projects"
          className="mt-16"
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
            {[
              {
                id: "1",
                name: "noir",
                img: "https://i.ibb.co/bMhcpRDy/Noir.png",
                type: t("home.projectType.design"),
                url: "https://github.com/LIZEWESKI/noir",
                date: "2/17/2025",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full min-h-80 bg-rose-200 dark:bg-rose-900 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none transition-colors duration-300">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt="Project thumbnail"
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
                      {item.type}
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

        <motion.div
          className="mt-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2
            className={`text-3xl font-hi-melody tracking-tight text-rose-800 dark:text-rose-300 transition-colors duration-300`}
          >
            {t("home.myApproach")}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { key: "userCentered", icon: "M5 13l4 4L19 7" },
              {
                key: "cleanCode",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
              { key: "responsive", icon: "M4 6h16M4 12h16M4 18h16" },
            ].map((feature) => (
              <motion.div
                key={feature.key}
                className="pt-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-md transition-colors duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-rose-500 dark:bg-rose-600 rounded-md shadow-lg transition-colors duration-300">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={feature.icon}
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      className={`mt-8 text-lg font-medium text-rose-900 dark:text-rose-200 tracking-tight font-hi-melody transition-colors duration-300`}
                    >
                      {t(`home.features.${feature.key}`)}
                    </h3>
                    <p className="mt-5 text-base text-rose-600 dark:text-rose-300 transition-colors duration-300">
                      {t("home.features.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
