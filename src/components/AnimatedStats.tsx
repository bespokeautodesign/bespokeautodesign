import { useEffect, useRef, useState } from "react";
import { Shield, Car, Award, Clock } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Car, value: 500, suffix: "+", label: "Vehicles Protected" },
  { icon: Clock, value: 7, suffix: "+", label: "Years of Excellence" },
  { icon: Shield, value: 10, suffix: "-Yr", label: "PPF Warranty" },
  { icon: Award, value: 0, suffix: "Lifetime", label: "Tint Warranty" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (target === 0) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

const StatCounter = ({ stat, inView }: { stat: StatItem; inView: boolean }) => {
  const count = useCountUp(stat.value, 2000, inView);
  const Icon = stat.icon;
  const isLifetime = stat.suffix === "Lifetime";

  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold tracking-tight">
        {isLifetime ? (inView ? "Lifetime" : "—") : `${count}${stat.suffix}`}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
};

export const AnimatedStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};
