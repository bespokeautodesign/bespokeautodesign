import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Anchor, CheckCircle, Award } from "lucide-react";
import xpelLogo from "@/assets/xpel-logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteModal } from "@/components/QuoteModal";
import { MarineFAQ } from "@/components/MarineFAQ";
import { addStructuredData } from "@/utils/seoHelpers";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge as UIBadge } from "@/components/ui/badge";

const benefits = [
  { title: "Saltwater Resistance", description: "XPEL marine PPF creates a chemical-resistant barrier against corrosive saltwater that degrades gel coat and paint over time." },
  { title: "Impact Protection", description: "Absorbs impacts from dock bumps, debris, and wake spray that chip and crack marine finishes." },
  { title: "UV Ray Defense", description: "Blocks harmful UV radiation that causes fading, yellowing, and oxidation on exposed marine surfaces." },
  { title: "Self-Healing Technology", description: "Light scratches and swirl marks disappear with heat exposure, keeping your vessel looking pristine after every outing." },
  { title: "Preserves Resale Value", description: "Maintains factory-finish quality underneath, protecting your investment and maximizing resale potential." },
  { title: "Invisible Protection", description: "Optically clear film that won't alter the appearance of your vessel's paint or gel coat finish." },
  { title: "Reduced Maintenance", description: "Spend less time cleaning and polishing — the film's smooth surface repels contaminants and makes wash-downs effortless." },
  { title: "Long-Term Durability", description: "Engineered to withstand years of harsh marine conditions without peeling, yellowing, or delaminating." },
];

const faqItems = [
  { question: "What areas of a boat can marine PPF protect?", answer: "Marine PPF can be applied to hulls, bows, waterline areas, rub rails, swim platforms, gel coat surfaces, and any painted area exposed to impact or environmental damage." },
  { question: "How long does marine PPF last?", answer: "With proper care, marine PPF typically lasts 5–10 years depending on exposure conditions, storage, and maintenance habits." },
  { question: "Will PPF affect the look of my boat?", answer: "No. XPEL marine PPF is optically clear and virtually invisible once installed, preserving the original color and gloss of your vessel." },
  { question: "Can PPF be removed without damage?", answer: "Yes. The film is designed to be safely removed without damaging the underlying gel coat or paint, making it fully reversible." },
  { question: "Is marine PPF different from automotive PPF?", answer: "Marine PPF is formulated specifically for the harsher marine environment — it offers enhanced saltwater resistance, UV stability, and adhesion suited for marine surfaces." },
  { question: "How is marine PPF installed?", answer: "Our certified technicians custom-cut each piece using digital templates and apply the film in a controlled environment to ensure a bubble-free, seamless finish." },
  { question: "Can PPF be applied over existing damage?", answer: "PPF works best on clean, undamaged surfaces. We recommend addressing any existing chips, scratches, or oxidation before installation for the best results." },
  { question: "How do I maintain my vessel after PPF installation?", answer: "Regular fresh-water rinse-downs after use and occasional gentle hand washes are all that's needed. Avoid abrasive cleaners or high-pressure washers directly on film edges." },
];

const MarinePPF = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marine Paint Protection Film Miami | Boat PPF | Bespoke Auto Design";
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Professional marine paint protection film for boats and yachts in Miami. XPEL marine PPF protects against saltwater, UV, and impact damage. Expert installation.";
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
      name: "Marine Paint Protection Film",
      description: "XPEL marine PPF installation for boats and yachts in South Florida",
      provider: { "@type": "AutomotiveBusiness", name: "Bespoke Auto Design" },
      areaServed: "South Florida",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Marine Services", path: "/marine" }, { name: "Marine PPF", path: "/marine-ppf", current: true }]} />

      {/* Hero */}
      <header className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/19e444ef-f150-42ce-b195-9a306b95f8d5.png" alt="Marine paint protection film installation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <img src={xpelLogo} alt="XPEL" className="h-20 md:h-28 mx-auto mb-4 opacity-80" />
          <p className="text-sm uppercase tracking-widest text-white/60 mb-6">Authorized Dealer</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Marine Paint Protection Film</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Shield your vessel from saltwater corrosion, UV degradation, and impact damage with XPEL marine-grade paint protection film.
          </p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Get Marine PPF Quote</Button>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Marine PPF?</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Purpose-built protection for the unique challenges of the marine environment.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">XPEL Ultimate Plus™ Marine PPF</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              We exclusively install XPEL Ultimate Plus™ paint protection film — the industry's leading self-healing urethane film. Engineered with an elastomeric polymer top coat, it eliminates swirl marks and light scratches on contact with heat. Backed by a 10-year manufacturer warranty against yellowing, cracking, peeling, and staining.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">10-Year Warranty</span>
                <span className="text-sm text-muted-foreground">Manufacturer backed</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">8.5 mil Thickness</span>
                <span className="text-sm text-muted-foreground">Superior impact protection</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="h-8 w-8 text-primary" />
                <span className="font-semibold text-foreground">Self-Healing</span>
                <span className="text-sm text-muted-foreground">Elastomeric top coat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Protection Where It Matters Most</h2>
              <p className="text-muted-foreground mb-8">
                We apply marine PPF to the areas most vulnerable to damage, including bows, hulls, waterlines, rub rails, swim platforms, and any high-impact zones specific to your vessel.
              </p>
              <ul className="space-y-3">
                {["Bow & hull leading edges", "Waterline & boot stripe areas", "Swim platforms & transom", "Rub rails & fender zones", "Gel coat & painted surfaces"].map((area, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img src="/lovable-uploads/8225318e-5a65-40a0-90ed-9a488787ed64.png" alt="XPEL marine PPF coverage areas" className="w-full max-w-md rounded-lg shadow-premium" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Protect Your Vessel?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Contact us for a consultation tailored to your boat or yacht.</p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Schedule Marine Consultation</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <UIBadge variant="outline" className="mb-4">Frequently Asked Questions</UIBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Marine PPF FAQ</h2>
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
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default MarinePPF;
