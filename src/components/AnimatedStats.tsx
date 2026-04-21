import { useEffect, useRef, useState } from "react";
import { Shield, Car, Award, Clock, CheckCircle, Thermometer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const differentiators = [
  { icon: Shield, title: "XPEL Authorized Dealer", description: "We carry the full XPEL product line — Ultimate Plus™ PPF, Fusion Plus™ Ceramic Coating, and Prime XR Plus™ Ceramic Tint — backed by the world's most trusted automotive protection brand." },
  { icon: Award, title: "XPEL Certified Installers", description: "Every installation is performed by factory-trained, XPEL-certified technicians who meet the highest standards for precision, technique, and quality control." },
  { icon: Car, title: "Exotic & Luxury Specialists", description: "From Ferraris and Lamborghinis to Rolls-Royces and Bentleys — we specialize in high-value vehicles that demand the highest level of care and craftsmanship." },
  { icon: Clock, title: "7+ Years of Excellence", description: "With over seven years of hands-on experience and 500+ vehicles protected, we've built a reputation that Miami's most discerning car owners trust." },
  { icon: Thermometer, title: "Climate-Controlled Facility", description: "Our purpose-built installation bay maintains optimal temperature and humidity levels — critical for flawless film adhesion and curing in Miami's tropical climate." },
  { icon: CheckCircle, title: "Industry-Leading Warranties", description: "10-year warranty on PPF, 5-year warranty on ceramic coatings, and lifetime warranty on ceramic tints. Your investment is protected for the long haul." },
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
        <div className="w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-silver" />
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold tracking-tight text-silver font-playfair">
        {isLifetime ? (inView ? "Lifetime" : "—") : `${count}${stat.suffix}`}
      </div>
      <div className="text-xs text-white/70 uppercase tracking-wider">{stat.label}</div>
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
    <section ref={ref} className="relative py-20 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 bg-silver-muted/20 text-silver border border-silver-muted/40">
            Why Choose Bespoke
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair text-silver">
            The Bespoke Difference
          </h2>
          <p className="text-lg text-white/70">
            When you trust us with your vehicle, you're choosing Miami's premier XPEL-certified installation facility — where precision, expertise, and uncompromising quality come standard.
          </p>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pb-12 mb-12 border-b border-silver-muted/30">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>

        {/* Differentiator cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-silver-muted/30 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-silver/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-silver/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-silver/20 transition-colors">
                <item.icon className="h-6 w-6 text-silver" />
              </div>
              <h3 className="text-lg font-semibold text-silver mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
