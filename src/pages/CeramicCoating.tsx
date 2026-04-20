import { trackPhoneCall } from "@/utils/gadsConversions";
import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import { areaServed, providerSchema } from "@/utils/seoHelpers";
import { PricingCards } from "@/components/PricingCards";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Droplets, Sun, Zap, Car, Clock, Award, Sparkles, Layers } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { Link } from "react-router-dom";
import { WhyChooseUs, ceramicDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import xpelLogo from "@/assets/xpel-logo.svg";
import { clearPPFVehicles } from "@/data/portfolioVehicles";

const ceramicFaqs = [
  {
    question: "How much does ceramic coating cost in Miami?",
    answer: "Ceramic coating pricing depends on the level of paint correction needed and the package selected. A single-layer coating starts around $800–$1,200, while multi-layer professional coatings with full paint correction range from $1,500–$3,500+. Larger vehicles and exotic cars may cost more. Contact us for a personalized quote."
  },
  {
    question: "How long does ceramic coating last in Miami's climate?",
    answer: "Professional-grade ceramic coatings installed at Bespoke Auto Design last 2–7+ years depending on the package. Our premium multi-layer coatings are specifically formulated to withstand Miami's intense UV exposure, humidity, and salt air. With proper maintenance, your coating will continue to perform and protect throughout its rated lifespan."
  },
  {
    question: "What is the difference between ceramic coating and wax?",
    answer: "Traditional wax lasts weeks and offers minimal protection. Ceramic coating is a semi-permanent nano-ceramic layer that chemically bonds to your paint, providing years of protection against UV, chemical etching, water spots, and contaminants. It also delivers a deeper, more intense gloss that wax simply cannot match — especially important under Miami's bright sun."
  },
  {
    question: "Can ceramic coating prevent scratches?",
    answer: "Ceramic coating adds a hard, sacrificial layer (9H hardness) that resists light marring and wash-induced swirl marks. However, it is not a substitute for paint protection film (PPF) when it comes to rock chips and deep scratches. Many of our Miami clients combine PPF on high-impact areas with ceramic coating on the rest of the vehicle for comprehensive protection."
  },
  {
    question: "Do I still need to wash my car after ceramic coating?",
    answer: "Yes, but washing becomes dramatically easier. Ceramic coating's hydrophobic properties cause water, dirt, and contaminants to bead and slide off the surface. Most road grime rinses away with just water, and bird droppings or bug splatter wipe off effortlessly. We recommend hand washing every 2–3 weeks to maintain the coating's performance."
  },
  {
    question: "How long does ceramic coating installation take?",
    answer: "A professional ceramic coating installation takes 2–5 days depending on the package. This includes multi-stage paint correction (removing swirl marks, scratches, and oxidation), surface decontamination, and precise coating application with controlled curing. We never rush the process — your vehicle stays in our climate-controlled facility throughout."
  },
  {
    question: "Is ceramic coating worth it in Miami?",
    answer: "Absolutely. Miami's combination of extreme UV, salt air, acid rain, and constant sun exposure makes ceramic coating one of the best investments for any vehicle. It prevents UV-induced paint oxidation, protects against chemical etching from bird droppings and tree sap, and keeps your finish looking showroom-fresh with minimal maintenance."
  },
  {
    question: "Can ceramic coating be applied over paint protection film?",
    answer: "Yes — and we highly recommend it. Applying ceramic coating over PPF enhances the film's hydrophobic properties, makes it easier to clean, and adds an extra layer of UV protection. This combination is the ultimate protection stack and is one of our most popular requests from luxury and exotic car owners in Miami."
  },
];

const CeramicCoating = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  const ceramicStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Ceramic Coating Installation",
        "provider": providerSchema,
        "areaServed": areaServed,
        "description": "Professional ceramic coating installation in Miami. Multi-layer nano-ceramic protection for luxury and exotic vehicles.",
        "offers": {
          "@type": "Offer",
          "price": "599",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": ceramicFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Ceramic Coating Miami | Starting at $599 | Bespoke Auto Design"
        description="Professional ceramic coating in Miami, FL. Multi-layer nano-ceramic protection for luxury and exotic cars. Extreme gloss, UV defense, and hydrophobic performance. Get a free quote today."
        canonical="https://www.bespokeauto.design/ceramic-coating"
        structuredData={ceramicStructuredData}
      />
      <Navbar />
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Ceramic Coating", path: "/ceramic-coating", current: true }]} />
      </div>

      {/* Instant Quote CTA */}
      <div className="bg-amber-500/10 border-y border-amber-500/20">
        <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-3 text-sm">
          <span className="text-amber-400 font-medium">💡 Get an instant price range for your vehicle</span>
          <Link to="/instant-quote" className="inline-flex items-center gap-1 text-amber-400 font-bold hover:text-amber-300 underline underline-offset-2">Try the Instant Quote Calculator <ChevronRight className="w-3.5 h-3.5" /></Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-8 md:py-12 hero-parallax">
        <div className="hero-parallax-bg">
          <img src={clearPPFVehicles[9].image} alt="2023 Corvette Z06 with ceramic coating" className="w-full h-full object-cover object-[center_75%] brightness-125"  width={1920} height={1080} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-col items-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-16 w-auto opacity-80 brightness-200"  width={200} height={60} />
              <span className="text-white font-semibold tracking-wider uppercase text-sm drop-shadow-md" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
                Authorized XPEL Ceramic Installer
              </span>
            </div>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight text-white drop-shadow-lg" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.8), 0 4px 32px rgba(0,0,0,0.4)' }}>
               Professional Ceramic Coating <br className="hidden md:block" /> in Miami, FL
             </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>
              XPEL Fusion Plus™ — a professional-grade nano-ceramic coating that delivers unmatched gloss, UV defense, and hydrophobic performance, engineered to thrive in Miami's extreme climate.
            </p>
            <p className="text-lg font-semibold text-white/90 drop-shadow-md">
              Starting at $599 • Free Consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="premium" size="lg" onClick={() => { trackQuoteButton("ceramic_coating"); setQuoteModalOpen(true); }}>
                Get a Free Quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="silver" size="lg" asChild>
                <a href="tel:7863959172" onClick={() => { trackPhoneCall(); trackPhoneClick("ceramic_coating"); }} className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Call (786) 395-9172
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          WHAT IS CERAMIC COATING?
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="block w-fit mx-auto">What Is Ceramic Coating?</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center">
              Nano-Ceramic Paint Protection
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ceramic coating is a liquid polymer made of silicon dioxide (SiO₂) that chemically bonds to your vehicle's factory paint, creating a permanent or semi-permanent layer of protection. Unlike traditional wax or sealant that sits on top of the paint and washes away within weeks, ceramic coating becomes part of the surface — forming an ultra-hard, glass-like shell rated at <strong className="text-foreground">9H hardness</strong>.
              </p>
              <p>
                At Bespoke Auto Design in Miami, we exclusively install <strong className="text-foreground">XPEL Fusion Plus™</strong> — the professional-grade ceramic coating system from XPEL, the same brand trusted for our paint protection film installations. Fusion Plus is <strong className="text-foreground">not available in consumer-grade products</strong> and contains higher concentrations of SiO₂ and TiO₂ (titanium dioxide) for superior UV protection, chemical resistance, and longevity — critical advantages in South Florida's relentless sun and salt-air environment.
              </p>
              <p>
                The result is a vehicle that repels water, resists contamination, and maintains an intense, liquid-like gloss that turns heads on Ocean Drive, Brickell, and everywhere in between. XPEL Fusion Plus doesn't just protect your paint — it transforms the way your vehicle looks and feels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BENEFITS OF CERAMIC COATING
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Ceramic Coating?</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Benefits of Ceramic Coating in Miami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              South Florida's harsh climate demands more than wax. Here's why ceramic coating is the smartest investment for your vehicle's finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sun,
                title: "UV & Oxidation Defense",
                desc: "Miami's UV index regularly exceeds 11 — extreme by global standards. Ceramic coating blocks UV rays that cause paint oxidation, fading, and clear coat degradation, keeping your color vibrant for years.",
              },
              {
                icon: Droplets,
                title: "Extreme Hydrophobic Effect",
                desc: "Water beads and sheets off the surface instantly, carrying dirt and contaminants with it. Rain becomes a self-cleaning event, and water spots are virtually eliminated — a game-changer in Miami's daily afternoon showers.",
              },
              {
                icon: Sparkles,
                title: "Mirror-Like Gloss",
                desc: "Ceramic coating enhances your paint's depth and clarity to levels that wax simply cannot achieve. The nano-ceramic layer refracts light for a deep, wet, glass-like shine that lasts years, not weeks.",
              },
              {
                icon: Shield,
                title: "Chemical Resistance",
                desc: "Bird droppings, tree sap, bug splatter, acid rain, and salt spray are relentless in Miami. Ceramic coating's chemical-resistant surface prevents these contaminants from etching into your paint.",
              },
              {
                icon: Layers,
                title: "9H Hardness Rating",
                desc: "Professional ceramic coatings achieve a 9H pencil hardness rating — the highest on the scale. This hard, sacrificial layer resists light marring, wash-induced swirl marks, and everyday surface contact.",
              },
              {
                icon: Car,
                title: "Resale Value Preservation",
                desc: "A ceramic-coated vehicle maintains showroom-quality paint condition for years. When it's time to sell or trade in, your vehicle's pristine exterior commands a premium in the competitive South Florida market.",
              },
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border/60 shadow-premium hover:shadow-glow transition-shadow duration-300">
                <CardContent className="pt-8 pb-6 px-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CERAMIC COATING vs WAX vs SEALANT
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Comparison</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Ceramic Coating vs. Wax vs. Sealant
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Not all paint protection is equal. See how ceramic coating stacks up against traditional options.
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-lg font-bold">Feature</th>
                  <th className="py-4 px-6 text-lg font-bold text-muted-foreground">Wax</th>
                  <th className="py-4 px-6 text-lg font-bold text-muted-foreground">Paint Sealant</th>
                  <th className="py-4 px-6 text-lg font-bold text-primary">Ceramic Coating</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  { feature: "Durability", wax: "2–4 weeks", sealant: "3–6 months", ceramic: "2–7+ years" },
                  { feature: "UV Protection", wax: "Minimal", sealant: "Moderate", ceramic: "Maximum" },
                  { feature: "Hydrophobic Effect", wax: "Low", sealant: "Moderate", ceramic: "Extreme" },
                  { feature: "Chemical Resistance", wax: "None", sealant: "Low", ceramic: "High" },
                  { feature: "Scratch Resistance", wax: "None", sealant: "None", ceramic: "9H Hardness" },
                  { feature: "Gloss Level", wax: "Good", sealant: "Good", ceramic: "Mirror-Like" },
                  { feature: "Maintenance", wax: "Reapply monthly", sealant: "Reapply quarterly", ceramic: "Wash & enjoy" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-6 font-semibold text-foreground">{row.feature}</td>
                    <td className="py-4 px-6">{row.wax}</td>
                    <td className="py-4 px-6">{row.sealant}</td>
                    <td className="py-4 px-6 text-foreground font-semibold">{row.ceramic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE XPEL FUSION PLUS ADVANTAGE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <img src={xpelLogo} alt="XPEL" className="h-12 w-auto mx-auto opacity-80"  width={200} height={60} />
              <Badge variant="outline">Why XPEL Fusion Plus?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                The XPEL Fusion Plus™ Advantage
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                XPEL Fusion Plus™ is a professional-only ceramic coating system designed to complement XPEL's paint protection film lineup. As a <strong className="text-foreground">certified XPEL installer in Miami</strong>, Bespoke Auto Design applies Fusion Plus using XPEL's proprietary process — ensuring maximum bonding, durability, and performance in South Florida's demanding climate.
              </p>
              <p>
                Unlike generic ceramic coatings available online, XPEL Fusion Plus is formulated with a <strong className="text-foreground">higher SiO₂ concentration</strong> and advanced UV inhibitors that are purpose-built for high-UV, high-humidity environments like Miami. The result is a coating that lasts longer, shines deeper, and protects harder than anything you can buy off a shelf.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 py-4">
              {[
                "Professional-only formula — not available retail",
                "Pairs seamlessly with XPEL Ultimate Plus PPF",
                "Advanced UV inhibitors for Miami's extreme sun",
                "Extreme hydrophobic surface — water contact angle 115°+",
                "Chemical resistant against bird droppings, sap & salt",
                "Backed by XPEL's manufacturer warranty",
                "Can be applied to paint, PPF, wheels, glass & trim",
                "Installed by certified XPEL technicians only",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR PROCESS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              How We Apply Ceramic Coating
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A meticulous, multi-day process in our climate-controlled Miami facility. No shortcuts, no compromises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Inspection", desc: "Detailed assessment of paint condition, defects, and prior coatings under controlled lighting." },
              { step: "02", title: "Decontamination", desc: "Chemical decontamination, clay bar treatment, and iron fallout removal to strip the surface clean." },
              { step: "03", title: "Paint Correction", desc: "Multi-stage machine polishing to remove swirl marks, scratches, and oxidation — restoring factory clarity." },
              { step: "04", title: "Coating Application", desc: "Professional-grade ceramic coating applied panel-by-panel in controlled temperature and humidity." },
              { step: "05", title: "Curing & Inspection", desc: "Infrared curing followed by multi-point quality inspection under specialized lighting." },
            ].map((item) => (
              <div key={item.step} className="space-y-4 text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-2xl font-bold font-playfair">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PPF + CERAMIC COMBO
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="outline">Ultimate Protection Stack</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                PPF + Ceramic Coating
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For clients who want the absolute best protection available, we recommend combining <strong className="text-foreground">paint protection film (PPF)</strong> on high-impact zones with <strong className="text-foreground">ceramic coating</strong> over the entire vehicle — including on top of the PPF itself.
              </p>
              <p>
                This combination delivers the physical impact resistance of PPF (rock chips, scratches, road debris) together with the chemical resistance, hydrophobic performance, and enhanced gloss of ceramic coating. The result is a vehicle that is virtually immune to Miami's environmental onslaught.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 py-4">
              {[
                "PPF absorbs physical impacts; ceramic repels chemicals",
                "Ceramic over PPF enhances hydrophobic performance",
                "Combined UV protection from both layers",
                "Easier maintenance — contaminants slide off both surfaces",
                "Maximum resale value preservation",
                "The choice of exotic and luxury car owners worldwide",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <Button variant="premium" size="lg" onClick={() => { trackQuoteButton("ceramic_coating"); setQuoteModalOpen(true); }}>
                Get a PPF + Ceramic Quote <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing */}
      <PricingCards
        title="Ceramic Coating Pricing"
        subtitle="Professional-grade nano-ceramic protection with multi-stage paint correction included."
        tiers={[
          { name: "Ceramic Coating", price: "$599", priceLabel: "Starting at", description: "Professional ceramic coating with paint correction and long-lasting hydrophobic protection.", features: ["Multi-stage paint correction", "Nano-ceramic bonded layer", "Extreme hydrophobic finish", "5-year warranty", "UV & chemical resistance"], popular: true },
        ]}
        onGetQuote={() => setQuoteModalOpen(true)}
        footnote="Final pricing depends on vehicle size, paint condition, and coating package selected."
      />

      {/* Why Choose Bespoke */}
      <WhyChooseUs variant="service" differentiators={ceramicDifferentiators} title="Why Choose Bespoke for Ceramic Coating" />

      {/* ═══════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Ceramic Coating FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about ceramic coating in Miami.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {ceramicFaqs.map((faq, index) => (
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

      {/* ═══════════════════════════════════════════════════════
          WHY CERAMIC COATING IS ESSENTIAL IN MIAMI
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Miami Climate Defense</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Why Ceramic Coating Is Essential in Miami
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Miami's tropical climate is beautiful to live in — but brutal on automotive paint. With over 3,000 hours of direct sunlight per year, Miami vehicles endure some of the most intense ultraviolet radiation in the continental United States. This constant UV bombardment breaks down the molecular bonds in your clear coat, causing oxidation, fading, and a chalky appearance that ages your vehicle prematurely. A professional-grade ceramic coating like XPEL Fusion Plus™ creates a UV-resistant barrier that blocks these harmful rays and preserves your paint's depth, gloss, and color for years.
              </p>
              <p>
                But UV is only one threat. Miami's proximity to the Atlantic Ocean and Biscayne Bay means that salt-laden air is constantly settling on your vehicle's surfaces — even if you never drive to the beach. This microscopic salt film accelerates corrosion of exposed metal trim and degrades clear coat integrity over time. The region's high humidity (averaging 73% year-round) compounds the problem by trapping moisture and contaminants against the paint surface, creating the perfect conditions for water spot etching and mineral deposit bonding.
              </p>
              <p>
                South Florida's frequent afternoon thunderstorms deposit acidic rain that contains pollutants, sulfur compounds, and dissolved minerals. When this rain evaporates on a hot paint surface, it leaves behind mineral rings and acid etch marks that permanently damage unprotected clear coat. Ceramic coating's extreme hydrophobic properties cause water to bead and sheet off the surface before it has a chance to evaporate and etch — effectively eliminating one of Miami's most common forms of paint damage.
              </p>
              <p>
                Then there are the organic hazards that plague South Florida vehicles year-round: bird droppings (which contain uric acid that can etch paint within hours in Miami's heat), tree sap from banyan and ficus trees, love bug splatter during the biannual swarm season, and pollen that bonds to warm surfaces and stains untreated paint. XPEL Fusion Plus™ creates a sacrificial nano-ceramic layer that prevents these contaminants from chemically bonding to your paint — they sit on top of the coating and wipe off effortlessly with a simple rinse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR CERAMIC COATING PROCESS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Our XPEL Fusion Plus Ceramic Coating Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A professional ceramic coating is only as good as the preparation that precedes it. Our meticulous multi-step process ensures your coating bonds to a flawless surface and delivers maximum performance and longevity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: "1. Thorough Hand Wash & Decontamination", desc: "Your vehicle receives a multi-stage hand wash using pH-neutral shampoo, followed by an iron-removing chemical decontamination spray that dissolves embedded brake dust, industrial fallout, and ferrous particles invisible to the naked eye. In Miami's environment, these contaminants accumulate rapidly due to construction dust, road salt, and coastal mineral deposits." },
                { step: "2. Clay Bar Treatment", desc: "A professional-grade synthetic clay bar is worked across every painted panel to physically remove bonded surface contaminants that chemical washes leave behind — including tree sap, tar spots, overspray from Miami's constant construction activity, and stubborn mineral deposits from hard water. The result is a glass-smooth surface ready for correction." },
                { step: "3. Multi-Stage Paint Correction", desc: "This is the most critical — and most time-consuming — step. Using dual-action polishers with progressively finer cutting compounds, we remove swirl marks, wash scratches, light marring, and UV-induced oxidation. Since ceramic coating permanently locks in whatever finish is underneath, we ensure the paint is flawless before a single drop of coating is applied. Paint correction alone can take 4–12 hours depending on the vehicle's condition." },
                { step: "4. Surface Preparation & IPA Wipe", desc: "After correction, every panel is wiped down with an isopropyl alcohol (IPA) solution to strip all polishing oils, residual compounds, and surface tension modifiers. This ensures the ceramic coating bonds directly to bare, corrected paint — not to a layer of polish residue that would compromise adhesion and longevity." },
                { step: "5. XPEL Fusion Plus Application", desc: "In our climate-controlled facility (critical in Miami's humidity), XPEL Fusion Plus™ is applied panel by panel using cross-hatch application technique. Each panel is coated, allowed to flash for the precise recommended time, then leveled with a microfiber towel. The SiO₂ ceramic particles bond at a molecular level to the clear coat, creating a permanent layer of protection with a 9H hardness rating." },
                { step: "6. 24-Hour Controlled Cure & Final Inspection", desc: "Your vehicle remains in our climate-controlled bay for a full 24-hour cure period, during which temperature and humidity are carefully maintained to ensure complete cross-linking of the ceramic molecules. After curing, a comprehensive final inspection under LED inspection lighting verifies uniform application, proper leveling, and the absence of high spots or streaking." },
              ].map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-foreground">{item.step}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CERAMIC COATING FOR EVERY VEHICLE TYPE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Vehicle Coverage</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Ceramic Coating for Every Vehicle Type
              </h2>
            </div>
            <div className="space-y-10 text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Luxury Sedans & EVs: Tesla, BMW, Mercedes-Benz</h3>
                <p>
                  Ceramic coating has become the go-to protection for Miami's growing fleet of Tesla Model 3 and Model Y owners. Tesla's factory paint — while visually stunning — is notoriously thin and soft, making it highly susceptible to swirl marks from automatic car washes, water spot etching from Miami's mineral-rich tap water, and UV-induced oxidation. XPEL Fusion Plus adds a 9H-hardness sacrificial layer that resists these threats while making your Tesla dramatically easier to keep clean. The hydrophobic finish means that after a rainstorm, your car looks like it was just washed — water beads and sheets off, carrying contaminants with it.
                </p>
                <p>
                  For BMW M-series owners (M3, M4, M5) and Mercedes-AMG drivers, ceramic coating preserves the deep metallic and pearlescent finishes that these manufacturers are known for. The coating's light-refracting properties actually enhance the depth and clarity of factory paint, producing a "wet look" gloss that wax and sealants simply cannot replicate. In Miami's intense sunlight, this difference is immediately visible — coated vehicles have a mirror-like depth that uncoated cars lose within months of exposure.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Sports Cars & Exotics: Porsche, Corvette, McLaren</h3>
                <p>
                  High-performance vehicles like the Porsche 911, Chevrolet Corvette Z06, and McLaren 720S deserve protection that matches their engineering. These vehicles are often driven aggressively, parked at car shows and rallies, and washed frequently — all of which introduce swirl marks and micro-marring into the paint. Ceramic coating provides a hardened surface that resists these everyday paint degradation sources while delivering a showroom-quality finish that makes these vehicles stand out at Festivals of Speed, Cars and Coffee Aventura, and Miami Concours events.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">SUVs & Trucks: Porsche Cayenne, Range Rover, Ford F-150</h3>
                <p>
                  Larger vehicles like the Porsche Cayenne, Range Rover Sport, Land Rover Defender, and Ford F-150 have significantly more painted surface area — which means more surface exposed to Miami's UV, salt air, and environmental contaminants. Ceramic coating these vehicles provides comprehensive protection across every panel, including door jambs, lower cladding, and painted bumper surfaces that are particularly vulnerable to water spot etching from sprinkler overspray and road grime accumulation. Many of our SUV clients combine ceramic coating with PPF on the front end for a complete protection package.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">New Car Preparation</h3>
                <p>
                  The best time to ceramic coat a vehicle is when it's brand new — before Miami's environment has a chance to damage the factory finish. New car paint typically requires only light correction (removing dealer wash marks and transport-induced marring) before coating application, which reduces preparation time and cost. We recommend new vehicle owners schedule ceramic coating within the first 30 days of ownership for optimal results. Many of our clients coordinate with their dealership to have the vehicle delivered directly to Bespoke Auto Design before they even drive it — ensuring the paint is protected from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CERAMIC COATING VS PPF VS WAX
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Comparison Guide</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Ceramic Coating vs PPF vs Wax: Understanding Your Options
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Choosing the right paint protection for your Miami vehicle can be confusing. Here's a straightforward breakdown of the three main options — and why many of our clients ultimately choose more than one.
              </p>
              <p>
                <strong className="text-foreground">Traditional Wax & Sealants</strong> provide a temporary sacrificial layer that adds gloss and mild water-beading capability. However, wax typically lasts only 4–8 weeks in Miami's climate before UV and heat break it down. You're essentially re-applying product every month to maintain any meaningful protection — and even at its peak performance, wax offers minimal defense against UV damage, chemical etching, or hard water spotting. For a vehicle parked outdoors in Brickell or Miami Beach, wax is not a viable long-term solution.
              </p>
              <p>
                <strong className="text-foreground">Ceramic Coating (XPEL Fusion Plus™)</strong> is a semi-permanent nano-ceramic layer that chemically bonds to your paint's clear coat. Once cured, it cannot be washed off — it becomes part of the paint surface. Ceramic coating provides 2–7+ years of hydrophobic protection, UV resistance, chemical resistance, and enhanced gloss. It makes washing dramatically easier and protects against water spots, bird dropping etching, and oxidation. However, ceramic coating is a thin chemical layer (typically 1–2 microns) — it does not provide physical impact protection against rock chips or scratches.
              </p>
              <p>
                <strong className="text-foreground">Paint Protection Film (PPF)</strong> is a thick (8-mil) thermoplastic urethane film that provides a physical barrier against rock chips, gravel, road debris, key scratches, and shopping cart dings. PPF is the only product that can prevent paint damage from physical contact. It also offers UV protection and self-healing properties. However, PPF alone doesn't provide the same hydrophobic, self-cleaning surface that ceramic coating delivers.
              </p>
              <p>
                <strong className="text-foreground">The Ultimate Combination:</strong> Our most popular package among discerning Miami car owners is PPF on the high-impact areas (full front or full body) with XPEL Fusion Plus ceramic coating applied over the entire vehicle — including over the PPF. This gives you the rock-chip and scratch resistance of PPF combined with the hydrophobic self-cleaning, UV defense, and extreme gloss of ceramic coating. The ceramic layer on top of PPF also extends the film's cosmetic lifespan, prevents yellowing, and makes it dramatically easier to clean. Contact us about our bundled PPF + Ceramic Coating packages for the best value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVING MIAMI-DADE COUNTY
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Service Area</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Serving Miami-Dade County
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bespoke Auto Design is located at <strong className="text-foreground">7943 NW 64th St, Miami, FL 33166</strong>, in the Doral business district — minutes from Miami International Airport and directly accessible from the Palmetto Expressway (SR-826) and Dolphin Expressway (SR-836). Our facility serves vehicle owners across all of Miami-Dade County and the greater South Florida region.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Doral", "Brickell", "Coral Gables", "Miami Beach", "Aventura",
                  "Coconut Grove", "Wynwood", "Kendall", "Hialeah", "Miami Lakes",
                  "Pinecrest", "Key Biscayne", "South Miami", "Sunny Isles Beach",
                  "Fort Lauderdale", "Hollywood", "Weston", "Pembroke Pines"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p>
                Whether you're a condo resident in Brickell looking for low-maintenance paint protection, a Coral Gables homeowner who wants showroom gloss year-round, or a business professional in Doral tired of water spots on your daily driver — our ceramic coating services are designed for the unique demands of Miami's climate. We offer flexible scheduling, early drop-off, and after-hours pickup by appointment to accommodate your busy schedule.
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
            Elevate Your Vehicle's Finish
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miami's premier ceramic coating installer. Schedule a consultation and get a custom quote — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="premium" size="lg" onClick={() => { trackQuoteButton("ceramic_coating"); setQuoteModalOpen(true); }}>
              Request a Free Quote <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:7863959172" onClick={() => { trackPhoneCall(); trackPhoneClick("ceramic_coating"); }} className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Call (786) 395-9172
              </a>
            </Button>
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="ceramic-coating" />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Ceramic Coating" />
    </div>
  );
};

export default CeramicCoating;