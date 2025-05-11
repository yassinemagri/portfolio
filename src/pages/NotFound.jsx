import SeasonalEffect from "@/components/SeasonalEffect";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CloudAlert } from "lucide-react";

const NotFound = () => {
  const audioRef = useRef(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio("/songs/NotFound.mp3");

    const playAudio = () => {
      if (!hasInteractedRef.current && audioRef.current) {
        hasInteractedRef.current = true;
        audioRef.current.play().catch((e) => console.error("Play failed:", e));

        document.removeEventListener("click", playAudio);
        document.removeEventListener("keydown", playAudio);
        document.removeEventListener("touchstart", playAudio);
      }
    };

    document.addEventListener("click", playAudio);
    document.addEventListener("keydown", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener("click", playAudio);
      document.removeEventListener("keydown", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-rose-100 dark:bg-gray-950 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>
        <SeasonalEffect />
      </div>

      <div className="relative z-10 p-4 sm:p-8 max-w-2xl">
        <motion.h1
          className="text-[6rem] xs:text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] font-bold text-rose-200 dark:text-rose-400 drop-shadow-lg select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white dark:text-rose-100 mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          [x_x] Oops! The page you're looking for doesn't exist.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            <CloudAlert /> Go Back Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
