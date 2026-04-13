import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import PageSEO from "@/components/PageSEO";
import { trackPhoneCall } from "@/utils/gadsConversions";

interface ProjectCard {
  title: string;
  service: string;
  badge: string;
}

const projects: ProjectCard[] = [
  { title: "Porsche 911 GT3", service: "Full Body PPF", badge: "PPF" },
  { title: "Mercedes AMG GT", service: "Ceramic Coating", badge: "Ceramic Coating" },
  { title: "BMW M4 Competition", service: "Color Change Wrap — Satin Grey", badge: "Vinyl Wrap" },
  { title: "Tesla Model Y", service: "Full Ceramic Tint — 15% Rear, 30% Front", badge: "Ceramic Tint" },
  { title: "Lamborghini Huracán EVO", service: "Stealth PPF — Full Body Satin", badge: "Stealth PPF" },
  { title: "Range Rover Sport", service: "PPF Full Front + Ceramic Coating", badge: "PPF + Ceramic" },
  { title: "Ferrari F8 Tributo", service: "Full Body PPF + Ceramic Coating", badge: "PPF + Ceramic" },
  { title: "Audi RS7", service: "Chrome Delete + Ceramic Tint", badge: "Vinyl Wrap" },
  { title: "Chevrolet Corvette Z06", service: "Ceramic Coating — Paint Correction", badge: "Ceramic Coating" },
  { title: "Ford F-150 Raptor", service: "Full Front PPF + Ceramic Tint", badge: "PPF" },
];

const badgeColors: Record<string, string> = {
  "PPF": "bg-blue-600/80 text-white",
  "Ceramic Coating": "bg-amber-600/80 text-white",
  "Vinyl Wrap": "bg-emerald-600/80 text-white",
  "Ceramic Tint": "bg-purple-600/80 text-white",
  "Stealth PPF": "bg-zinc-600/80 text-white",
  "PPF + Ceramic": "bg-primary text-primary-foreground",
};

const Gallery = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Before & After Gallery | PPF, Ceramic Coating & Wraps Miami | Bespoke Auto Design"
        description="See real before and after results from Bespoke Auto Design in Miami. Paint protection film, ceramic coating, vinyl wraps, and ceramic tint on luxury and exotic vehicles."
        canonical="https://www.bespokeauto.design/gallery"
      />
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Our Work | Before &amp; After Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results on real vehicles. Browse our recent projects featuring PPF, ceramic coating, vinyl wraps, and ceramic tint installations on luxury, exotic, and everyday vehicles in Miami.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-premium hover:shadow-glow transition-all duration-500 cursor-pointer"
              >
                {/* Placeholder image area — ready for real before/after images */}
                <div className="relative h-64 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="text-white/20 text-sm font-medium tracking-widest uppercase">Before &amp; After</span>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[project.badge] || "bg-primary text-primary-foreground"}`}>
                      {project.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a free, no-obligation quote for your project. We'll help you choose the perfect protection and finish for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Get a Free Quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:7863959172" onClick={() => trackPhoneCall()} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call (786) 395-9172
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default Gallery;
