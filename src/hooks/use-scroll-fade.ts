import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to the hero section and an opacity value (1 → 0)
 * that decreases as the user scrolls past the element.
 */
export function useScrollFade() {
  const ref = useRef<HTMLElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      // How far the section has scrolled: 0 (top visible) → sectionHeight (fully scrolled past)
      const scrolled = -rect.top;
      // Start fading after 20% scrolled, fully transparent at 90%
      const fadeStart = sectionHeight * 0.2;
      const fadeEnd = sectionHeight * 0.9;
      const progress = Math.max(0, Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart)));
      setOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, opacity };
}
