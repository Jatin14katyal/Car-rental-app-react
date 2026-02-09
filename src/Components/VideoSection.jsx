import React, { useState } from "react";
import videoImg from "../assets/video-img.jpg";
import { Play, X } from "lucide-react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="px-4 sm:py-20 py-16 flex justifu-center items-center bg-white">
      <div className="relative w-full max-w-10xl">
        {/* Image Container */}
        <img
          src={videoImg}
          alt="BMW Cars"
          className="w-full sm:h-[450px] h-[300px] rounded-xl object-cover shadow-lg"
        />

        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10" onClick={() => setShowVideo(true)}>
          <span className="relative flex justify-center items-center w-20 h-20 rounded-full bg-white bg-opacity-70 shadow-xl">
            <span className="absolute w-28 h-28 bg-white opacity-50 rounded-full -z-10 animate-ping ease-linear"></span>
            <span className="absolute w-32 h-32 bg-white opacity-50 rounded-full -z-10 delay-100 animate-ping ease-linear"></span>
            <Play className="text-red-500 w-8 h-8" />
          </span>
        </button>

        {/* Video modal */}
        {showVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-10  z-50 flex items-center justify-center px-4">
                <div className="relative w-full max-w-3xl">
                    <button className="absolute top-2 right-2 text-white text-2xl hover:text-red-500" onClick={()=> setShowVideo(false)}><X className="cursor-pointer"/></button>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full">
                        <iframe  src="https://www.youtube.com/embed/H1Ol38BuFCk?si=zmxKCUaBoqE5Xf5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        className="rounded-lg w-full h-full"></iframe>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
