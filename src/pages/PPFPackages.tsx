import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight } from "lucide-react";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Full Front Package",
    image: "/lovable-uploads/ppf-full-front.png",
    description:
      "Our most popular package protects the areas most vulnerable to road debris. The Full Front Package covers the entire hood, front fenders, front bumper, headlights, and mirror caps — the zones that take the hardest hits during daily driving and highway commutes.",
    benefits: [
      "Shields the hood, bumper, fenders, headlights & mirrors",
      "Ideal for daily drivers and highway commuters",
      "Preserves resale value by protecting high-impact areas",
      "Self-healing film eliminates light scratches with heat",
    ],
  },
  {
    name: "Track Package",
    image: "/lovable-uploads/ppf-track-package.png",
    description:
      "Designed for performance enthusiasts who push their vehicles to the limit. The Track Package extends protection beyond the full front to include rocker panels, rear bumper, A-pillars, and lower door edges — areas especially susceptible to rock chips, tire debris, and track-day wear.",
    benefits: [
      "Full front coverage plus rockers, rear bumper & A-pillars",
      "Engineered for spirited driving and track days",
      "Guards against stone chips and tire marbles at speed",
      "Maintains a flawless finish even under extreme conditions",
    ],
  },
  {
    name: "Full Body",
    image: "/lovable-uploads/ppf-full-body.png",
    description:
      "The ultimate in paint protection. Every painted surface on your vehicle is wrapped in XPEL's industry-leading film, creating an invisible armor that defends against scratches, rock chips, UV fading, bird droppings, and environmental contaminants — while keeping your factory finish looking showroom-new for years.",
    benefits: [
      "Complete bumper-to-bumper coverage on every panel",
      "Maximum protection against all environmental hazards",
      "10-year manufacturer warranty backed by XPEL",
      "The gold standard for exotic and luxury vehicle owners",
    ],
  },
];

const PPFPackages = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  useEffect(() => {
    document.title = "PPF Packages | XPEL Paint Protection Film | Bespoke Auto Design Miami";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our XPEL PPF packages — Full Front, Track, and Full Body. Professional paint protection film installation in Miami by Bespoke Auto Design.");
    }
    addOpenGraphTags(
      "PPF Packages | Bespoke Auto Design",
      "Choose the right XPEL paint protection film package for your vehicle. Full Front, Track, and Full Body options available."
    );
    addCanonicalUrl("https://bespokeautodesign.com/ppf-packages");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">XPEL Certified Installer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            PPF Packages
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the level of protection that's right for your vehicle. Every package features XPEL Ultimate Plus™ — the world's most advanced self-healing paint protection film.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <img
                      src={pkg.image}
                      alt={`${pkg.name} — XPEL PPF coverage diagram`}
                      className="w-full h-auto"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                      <span className="text-primary font-bold text-lg">{pkg.name}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-playfair">{pkg.name}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                    Get a Quote <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XPEL Info Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair">Why XPEL Paint Protection Film?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              XPEL is the global leader in automotive paint protection technology. Their Ultimate Plus™ film features a proprietary self-healing clear coat that eliminates fine scratches and swirl marks with exposure to heat — keeping your vehicle looking flawless year after year. With industry-leading optical clarity and a 10-year manufacturer warranty, XPEL sets the standard that every other film tries to match.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                { title: "Self-Healing", desc: "Light scratches disappear with heat from the sun or warm water, maintaining a pristine surface without polishing." },
                { title: "Stain Resistant", desc: "Advanced top coat repels bird droppings, bug splatter, tree sap, and hard water spots — protecting your paint 24/7." },
                { title: "10-Year Warranty", desc: "XPEL backs every installation with a comprehensive manufacturer warranty against yellowing, cracking, and peeling." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-background border border-border space-y-3">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <p className="text-muted-foreground mb-4">
                As a certified XPEL installer in Miami, Bespoke Auto Design uses precision-cut DAP (Design Access Program) templates for every vehicle, ensuring seamless edge-to-edge coverage with zero guesswork.
              </p>
              <Link to="/paint-protection-film">
                <Button variant="silver" size="lg">
                  Learn More About PPF <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">Not Sure Which Package Is Right for You?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team will assess your driving habits, vehicle type, and budget to recommend the ideal level of protection. Reach out today for a free consultation.
          </p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
            Request a Free Quote <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default PPFPackages;
