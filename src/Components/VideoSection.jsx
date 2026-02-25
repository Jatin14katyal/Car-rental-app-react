import React, { useEffect, useState } from "react";
import videoImg from "../assets/video-img.jpg";
import { Play, X } from "lucide-react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setShowVideo(true);     // mount
    setIsOpen(false);       // start closed
    setTimeout(() => setIsOpen(true), 10); // animate open
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setShowVideo(false), 250); // unmount after animation
  };

  // Optional: close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && showVideo) closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showVideo]);

  return (
    <section className="px-4 sm:py-20 py-16 flex justify-center items-center bg-white">
      <div className="relative w-full max-w-7xl head-reveal">
        {/* Image Container */}
        <img
          src={videoImg}
          alt="Car Preview"
          className="w-full sm:h-[450px] h-[300px] rounded-xl object-cover shadow-lg"
        />

        {/* Play Button */}
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          onClick={openModal}
          aria-label="Play video"
        >
          <span className="relative flex justify-center items-center w-20 h-20 rounded-full bg-white/70 shadow-xl">
            <span className="absolute w-28 h-28 bg-white/40 rounded-full -z-10 animate-ping" />
            <span className="absolute w-32 h-32 bg-white/30 rounded-full -z-10 animate-ping" />
            <Play className="text-red-500 w-8 h-8" />
          </span>
        </button>

        {/* Video modal */}
        {showVideo && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/30
            transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={closeModal}
          >
            <div
              className={`relative w-full max-w-3xl bg-black rounded-xl overflow-hidden shadow-2xl
              transform transition-all duration-300
              ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-white hover:text-red-500 z-10"
                onClick={closeModal}
                aria-label="Close video"
              >
                <X className="cursor-pointer" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  // key forces a full reload when modal mounts, so video stops on close
                  key={showVideo ? "video-open" : "video-closed"}
                  src="https://www.youtube.com/embed/H1Ol38BuFCk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;