import React, { useEffect } from "react";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { QuoteModal } from "@/components/QuoteModal";
import { Shield, Check, ChevronRight, Palette, Sun, Zap, Car, Clock, Award, Sparkles, Layers, Paintbrush, RefreshCw, Eye } from "lucide-react";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";
import { WhyChooseUs, wrapDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import { addStructuredData } from "@/utils/seoHelpers";
import { vinylWrapVehicles } from "@/data/portfolioVehicles";

const brands = [
  {
    name: "3M™ 2080 Series",
    tagline: "The Industry Standard",
    description:
      "3M invented the automotive wrap film category and remains the gold standard. The 2080 Series features Controltac™ pressure-activated adhesive with Comply™ air-release channels, making it the easiest film to install cleanly on complex curves. Backed by 3M's unmatched MCS™ warranty, this film delivers consistent color, conformability, and longevity that no competitor can match.",
    highlights: [
      "Controltac™ repositionable adhesive",
      "Comply™ air-release channels",
      "3M MCS™ Matched Component warranty",
      "100+ color & finish options",
      "Non-visible removal for up to 3 years",
    ],
  },
  {
    name: "Avery Dennison® Supreme Wrapping Film",
    tagline: "Supreme Conformability",
    description:
      "Avery Dennison Supreme Wrapping Film (SWF) is engineered with Easy Apply RS™ technology — a dual-layer adhesive system that allows sliding repositionability followed by a strong, permanent bond. The result is bubble-free, crease-free installations even on the most aggressive body lines. Avery's color palette is renowned for its depth, vibrancy, and trend-forward finishes.",
    highlights: [
      "Easy Apply RS™ dual-layer adhesive",
      "Supreme conformability on deep recesses",
      "Long-term removability without residue",
      "Trend-forward colors & special finishes",
      "Manufacturer-backed performance warranty",
    ],
  },
  {
    name: "KPMF Premium Wrapping Films",
    tagline: "British Precision Engineering",
    description:
      "KPMF, a Kay Premium Marking Films brand from the UK, is the choice of elite wrap shops worldwide. Their Airelease™ liner technology and pressure-sensitive adhesive system delivers exceptional conformability and clean removal. KPMF is especially known for their exclusive specialty finishes — matte metallics, iridescent sheens, and pearlescent effects that are simply unavailable from other manufacturers.",
    highlights: [
      "Airelease™ air-egress liner technology",
      "Exclusive specialty finishes & textures",
      "Superior conformability on compound curves",
      "Clean, residue-free removal",
      "Preferred by competition-level installers",
    ],
  },
];

const benefits = [
  {
    icon: Palette,
    title: "Unlimited Color Options",
    desc: "Choose from hundreds of colors across gloss, matte, satin, metallic, chrome, carbon fiber, brushed metal, and color-shifting finishes. Achieve looks that are impossible or prohibitively expensive with traditional paint.",
  },
  {
    icon: Sparkles,
    title: "Unique Finishes & Textures",
    desc: "From satin chrome to color-shifting chameleon, from brushed titanium to candy gloss — vinyl wrap finishes go far beyond what automotive paint can achieve, giving your vehicle a truly bespoke, head-turning look.",
  },
  {
    icon: RefreshCw,
    title: "Fully Reversible",
    desc: "Unlike a full respray, vinyl wraps can be professionally removed without damaging your factory paint. Change colors as often as you like, or restore the original finish when it's time to sell.",
  },
  {
    icon: Eye,
    title: "Stand Out From the Crowd",
    desc: "Your vehicle should be as unique as you are. A custom color change wrap lets you express your personality — whether it's a subtle satin shift or an eye-catching chrome finish that commands attention.",
  },
  {
    icon: Clock,
    title: "Faster Than Paint",
    desc: "A professional color change wrap takes 3–5 days compared to 2–4 weeks for a quality respray. Less downtime means you're back on the road sooner with a finish that rivals — or exceeds — the look of paint.",
  },
  {
    icon: Car,
    title: "Resale Value Preservation",
    desc: "Wrapping instead of repainting keeps your vehicle's factory finish intact — a critical factor for luxury and exotic cars where original paint condition directly impacts resale and collector value.",
  },
  {
    icon: Sun,
    title: "Built for Miami's Climate",
    desc: "Premium cast vinyl films are engineered with UV-stabilized pigments and protective overlaminates that resist fading, even under Miami's relentless sun exposure with UV indices exceeding 11.",
  },
  {
    icon: Award,
    title: "Warranty-Backed Quality",
    desc: "Every film we use comes with a manufacturer warranty and documented performance guarantees — and so do we with our installation craftsmanship.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Design Consultation",
    desc: "We begin with a one-on-one consultation to understand your vision. Browse our extensive color library, review finish samples in person, and see digital mockups of your vehicle in your chosen color before committing.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    desc: "Your vehicle undergoes a meticulous multi-stage preparation: full hand wash, clay bar decontamination, isopropyl alcohol wipe-down, and removal of all badges, trim, and hardware that could interfere with seamless film application.",
  },
  {
    step: "03",
    title: "Precision Installation",
    desc: "Our certified installers apply the film panel by panel using heat guns and squeegees to ensure perfect conformability around curves, recesses, and body lines. Every edge is post-heated and sealed for long-term durability.",
  },
  {
    step: "04",
    title: "Detail & Reassembly",
    desc: "All removed trim, badges, and hardware are reinstalled. Every seam and edge is inspected under studio lighting. We perform a final quality check to ensure color consistency, adhesion, and a factory-finished appearance.",
  },
  {
    step: "05",
    title: "Aftercare Briefing",
    desc: "We walk you through proper care and maintenance: recommended wash techniques, products to avoid, and tips to maximize the life of your wrap. You leave with a care guide and our direct line for any questions.",
  },
];

const faqs = [
  {
    question: "How much does a full color change wrap cost in Miami?",
    answer:
      "A full color change wrap typically ranges from $3,500–$7,500+ depending on the vehicle size, complexity of the body lines, and the film selected. Exotic and luxury vehicles with aggressive curves may cost more. Specialty finishes like chrome, color-shift, and printed wraps are at the higher end. Contact us for a personalized quote.",
  },
  {
    question: "How long does a vinyl wrap last in Miami's climate?",
    answer:
      "Premium cast vinyl wraps are engineered to last 5–7 years with proper care. Miami's intense UV and heat can reduce lifespan if the vehicle is constantly exposed without garage parking. We use only UV-stabilized, top-tier films and recommend ceramic coating over the wrap for maximum longevity.",
  },
  {
    question: "Will a wrap damage my factory paint?",
    answer:
      "No — when installed and removed by professionals, a vinyl wrap will not damage factory paint. The premium films we use feature pressure-sensitive adhesives designed for clean, residue-free removal.",
  },
  {
    question: "Can I wrap a leased vehicle?",
    answer:
      "Absolutely. Vinyl wraps are one of the best modifications for leased vehicles because they're fully reversible. When your lease ends, we remove the wrap and your vehicle is returned in its original factory color — often in better paint condition than if it had been unwrapped.",
  },
  {
    question: "What's the difference between a wrap and a respray?",
    answer:
      "A respray permanently alters your vehicle's color and can reduce resale value if not done to factory standards. A vinyl wrap is a removable film that sits on top of the paint, preserving the original finish. Wraps also offer finishes impossible with paint (matte chrome, color-shift, carbon fiber) and cost significantly less.",
  },
  {
    question: "How do I maintain a wrapped vehicle?",
    answer:
      "Hand wash with a pH-neutral soap and microfiber mitts. Avoid automatic car washes with brushes. Do not use abrasive compounds or solvent-based cleaners on the wrap. We recommend applying a ceramic coating over the wrap for enhanced UV protection, hydrophobic properties, and easier maintenance.",
  },
  {
    question: "Can you wrap just a portion of the vehicle?",
    answer:
      "Yes — partial wraps are very popular. Common options include roof wraps, mirror caps, hood accents, racing stripes, and chrome delete (wrapping chrome trim in gloss or satin black). Partial wraps start at $500–$1,500 depending on the scope.",
  },
  {
    question: "Why does the quality of wrap film matter?",
    answer:
      "Cheap films use inferior adhesives that can damage paint on removal, have poor UV stability (fading and cracking within months), and don't conform well to complex body lines. The premium films we source invest heavily in adhesive R&D, color consistency, and conformability. The difference in quality is dramatic — and so is the longevity of the finished result.",
  },
];

const ColorChangeWrap = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  
  

  useEffect(() => {
    document.title = "Color Change Vinyl Wrap Miami | Custom Vehicle Wraps | Bespoke Auto Design";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Premium color change vinyl wraps in Miami. Full body wraps, chrome deletes, and custom finishes for luxury and exotic vehicles using top-quality materials. Get a free quote."
      );
    }
    addOpenGraphTags(
      "Color Change Vinyl Wrap Miami | Custom Vehicle Wraps | Bespoke Auto Design",
      "Premium color change vinyl wraps in Miami. Full body wraps, chrome deletes, and custom finishes for luxury and exotic vehicles using top-quality materials."
    );
    addCanonicalUrl("https://bespokeautodesign.com/color-change-wrap");
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Color Change Vinyl Wrap",
      provider: {
        "@type": "AutomotiveBusiness",
        name: "Bespoke Auto Design",
        address: {
          "@type": "PostalAddress",
          streetAddress: "7943 NW 64th St",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33166",
          addressCountry: "US",
        },
        telephone: "+1-786-395-9172",
      },
      areaServed: [
        { "@type": "City", name: "Miami" },
        { "@type": "City", name: "Miami Beach" },
        { "@type": "City", name: "Coral Gables" },
        { "@type": "City", name: "Doral" },
        { "@type": "City", name: "Wynwood" }
      ],
      description:
        "Professional color change vinyl wraps in Miami using premium-grade cast vinyl films for complete vehicle customization.",
    });
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative py-8 md:py-12 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/mercedes-amg-green-wrap.jpg" alt="Mercedes AMG color change wrap" className="w-full h-full object-cover object-[center_55%] saturate-[1.25] contrast-[1.05]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-sm tracking-wider border-white/30 text-white">
              PREMIUM VINYL WRAPS
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight text-white">
              Color Change <br className="hidden md:block" />
              <span className="text-white/70">Vinyl Wraps</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform your vehicle into something truly one-of-a-kind. We use only premium-grade cast vinyl films
              and expert installation techniques to deliver a finish that turns heads everywhere you go in Miami.
            </p>
            <p className="text-lg font-semibold text-white/90">
              Starting at $2,500 • Free Consultation
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

      {/* ═══════════════════ EDITORIAL: ASTON MARTIN DBX ═══════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline">Featured Transformation</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair">
                Aston Martin DBX
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A complete color change that redefined this luxury SUV's presence on the road. Premium cast vinyl, precision-fitted around every contour — finished in under a week.
              </p>
              <p className="text-sm text-muted-foreground italic">{vinylWrapVehicles[0].year} · Full Body Wrap</p>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={vinylWrapVehicles[0].beforeImage} alt="Aston Martin DBX — before wrap" loading="lazy" className="w-full h-[280px] object-cover object-[center_70%]" />
                <div className="absolute bottom-3 left-3"><Badge className="bg-white/90 text-black">Before</Badge></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={vinylWrapVehicles[0].afterImage} alt="Aston Martin DBX — after wrap" loading="lazy" className="w-full h-[280px] object-cover object-[center_70%]" />
                <div className="absolute bottom-3 left-3"><Badge className="bg-primary text-primary-foreground">After</Badge></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY QUALITY FILM MATTERS ═══════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image first on this one — reversed layout */}
            <div className="relative rounded-2xl overflow-hidden shadow-premium md:order-1">
              <img src={vinylWrapVehicles[1].afterImage} alt="Mazda Miata wrapped" loading="lazy" className="w-full h-[400px] md:h-[500px] object-cover object-[center_70%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">{vinylWrapVehicles[1].name}</p>
                <p className="text-sm text-white/70">{vinylWrapVehicles[1].year} · Color Change</p>
              </div>
            </div>
            <div className="space-y-8 md:order-0">
              <Badge variant="outline" className="block w-fit">
                Why Film Quality Matters
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">
                Not All Wrap Film Is Created Equal
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The wrap film industry is flooded with budget brands that promise the world but deliver cracking, fading,
                  and adhesive failure within months — especially in Miami's brutal UV and heat. At Bespoke Auto Design, we{" "}
                  <strong className="text-foreground">focus on sourcing only premium-grade cast vinyl films</strong> from
                  trusted manufacturers with proven track records in extreme climates.
                </p>
                <p>
                  Cheaper alternatives use inferior calendered vinyl with aggressive adhesives that crack under Miami's sun within 6–12 months. The cost savings
                  disappear when the wrap fails prematurely and needs replacement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BRAND SPOTLIGHTS ═══════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Premium Materials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Brands We Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the industry's leading film manufacturers — here are a few of the brands we frequently use.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brands.map((brand) => (
              <Card
                key={brand.name}
                className="bg-background border-border shadow-premium hover:shadow-glow transition-shadow duration-300"
              >
                <CardContent className="pt-8 pb-6 px-6 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <p className="text-sm text-primary font-semibold tracking-wide uppercase mt-1">
                      {brand.tagline}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{brand.description}</p>
                  <ul className="space-y-2">
                    {brand.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BENEFITS ═══════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why Wrap?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Benefits of a Color Change Wrap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A professional vinyl wrap lets you fully customize your vehicle's appearance — without the permanence of paint.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((item) => (
              <Card
                key={item.title}
                className="bg-background border-border shadow-premium hover:shadow-glow transition-shadow duration-300"
              >
                <CardContent className="pt-8 pb-6 px-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ EDITORIAL: McLAREN ═══════════════════ */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4">Transformation</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair">McLaren 570S</h2>
              <p className="text-lg text-muted-foreground mt-3">
                A bold color change that brought new life to this supercar — showcasing what's possible with premium vinyl.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={vinylWrapVehicles[2].beforeImage} alt="McLaren 570S before wrap" loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover object-[center_70%]" />
                <div className="absolute bottom-3 left-3"><Badge className="bg-white/90 text-black">Before</Badge></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={vinylWrapVehicles[2].afterImage} alt="McLaren 570S after wrap" loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover object-[center_70%]" />
                <div className="absolute bottom-3 left-3"><Badge className="bg-primary text-primary-foreground">After</Badge></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WRAP vs PAINT COMPARISON ═══════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Comparison</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Vinyl Wrap vs. Full Respray
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why more Miami luxury car owners choose vinyl wraps over traditional repaints.
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-lg font-bold">Feature</th>
                  <th className="py-4 px-6 text-lg font-bold text-muted-foreground">Full Respray</th>
                  <th className="py-4 px-6 text-lg font-bold text-primary">Vinyl Wrap</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  { feature: "Cost", respray: "$5,000–$15,000+", wrap: "$3,500–$7,500" },
                  { feature: "Timeline", respray: "2–4 weeks", wrap: "3–5 days" },
                  { feature: "Reversibility", respray: "Permanent", wrap: "Fully removable" },
                  { feature: "Factory Paint", respray: "Destroyed", wrap: "Preserved & protected" },
                  { feature: "Finish Options", respray: "Limited to paint", wrap: "Hundreds of colors & textures" },
                  { feature: "Resale Impact", respray: "Can reduce value", wrap: "Preserves/increases value" },
                  { feature: "UV Protection", respray: "None (paint fades)", wrap: "Built-in UV stabilizers" },
                  { feature: "Durability", respray: "Permanent but chips", wrap: "5–7 years, self-healing options" },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border/50 hover:bg-accent/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground">{row.feature}</td>
                    <td className="py-4 px-6">{row.respray}</td>
                    <td className="py-4 px-6 text-foreground font-medium">{row.wrap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════ INSTALLATION PROCESS ═══════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              How We Wrap Your Vehicle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every wrap follows a meticulous 5-step process to ensure a flawless, long-lasting finish.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bespoke */}
      <WhyChooseUs variant="service" differentiators={wrapDifferentiators} title="Why Choose Bespoke for Wraps" />

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about color change wraps in Miami.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a free, no-obligation quote for your color change wrap. We'll help you choose the perfect color, finish, and film for your vision.
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

      <RelatedServices currentSlug="color-change-wrap" />
      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} preselectedService="Vinyl Wrap" />
    </div>
  );
};

export default ColorChangeWrap;
