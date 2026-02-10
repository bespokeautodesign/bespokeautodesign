import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Sun, Thermometer, Clock, Award, Eye, Zap, Car, Heart } from "lucide-react";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";
import { WhyChooseUs, tintDifferentiators } from "@/components/WhyChooseUs";
import { addStructuredData } from "@/utils/seoHelpers";
import xpelLogo from "@/assets/xpel-logo.svg";

const tintFaqs = [
  {
    question: "How much does ceramic window tint cost in Miami?",
    answer: "XPEL XR Plus ceramic tint pricing depends on your vehicle type and the number of windows. A standard sedan typically costs $350–$600, SUVs $450–$750, and full windshield tinting adds $200–$350. Exotic and luxury vehicles may vary. Contact us for an exact quote based on your vehicle."
  },
  {
    question: "Is XPEL XR Plus really recommended by the Skin Cancer Foundation?",
    answer: "Yes. XPEL XR Plus is officially recommended by The Skin Cancer Foundation as an effective UV protectant. The film blocks over 99% of harmful UVA and UVB rays — the same rays responsible for skin cancer, premature aging, and sun damage. This recommendation is based on independent testing confirming XR Plus meets the Foundation's rigorous criteria for UV protection."
  },
  {
    question: "What is the difference between ceramic tint and regular tint?",
    answer: "Traditional dyed or metallic tints primarily darken windows but offer limited heat rejection and can interfere with electronics. XPEL XR Plus uses multi-layer nano-ceramic particle technology that rejects up to 98% of infrared heat without metallic components — meaning zero interference with GPS, Bluetooth, cell signals, or toll transponders, while providing far superior heat and UV rejection."
  },
  {
    question: "Will ceramic tint set off my car's electronic systems?",
    answer: "No. Unlike metallic tints, XPEL XR Plus is 100% metal-free. It will not interfere with your vehicle's GPS, cell phone reception, Bluetooth connectivity, satellite radio, key fob signals, or toll transponders like SunPass and E-PASS. This is especially important for modern luxury vehicles with advanced electronic systems."
  },
  {
    question: "How long does ceramic tint last in Miami?",
    answer: "XPEL XR Plus ceramic tint is engineered for extreme longevity. It will not fade, turn purple, bubble, or peel — even under Miami's intense year-round sun exposure. The film comes with XPEL's manufacturer warranty and is designed to last the lifetime of your vehicle with proper care."
  },
  {
    question: "Is ceramic tint legal in Florida?",
    answer: "Florida law allows window tint on the rear and back side windows with no darkness limit. Front side windows must allow at least 28% visible light transmission (VLT), and the windshield can only have a non-reflective tint strip along the top AS-1 line. We help you choose the right shade that maximizes heat rejection while staying within Florida's legal requirements."
  },
  {
    question: "How long does ceramic tint installation take?",
    answer: "Most vehicles are completed in 2–4 hours depending on the number of windows and complexity. We recommend leaving your windows up for 3–5 days after installation to allow the adhesive to fully cure. During this time, small water bubbles may be visible — this is normal and they will disappear as the film dries."
  },
  {
    question: "Can ceramic tint be applied to the windshield?",
    answer: "Absolutely. We offer XPEL XR Plus windshield tint in lighter shades (typically 70% VLT) that are virtually invisible but still block over 99% of UV rays and reject significant infrared heat. Windshield tint is one of the most impactful upgrades for comfort in Miami — it dramatically reduces dashboard heat, glare, and UV exposure for the driver."
  },
];

const CeramicTint = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  useEffect(() => {
    document.title = "Ceramic Window Tint Miami | XPEL XR Plus Installation | Bespoke Auto Design";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Professional XPEL XR Plus ceramic window tint in Miami, FL. Blocks 99% UV rays, rejects up to 98% infrared heat. Recommended by The Skin Cancer Foundation. Free quote."
      );
    }
    addOpenGraphTags(
      "Ceramic Window Tint Miami | XPEL XR Plus | Bespoke Auto Design",
      "Miami's premier XPEL XR Plus ceramic tint installer. 99% UV rejection, 98% infrared heat rejection. Recommended by The Skin Cancer Foundation."
    );
    addCanonicalUrl("https://bespokeautodesign.com/ceramic-tint");
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ceramic Window Tint Installation",
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
      "areaServed": { "@type": "City", "name": "Miami" },
      "description": "Professional XPEL XR Plus ceramic window tint installation in Miami. Blocks 99% UV, rejects up to 98% infrared heat. Skin Cancer Foundation recommended."
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-col items-center gap-3">
              <img src={xpelLogo} alt="XPEL" className="h-16 w-auto opacity-80" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Authorized XPEL Window Film Installer
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight">
              XPEL XR Plus <br className="hidden md:block" />
              <span className="text-muted-foreground">Ceramic Tint in Miami</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world's most advanced ceramic window film — blocking 99% of UV rays, rejecting up to 98% of infrared heat, and recommended by The Skin Cancer Foundation.
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
          🔲 PLACEHOLDER: Hero Image
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="w-full h-[300px] md:h-[500px] rounded-2xl bg-accent/40 border-2 border-dashed border-border flex items-center justify-center">
            <p className="text-muted-foreground text-lg">📸 Hero image placeholder — ceramic tint installation</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT IS XPEL XR PLUS?
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="block w-fit mx-auto">What Is XPEL XR Plus?</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center">
              The Gold Standard in Ceramic Window Film
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">XPEL XR Plus</strong> is XPEL's flagship ceramic window tint — a multi-layer, nano-ceramic particle film that delivers the highest levels of heat rejection, UV protection, and optical clarity available in the window film industry. Unlike dyed or metallic films that degrade over time, XR Plus uses stable ceramic particles that maintain performance for the life of your vehicle.
              </p>
              <p>
                What truly sets XPEL XR Plus apart is its <strong className="text-foreground">recommendation by The Skin Cancer Foundation</strong> as an effective UV protectant. The film blocks over <strong className="text-foreground">99% of harmful UVA and UVB radiation</strong> — the same wavelengths responsible for skin cancer, premature skin aging, and interior damage. For drivers in Miami who spend hours behind the wheel under relentless Florida sun, this isn't a luxury — it's a health investment.
              </p>
              <p>
                XR Plus achieves up to <strong className="text-foreground">98% infrared heat rejection</strong>, dramatically reducing cabin temperature without the need for dark, visually obstructive tint. Even in lighter shades, the film rejects more heat than competing dark dyed films. The result: a cooler cabin, lower AC load, reduced fuel consumption, and significantly more comfortable driving experience in Miami's 90°+ summers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SKIN CANCER FOUNDATION SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border shadow-premium overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <Badge className="bg-primary text-primary-foreground">Health Protection</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                      Recommended by The Skin Cancer Foundation
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      XPEL XR Plus has earned the recommendation of <strong className="text-foreground">The Skin Cancer Foundation</strong> as an effective UV protectant. Studies show that the left side of the face and left arm — the driver's side — are disproportionately affected by UV-related skin cancers. With over 99% UV rejection, XR Plus provides critical protection during your daily commute, school runs, and road trips across South Florida.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This isn't marketing — it's science-backed health protection recognized by one of the world's leading cancer prevention organizations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BENEFITS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why XPEL XR Plus?</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Benefits of XPEL XR Plus in Miami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineered for the world's harshest sun environments — and that includes Miami.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sun,
                title: "99% UV Rejection",
                desc: "Blocks over 99% of harmful UVA and UVB rays — the wavelengths that cause skin cancer, premature aging, dashboard cracking, and leather fading. Recommended by The Skin Cancer Foundation.",
              },
              {
                icon: Thermometer,
                title: "Up to 98% Infrared Heat Rejection",
                desc: "XR Plus rejects up to 98% of infrared radiation — the primary cause of heat buildup inside your vehicle. Even in lighter shades, it outperforms dark dyed films at blocking heat. Your cabin stays cool in Miami's brutal summers.",
              },
              {
                icon: Eye,
                title: "Crystal-Clear Optical Clarity",
                desc: "Unlike metallic or dyed films that distort visibility, XR Plus maintains perfect optical clarity day and night. No haze, no purple fading, no visual distortion — just clean, uncompromised visibility.",
              },
              {
                icon: Zap,
                title: "Zero Electronic Interference",
                desc: "100% metal-free construction means XR Plus will never interfere with GPS, Bluetooth, cell signals, satellite radio, key fobs, SunPass, or any other electronic system in your vehicle.",
              },
              {
                icon: Shield,
                title: "Shatter Resistance",
                desc: "In the event of an accident or impact, ceramic window film holds shattered glass together, reducing the risk of injury from flying glass fragments. Added safety for you and your passengers.",
              },
              {
                icon: Car,
                title: "Interior Preservation",
                desc: "UV rays destroy your vehicle's interior — cracking dashboards, fading leather, and deteriorating trim. XR Plus preserves your interior's factory condition, protecting your investment and resale value.",
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
          XR PLUS vs COMPETITORS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Comparison</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              XPEL XR Plus vs. Other Window Films
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why XR Plus is the #1 choice for Miami's luxury and exotic vehicle owners.
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-lg font-bold">Feature</th>
                  <th className="py-4 px-6 text-lg font-bold text-muted-foreground">Dyed Film</th>
                  <th className="py-4 px-6 text-lg font-bold text-muted-foreground">Metallic Film</th>
                  <th className="py-4 px-6 text-lg font-bold text-primary">XPEL XR Plus</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  { feature: "UV Rejection", dyed: "40–60%", metallic: "60–80%", xr: "99%+" },
                  { feature: "Infrared Heat Rejection", dyed: "5–20%", metallic: "30–60%", xr: "Up to 98%" },
                  { feature: "Signal Interference", dyed: "None", metallic: "Yes — GPS, cell, Bluetooth", xr: "None — 100% metal-free" },
                  { feature: "Fading / Discoloration", dyed: "Turns purple in 1–3 years", metallic: "Minimal", xr: "Never fades or discolors" },
                  { feature: "Optical Clarity", dyed: "Moderate — haze over time", metallic: "Good", xr: "Crystal-clear, no distortion" },
                  { feature: "Skin Cancer Foundation", dyed: "No", metallic: "No", xr: "Recommended ✓" },
                  { feature: "Longevity", dyed: "2–5 years", metallic: "5–8 years", xr: "Lifetime of vehicle" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-6 font-semibold text-foreground">{row.feature}</td>
                    <td className="py-4 px-6">{row.dyed}</td>
                    <td className="py-4 px-6">{row.metallic}</td>
                    <td className="py-4 px-6 text-foreground font-semibold">{row.xr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE XPEL XR PLUS ADVANTAGE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <img src={xpelLogo} alt="XPEL" className="h-12 w-auto mx-auto opacity-80" />
              <Badge variant="outline">The XR Plus Difference</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                Why We Exclusively Install XPEL XR Plus
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Bespoke Auto Design, we've tested every major window film brand on the market. We chose to exclusively install <strong className="text-foreground">XPEL XR Plus</strong> because no other film matches its combination of heat rejection, UV protection, optical clarity, and long-term durability — especially in Miami's punishing climate.
              </p>
              <p>
                XPEL's proprietary multi-layer nano-ceramic particle technology is fundamentally different from competitor films. Where other "ceramic" films use a single ceramic layer, XR Plus uses <strong className="text-foreground">multiple layers of nano-ceramic particles</strong> engineered to selectively filter different wavelengths of light. This allows XR Plus to reject more heat with lighter tint shades than any competing product — a critical advantage when you want maximum protection without an overly dark appearance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 py-4">
              {[
                "Multi-layer nano-ceramic particle technology",
                "Recommended by The Skin Cancer Foundation",
                "Up to 98% infrared heat rejection",
                "Over 99% UVA and UVB rejection",
                "100% metal-free — zero signal interference",
                "Never fades, bubbles, or turns purple",
                "Available in multiple VLT shades for legal compliance",
                "Backed by XPEL's manufacturer warranty",
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
              How We Install Ceramic Tint
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision installation in our climate-controlled Miami facility ensures a flawless, bubble-free result every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "We assess your windows, discuss your shade preferences, review Florida tint laws, and recommend the ideal XR Plus configuration for your vehicle." },
              { step: "02", title: "Preparation", desc: "Windows are thoroughly cleaned and decontaminated. All seals, edges, and gaskets are prepped to ensure perfect film adhesion." },
              { step: "03", title: "Precision Cut & Apply", desc: "XPEL XR Plus film is precision-cut using computer-aided templates for your exact vehicle model, then heat-formed and applied with zero creases or bubbles." },
              { step: "04", title: "Inspection & Cure", desc: "Every window is inspected under controlled lighting for imperfections. We provide care instructions for the 3–5 day curing period." },
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


      {/* Why Choose Bespoke */}
      <WhyChooseUs variant="service" differentiators={tintDifferentiators} title="Why Choose Bespoke for Ceramic Tint" />

      {/* ═══════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Ceramic Tint FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about XPEL XR Plus ceramic tint in Miami.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-premium">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {tintFaqs.map((faq, index) => (
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
            Stay Cool. Stay Protected.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miami's premier XPEL XR Plus ceramic tint installer. Protect your skin, your interior, and your comfort — schedule a consultation today.
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

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default CeramicTint;