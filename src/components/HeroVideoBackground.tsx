import React, { useState, useRef, useEffect, useCallback } from "react";

const videoSources = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
];

const HeroVideoBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % videoSources.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  // When active video ends, crossfade to the preloaded next video
  const handleEnded = useCallback(() => {
    setIsTransitioning(true);

    // After the CSS transition completes, swap roles
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % videoSources.length);
      setIsTransitioning(false);
    }, 800);
  }, [nextIndex]);

  // Play active video whenever currentIndex changes
  useEffect(() => {
    const video = activeVideoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, [currentIndex]);

  // Preload next video silently
  useEffect(() => {
    const video = nextVideoRef.current;
    if (video) {
      video.load();
    }
  }, [nextIndex]);

  // Start the next video playing when transitioning
  useEffect(() => {
    if (isTransitioning && nextVideoRef.current) {
      nextVideoRef.current.play().catch(() => {});
    }
  }, [isTransitioning]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black">
      {/* Active video */}
      <video
        ref={activeVideoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: isTransitioning ? 0 : 1 }}
        src={videoSources[currentIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
      {/* Next video (preloaded, shown during transition) */}
      <video
        ref={nextVideoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: isTransitioning ? 1 : 0 }}
        src={videoSources[nextIndex]}
        muted
        playsInline
        preload="auto"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default HeroVideoBackground;
