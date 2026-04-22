import React, { useState, useRef, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Hero clips re-encoded at 720p / CRF 28 / no audio (each <250KB).
// Total payload ~660KB for all 4 clips combined.
const videoSources = [
  { src: "/videos/hero-1.mp4?v=4", poster: "/videos/hero-1.webp", position: "center 55%" }, // Rolls-Royce
  { src: "/videos/hero-2.mp4?v=4", poster: "/videos/hero-2.webp", position: "center 40%" }, // Porsche 911
  { src: "/videos/hero-5.mp4?v=4", poster: "/videos/hero-5.webp", position: "center 55%" }, // Ferrari (red sports car)
  { src: "/videos/hero-6.mp4?v=4", poster: "/videos/hero-6.webp", position: "center 55%" }, // Green BMW M
];

const HeroVideoBackground = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // One <video> element per clip, mounted once. We swap visibility via opacity
  // — never unmount — so the browser caches the file instead of re-downloading it.
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(
    new Array(videoSources.length).fill(null)
  );
  // Tracks which clip indexes have had their src assigned (lazy-load gate).
  // Clip 0 starts true so the hero is never empty.
  const [loaded, setLoaded] = useState<boolean[]>(() =>
    videoSources.map((_, i) => i === 0)
  );

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
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen z-0 overflow-hidden bg-black">
      {videoSources.map((video, i) => (
        <video
          key={video.src}
          ref={(el) => (videoRefs.current[i] = el)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: isMobile ? "center 95%" : video.position,
            opacity: activeIndex === i ? 1 : 0,
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
          muted
          playsInline
          preload="metadata"
          poster={video.poster}
          onEnded={() => handleEnded(i)}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" style={{ transform: "translateZ(0)" }} />
    </div>
  );
};

export default HeroVideoBackground;
