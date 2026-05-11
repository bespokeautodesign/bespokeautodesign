import React, { useState, useRef, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type HeroClip = { src: string; position?: string };

// Desktop landscape clips (1920x1080)
const desktopSources: HeroClip[] = [
  { src: "/videos/hero/bentley-desktop.mp4", position: "center center" },
  { src: "/videos/hero/porsche-purple-desktop.mp4", position: "center center" },
  { src: "/videos/hero/porsche-olive-wide-desktop.mp4", position: "center center" },
  { src: "/videos/hero/porsche-olive-tight-desktop.mp4", position: "center center" },
];

// Mobile portrait clips (1080x1920)
const mobileSources: HeroClip[] = [
  { src: "/videos/hero/bentley-mobile.mp4", position: "center center" },
  { src: "/videos/hero/porsche-purple-mobile.mp4", position: "center center" },
  { src: "/videos/hero/porsche-olive-wide-mobile.mp4", position: "center center" },
  { src: "/videos/hero/porsche-olive-4907-mobile.mp4", position: "center center" },
];

const HeroVideoBackground = () => {
  const isMobile = useIsMobile();
  const videoSources = isMobile ? mobileSources : desktopSources;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(
    new Array(videoSources.length).fill(null)
  );
  const [loaded, setLoaded] = useState<boolean[]>(() =>
    videoSources.map((_, i) => i === 0)
  );

  // Reset refs/state when the source list switches between mobile and desktop
  useEffect(() => {
    videoRefs.current = new Array(videoSources.length).fill(null);
    setLoaded(videoSources.map((_, i) => i === 0));
    setActiveIndex(0);
  }, [isMobile]);

  // Assign initial src for clip 0 and start playback
  useEffect(() => {
    const v0 = videoRefs.current[0];
    if (v0 && !v0.src) {
      v0.src = videoSources[0].src;
      v0.load();
      v0.play().catch(() => {});
    }
  }, []);

  // Lazy-load clips 1..N once the hero scrolls into view
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoaded((prev) => prev.map(() => true));
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // When a clip becomes "loaded", assign its src
  useEffect(() => {
    loaded.forEach((isLoaded, i) => {
      if (!isLoaded) return;
      const v = videoRefs.current[i];
      if (v && !v.src) {
        v.src = videoSources[i].src;
        v.load();
      }
    });
  }, [loaded]);

  // Safety net: if active video stalls, restart it
  useEffect(() => {
    const interval = setInterval(() => {
      const active = videoRefs.current[activeIndex];
      if (active && active.paused && active.readyState >= 2) {
        active.play().catch(() => {});
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleEnded = useCallback((i: number) => {
    const next = (i + 1) % videoSources.length;
    const nextVideo = videoRefs.current[next];
    if (nextVideo) {
      try { nextVideo.currentTime = 0; } catch {}
      nextVideo.play().catch(() => {});
    }
    setActiveIndex(next);
  }, [videoSources.length]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black">
      {videoSources.map((video, i) => (
        <video
          key={video.src}
          ref={(el) => (videoRefs.current[i] = el)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{
            objectPosition: video.position,
            opacity: activeIndex === i ? 1 : 0,
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
          muted
          playsInline
          preload="metadata"
          onEnded={() => handleEnded(i)}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" style={{ transform: "translateZ(0)" }} />
    </div>
  );
};

export default HeroVideoBackground;
