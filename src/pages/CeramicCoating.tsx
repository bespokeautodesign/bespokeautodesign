import React, { useEffect } from "react";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Droplets, Sun, Zap, Car, Clock, Award, Sparkles, Layers } from "lucide-react";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";
import { WhyChooseUs, ceramicDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import { addStructuredData } from "@/utils/seoHelpers";
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
  

  useEffect(() => {
    document.title = "Ceramic Coating Miami | Professional Paint Protection | Bespoke Auto Design";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Professional ceramic coating in Miami, FL. Multi-layer nano-ceramic protection for luxury and exotic cars. Extreme gloss, UV defense, and hydrophobic performance. Get a free quote today."
      );
    }
    addOpenGraphTags(
      "Ceramic Coating Miami | Professional Paint Protection | Bespoke Auto Design",
      "Miami's premier ceramic coating installer. Multi-layer protection with extreme gloss, UV defense, and hydrophobic performance for luxury and exotic vehicles."
    );
    addCanonicalUrl("https://bespokeautodesign.com/ceramic-coating");
    addStructuredData({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Ceramic Coating Installation",
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
            "telephone": "+1-786-395-9172"
          },
          "areaServed": [
            { "@type": "City", "name": "Miami" },
            { "@type": "City", "name": "Miami Beach" },
            { "@type": "City", "name": "Coral Gables" },
            { "@type": "City", "name": "Brickell" }
          ],
          "description": "Professional ceramic coating installation in Miami. Multi-layer nano-ceramic protection for luxury and exotic vehicles."
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
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 hero-parallax">
        <div className="hero-parallax-bg">
          <img src={clearPPFVehicles[9].image} alt="2023 Corvette Z06 with ceramic coating" className="w-full h-full object-cover object-[center_60%] brightness-125" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 via-60% to-black/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-col items-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-16 w-auto opacity-80 brightness-200" />
              <span className="text-white font-semibold tracking-wider uppercase text-sm">
                Authorized XPEL Ceramic Installer
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight text-white drop-shadow-lg">
              XPEL Ceramic Coating <br className="hidden md:block" />
              <span className="text-white/70">in Miami</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              XPEL Fusion Plus™ — a professional-grade nano-ceramic coating that delivers unmatched gloss, UV defense, and hydrophobic performance, engineered to thrive in Miami's extreme climate.
            </p>
            <p className="text-lg font-semibold text-white/90 drop-shadow-md">
              Starting at $799 • Free Consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Get a Free Quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="silver" size="lg" asChild>
                <a href="tel:7863959172" className="flex items-center gap-2">
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
              <Card key={item.title} className="bg-background border-border shadow-premium hover:shadow-glow transition-shadow duration-300">
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
              <img src={xpelLogo} alt="XPEL" className="h-12 w-auto mx-auto opacity-80" />
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
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Get a PPF + Ceramic Quote <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>


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

      <RelatedServices currentSlug="ceramic-coating" />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Ceramic Coating" />
    </div>
  );
};

export default CeramicCoating;