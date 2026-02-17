import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Droplets, Sun, Zap, Car, Clock, Award } from "lucide-react";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";
import { addStructuredData } from "@/utils/seoHelpers";
import { Link } from "react-router-dom";
import { WhyChooseUs, ppfDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import xpelLogo from "@/assets/xpel-logo.svg";
import { clearPPFVehicles, clearPPFImageStyles } from "@/data/portfolioVehicles";
const ppfFaqs = [{
  question: "How much does paint protection film cost in Miami?",
  answer: "PPF pricing in Miami depends on coverage area and vehicle size. A Full Front package typically runs $1,500–$3,000, a Track package $2,500–$4,500, and Full Body coverage $4,500–$8,000+. Exotic and larger SUVs may cost more due to surface area. Contact us for a personalized quote based on your vehicle."
}, {
  question: "How long does XPEL PPF last in Miami's climate?",
  answer: "XPEL Ultimate Plus™ is rated to last 10+ years, even in Miami's intense UV, humidity, and salt-air environment. The film's self-healing top coat and UV-stabilized adhesive are specifically engineered for extreme climates like South Florida. With proper care, your PPF will protect your paint for the lifetime of ownership."
}, {
  question: "Does PPF protect against rock chips on I-95 and the Turnpike?",
  answer: "Absolutely. XPEL PPF is 8 mils thick and engineered to absorb impact from gravel, road debris, and construction material common on I-95, the Palmetto Expressway, and Florida's Turnpike. It prevents paint chips that would otherwise require expensive touch-ups or repainting."
}, {
  question: "Can PPF be removed without damaging my paint?",
  answer: "Yes. XPEL films use a pressure-sensitive adhesive designed for clean removal. When professionally removed, there is zero adhesive residue and your factory paint remains pristine underneath. This makes PPF ideal for leased vehicles or owners who plan to sell."
}, {
  question: "What is the self-healing feature of XPEL PPF?",
  answer: "XPEL Ultimate Plus™ features a proprietary elastomeric polymer top coat that 'heals' light scratches and swirl marks when exposed to heat — whether from the sun, warm water, or a heat gun. In Miami's climate, most surface scratches disappear within minutes while parked outdoors."
}, {
  question: "Do you offer PPF for luxury and exotic cars in Miami?",
  answer: "Yes. Bespoke Auto Design specializes in PPF for exotic and luxury vehicles including Ferrari, Lamborghini, Porsche, McLaren, Rolls-Royce, and Bentley. We use XPEL's DAP precision-cut templates and hand-finish every edge for a seamless, invisible installation."
}, {
  question: "How long does PPF installation take?",
  answer: "Installation time depends on the package. A Full Front typically takes 1–2 days, a Track Package 2–3 days, and a Full Body installation 3–5 days. We never rush installations — every panel is precision-fitted in our climate-controlled facility in Miami."
}, {
  question: "Can I wash my car normally after PPF installation?",
  answer: "Yes. After a 48-hour cure period, you can wash your vehicle normally. We recommend hand washing or touchless car washes. Avoid high-pressure spraying directly on film edges for the first two weeks. PPF actually makes washing easier because contaminants don't bond to the film surface."
}];
const PaintProtectionFilm = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  useEffect(() => {
    document.title = "Paint Protection Film Miami | XPEL PPF Installation | Bespoke Auto Design";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional XPEL paint protection film (PPF) installation in Miami, FL. Self-healing, invisible protection for luxury and exotic cars. Certified installer with 10-year warranty.");
    }
    addOpenGraphTags("Paint Protection Film Miami | XPEL PPF | Bespoke Auto Design", "Miami's premier XPEL PPF installer. Full Front, Track, and Full Body packages with 10-year warranty. Protect your vehicle from rock chips, scratches, and UV damage.");
    addCanonicalUrl("https://bespokeautodesign.com/paint-protection-film");
    addStructuredData({
      "@context": "https://schema.org",
      "@graph": [
      {
        "@type": "Service",
        "name": "Paint Protection Film Installation",
        "provider": {
          "@type": "AutomotiveBusiness",
          "name": "Bespoke Auto Design",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7943 NW 64th St",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "postalCode": "33166",
            "addressCountry": "US"
          },
          "telephone": "+1-786-395-9172",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        "areaServed": [
        { "@type": "City", "name": "Miami" },
        { "@type": "City", "name": "Miami Beach" },
        { "@type": "City", "name": "Coral Gables" },
        { "@type": "City", "name": "Doral" },
        { "@type": "City", "name": "Brickell" }],

        "description": "Professional XPEL paint protection film installation in Miami. Self-healing, invisible armor for luxury and exotic vehicles.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPF Packages",
          "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Front PPF Package" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Track PPF Package" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Body PPF" } }]

        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": ppfFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }]

    });
  }, []);
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/ppf-hero-ferrari.png" alt="Black Ferrari F8 Tributo with XPEL PPF at Bespoke Auto Design" className="w-full h-full object-cover object-[center_40%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 via-60% to-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
            <div className="flex items-center justify-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-6 md:h-8 w-auto opacity-80 brightness-200" />
              <span className="text-white font-semibold tracking-wider uppercase text-xs md:text-sm drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                Miami's XPEL Certified Installer
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight text-white drop-shadow-lg" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.8), 0 4px 32px rgba(0,0,0,0.4)' }}>XPEL Paint Protection Film<br className="hidden md:block" />
              <span className="text-white/80"> in Miami, FL</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
              Invisible, self-healing armor that shields your vehicle's paint from rock chips, scratches, UV fading, and Miami's harsh environmental elements — backed by a 10-year XPEL warranty.
            </p>
            <p className="text-base md:text-lg font-semibold text-white/90 drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              Starting at $1,499 • Free Consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Get a Free Quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Link to="/ppf-packages">
                <Button variant="silver" size="lg">
                  View Packages <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless dark-to-background transition */}
      <div className="h-12 bg-gradient-to-b from-black/40 to-background" />

      {/* ═══════════════════════════════════════════════════════
         WHAT IS PPF?
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="block w-fit">What Is PPF?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                The Ultimate Shield for Your Vehicle's Paint
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Paint Protection Film (PPF) is a virtually invisible, thermoplastic urethane film applied to your vehicle's exterior painted surfaces. Originally developed for military helicopter blades to resist sand and debris erosion, PPF technology has evolved into the gold standard for automotive paint preservation.
                </p>
                <p>
                  At Bespoke Auto Design in Miami, we exclusively install <strong className="text-foreground">XPEL Ultimate Plus™</strong> — the world's most advanced self-healing paint protection film.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={clearPPFVehicles[0].image} alt="Ferrari California T with clear PPF" loading="lazy" className="w-full h-[300px] md:h-[400px] object-cover object-[center_60%]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-premium">
                  <img src={clearPPFVehicles[3].image} alt="Aston Martin Vantage with PPF" loading="lazy" className="w-full h-[150px] object-cover object-[center_60%]" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-premium">
                  <img src={clearPPFVehicles[4].image} alt="2024 BMW M4 with PPF" loading="lazy" className="w-full h-[150px] object-cover object-[center_75%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
         WHY PPF IN MIAMI?
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Miami Climate Protection</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Why Miami Vehicles Need PPF
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              South Florida's combination of extreme UV, salt air, highway debris, and year-round heat creates the perfect storm for paint damage. Here's how PPF fights back.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            icon: Sun,
            title: "UV & Sun Protection",
            desc: "Miami ranks among the highest UV index cities in the U.S. XPEL PPF blocks harmful UV rays that cause paint oxidation, fading, and clear coat failure — keeping your finish factory-fresh."
          }, {
            icon: Zap,
            title: "Rock Chip Defense",
            desc: "I-95, the Palmetto, and Florida's Turnpike are notorious for road debris. PPF absorbs impact energy from stones, gravel, and construction material that would otherwise chip your paint."
          }, {
            icon: Droplets,
            title: "Salt Air & Humidity",
            desc: "Living near Miami Beach, Brickell, or the Keys means constant exposure to corrosive salt air. PPF creates an impermeable barrier that prevents salt-induced micro-corrosion and water spotting."
          }, {
            icon: Shield,
            title: "Self-Healing Technology",
            desc: "XPEL's elastomeric polymer top coat eliminates light scratches and swirl marks when exposed to heat. In Miami's sun, most surface blemishes disappear within minutes while parked."
          }, {
            icon: Car,
            title: "Resale Value Preservation",
            desc: "Paint condition is one of the biggest factors in resale value. PPF keeps your paint in concours condition, adding thousands of dollars to your vehicle's trade-in or private sale price."
          }, {
            icon: Award,
            title: "10-Year XPEL Warranty",
            desc: "Every installation is backed by XPEL's comprehensive 10-year manufacturer warranty against yellowing, cracking, peeling, staining, and delamination — even in Florida's harsh climate."
          }].map((item) => <Card key={item.title} className="bg-background border-border shadow-premium hover:shadow-glow transition-shadow duration-300">
                <CardContent className="pt-8 pb-6 px-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         PPF PACKAGES OVERVIEW
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Packages</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Choose Your Level of Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From essential front-end defense to complete bumper-to-bumper coverage, we have a package for every vehicle and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            name: "Full Front",
            anchor: "full-front",
            coverage: "Hood, bumper, fenders, headlights, mirrors",
            ideal: "Daily drivers & commuters",
            highlight: "Most Popular"
          }, {
            name: "Track Package",
            anchor: "track",
            coverage: "Full front + rockers, rear bumper, A-pillars, door edges",
            ideal: "Performance & spirited driving",
            highlight: "Best Value"
          }, {
            name: "Full Body",
            anchor: "full-body",
            coverage: "Every painted surface, bumper to bumper",
            ideal: "Exotic & luxury vehicles",
            highlight: "Maximum Protection"
          }].map((pkg) => <Card key={pkg.name} className="bg-background border-border shadow-premium text-center">
                <CardContent className="pt-8 pb-6 px-6 space-y-5">
                  <Badge className="bg-primary text-primary-foreground">{pkg.highlight}</Badge>
                  <h3 className="text-2xl font-bold font-playfair">{pkg.name}</h3>
                  <p className="text-muted-foreground">{pkg.coverage}</p>
                  <p className="text-sm text-muted-foreground italic">Ideal for: {pkg.ideal}</p>
                  <Link to={`/ppf-packages#${pkg.anchor}`}>
                    <Button variant="silver" className="w-full mt-2">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED VEHICLE ═══════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto relative rounded-2xl overflow-hidden">
            <img src={clearPPFVehicles[1].image} alt="Rolls-Royce Cullinan with XPEL PPF" loading="lazy" className="w-full h-[350px] md:h-[500px] object-cover object-[center_65%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-lg">
              <Badge className="bg-primary text-primary-foreground mb-4">Full Body PPF</Badge>
              <h3 className="text-2xl md:text-3xl font-bold font-playfair text-white mb-3">Rolls-Royce Cullinan</h3>
              <p className="text-white/80 leading-relaxed">Complete bumper-to-bumper XPEL Ultimate Plus™ protection — preserving the finish on one of the world's most prestigious SUVs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         THE XPEL ADVANTAGE
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <img src={xpelLogo} alt="XPEL" className="h-12 w-auto mx-auto opacity-80" />
              <Badge variant="outline">Why XPEL?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                The XPEL Advantage
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Not all paint protection films are created equal. XPEL has spent over two decades refining their films to deliver unmatched clarity, durability, and performance. As a <strong className="text-foreground">certified XPEL installer in Miami</strong>, Bespoke Auto Design uses the full XPEL ecosystem — from the Design Access Program (DAP) for precision-cut templates to the Ultimate Plus™ film and Fusion Plus™ ceramic coating for post-installation care.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 py-4">
                {["Precision DAP templates for 100,000+ vehicle fitments", "Optically clear — invisible on any paint color", "Self-healing top coat eliminates swirl marks", "Stain-resistant against bird droppings & tree sap", "Non-yellowing formula engineered for high-UV climates", "Edge-seal technology prevents lifting and peeling", "Transferable 10-year manufacturer warranty", "Safe removal with zero paint damage"].map((point) => <div key={point} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         OUR PROCESS
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              How We Install PPF
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every installation follows a meticulous multi-step process in our climate-controlled facility in Miami.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[{
            step: "01",
            title: "Consultation",
            desc: "We assess your vehicle, discuss your driving habits, and recommend the ideal coverage package."
          }, {
            step: "02",
            title: "Surface Prep",
            desc: "Your vehicle is hand-washed, clay-barred, and any existing paint imperfections are polished before film application."
          }, {
            step: "03",
            title: "Precision Install",
            desc: "XPEL DAP templates are applied with surgical precision, edges are tucked, and every seam is sealed."
          }, {
            step: "04",
            title: "Quality Inspection",
            desc: "Multi-point inspection under controlled lighting ensures flawless coverage before delivery."
          }].map((item) => <div key={item.step} className="space-y-4 text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-2xl font-bold font-playfair">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Bespoke */}
      <WhyChooseUs variant="service" differentiators={ppfDifferentiators} title="Why Choose Bespoke for PPF" />

      {/* ═══════════════════════════════════════════════════════
         FAQ
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">PPF FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about paint protection film installation in Miami.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {ppfFaqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         FINAL CTA
         ═══════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair">
            Protect Your Investment Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miami's premier XPEL paint protection film installer. Schedule a consultation and get a custom quote for your vehicle — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
              Request a Free Quote <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:7863959172" className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Call (786) 395-9172
              </a>
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="paint-protection-film" />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Paint Protection Film (PPF)" />
    </div>;
};
export default PaintProtectionFilm;
