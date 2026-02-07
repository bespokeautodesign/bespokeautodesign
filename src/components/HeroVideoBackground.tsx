import React, { useState, useRef, useEffect, useCallback } from "react";

const videoSources = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
];

const HeroVideoBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoSources.length);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoSources[currentIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default HeroVideoBackground;
