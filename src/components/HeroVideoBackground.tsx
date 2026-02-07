import React, { useState, useRef, useEffect, useCallback } from "react";

const videoSources = [
  { src: "/videos/hero-1.mp4?v=3", position: "center 65%" },
  { src: "/videos/hero-2.mp4?v=2", position: "center 50%" },
  { src: "/videos/hero-3.mp4?v=1", position: "center 60%" },
  { src: "/videos/hero-4.mp4?v=1", position: "center 65%" },
  { src: "/videos/hero-5.mp4?v=1", position: "center 65%" },
  { src: "/videos/hero-6.mp4?v=1", position: "center 65%" },
  { src: "/videos/hero-7.mp4?v=1", position: "center 65%" },
  { src: "/videos/hero-8.mp4?v=1", position: "center 65%" },
];

const HeroVideoBackground = () => {
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slots, setSlots] = useState([0, 1]);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  useEffect(() => {
    const v0 = videoRefs[0].current;
    const v1 = videoRefs[1].current;
    if (v0) {
      v0.src = videoSources[0].src;
      v0.load();
      v0.play().catch(() => {});
    }
    if (v1) {
      v1.src = videoSources[1].src;
      v1.load();
    }
  }, []);

  const handleEnded = useCallback(() => {
    const nextSlot = activeSlot === 0 ? 1 : 0;
    const nextVideo = videoRefs[nextSlot].current;

    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    setActiveSlot(nextSlot as 0 | 1);

    const finishedSlot = activeSlot;
    const currentSourceIndex = slots[nextSlot];
    const nextSourceIndex = (currentSourceIndex + 1) % videoSources.length;

    setTimeout(() => {
      const preloadVideo = videoRefs[finishedSlot].current;
      if (preloadVideo) {
        preloadVideo.src = videoSources[nextSourceIndex].src;
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
            objectPosition: videoSources[slots[slot]]?.position || "center 65%",
            opacity: activeSlot === slot ? 1 : 0,
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
          muted
          playsInline
          preload="auto"
          onEnded={activeSlot === slot ? handleEnded : undefined}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" style={{ transform: "translateZ(0)" }} />
    </div>
  );
};

export default HeroVideoBackground;
