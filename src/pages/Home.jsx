import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Timeline from "@/components/TimeLine";
import InfiniteSkillsScroll from "@/components/InfiniteSkillsScroll";
import { Button } from "@/components/ui/button";
import SeasonalEffect from "@/components/SeasonalEffect";
import { Github, Instagram, Phone, Youtube } from "lucide-react";
import imgLight from "/imgs/yassine-magri-rose.jpg";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  const { t } = useTranslation();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-rose-100 dark:bg-gray-950 transition-colors duration-300">
      
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-fixed bg-cover"
            style={{
              backgroundImage: `url(${imgLight})`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>

          {/* <SeasonalEffect /> */}
          <div className="absolute bottom-5 sm:bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs xs:text-sm text-rose-100">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-rose-100 to-transparent" />
            </div>
          </div>
        </div>
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-hi-melody tracking-tight text-white drop-shadow-lg">
            <h1 className="block font-my-best"> Hi, I am <span className="text-white dark:text-gray-300" style={{textShadow : "rgb(255, 161, 173) 1px 1px 2px"}}>{t("home.brand")}</span></h1>
            <h2 className="block text-rose-100">{t("home.title")}</h2>
          </div>
          <p className="mt-3 text-sm xs:text-base sm:text-lg md:mt-5 md:text-xl max-w-2xl mx-auto drop-shadow-lg text-white">
            {t("home.subtitle")}
          </p>
          <div className="m-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base border border-transparent font-medium rounded-full text-rose-900 dark:text-rose-100 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 backdrop-blur-sm"
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
          <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4 justify-center mt-4 flex-wrap">
            <Button
              className="cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              onClick={() =>
                window.open("https://www.github.com/yassinemagri", "_blank")
              }
            >
              <Github />
            </Button>
            <Button
              className="cursor-pointer hover:bg-[#D62976] hover:text-white transition-all duration-300 ease-in-out"
              onClick={() =>
                window.open("https://www.instagram.com/yassinemagri/", "_blank")
              }
            >
              <Instagram />
            </Button>
            <Button
              className="cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/results?search_query=%40yassinemagri&sp=EgIQAg%253D%253D",
                  "_blank",
                  "width=1000,height=900"
                )
              }
            >
              <Youtube />
            </Button>
            <Button
              className="cursor-pointer hover:bg-[#25D366] hover:text-white transition-all duration-300 ease-in-out"
              disabled
              onClick={() =>
                window.open(
                  "https://yassinemagri.vercel.app/",
                  "_blank",
                  "width=1000,height=900"
                )
              }
            >
              <Phone />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <MyProjects />
        {/* <Timeline /> */}
        <InfiniteSkillsScroll />
        <motion.div
          className="mt-16"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl font-hi-melody tracking-tight text-rose-800 dark:text-rose-300 transition-colors duration-300">
            {t("home.myApproach")}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <h3 className="mt-8 text-lg font-medium text-rose-900 dark:text-rose-200 tracking-tight font-hi-melody transition-colors duration-300">
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
