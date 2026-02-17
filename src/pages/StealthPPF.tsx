import React, { useEffect } from "react";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Eye, Paintbrush, Sun, Car, Clock, Award, Layers } from "lucide-react";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";
import { WhyChooseUs, stealthDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import { addStructuredData } from "@/utils/seoHelpers";
import { Link } from "react-router-dom";
import xpelLogo from "@/assets/xpel-logo.svg";
import { stealthPPFVehicles, stealthPPFImageStyles } from "@/data/portfolioVehicles";
const stealthFaqs = [{
  question: "What is Stealth PPF and how is it different from clear PPF?",
  answer: "Stealth PPF (also known as matte or satin PPF) is a paint protection film with a matte-finish top coat instead of a glossy one. While it provides the same impact protection, self-healing properties, and UV resistance as clear PPF, Stealth transforms any gloss paint into a stunning satin finish — or preserves the factory matte on vehicles that come with it."
}, {
  question: "Can I put Stealth PPF on a glossy painted car?",
  answer: "Absolutely. That's one of the most popular uses of Stealth PPF. It takes a standard gloss-finish vehicle and gives it a head-turning satin/matte appearance while simultaneously protecting the paint. The best part? It's fully reversible — remove the film and your original gloss paint is pristine underneath."
}, {
  question: "Does Stealth PPF self-heal like clear PPF?",
  answer: "Yes. XPEL Stealth uses the same self-healing elastomeric polymer technology as Ultimate Plus™. Light scratches and swirl marks disappear with heat exposure — whether from Miami's sun, warm water, or a heat gun. The matte texture is maintained throughout the healing process."
}, {
  question: "How do I wash a car with Stealth PPF?",
  answer: "Hand wash only with a pH-neutral, wax-free soap. Avoid automatic car washes, polishes, and waxes — these can add gloss to the matte surface. For spot cleaning, use a matte-specific detailer. We provide detailed aftercare instructions with every Stealth installation."
}, {
  question: "How much does Stealth PPF cost in Miami?",
  answer: "Stealth PPF typically costs 15–25% more than clear XPEL Ultimate Plus™ due to the specialty finish. A Full Front Stealth package runs $1,800–$3,500, and Full Body Stealth ranges from $5,500–$10,000+ depending on vehicle size and complexity. Contact us for a personalized quote."
}, {
  question: "Will Stealth PPF yellow or change texture over time?",
  answer: "No. XPEL Stealth is engineered with UV-stabilized polymers that resist yellowing, even in Miami's extreme UV environment. The satin texture remains consistent throughout the film's lifespan. It's backed by XPEL's 10-year manufacturer warranty against yellowing, cracking, and peeling."
}, {
  question: "Can you wrap only certain panels in Stealth for a two-tone look?",
  answer: "Yes. Many clients combine Stealth PPF on specific panels (hood, roof, mirrors) with clear PPF on the rest of the vehicle for a unique two-tone satin-and-gloss aesthetic. This is especially popular on sports cars and exotics."
}, {
  question: "Is Stealth PPF good for factory matte paint?",
  answer: "It's essential. Factory matte paint is notoriously difficult and expensive to repair — you can't polish out scratches or buff imperfections like you can on gloss paint. Stealth PPF protects your matte finish from damage while preserving its exact factory texture. It's the only way to truly safeguard a matte-painted vehicle."
}];
const StealthPPF = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  
  useEffect(() => {
    document.title = "Stealth PPF Miami | Matte & Satin Paint Protection Film | Bespoke Auto Design";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "XPEL Stealth PPF installation in Miami. Transform your gloss paint to satin or protect factory matte finishes. Self-healing matte paint protection film with 10-year warranty.");
    }
    addOpenGraphTags("Stealth PPF Miami | Matte Paint Protection Film | Bespoke Auto Design", "Miami's premier XPEL Stealth PPF installer. Convert gloss to satin or protect factory matte paint with self-healing, invisible matte protection film.");
    addCanonicalUrl("https://bespokeautodesign.com/stealth-ppf");
    addStructuredData({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Stealth PPF (Matte Paint Protection Film) Installation",
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
            { "@type": "City", "name": "Coral Gables" }
          ],
          "description": "Professional XPEL Stealth matte/satin paint protection film installation in Miami. Self-healing technology with 10-year warranty."
        },
        {
          "@type": "FAQPage",
          "mainEntity": stealthFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        }
      ]
    });
  }, []);
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative py-14 md:py-20 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/stealth-ppf-rolls-royce.png" alt="Rolls Royce with Stealth PPF" className="w-full h-full object-cover object-[center_55%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent via-60% to-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-col items-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-28 w-auto opacity-80 brightness-200" />
              <span className="text-white font-semibold tracking-wider uppercase text-sm">AUTHORIZED XPEL DEALER</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight text-white">
              Stealth PPF <br className="hidden md:block" />
              <span className="text-white/70">Satin Protection</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform any gloss finish into a head-turning satin look — or preserve your factory matte paint — with XPEL's self-healing Stealth paint protection film.
            </p>
            <p className="text-lg font-semibold text-white/90">
              Starting at $4,500 • Free Consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Get a Free Quote <ChevronRight className="h-4 w-4" />
              </Button>
              <Link to="/paint-protection-film">
                <Button variant="silver" size="lg">
                  Compare to Clear PPF <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS STEALTH PPF */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="block w-fit">What Is Stealth PPF?</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                The Satin Finish That Protects
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  XPEL Stealth is a specialty paint protection film that delivers all the protective properties of XPEL Ultimate Plus™ — self-healing, impact resistance, UV protection, and stain resistance — with one critical difference: <strong className="text-foreground">a matte/satin finish</strong> instead of a high-gloss clear coat.
                </p>
                <p>
                  Unlike vinyl wraps that merely change appearance, Stealth PPF provides genuine physical protection while delivering that coveted understated aesthetic.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img src={stealthPPFVehicles[1].image} alt="Mercedes G-Wagon G63 AMG with Stealth PPF" loading="lazy" className="w-full h-[300px] md:h-[400px] object-cover object-[center_45%]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-premium">
                  <img src={stealthPPFVehicles[2].image} alt="BMW M2 with Stealth PPF" loading="lazy" className="w-full h-[150px] object-cover object-[center_80%]" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-premium">
                  <img src={stealthPPFVehicles[5].image} alt="Porsche 911 with Stealth PPF" loading="lazy" className="w-full h-[150px] object-cover object-[center_70%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* STEALTH VS CLEAR PPF */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Stealth vs. Clear</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Why Choose Stealth Over Clear PPF?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Both films offer world-class protection. The choice comes down to the finish you want and your vehicle's existing paint.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Stealth Card */}
            <Card className="bg-background border-border shadow-premium">
              <CardContent className="pt-8 pb-6 px-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                    <Paintbrush className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair">XPEL Stealth</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Satin/matte finish that transforms or preserves your paint's look while providing full protection.
                </p>
                <ul className="space-y-3">
                  {["Converts gloss paint to satin/matte finish", "Preserves factory matte paint (BMW, Mercedes, Porsche)", "Understated, luxury aesthetic", "Same self-healing technology as Ultimate Plus™", "Unique two-tone options when combined with clear PPF", "Ideal for high-end and exotic vehicles"].map(item => <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            {/* Clear Card */}
            <Card className="bg-background border-border shadow-premium">
              <CardContent className="pt-8 pb-6 px-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Eye className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair">XPEL Ultimate Plus™</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Crystal-clear, high-gloss finish that is virtually invisible on any paint color.
                </p>
                <ul className="space-y-3">
                  {["Invisible protection — preserves factory gloss", "Industry-leading optical clarity", "Self-healing clear coat eliminates scratches", "Best choice for maintaining original appearance", "Easier maintenance — compatible with waxes & sealants", "Ideal for daily drivers and all vehicle types"].map(item => <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WHO IS STEALTH PPF FOR */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Who It's For</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Is Stealth PPF Right for You?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            icon: Car,
            title: "Factory Matte Paint Owners",
            desc: "If your vehicle has factory matte or frozen paint (BMW Frozen Grey, Mercedes Magno, Porsche Chalk), Stealth PPF is essential. Matte paint can't be polished or buffed — any scratch or stain is permanent without PPF protection."
          }, {
            icon: Paintbrush,
            title: "Gloss-to-Satin Converts",
            desc: "Want the satin look without a permanent paint job or vinyl wrap? Stealth PPF gives you a stunning matte transformation that also protects your paint. It's fully reversible — remove it and your original gloss is untouched."
          }, {
            icon: Layers,
            title: "Two-Tone Enthusiasts",
            desc: "Combine Stealth on select panels (hood, roof, mirrors) with clear PPF on the rest for a unique satin-and-gloss contrast. It's a popular choice on sports cars, supercars, and custom builds in Miami."
          }, {
            icon: Sun,
            title: "Miami & South Florida Drivers",
            desc: "Miami's UV index, salt air, and year-round heat accelerate paint degradation. Stealth PPF blocks UV damage, prevents salt corrosion, and resists environmental contaminants while keeping your matte finish pristine."
          }, {
            icon: Award,
            title: "Exotic & Luxury Collectors",
            desc: "High-value vehicles deserve the highest level of protection. Stealth PPF is a favorite among Ferrari, Lamborghini, McLaren, and Porsche GT owners who want understated elegance with uncompromised protection."
          }, {
            icon: Shield,
            title: "Lease Return Protection",
            desc: "Protect your leased vehicle's paint throughout the lease term. When it's time to return, remove the Stealth PPF and reveal flawless paint — avoiding costly turn-in penalties for chips, scratches, and wear."
          }].map(item => <Card key={item.title} className="bg-background border-border shadow-premium hover:shadow-glow transition-shadow duration-300">
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




      {/* XPEL STEALTH TECHNOLOGY */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <img src={xpelLogo} alt="XPEL" className="h-12 w-auto mx-auto opacity-80" />
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                XPEL Stealth Technology
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                XPEL Stealth is built on the same advanced platform as XPEL Ultimate Plus™ — the world's most trusted paint protection film. The key differentiator is a specially engineered <strong className="text-foreground">satin-finish top coat</strong> that diffuses light uniformly across the surface, creating a smooth, non-reflective matte appearance.
              </p>
              <p>
                This top coat retains XPEL's signature self-healing properties — meaning minor scratches, scuffs, and swirl marks disappear with heat exposure. In Miami's climate, this happens naturally while parked in the sun. The result is a <strong className="text-foreground">matte finish that stays flawless year after year</strong>, something that's virtually impossible to achieve with unprotected matte paint.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 py-4">
              {["Self-healing satin top coat", "UV-stabilized — no yellowing in Florida sun", "8-mil thick impact protection", "Stain-resistant surface", "Preserves factory matte texture exactly", "Clean removal with zero paint damage", "Precision DAP cut templates", "10-year XPEL manufacturer warranty"].map(point => <div key={point} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Aftercare</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Caring for Your Stealth PPF
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Matte finishes require slightly different care than gloss. Follow these guidelines to keep your Stealth PPF looking perfect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[{
            step: "01",
            title: "Hand Wash Only",
            desc: "Use a pH-neutral, wax-free car shampoo. Avoid automatic car washes — brushes and harsh chemicals can affect the matte texture."
          }, {
            step: "02",
            title: "No Wax or Polish",
            desc: "Traditional waxes and polishes will add unwanted gloss to the matte surface. Use only matte-specific detailing products."
          }, {
            step: "03",
            title: "Spot Clean Promptly",
            desc: "Remove bird droppings, bug splatter, and tree sap quickly using a matte-safe detailer. The self-healing coat helps, but prompt removal is best."
          }, {
            step: "04",
            title: "Avoid High Pressure",
            desc: "When rinsing, keep the pressure washer at a safe distance and avoid spraying directly on film edges, especially during the first two weeks."
          }].map(item => <div key={item.step} className="space-y-4 text-center">
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
      <WhyChooseUs variant="service" differentiators={stealthDifferentiators} title="Why Choose Bespoke for Stealth PPF" />

      {/* FAQ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Stealth PPF FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about XPEL Stealth matte paint protection film.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {stealthFaqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair">
            Ready for the Stealth Look?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're converting to satin or protecting factory matte, Bespoke Auto Design is Miami's go-to XPEL Stealth installer. Get your custom quote today.
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

      <RelatedServices currentSlug="stealth-ppf" />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Paint Protection Film (PPF)" preselectedPpfType="Stealth (Satin Finish)" />
    </div>;
};
export default StealthPPF;