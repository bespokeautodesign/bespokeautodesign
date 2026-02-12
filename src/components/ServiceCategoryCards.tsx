import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Anchor, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Automotive",
    icon: Car,
    image: "/lovable-uploads/dc9fb3be-e06e-456a-b5a0-2a2b352dae8a.png",
    description:
      "Unleash your vehicle's full potential with Miami's premier protection services. From cutting-edge XPEL paint protection film to ceramic coatings, window tinting, and color change wraps — we elevate every aspect of your vehicle while safeguarding it from Florida's harsh elements.",
    services: [
      { label: "Paint Protection Film", href: "/paint-protection-film" },
      { label: "Ceramic Coating", href: "/ceramic-coating" },
      { label: "Ceramic Tint", href: "/ceramic-tint" },
      { label: "Color Change Wraps", href: "/color-change-wrap" },
      { label: "Stealth PPF", href: "/stealth-ppf" },
      { label: "XPEL Color PPF", href: "/colorppf" },
    ],
  },
  {
    title: "Marine",
    icon: Anchor,
    image: "/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png",
    description:
      "Set sail with confidence. Our team specializes in applying ceramic coatings, paint protection film, and ceramic tint to boats and yachts with precision. Our marine services ensure your vessel not only looks impeccable but withstands Miami's salt water and sun.",
    services: [
      { label: "Marine PPF", href: "/marine-ppf" },
      { label: "Marine Ceramic Coating", href: "/marine-ceramic-coating" },
      { label: "Marine Ceramic Tint", href: "/marine-ceramic-tint" },
    ],
  },
];

const FlipCard = ({ category }: { category: (typeof categories)[0] }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[420px] md:h-[480px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-3">
              <category.icon className="h-7 w-7 text-primary" />
              <h3 className="text-3xl font-bold text-white font-playfair">
                {category.title}
              </h3>
            </div>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Tap to explore <ArrowRight className="h-3 w-3" />
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-card border border-border p-8 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <category.icon className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground font-playfair">
              {category.title}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {category.description}
          </p>
          <div className="space-y-2 flex-1">
            {category.services.map((svc) => (
              <Link
                key={svc.href}
                to={svc.href}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-accent/50 hover:bg-accent text-foreground text-sm font-medium transition-colors duration-200 group"
              >
                {svc.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground/60 text-xs mt-4 text-center">
            Tap to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const ServiceCategoryCards = () => {
  return (
    <section id="services" className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Your All-in-One Protection Solution
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium vehicle and marine protection services using only the finest
            XPEL materials. Serving Miami's luxury community with excellence.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <FlipCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
