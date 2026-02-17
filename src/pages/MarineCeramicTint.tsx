
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, CheckCircle, Eye, Award, Shield } from "lucide-react";
import xpelLogo from "@/assets/xpel-logo.svg";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteModal } from "@/components/QuoteModal";
import { addStructuredData } from "@/utils/seoHelpers";
import { WhyChooseUs, marineTintDifferentiators } from "@/components/WhyChooseUs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge as UIBadge } from "@/components/ui/badge";

const benefits = [
  { title: "Superior Glare Reduction", description: "Dramatically reduces blinding sun glare off the water, improving visibility and reducing eye strain during long days on the water." },
  { title: "Up to 99% UV Rejection", description: "Blocks virtually all harmful ultraviolet radiation, protecting passengers and interior surfaces from sun damage and fading." },
  { title: "Significant Heat Rejection", description: "Ceramic tint technology rejects a high percentage of solar heat, keeping cabin and helm areas noticeably cooler." },
  { title: "Enhanced Privacy", description: "Provides privacy for cabin areas and sleeping quarters without sacrificing outward visibility from inside the vessel." },
  { title: "Interior Protection", description: "Prevents fading, cracking, and deterioration of upholstery, dashboards, electronics, and wood finishes caused by constant sun exposure." },
  { title: "Crystal-Clear Optics", description: "Unlike dyed films, ceramic tint maintains optical clarity with no haze, distortion, or signal interference for GPS and electronics." },
  { title: "Shatter Resistance", description: "Adds a layer of security by holding glass together in the event of breakage from impact or rough seas." },
  { title: "Fade-Proof Performance", description: "Ceramic technology won't purple, bubble, or degrade over time — even under the intense South Florida marine sun." },
];

const faqItems = [
  { question: "What makes ceramic tint better than standard marine tint?", answer: "Ceramic tint uses nano-ceramic particle technology instead of dyes or metals, providing superior heat rejection, UV blocking, and signal clarity without fading or interference." },
  { question: "Will tint interfere with marine electronics?", answer: "No. Ceramic tint is metal-free, so it won't interfere with GPS, radar, VHF radios, satellite systems, or other onboard electronics." },
  { question: "How dark can marine window tint be?", answer: "We offer a range of shade levels to suit your preferences and local regulations. During consultation, we'll help you choose the best option for visibility, privacy, and heat rejection." },
  { question: "How long does marine ceramic tint last?", answer: "Professional ceramic tint is engineered for longevity and typically lasts 10+ years without fading, bubbling, or degradation." },
  { question: "Can tint be applied to all boat windows?", answer: "Yes — including windshields, side windows, cabin windows, hatches, and glass enclosures. We custom-cut each piece for a precise fit." },
  { question: "Does tinting help with air conditioning efficiency?", answer: "Absolutely. By rejecting a significant amount of solar heat, ceramic tint reduces the workload on your vessel's HVAC system, improving efficiency and comfort." },
  { question: "Can existing tint be removed and replaced?", answer: "Yes. We safely remove old or damaged tint and prepare the glass surface before applying new ceramic tint for a flawless result." },
  { question: "How do I care for tinted windows?", answer: "Wait 30 days after installation before cleaning. Then use a soft cloth with a mild, ammonia-free cleaner. Avoid abrasive pads or harsh chemicals." },
];

const MarineCeramicTint = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marine Ceramic Tint Miami | Boat Window Tinting | Bespoke Auto Design";
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Professional marine ceramic window tinting for boats and yachts in Miami. Superior glare reduction, UV protection, and heat rejection for your vessel.";
    if (metaDescription) {
      metaDescription.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Marine Ceramic Tint",
      description: "Premium ceramic window tinting for boats and yachts in South Florida",
      provider: { "@type": "AutomotiveBusiness", name: "Bespoke Auto Design" },
      areaServed: "South Florida",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Marine Services", path: "/marine" }, { name: "Marine Ceramic Tint", path: "/marine-ceramic-tint", current: true }]} />

      {/* Hero */}
      <header className="relative py-20 md:py-28 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/e718d34b-ad4c-4a28-b853-895d849751ea.png" alt="Marine ceramic window tinting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <img src={xpelLogo} alt="XPEL" className="h-20 md:h-28 mx-auto mb-4 opacity-80" />
          <p className="text-sm uppercase tracking-widest text-white/60 mb-6">Authorized Dealer</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Marine Ceramic Tint</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Premium ceramic window tinting engineered for the demands of the open water — superior heat rejection, UV protection, and crystal-clear optics.
          </p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Get Marine Tint Quote</Button>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Marine Ceramic Tint?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Engineered for vessels that spend long hours under the South Florida sun.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Sun className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XPEL Product Info */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img src={xpelLogo} alt="XPEL" className="h-12 mx-auto mb-6 opacity-70" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">XPEL Prime XR Plus™ Marine Ceramic Tint</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              We install XPEL Prime XR Plus™ — the most advanced ceramic window film available. Utilizing multi-layer nano-ceramic particle technology, it delivers up to 98% infrared heat rejection and 99% UV blocking without signal interference. Recommended by the Skin Cancer Foundation as an effective UV protectant, it's the premium choice for marine applications.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">98% IR Rejection</span>
                <span className="text-sm text-muted-foreground">Industry-leading heat block</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sun className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">99% UV Protection</span>
                <span className="text-sm text-muted-foreground">Skin Cancer Foundation recommended</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">Signal-Safe</span>
                <span className="text-sm text-muted-foreground">No electronics interference</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tint Levels */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Tint Options for Every Need</h2>
              <p className="text-muted-foreground mb-8">
                We offer a full range of ceramic tint shade levels to balance your priorities — whether that's maximum heat rejection, enhanced privacy, or maintaining the brightest possible visibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Light ceramic tint for maximum visibility with UV/heat protection",
                  "Medium shades for balanced privacy and glare reduction",
                  "Dark tint for cabin privacy and maximum solar heat rejection",
                  "Windshield-specific films for glare control without compromising safety",
                  "Custom combinations tailored to your vessel's layout",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/lovable-uploads/e718d34b-ad4c-4a28-b853-895d849751ea.png" alt="Marine ceramic tint options" className="w-full max-w-md rounded-lg shadow-premium" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Stay Cool on the Water</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Upgrade your onboard comfort with professional marine ceramic tint.</p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Schedule Marine Consultation</Button>
        </div>
      </section>

      {/* Why Choose Bespoke */}
      <WhyChooseUs variant="service" differentiators={marineTintDifferentiators} title="Why Choose Bespoke for Marine Ceramic Tint" />

      {/* FAQ */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <UIBadge variant="outline" className="mb-4">Frequently Asked Questions</UIBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Marine Ceramic Tint FAQ</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Marine Ceramic Tint" />
    </div>
  );
};

export default MarineCeramicTint;
