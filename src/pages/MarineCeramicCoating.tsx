
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, CheckCircle, Shield, Award } from "lucide-react";
import xpelLogo from "@/assets/xpel-logo.svg";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteModal } from "@/components/QuoteModal";
import { addStructuredData } from "@/utils/seoHelpers";
import { WhyChooseUs, marineCeramicDifferentiators } from "@/components/WhyChooseUs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge as UIBadge } from "@/components/ui/badge";

const benefits = [
  { title: "Hydrophobic Surface", description: "Water beads and sheets off instantly, reducing water spots and mineral deposits from saltwater and rain." },
  { title: "Anti-Fouling Properties", description: "The slick ceramic surface makes it harder for algae, barnacles, and marine growth to adhere to your hull." },
  { title: "UV & Oxidation Shield", description: "Prevents the sun from fading, yellowing, and oxidizing gel coat and painted surfaces over time." },
  { title: "Chemical Resistance", description: "Stands up to fuel spills, bird droppings, fish blood, and harsh cleaning agents without etching." },
  { title: "Enhanced Gloss & Depth", description: "Amplifies the shine and color depth of your vessel's finish for a showroom-quality appearance on the water." },
  { title: "Easier Cleaning", description: "Contaminants release with a simple rinse-down, dramatically reducing scrubbing time and frequency." },
  { title: "Multi-Surface Application", description: "Protects gel coat, paint, metal hardware, glass, and even non-skid surfaces throughout the vessel." },
  { title: "Long-Lasting Results", description: "Professional-grade marine ceramic coatings provide years of protection with proper maintenance." },
];

const faqItems = [
  { question: "What does marine ceramic coating protect against?", answer: "It creates a durable barrier against saltwater corrosion, UV damage, oxidation, staining, and biological fouling on marine surfaces." },
  { question: "How long does marine ceramic coating last?", answer: "Depending on usage and maintenance, professional marine ceramic coatings can last 2–5 years before requiring reapplication." },
  { question: "Can ceramic coating be applied to all boat surfaces?", answer: "Yes — gel coat, painted surfaces, metal hardware, glass, and even vinyl can be coated for comprehensive protection." },
  { question: "Does ceramic coating replace waxing?", answer: "Yes. Once coated, your vessel no longer needs regular waxing. The ceramic layer provides superior and longer-lasting protection." },
  { question: "How should I maintain a ceramic-coated vessel?", answer: "Regular fresh-water rinse-downs after each use and occasional pH-neutral washes are all that's needed to maintain the coating's performance." },
  { question: "Can ceramic coating be applied over PPF?", answer: "Absolutely. Ceramic coating is an excellent complement to PPF, adding hydrophobic and UV-resistant properties on top of the film's physical protection." },
  { question: "How is the coating applied?", answer: "After thorough surface preparation including decontamination and polishing, the coating is applied by hand in a controlled environment and allowed to cure for optimal bonding." },
  { question: "Is marine ceramic coating different from automotive?", answer: "Marine-grade formulations are engineered for constant water exposure, salt environments, and the unique challenges of the marine environment." },
];

const MarineCeramicCoating = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marine Ceramic Coating Miami | Boat Ceramic Protection | Bespoke Auto Design";
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Professional marine ceramic coating for boats and yachts in Miami. Advanced hydrophobic protection against saltwater, UV, and marine fouling.";
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
      name: "Marine Ceramic Coating",
      description: "Professional marine-grade ceramic coating for boats and yachts in South Florida",
      provider: { "@type": "AutomotiveBusiness", name: "Bespoke Auto Design" },
      areaServed: "South Florida",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Marine Services", path: "/marine" }, { name: "Marine Ceramic Coating", path: "/marine-ceramic-coating", current: true }]} />

      {/* Hero */}
      <header className="relative py-8 md:py-12 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/b0ee1d07-d81d-4edf-8181-95046e093b94.png" alt="Marine ceramic coating application" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <img src={xpelLogo} alt="XPEL" className="h-20 md:h-28 mx-auto mb-4 opacity-80" />
          <p className="text-sm uppercase tracking-widest text-white/60 mb-6">Authorized Dealer</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Marine Ceramic Coating</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Advanced marine-grade ceramic protection that delivers superior hydrophobic performance and long-lasting defense against the elements.
          </p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Get Ceramic Coating Quote</Button>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Marine Ceramic Coating?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">The ultimate surface protection for vessels exposed to South Florida's demanding marine conditions.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Droplets className="h-6 w-6 text-primary mb-3" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">XPEL Fusion Plus™ Marine Ceramic Coating</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              We apply XPEL Fusion Plus™ ceramic coating — a professional-grade nano-ceramic formulation with high concentrations of SiO₂ and TiO₂. This marine-specific coating creates a permanent bond with the surface, delivering extreme hydrophobic performance, chemical resistance, and UV protection engineered for the harshest saltwater environments.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">Professional Grade</span>
                <span className="text-sm text-muted-foreground">High SiO₂/TiO₂ concentration</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Droplets className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">Extreme Hydrophobic</span>
                <span className="text-sm text-muted-foreground">120°+ water contact angle</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">Multi-Year Protection</span>
                <span className="text-sm text-muted-foreground">Permanent surface bond</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Ceramic Coating Process</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: "1", title: "Surface Inspection", desc: "Thorough assessment of all surfaces to identify oxidation, staining, or imperfections that need correction." },
              { step: "2", title: "Decontamination & Prep", desc: "Deep cleaning, clay bar treatment, and chemical decontamination to create a perfectly clean bonding surface." },
              { step: "3", title: "Paint Correction", desc: "Machine polishing to remove swirls, scratches, and oxidation — restoring surfaces to their best possible condition." },
              { step: "4", title: "Ceramic Application", desc: "Multiple layers of marine-grade ceramic coating applied by hand, ensuring full and even coverage on all protected surfaces." },
              { step: "5", title: "Curing & Inspection", desc: "Controlled curing period followed by a detailed final inspection to ensure flawless coating adhesion and finish." },
            ].map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Elevate Your Vessel's Protection</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Experience the difference professional marine ceramic coating makes.</p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Schedule Marine Consultation</Button>
        </div>
      </section>

      {/* Why Choose Bespoke */}
      <WhyChooseUs variant="service" differentiators={marineCeramicDifferentiators} title="Why Choose Bespoke for Marine Ceramic Coating" />

      {/* FAQ */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <UIBadge variant="outline" className="mb-4">Frequently Asked Questions</UIBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Marine Ceramic Coating FAQ</h2>
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
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Marine Ceramic Coating" />
    </div>
  );
};

export default MarineCeramicCoating;
