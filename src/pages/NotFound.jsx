import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const audioRef = useRef(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    // Create audio element but don't play yet
    audioRef.current = new Audio("/songs/NotFound.mp3");

    // Function to play audio once user interacts
    const playAudio = () => {
      if (!hasInteractedRef.current && audioRef.current) {
        hasInteractedRef.current = true;
        audioRef.current.play().catch((e) => console.error("Play failed:", e));

        // Clean up event listeners after first interaction
        document.removeEventListener("click", playAudio);
        document.removeEventListener("keydown", playAudio);
        document.removeEventListener("touchstart", playAudio);
      }
    };

    document.addEventListener("click", playAudio);
    document.addEventListener("keydown", playAudio);
    document.addEventListener("touchstart", playAudio);

    return () => {
      // Clean up
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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[16em] font-bold my-16">404</h1>
      <h1 className="text-4xl mb-8">[x_x] ...Page Not Found</h1>
      <Button className="mb-8" onClick={() => window.open("/")}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
