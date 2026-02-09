import React, { useState, useRef, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const videoSources = [
  { src: "/videos/hero-1.mp4?v=3", position: "center 55%" },
  { src: "/videos/hero-2.mp4?v=2", position: "center 40%" },
  { src: "/videos/hero-3.mp4?v=1", position: "center 50%" },
  { src: "/videos/hero-4.mp4?v=1", position: "center 55%" },
  { src: "/videos/hero-5.mp4?v=1", position: "center 55%" },
  { src: "/videos/hero-6.mp4?v=1", position: "center 55%" },
  { src: "/videos/hero-7.mp4?v=1", position: "center 55%" },
  { src: "/videos/hero-8.mp4?v=1", position: "center 55%" },
  { src: "/videos/hero-9.mp4?v=1", position: "center 55%" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createShuffledOrder(): number[] {
  return shuffleArray(Array.from({ length: videoSources.length }, (_, i) => i));
}

const HeroVideoBackground = () => {
  const isMobile = useIsMobile();
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const activeSlotRef = useRef<0 | 1>(0);
  const orderRef = useRef<number[]>(createShuffledOrder());
  const posRef = useRef(0);
  const slotsRef = useRef([orderRef.current[0], orderRef.current[1]]);
  const [slots, setSlots] = useState(slotsRef.current);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  const getNextIndex = useCallback(() => {
    posRef.current++;
    if (posRef.current >= orderRef.current.length) {
      orderRef.current = createShuffledOrder();
      posRef.current = 0;
    }
    return orderRef.current[posRef.current];
  }, []);

  useEffect(() => {
    const v0 = videoRefs[0].current;
    const v1 = videoRefs[1].current;
    if (v0) {
      v0.src = videoSources[slotsRef.current[0]].src;
      v0.load();
      v0.play().catch(() => {});
    }
    if (v1) {
      v1.src = videoSources[slotsRef.current[1]].src;
      v1.load();
    }
    posRef.current = 1;

    // Safety net: if videos stall, restart the active one
    const interval = setInterval(() => {
      const active = videoRefs[activeSlotRef.current].current;
      if (active && active.paused && active.readyState >= 2) {
        active.play().catch(() => {});
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEnded = useCallback(() => {
    const nextSlot = activeSlot === 0 ? 1 : 0;
    const nextVideo = videoRefs[nextSlot].current;

    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
    }

    activeSlotRef.current = nextSlot as 0 | 1;
    setActiveSlot(nextSlot as 0 | 1);

    const finishedSlot = activeSlot;
    const nextSourceIndex = getNextIndex();

    setTimeout(() => {
      const preloadVideo = videoRefs[finishedSlot].current;
      if (preloadVideo) {
        preloadVideo.src = videoSources[nextSourceIndex].src;
        preloadVideo.load();
      }
      slotsRef.current[finishedSlot] = nextSourceIndex;
      setSlots([...slotsRef.current]);
    }, 1000);
  }, [activeSlot, getNextIndex]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black">
      {[0, 1].map((slot) => (
        <video
          key={slot}
          ref={videoRefs[slot]}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: isMobile ? "center 95%" : (videoSources[slots[slot]]?.position || "center 65%"),
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
