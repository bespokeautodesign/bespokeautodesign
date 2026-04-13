import { trackPhoneCall } from "@/utils/gadsConversions";
import { PricingCards, PricingTier } from "@/components/PricingCards";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Droplets, Sun, Zap, Car, Clock, Award } from "lucide-react";
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
        "provider": {
          "@type": "AutomotiveBusiness",
          "name": "Bespoke Auto Design",
          "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
          "telephone": "+1-786-395-9172",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" }
        },
        "areaServed": [
          { "@type": "City", "name": "Miami" }, { "@type": "City", "name": "Miami Beach" }, { "@type": "City", "name": "Coral Gables" }, { "@type": "City", "name": "Doral" }, { "@type": "City", "name": "Brickell" }
        ],
        "description": "Professional XPEL paint protection film installation in Miami. Self-healing, invisible armor for luxury and exotic vehicles.",
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

      {/* ═══════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/ppf-hero-ferrari.webp" alt="Black Ferrari F8 Tributo with XPEL PPF at Bespoke Auto Design" className="w-full h-full object-cover object-[center_40%]"  width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 via-60% to-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
            <div className="flex items-center justify-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-6 md:h-8 w-auto opacity-80 brightness-200"  width={200} height={60} />
              <span className="text-white font-semibold tracking-wider uppercase text-xs md:text-sm drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                Miami's XPEL Certified Installer
              </span>
            </div>
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight text-white drop-shadow-lg" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.8), 0 4px 32px rgba(0,0,0,0.4)' }}>XPEL Paint Protection Film<br className="hidden md:block" /> (PPF) in Miami, FL
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
                <img src={clearPPFVehicles[0].image} alt="Ferrari California T with clear PPF" loading="lazy" className="w-full h-[300px] md:h-[400px] object-cover object-[center_60%]"  width={800} height={300} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-premium">
                  <img src={clearPPFVehicles[3].image} alt="Aston Martin Vantage with PPF" loading="lazy" className="w-full h-[150px] object-cover object-[center_60%]"  width={800} height={150} />
                </div>
                <div className="rounded-xl overflow-hidden shadow-premium">
                  <img src={clearPPFVehicles[4].image} alt="2024 BMW M4 with PPF" loading="lazy" className="w-full h-[150px] object-cover object-[center_75%]"  width={800} height={150} />
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
            <img src={clearPPFVehicles[1].image} alt="Rolls-Royce Cullinan with XPEL PPF" loading="lazy" className="w-full h-[350px] md:h-[500px] object-cover object-[center_65%]"  width={800} height={350} />
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
              <img src={xpelLogo} alt="XPEL" className="h-12 w-auto mx-auto opacity-80"  width={200} height={60} />
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
         PPF FOR EVERY MIAMI VEHICLE
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Vehicle Coverage</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                PPF Protection for Every Miami Vehicle
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you drive a daily commuter or a million-dollar supercar, Miami's roads and climate put your paint at constant risk. Here's how PPF protects every type of vehicle on South Florida's streets.
              </p>
            </div>

            <div className="space-y-10 text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Luxury Vehicles: Porsche, BMW, Mercedes-Benz & Tesla</h3>
                <p>
                  Miami is one of the largest luxury car markets in the United States, and for good reason — the lifestyle demands it. But owning a Porsche 911, BMW M4, Mercedes-AMG GT, or Tesla Model S in South Florida means exposing premium paint finishes to some of the harshest driving conditions in the country. I-95 between downtown Miami and Fort Lauderdale is notorious for loose gravel, construction debris, and aggressive lane-changing that sends rocks flying. A single highway commute can leave dozens of micro-chips in your hood and bumper paint that compound over time into costly repairs.
                </p>
                <p>
                  XPEL Ultimate Plus™ paint protection film absorbs these impacts without transferring damage to the underlying paint. The film's self-healing top coat means that light scratches — the kind you'd get from an automatic car wash or a careless parking lot neighbor — literally disappear in Miami's sun. For Tesla owners specifically, PPF is particularly valuable because Tesla's factory paint is notoriously thin (often measuring just 3.5–4.0 mils compared to the industry standard of 5.0–6.0 mils), making it extremely susceptible to chipping and marring.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Exotic & Supercar Protection: Lamborghini, Ferrari & McLaren</h3>
                <p>
                  If you own a Lamborghini Huracán, Ferrari 488 Spider, or McLaren 720S, paint protection film isn't optional — it's essential. These vehicles carry paint jobs worth $15,000 to $40,000 or more, and a single rock chip can mean a $2,000+ touch-up at a specialty body shop. Many exotic car owners in Miami drive their vehicles on the Palmetto Expressway and Dolphin Expressway, where construction zones create a gauntlet of loose aggregate, metal fragments, and kicked-up road debris that conventional waxes and sealants simply cannot stop.
                </p>
                <p>
                  At Bespoke Auto Design, we've protected over 500 vehicles — including Ferraris, Lamborghinis, McLarens, Rolls-Royces, and Bentleys — with XPEL's precision-cut DAP (Design Access Program) templates. These computer-generated patterns are specific to each make, model, and year, ensuring edge-to-edge coverage with no visible seams or gaps. For exotic cars, we hand-finish every tuck and wrap to accommodate aggressive body lines, air intakes, and carbon fiber accents that generic films simply cannot handle.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Trucks & SUVs: Ford F-150, Chevrolet Tahoe & Range Rover</h3>
                <p>
                  Trucks and SUVs face unique paint protection challenges in Miami. Vehicles like the Ford F-150 Raptor, Chevrolet Tahoe, GMC Yukon, Toyota 4Runner, and Range Rover Sport sit higher off the ground and have larger frontal areas that catch more road debris at highway speeds. Their rocker panels, wheel arches, and lower door panels are especially vulnerable to gravel spray — both from their own tires and from vehicles in adjacent lanes. If you tow a boat from your driveway in Coral Gables to a marina on Key Biscayne, the road spray alone can pepper your truck bed sides and tailgate with hundreds of tiny chips over a single season.
                </p>
                <p>
                  Our Track Package ($2,500+) and Full Body coverage ($4,000+) are specifically popular with truck and SUV owners in Miami because they extend protection to the rocker panels, rear bumper, A-pillars, and door edges that take the brunt of daily driving abuse. The XPEL film is 8 mils thick — providing a substantial physical barrier that shrugs off impacts that would gouge bare paint.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Daily Drivers & Commuters</h3>
                <p>
                  You don't need a six-figure vehicle to benefit from PPF. If you commute on I-95, 826 (Palmetto Expressway), SR-836 (Dolphin Expressway), or the Turnpike, your car's front end is absorbing punishment every single day. Our Full Front Package starting at $1,499 covers the hood, front bumper, fenders, headlights, and side mirrors — the areas that take 90% of road impact damage. This single investment can save you thousands in paint correction, touch-up paint pens, and diminished resale value over the life of your vehicle. Many of our daily-driver clients recoup the cost of PPF when they sell or trade in their vehicle, because a chip-free, pristine front end commands significantly higher resale prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         INSTALLATION FACILITY
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Our Facility</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Miami's Premier XPEL Installation Facility
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Paint protection film installation is only as good as the environment it's performed in. At Bespoke Auto Design, our purpose-built facility at 7943 NW 64th St in Miami (Doral area) is engineered specifically for flawless PPF application. Our climate-controlled installation bay maintains consistent temperature and humidity levels — two factors that are absolutely critical for proper film adhesion, slip solution performance, and curing times. In Miami's tropical climate, where outdoor temperatures routinely exceed 90°F with 80%+ humidity, attempting PPF installation in an uncontrolled garage or outdoor setting leads to premature adhesive activation, trapped moisture, and edge lifting that can compromise the entire installation.
              </p>
              <p>
                Every PPF installation at Bespoke Auto Design follows a rigorous multi-step process that begins long before the film touches your paint:
              </p>
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
              <p>
                Our XPEL-certified installers have collectively completed over 500 installations on vehicles ranging from Honda Civics to Ferrari F8 Tributos. Every technician is factory-trained through XPEL's certification program and participates in ongoing advanced training to stay current with new film technologies, application techniques, and vehicle-specific installation challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         PPF VS CERAMIC COATING
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Comparison Guide</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                PPF vs Ceramic Coating: Which Is Right for Your Miami Vehicle?
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This is one of the most common questions we hear at Bespoke Auto Design, and the answer depends on what you're protecting against. Paint Protection Film and ceramic coating are complementary technologies that address different threats — and for many Miami vehicle owners, the best solution is combining both.
              </p>
              <p>
                <strong className="text-foreground">Paint Protection Film (PPF)</strong> is a physical barrier — a thick, flexible urethane film that absorbs impacts from rock chips, gravel, road debris, shopping cart dings, and even minor fender contact. It's the only product on the market that can actually prevent paint damage from physical contact. XPEL Ultimate Plus™ is 8 mils thick and features a self-healing top coat that eliminates light scratches automatically with heat exposure. For Miami drivers who commute on I-95, the Palmetto Expressway, or any construction-heavy corridor, PPF on the front end is the single most effective way to keep your paint chip-free.
              </p>
              <p>
                <strong className="text-foreground">Ceramic Coating</strong>, on the other hand, is a liquid nano-ceramic layer that chemically bonds to your paint (or to PPF), creating a semi-permanent hydrophobic surface with enhanced UV protection, chemical resistance, and extreme gloss. Ceramic coating does not prevent rock chips — it's too thin for that. What it excels at is making your vehicle dramatically easier to wash, preventing water spots (a major issue in Miami's hard-water climate), blocking UV-induced paint oxidation, and resisting chemical etching from bird droppings, tree sap, and acid rain.
              </p>
              <p>
                <strong className="text-foreground">The Ultimate Protection Stack:</strong> Our most popular configuration among Miami luxury car owners is PPF on the high-impact areas (full front or full body) with ceramic coating applied over the entire vehicle — including over the PPF. This combination gives you the physical impact protection of PPF plus the hydrophobic self-cleaning properties, UV defense, and showroom gloss of ceramic coating. The ceramic layer on top of PPF also makes the film easier to clean, prevents staining, and extends the film's cosmetic life. We offer XPEL Fusion Plus™ ceramic coating starting at $799, and bundled PPF + ceramic packages that save you money compared to purchasing each service separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         SERVING ALL OF MIAMI-DADE
         ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Service Area</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Serving All of Miami-Dade County
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bespoke Auto Design is located at <strong className="text-foreground">7943 NW 64th St, Miami, FL 33166</strong>, in the heart of the Doral business district — just minutes from Miami International Airport and easily accessible from the Palmetto Expressway (SR-826) and the Dolphin Expressway (SR-836). Our central location makes us convenient for vehicle owners across the entire Miami-Dade metropolitan area.
              </p>
              <p>
                We proudly serve clients from every corner of Miami-Dade County and beyond, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Doral", "Brickell", "Coral Gables", "Miami Beach", "Aventura",
                  "Coconut Grove", "Wynwood", "Kendall", "Homestead", "Key Biscayne",
                  "Hialeah", "Pinecrest", "Sunny Isles Beach", "Bal Harbour", "South Miami",
                  "Fort Lauderdale", "Hollywood", "Weston"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p>
                Many of our clients drive from as far as Fort Lauderdale, Weston, and even Palm Beach County because of our reputation for XPEL-certified installation quality, transparent pricing, and attention to detail. Whether you're coming from a waterfront condo in Brickell, a family home in Kendall, or an office in the Doral business park, our facility is designed to accommodate your schedule — including early morning drop-offs and after-hours pickups by appointment.
              </p>
              <p>
                Miami's unique geography means your vehicle faces environmental threats that cars in other cities simply don't encounter. The salt air blowing in from Biscayne Bay and the Atlantic corrodes unprotected clear coat over time. The intense tropical UV radiation — Miami receives over 3,000 hours of direct sunlight per year — accelerates paint oxidation and fading. Florida's frequent afternoon thunderstorms deposit acidic rain that etches into softened paint surfaces. And the endless road construction across Miami-Dade's expanding highway system creates a perpetual stream of loose gravel, concrete chips, and metal debris that bombards your vehicle's front end every day. PPF is the only product that comprehensively addresses all of these threats simultaneously.
              </p>
            </div>
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
              <a href="tel:7863959172" onClick={() => trackPhoneCall()} className="flex items-center gap-2">
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
