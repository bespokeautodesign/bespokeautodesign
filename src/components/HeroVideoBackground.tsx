import React, { useState, useRef, useEffect, useCallback } from "react";

const videoSources = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
];

const HeroVideoBackground = () => {
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slots, setSlots] = useState([0, 1]); // [currentSourceIndex, nextSourceIndex]
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  // On mount: play slot 0, preload slot 1
  useEffect(() => {
    const v0 = videoRefs[0].current;
    const v1 = videoRefs[1].current;
    if (v0) {
      v0.src = videoSources[0];
      v0.load();
      v0.play().catch(() => {});
    }
    if (v1) {
      v1.src = videoSources[1];
      v1.load();
    }
  }, []);

  const handleEnded = useCallback(() => {
    const nextSlot = activeSlot === 0 ? 1 : 0;
    const nextVideo = videoRefs[nextSlot].current;

    // Play the preloaded next video
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    setActiveSlot(nextSlot as 0 | 1);

    // Preload the NEXT-next video into the slot that just finished
    const finishedSlot = activeSlot;
    const currentSourceIndex = slots[nextSlot];
    const nextSourceIndex = (currentSourceIndex + 1) % videoSources.length;

    setTimeout(() => {
      const preloadVideo = videoRefs[finishedSlot].current;
      if (preloadVideo) {
        preloadVideo.src = videoSources[nextSourceIndex];
        preloadVideo.load();
      }
      setSlots((prev) => {
        const updated = [...prev];
        updated[finishedSlot] = nextSourceIndex;
        return updated;
      });
    }, 1000);
  }, [activeSlot, slots]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black">
      {[0, 1].map((slot) => (
        <video
          key={slot}
          ref={videoRefs[slot]}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: activeSlot === slot ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
          muted
          playsInline
          preload="auto"
          onEnded={activeSlot === slot ? handleEnded : undefined}
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ transform: "translateZ(0)" }} />
    </div>
  );
};

export default HeroVideoBackground;
