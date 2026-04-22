import { trackPhoneCall } from "@/utils/gadsConversions";
import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import { areaServed, providerSchema } from "@/utils/seoHelpers";
import { PricingCards, PricingTier } from "@/components/PricingCards";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Droplets, Sun, Zap, Car, Clock, Award, Calculator } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { WhyChooseUs, ppfDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  const ppfStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Paint Protection Film Installation",
        "provider": providerSchema,
        "areaServed": areaServed,
        "description": "Professional XPEL paint protection film installation in Miami. Self-healing, invisible armor for luxury and exotic vehicles.",
        "offers": {
          "@type": "Offer",
          "price": "1499",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPF Packages",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Front PPF Package" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Track PPF Package" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Body PPF" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": ppfFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };
  return <div className="min-h-screen bg-background">
      <PageSEO
        title="PPF Miami | Paint Protection Film from $1,499 | Bespoke Auto Design"
        description="Professional XPEL paint protection film (PPF) installation in Miami, FL. Self-healing, invisible protection for luxury and exotic cars. Certified installer with 10-year warranty."
        canonical="https://www.bespokeauto.design/paint-protection-film"
        structuredData={ppfStructuredData}
      />
      <Navbar />
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Paint Protection Film", path: "/paint-protection-film", current: true }]} />
      </div>

      {/* Instant Quote CTA */}
      <div className="bg-black border-y border-silver-muted/40">
        <div className="container mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-silver">
          <span className="font-medium flex items-center gap-1.5"><Calculator className="w-4 h-4 text-silver-muted" /> Get an instant price range for your vehicle</span>
          <Link to="/instant-quote" className="inline-flex items-center gap-1 text-silver font-semibold underline-offset-4 hover:underline">Try the Instant Quote Calculator <ChevronRight className="w-3.5 h-3.5" /></Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 hero-parallax">
        <HeroVideoBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
            <div className="flex items-center justify-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-6 md:h-8 w-auto opacity-80 brightness-200"  width={200} height={60} />
              <span className="text-white font-semibold tracking-wider uppercase text-xs md:text-sm drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                Miami's XPEL Certified Installer
              </span>
            </div>
            <p className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-silver-muted">Boutique Auto Protection · Miami</p>
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight text-white drop-shadow-lg" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.8), 0 4px 32px rgba(0,0,0,0.4)' }}>XPEL <span className="text-brand-red">Paint Protection Film</span><br className="hidden md:block" /> (PPF) in Miami, FL
             </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
              Invisible, self-healing armor that shields your vehicle's paint from rock chips, scratches, UV fading, and Miami's harsh environmental elements — backed by a 10-year XPEL warranty.
            </p>
            <p className="text-base md:text-lg font-semibold text-white/90 drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              Starting at $1,499 • Free Consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="premium" size="lg" onClick={() => { trackQuoteButton("ppf"); setQuoteModalOpen(true); }}>Request a Consultation<ChevronRight className="h-4 w-4" />
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
         WHAT IS PPF? — Split row (text left / photo right)
         ═══════════════════════════════════════════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-[55%_45%] min-h-[500px]">
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-6">
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">What Is PPF?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                The Ultimate Shield for Your Vehicle's Paint
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                Paint Protection Film (PPF) is a virtually invisible, thermoplastic urethane film applied to your vehicle's exterior painted surfaces. Originally developed for military helicopter blades to resist sand and debris erosion, PPF technology has evolved into the gold standard for automotive paint preservation.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                At Bespoke Auto Design in Miami, we exclusively install <strong className="text-white">XPEL Ultimate Plus™</strong> — the world's most advanced self-healing paint protection film.
              </p>
              <div className="pt-2">
                <Button
                  size="lg"
                  onClick={() => { trackQuoteButton("ppf"); setQuoteModalOpen(true); }}
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-lg"
                >
                  Get a Free Quote <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[500px]">
            <img src={clearPPFVehicles[0].image} alt="Ferrari California T with clear PPF" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_60%]" width={1200} height={800} />
            <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ background: 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.95) 10%, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0) 60%)' }} />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
         WHY PPF IN MIAMI?
         ═══════════════════════════════════════════════════════ */}
      {/* Why Miami Vehicles Need PPF — Split row (photo left / text right) */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-[45%_55%] min-h-[600px]">
          <div className="relative min-h-[300px] md:min-h-[600px] order-2 md:order-1">
            <img
              src={clearPPFVehicles[5].image}
              alt="Ferrari F8 Tributo protected from Miami's climate with XPEL PPF"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-[center_50%]"
              width={1200}
              height={800}
            />
            <div
              className="absolute inset-0 hidden md:block pointer-events-none"
              style={{ background: 'linear-gradient(to left, #111111 0%, rgba(17,17,17,0.95) 10%, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0) 60%)' }}
            />
          </div>
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24 order-1 md:order-2" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-6">
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">Miami Climate Protection</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                Why Miami Vehicles Need PPF
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                South Florida's combination of extreme UV, salt air, highway debris, and year-round heat creates the perfect storm for paint damage. Here's how XPEL PPF fights back.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  { icon: Sun, title: "UV & Sun Protection", desc: "Miami ranks among the highest UV index cities in the U.S. XPEL PPF blocks harmful UV rays that cause paint oxidation, fading, and clear coat failure — keeping your finish factory-fresh." },
                  { icon: Zap, title: "Rock Chip Defense", desc: "I-95, the Palmetto, and Florida's Turnpike are notorious for road debris. PPF absorbs impact energy from stones, gravel, and construction material that would otherwise chip your paint." },
                  { icon: Droplets, title: "Salt Air & Humidity", desc: "Living near Miami Beach, Brickell, or the Keys means constant exposure to corrosive salt air. PPF creates an impermeable barrier that prevents salt-induced micro-corrosion and water spotting." },
                  { icon: Award, title: "Bug & Sap Resistance", desc: "XPEL's stain-resistant top coat repels bug splatter, bird droppings, tree sap, and hard water spots — protecting your paint 24/7 against South Florida's organic and environmental contaminants." },
                  { icon: Shield, title: "Self-Healing Technology", desc: "XPEL's elastomeric polymer top coat eliminates light scratches and swirl marks when exposed to heat. In Miami's sun, most surface blemishes disappear within minutes while parked." },
                  { icon: Car, title: "Resale Value Preservation", desc: "Paint condition is one of the biggest factors in resale value. PPF keeps your paint in concours condition, adding thousands of dollars to your vehicle's trade-in or private sale price." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-gold/15 border border-silver-muted/40 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-base md:text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-sm md:text-base text-silver leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         PPF PACKAGES OVERVIEW
         ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={clearPPFVehicles[2].image}
            alt="XPEL PPF installation in progress on a Ferrari LaFerrari"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
            width={1920}
            height={1080}
          />
          {/* Layered overlays for legibility */}
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-silver-muted/40 text-silver bg-black/30 backdrop-blur-sm">Our Packages</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6 text-white drop-shadow-lg" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.8)' }}>
              Choose Your Level of Protection
            </h2>
            <p className="text-xl text-silver max-w-3xl mx-auto" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
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
          }].map((pkg) => <Card key={pkg.name} className="bg-card/90 backdrop-blur-md border-silver-muted/30 shadow-2xl text-center hover:border-gold/50 transition-colors duration-300">
                <CardContent className="pt-8 pb-6 px-6 space-y-5">
                  <Badge className="bg-gold text-gold-foreground">{pkg.highlight}</Badge>
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

      {/* ═══════════════════ FEATURED VEHICLE — Split row (text left / photo right) ═══════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-2 min-h-[500px]">
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-6">
              <Badge className="bg-gold text-gold-foreground w-fit">Featured Install · Full Body PPF</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                Rolls-Royce Cullinan
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                Complete bumper-to-bumper XPEL Ultimate Plus™ protection — preserving the finish on one of the world's most prestigious SUVs. Every panel, edge, and trim line wrapped with precision-cut DAP templates for an invisible, factory-grade install.
              </p>
              <div className="pt-2">
                <Button
                  size="lg"
                  onClick={() => { trackQuoteButton("ppf"); setQuoteModalOpen(true); }}
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-semibold shadow-lg"
                >
                  Get a Free Quote <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[500px]">
            <img
              src={clearPPFVehicles[1].image}
              alt="Rolls-Royce Cullinan with full body XPEL PPF"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-[center_65%]"
              width={1200}
              height={800}
            />
            <div
              className="absolute inset-0 hidden md:block pointer-events-none"
              style={{ background: 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.95) 10%, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0) 60%)' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         THE XPEL ADVANTAGE — Split row (photo left / text right)
         ═══════════════════════════════════════════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-2 min-h-[500px]">
          <div className="relative min-h-[300px] md:min-h-[500px] order-2 md:order-1">
            <img src={clearPPFVehicles[5].image} alt="Ferrari F8 Tributo with XPEL PPF" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_50%]" width={1200} height={800} />
            <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to left, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)' }} />
          </div>
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24 order-1 md:order-2" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-6">
              <img src={xpelLogo} alt="XPEL" className="h-10 w-auto opacity-70 brightness-200" width={200} height={60} />
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">Why XPEL?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                The XPEL Advantage
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                Not all paint protection films are created equal. XPEL has spent over two decades refining their films to deliver unmatched clarity, durability, and performance. As a <strong className="text-white">certified XPEL installer in Miami</strong>, Bespoke Auto Design uses the full XPEL ecosystem — from the Design Access Program (DAP) for precision-cut templates to the Ultimate Plus™ film and Fusion Plus™ ceramic coating for post-installation care.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
                {["Precision DAP templates for 100,000+ vehicle fitments", "Optically clear — invisible on any paint color", "Self-healing top coat eliminates swirl marks", "Stain-resistant against bird droppings & tree sap", "Non-yellowing formula engineered for high-UV climates", "Edge-seal technology prevents lifting and peeling", "Transferable 10-year manufacturer warranty", "Safe removal with zero paint damage"].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-silver text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         OUR PROCESS — Split row (text left / photo right)
         ═══════════════════════════════════════════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-2 min-h-[600px]">
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-6">
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">Our Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                How We Install PPF
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                Every installation follows a meticulous multi-step process in our climate-controlled facility in Miami.
              </p>
              <ol className="space-y-5 pt-2">
                {[
                  { step: "01", title: "Consultation", desc: "We assess your vehicle, discuss your driving habits, and recommend the ideal coverage package." },
                  { step: "02", title: "Surface Prep", desc: "Your vehicle is hand-washed, clay-barred, and any existing paint imperfections are polished before film application." },
                  { step: "03", title: "Precision Install", desc: "XPEL DAP templates are applied with surgical precision, edges are tucked, and every seam is sealed." },
                  { step: "04", title: "Quality Inspection", desc: "Multi-point inspection under controlled lighting ensures flawless coverage before delivery." },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center shrink-0 text-base font-bold font-playfair">
                      {item.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-sm md:text-base text-silver leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[600px]">
            <img
              src={clearPPFVehicles[9].image}
              alt="Corvette Z06 during XPEL PPF installation"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
              width={1200}
              height={900}
            />
            <div
              className="absolute inset-0 hidden md:block pointer-events-none"
              style={{ background: 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.95) 10%, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0) 60%)' }}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingCards
        title="PPF Packages & Pricing"
        subtitle="Transparent pricing for every level of protection. All packages include XPEL Ultimate Plus™ with a 10-year warranty."
        tiers={[
          { name: "Full Front", price: "$1,499", priceLabel: "Starting at", description: "Hood, bumper, fenders, headlights & mirrors.", features: ["Most vulnerable areas protected", "Ideal for daily drivers", "Self-healing top coat", "10-year XPEL warranty"], popular: false },
          { name: "Track Package", price: "$2,500", priceLabel: "Starting at", description: "Full front plus rockers, rear bumper & A-pillars.", features: ["Everything in Full Front", "Rocker & rear bumper coverage", "Built for performance driving", "10-year XPEL warranty"], popular: true },
          { name: "Full Body", price: "$4,000", priceLabel: "Starting at", description: "Bumper-to-bumper protection on every painted panel.", features: ["Complete 360° coverage", "Maximum resale value", "Ultimate peace of mind", "10-year XPEL warranty"], popular: false },
        ]}
        onGetQuote={(tier) => { setQuoteModalOpen(true); }}
        footnote="Pricing varies by vehicle size and complexity. Contact us for an exact quote."
      />

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
         PPF FOR EVERY MIAMI VEHICLE — Section intro + alternating split rows
         ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#111111' }}>
        <div className="container mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-4 border-silver-muted/40 text-silver">Vehicle Coverage</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6 text-white">
            PPF Protection for Every Miami Vehicle
          </h2>
          <p className="text-lg text-silver max-w-3xl mx-auto">
            Whether you drive a daily commuter or a million-dollar supercar, Miami's roads and climate put your paint at constant risk. Here's how PPF protects every type of vehicle on South Florida's streets.
          </p>
        </div>
      </section>

      {[
        {
          heading: "Luxury Vehicles: Porsche, BMW, Mercedes-Benz & Tesla",
          image: clearPPFVehicles[4].image,
          imagePos: "object-[center_75%]",
          alt: "BMW M4 with XPEL PPF",
          paragraphs: [
            "Miami is one of the largest luxury car markets in the United States, and for good reason — the lifestyle demands it. But owning a Porsche 911, BMW M4, Mercedes-AMG GT, or Tesla Model S in South Florida means exposing premium paint finishes to some of the harshest driving conditions in the country. I-95 between downtown Miami and Fort Lauderdale is notorious for loose gravel, construction debris, and aggressive lane-changing that sends rocks flying. A single highway commute can leave dozens of micro-chips in your hood and bumper paint that compound over time into costly repairs.",
            "XPEL Ultimate Plus™ paint protection film absorbs these impacts without transferring damage to the underlying paint. The film's self-healing top coat means that light scratches — the kind you'd get from an automatic car wash or a careless parking lot neighbor — literally disappear in Miami's sun. For Tesla owners specifically, PPF is particularly valuable because Tesla's factory paint is notoriously thin (often measuring just 3.5–4.0 mils compared to the industry standard of 5.0–6.0 mils), making it extremely susceptible to chipping and marring.",
          ],
        },
        {
          heading: "Exotic & Supercar Protection: Lamborghini, Ferrari & McLaren",
          image: clearPPFVehicles[2].image,
          imagePos: "object-[center_50%]",
          alt: "Ferrari LaFerrari with XPEL PPF",
          paragraphs: [
            "If you own a Lamborghini Huracán, Ferrari 488 Spider, or McLaren 720S, paint protection film isn't optional — it's essential. These vehicles carry paint jobs worth $15,000 to $40,000 or more, and a single rock chip can mean a $2,000+ touch-up at a specialty body shop. Many exotic car owners in Miami drive their vehicles on the Palmetto Expressway and Dolphin Expressway, where construction zones create a gauntlet of loose aggregate, metal fragments, and kicked-up road debris that conventional waxes and sealants simply cannot stop.",
            "At Bespoke Auto Design, we've protected over 500 vehicles — including Ferraris, Lamborghinis, McLarens, Rolls-Royces, and Bentleys — with XPEL's precision-cut DAP (Design Access Program) templates. These computer-generated patterns are specific to each make, model, and year, ensuring edge-to-edge coverage with no visible seams or gaps. For exotic cars, we hand-finish every tuck and wrap to accommodate aggressive body lines, air intakes, and carbon fiber accents that generic films simply cannot handle.",
          ],
        },
        {
          heading: "Trucks & SUVs: Ford F-150, Chevrolet Tahoe & Range Rover",
          image: clearPPFVehicles[7].image,
          imagePos: "object-[center_55%]",
          alt: "Toyota Land Cruiser with XPEL PPF",
          paragraphs: [
            "Trucks and SUVs face unique paint protection challenges in Miami. Vehicles like the Ford F-150 Raptor, Chevrolet Tahoe, GMC Yukon, Toyota 4Runner, and Range Rover Sport sit higher off the ground and have larger frontal areas that catch more road debris at highway speeds. Their rocker panels, wheel arches, and lower door panels are especially vulnerable to gravel spray — both from their own tires and from vehicles in adjacent lanes. If you tow a boat from your driveway in Coral Gables to a marina on Key Biscayne, the road spray alone can pepper your truck bed sides and tailgate with hundreds of tiny chips over a single season.",
            "Our Track Package ($2,500+) and Full Body coverage ($4,000+) are specifically popular with truck and SUV owners in Miami because they extend protection to the rocker panels, rear bumper, A-pillars, and door edges that take the brunt of daily driving abuse. The XPEL film is 8 mils thick — providing a substantial physical barrier that shrugs off impacts that would gouge bare paint.",
          ],
        },
        {
          heading: "Daily Drivers & Commuters",
          image: clearPPFVehicles[10].image,
          imagePos: "object-[center_55%]",
          alt: "Tesla Model 3 with XPEL PPF",
          paragraphs: [
            "You don't need a six-figure vehicle to benefit from PPF. If you commute on I-95, 826 (Palmetto Expressway), SR-836 (Dolphin Expressway), or the Turnpike, your car's front end is absorbing punishment every single day. Our Full Front Package starting at $1,499 covers the hood, front bumper, fenders, headlights, and side mirrors — the areas that take 90% of road impact damage.",
            "This single investment can save you thousands in paint correction, touch-up paint pens, and diminished resale value over the life of your vehicle. Many of our daily-driver clients recoup the cost of PPF when they sell or trade in their vehicle, because a chip-free, pristine front end commands significantly higher resale prices.",
          ],
        },
      ].map((row, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={row.heading} className="relative" style={{ backgroundColor: '#111111' }}>
            <div className="relative grid md:grid-cols-2 min-h-[500px]">
              <div className={`relative min-h-[300px] md:min-h-[500px] order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                <img src={row.image} alt={row.alt} loading="lazy" className={`absolute inset-0 w-full h-full object-cover ${row.imagePos}`} width={1200} height={800} />
                <div className="absolute inset-0 hidden md:block" style={{ background: reverse
                  ? 'linear-gradient(to left, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)'
                  : 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)' }} />
              </div>
              <div className={`relative z-20 flex items-center px-6 md:px-16 py-16 md:py-20 order-1 ${reverse ? 'md:order-2' : 'md:order-1'}`} style={{ backgroundColor: '#111111' }}>
                <div className="max-w-xl space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair">{row.heading}</h3>
                  {row.paragraphs.map((p, j) => (
                    <p key={j} className="text-base md:text-lg text-silver leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════
         INSTALLATION FACILITY — Split row + process grid
         ═══════════════════════════════════════════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-2 min-h-[500px]">
          <div className="relative min-h-[300px] md:min-h-[500px] order-2 md:order-1">
            <img src={clearPPFVehicles[1].image} alt="Rolls-Royce Cullinan in our Miami installation facility" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_65%]" width={1200} height={800} />
            <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to left, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)' }} />
          </div>
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24 order-1 md:order-2" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-6">
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">Our Facility</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                Miami's Premier XPEL Installation Facility
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                Paint protection film installation is only as good as the environment it's performed in. Our purpose-built facility at <strong className="text-white">7943 NW 64th St</strong> in Miami's Doral area features a climate-controlled installation bay engineered for flawless PPF application — critical in South Florida's 90°F+ tropical climate.
              </p>
              <p className="text-lg text-silver leading-relaxed">
                Every installation follows a rigorous multi-step process that begins long before the film touches your paint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation steps grid */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Installation Process</Badge>
              <h3 className="text-2xl md:text-4xl font-bold font-playfair">Six Steps to a Flawless Install</h3>
            </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "1. Full Decontamination Wash", desc: "Your vehicle receives a thorough hand wash using pH-neutral shampoo, followed by a chemical decontamination spray to dissolve embedded iron particles, brake dust, and industrial fallout that cling to Miami vehicles." },
                  { step: "2. Clay Bar Treatment", desc: "A professional-grade clay bar is used across every panel to physically remove bonded surface contaminants — tree sap, tar spots, overspray, and mineral deposits that washing alone cannot eliminate." },
                  { step: "3. Paint Correction", desc: "Light paint correction removes swirl marks, light scratches, and oxidation so that the PPF locks in a flawless finish. We correct the paint before applying film because imperfections sealed under PPF are permanently visible." },
                  { step: "4. Computer-Cut Film Application", desc: "XPEL's DAP software generates precision-cut templates specific to your vehicle's exact make, model, and year. Each panel is applied using a controlled wet-lay technique, then carefully squeegeed to remove all moisture and air." },
                  { step: "5. Edge Wrapping & Tucking", desc: "Film edges are wrapped around panel edges or tucked into body seams to create invisible termination points. This prevents peeling and ensures the film looks factory-installed, not aftermarket." },
                  { step: "6. Multi-Point Quality Inspection", desc: "Under specialized LED lighting, every panel is inspected for dust inclusions, air pockets, lifting edges, and alignment. Any imperfection is corrected before your vehicle leaves our facility." },
                ].map((item) => (
                  <div key={item.step} className="bg-card border border-border rounded-xl p-5 space-y-2">
                    <h4 className="font-bold text-foreground">{item.step}</h4>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                Our XPEL-certified installers have collectively completed over 500 installations on vehicles ranging from Honda Civics to Ferrari F8 Tributos. Every technician is factory-trained through XPEL's certification program and participates in ongoing advanced training to stay current with new film technologies, application techniques, and vehicle-specific installation challenges.
              </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         PPF VS CERAMIC COATING — Split row (text left / photo right)
         ═══════════════════════════════════════════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-2 min-h-[500px]">
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-5">
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">Comparison Guide</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                PPF vs Ceramic Coating
              </h2>
              <p className="text-base md:text-lg text-silver leading-relaxed">
                These are complementary technologies that address different threats — for many Miami vehicle owners, the best solution combines both.
              </p>
              <p className="text-base md:text-lg text-silver leading-relaxed">
                <strong className="text-white">PPF</strong> is a physical 8-mil barrier that absorbs impacts from rock chips, gravel, and road debris. It's the only product that prevents paint damage from physical contact, with a self-healing top coat that eliminates light scratches with heat.
              </p>
              <p className="text-base md:text-lg text-silver leading-relaxed">
                <strong className="text-white">Ceramic Coating</strong> is a liquid nano-ceramic layer that bonds to paint or PPF — creating a hydrophobic surface with UV protection, chemical resistance, and extreme gloss. It does not prevent rock chips, but it dramatically simplifies washing and resists water spots, bird droppings, and acid rain.
              </p>
              <p className="text-base md:text-lg text-silver leading-relaxed">
                <strong className="text-gold">The Ultimate Stack:</strong> Full Front or Full Body PPF on impact areas + Fusion Plus™ ceramic coating over the entire vehicle. We offer bundled PPF + ceramic packages starting at $599 for ceramic that save vs. booking each service separately.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[500px]">
            <img src={clearPPFVehicles[6].image} alt="2024 Corvette Stingray with PPF and ceramic coating" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_55%]" width={1200} height={800} />
            <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         SERVING ALL OF MIAMI-DADE — Split row + neighborhoods grid
         ═══════════════════════════════════════════════════════ */}
      <section className="relative" style={{ backgroundColor: '#111111' }}>
        <div className="relative grid md:grid-cols-2 min-h-[500px]">
          <div className="relative min-h-[300px] md:min-h-[500px] order-2 md:order-1">
            <img src={clearPPFVehicles[8].image} alt="Ram 1500 with PPF in Miami" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_55%]" width={1200} height={800} />
            <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to left, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)' }} />
          </div>
          <div className="relative z-20 flex items-center px-6 md:px-16 py-16 md:py-24 order-1 md:order-2" style={{ backgroundColor: '#111111' }}>
            <div className="max-w-xl space-y-5">
              <Badge variant="outline" className="block w-fit border-silver-muted/40 text-silver">Service Area</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white">
                Serving All of Miami-Dade County
              </h2>
              <p className="text-base md:text-lg text-silver leading-relaxed">
                Bespoke Auto Design is located at <strong className="text-white">7943 NW 64th St, Miami, FL 33166</strong>, in the heart of the Doral business district — minutes from MIA and easily accessible from the Palmetto (SR-826) and Dolphin Expressway (SR-836).
              </p>
              <p className="text-base md:text-lg text-silver leading-relaxed">
                Many of our clients drive from as far as Fort Lauderdale, Weston, and Palm Beach County for our XPEL-certified installation quality, transparent pricing, and attention to detail. Miami's salt air, 3,000+ annual hours of UV, acidic rain, and constant highway construction make PPF the only product that comprehensively addresses every threat at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods grid */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair">Neighborhoods We Serve</h3>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Doral", "Brickell", "Coral Gables", "Miami Beach", "Aventura",
              "Coconut Grove", "Wynwood", "Kendall", "Homestead", "Key Biscayne",
              "Hialeah", "Pinecrest", "Sunny Isles Beach", "Bal Harbour", "South Miami",
              "Fort Lauderdale", "Hollywood", "Weston"
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Check className="h-4 w-4 text-gold shrink-0" />
                {area}
              </div>
            ))}
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
            <Button variant="premium" size="lg" onClick={() => { trackQuoteButton("ppf"); setQuoteModalOpen(true); }}>Request a Consultation<ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:7863959172" onClick={() => { trackPhoneCall(); trackPhoneClick("ppf"); }} className="flex items-center gap-2">
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
