import { trackPhoneCall } from "@/utils/gadsConversions";
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
import { Shield, Check, ChevronRight, Palette, Sun, Zap, Car, Clock, Award, Sparkles, Layers, Paintbrush, RefreshCw, Eye } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { WhyChooseUs, wrapDifferentiators } from "@/components/WhyChooseUs";
import { RelatedServices } from "@/components/RelatedServices";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  const wrapStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Color Change Vinyl Wrap",
      "provider": providerSchema,
      "areaServed": areaServed,
      "description": "Professional color change vinyl wraps in Miami using premium-grade cast vinyl films for complete vehicle customization.",
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Vinyl Wrap Miami | Color Change Wraps from $2,500 | Bespoke Auto Design"
        description="Premium color change vinyl wraps in Miami. Full body wraps, chrome deletes, and custom finishes for luxury and exotic vehicles using top-quality materials. Get a free quote."
        canonical="https://www.bespokeauto.design/color-change-wrap"
        structuredData={wrapStructuredData}
      />
      <Navbar />
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Color Change Wraps", path: "/color-change-wrap", current: true }]} />
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative py-8 md:py-12 hero-parallax">
        <div className="hero-parallax-bg">
          <img src="/lovable-uploads/mercedes-amg-green-wrap.webp" alt="Mercedes AMG color change wrap" className="w-full h-full object-cover object-[center_55%] saturate-[1.25] contrast-[1.05]"  width={1920} height={1080} />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-sm tracking-wider border-white/30 text-white">
              PREMIUM VINYL WRAPS
            </Badge>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight text-white">
               Color Change Vinyl Wraps <br className="hidden md:block" /> in Miami, FL
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
                <a href="tel:7863959172" onClick={() => trackPhoneCall()} className="flex items-center gap-2">
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
                <img src={vinylWrapVehicles[0].beforeImage} alt="Aston Martin DBX — before wrap" loading="lazy" className="w-full h-[280px] object-cover object-[center_70%]"  width={800} height={280} />
                <div className="absolute bottom-3 left-3"><Badge className="bg-white/90 text-black">Before</Badge></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={vinylWrapVehicles[0].afterImage} alt="Aston Martin DBX — after wrap" loading="lazy" className="w-full h-[280px] object-cover object-[center_70%]"  width={800} height={280} />
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
              <img src={vinylWrapVehicles[1].afterImage} alt="Mazda Miata wrapped" loading="lazy" className="w-full h-[400px] md:h-[500px] object-cover object-[center_70%]"  width={800} height={400} />
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
                <img src={vinylWrapVehicles[2].beforeImage} alt="McLaren 570S before wrap" loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover object-[center_70%]"  width={800} height={300} />
                <div className="absolute bottom-3 left-3"><Badge className="bg-white/90 text-black">Before</Badge></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={vinylWrapVehicles[2].afterImage} alt="McLaren 570S after wrap" loading="lazy" className="w-full h-[300px] md:h-[380px] object-cover object-[center_70%]"  width={800} height={300} />
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

      {/* Pricing */}
      <PricingCards
        title="Vinyl Wrap Pricing"
        subtitle="Premium color change wraps using 3M, Avery Dennison, and KPMF films."
        tiers={[
          { name: "Full Color Change Wrap", price: "$2,500", priceLabel: "Starting at", description: "Complete vehicle color transformation with premium cast vinyl film.", features: ["Full body coverage", "100+ color & finish options", "Protects original paint underneath", "Reversible — remove anytime", "3–5 year film durability"], popular: true },
        ]}
        onGetQuote={() => setQuoteModalOpen(true)}
        footnote="Pricing depends on vehicle size, complexity, and film brand selected."
      />

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

      {/* ═══════════════════════════════════════════════════════
          WHY MIAMI DRIVERS CHOOSE VINYL WRAPS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Miami Car Culture</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Why Miami Drivers Choose Vinyl Wraps
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Miami has one of the most vibrant and visually competitive car cultures in the world. From the supercars lining Ocean Drive on South Beach to the customized trucks cruising Calle Ocho and the luxury SUVs in Brickell's valet lines — standing out matters here. A color change vinyl wrap lets you completely transform your vehicle's appearance in 3–5 days, without the permanence, cost, or downtime of a full repaint.
              </p>
              <p>
                Unlike paint, a vinyl wrap is <strong className="text-foreground">fully reversible</strong>. When it's time to sell, trade in, or simply change your look, the wrap is professionally removed to reveal your pristine original paint underneath — often in better condition than when it went on, because the wrap has been shielding it from Miami's UV, salt air, and road debris. This reversibility makes wraps especially popular with leased vehicle owners, exotic car collectors who rotate colors seasonally, and business owners who want branded vehicles without permanently modifying their fleet.
              </p>
              <p>
                A high-quality vinyl wrap from 3M, Avery Dennison, or KPMF also costs significantly less than a comparable paint job. A full-body custom paint job on a luxury vehicle can run $8,000–$25,000+ and takes 2–4 weeks in a body shop. A professional vinyl wrap achieves a similar visual result for $2,500–$6,000 and is completed in 3–5 days. And unlike paint, if a single panel is damaged, it can be re-wrapped individually without repainting the entire vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR VINYL WRAP PROCESS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Our Vinyl Wrap Process
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: "1. Design Consultation", desc: "Every wrap begins with an in-depth consultation where we discuss your vision, show physical color samples, and help you choose the right film brand, color, and finish for your vehicle. We consider your lifestyle, usage, and aesthetic preferences to recommend the best options — whether that's a subtle satin gray or a head-turning chrome gold." },
                { step: "2. Surface Preparation", desc: "Your vehicle receives a thorough hand wash, chemical decontamination, and clay bar treatment to ensure the paint surface is perfectly clean. Any existing damage, chips, or imperfections are documented and addressed — because vinyl conforms to and reveals any surface irregularity underneath. Trim pieces, badges, and door handles are carefully removed for seamless coverage." },
                { step: "3. Professional Installation", desc: "In our climate-controlled facility, our experienced wrap technicians apply the film panel by panel using heat guns, squeegees, and precision cutting techniques. Complex curves, deep recesses, and aggressive body lines require expert technique — especially on exotic vehicles with compound contours. We use a combination of dry and wet application methods depending on the film and vehicle geometry." },
                { step: "4. Detail Finishing", desc: "Edges are wrapped around panel edges or tucked into body seams for invisible termination points. Door jambs, gas cap recesses, and mirror housings receive detailed attention. All removed trim and badges are reinstalled with precision alignment. The entire vehicle is inspected for lifting edges, bubbles, or imperfections." },
                { step: "5. 24-Hour Post-Heat & Cure", desc: "After installation, the entire wrap receives a post-heating pass to activate the film's memory and ensure permanent adhesion on all curves and recesses. The vehicle rests in our facility for 24 hours to allow full adhesive bonding before delivery." },
                { step: "6. Quality Inspection & Delivery", desc: "A comprehensive final inspection under controlled lighting verifies uniform color, seamless edges, and flawless application across every panel. We walk you through aftercare instructions — including wash techniques, wax restrictions, and longevity tips specific to your film — before handing over the keys." },
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
          POPULAR WRAP COLORS AND FINISHES
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Colors & Finishes</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Popular Wrap Colors and Finishes
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The beauty of vinyl wrapping is the virtually unlimited palette of colors and finishes available. Our Miami clients gravitate toward finishes that complement the city's vibrant lifestyle and tropical aesthetic. Here are the most popular categories:
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Satin & Matte Finishes</h3>
                <p>
                  Satin and matte wraps have exploded in popularity across Miami. Colors like Satin Dark Grey, Satin Battleship Grey, Matte Black, and Satin Military Green deliver a sophisticated, stealth-inspired look that turns heads without being flashy. These finishes are especially popular on sports cars (Porsche 911, BMW M4) and luxury SUVs (Range Rover, Mercedes G-Wagon) where the muted finish creates a dramatic contrast against chrome or blacked-out trim.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Gloss & Metallic Colors</h3>
                <p>
                  For clients who want their vehicle to pop in Miami's sunlight, gloss and metallic wraps deliver unmatched visual impact. Gloss Racing Red, Metallic Midnight Blue, Gloss Nardo Grey, and Cosmic Blue Metallic are perennial favorites. These finishes mimic — and often surpass — the depth and brilliance of factory paint, giving your vehicle a showroom-fresh appearance that commands attention at every stoplight.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Chrome Delete & Accent Wraps</h3>
                <p>
                  Not every wrap needs to be a full color change. Chrome delete wraps — where we wrap the chrome window trim, grille surround, and badges in gloss or satin black — have become one of our most-requested services. This "murdered out" aesthetic is hugely popular on vehicles like the Tesla Model 3, BMW X5, and Mercedes GLE. We also offer accent wraps for roof panels, mirror caps, spoilers, and hood stripes for a custom two-tone look.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Specialty & Textured Finishes</h3>
                <p>
                  For the truly adventurous, we offer carbon fiber textured wraps, brushed metal finishes, color-shifting chameleon films, and even leather-textured films for interior accents. These specialty finishes are conversation starters — perfect for Miami's show-and-shine scene and social media content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VINYL WRAP FOR EVERY VEHICLE TYPE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">Vehicle Coverage</Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
                Vinyl Wrap for Every Vehicle Type
              </h2>
            </div>
            <div className="space-y-10 text-lg text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Exotic & Supercars</h3>
                <p>
                  Wrapping a Lamborghini Huracán, Ferrari 488, or McLaren 720S requires specialized expertise — these vehicles have complex compound curves, aggressive air intakes, active aero elements, and carbon fiber components that demand an experienced installer. At Bespoke Auto Design, we've wrapped dozens of exotics and understand the unique challenges each platform presents. We use premium cast vinyl films from 3M and Avery Dennison that are specifically engineered for extreme conformability on deep recesses and tight radii.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Luxury Sedans & Coupes</h3>
                <p>
                  Vehicles like the Mercedes-Benz S-Class, BMW M5, Audi RS7, and Porsche Panamera are popular candidates for full color change wraps. These platforms have relatively flat body panels that wrap cleanly, and their sophisticated styling is enhanced by satin, matte, or metallic finishes. Many of our luxury sedan clients use wraps to differentiate their vehicle from the hundreds of identical models parked in every Brickell parking garage.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Trucks, SUVs & Off-Road Vehicles</h3>
                <p>
                  Trucks and SUVs — Ford F-150 Raptor, Jeep Wrangler, Toyota Tacoma, Chevrolet Tahoe, and Range Rover — are some of our most-wrapped vehicle categories. Matte and satin finishes in earth tones (military green, desert tan, grey) are extremely popular for the rugged aesthetic, while full gloss wraps in bold colors make these large vehicles impossible to miss on Miami streets. For truck owners, we also offer bed wraps and tailgate wraps for additional protection and customization.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-playfair">Fleet & Commercial Vehicles</h3>
                <p>
                  Vinyl wraps are one of the most cost-effective marketing tools for Miami businesses. A single wrapped vehicle generates 30,000–70,000 impressions per day driving through Miami's high-traffic corridors. We work with businesses of all sizes — from single-vehicle owner-operators to multi-vehicle fleets — to design, produce, and install branded wraps that turn every vehicle into a moving billboard. Fleet wraps can be removed and replaced as branding evolves, without damaging the underlying paint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVING MIAMI-DADE COUNTY
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-accent/30">
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
                Bespoke Auto Design is located at <strong className="text-foreground">7943 NW 64th St, Miami, FL 33166</strong> in Doral — centrally positioned for vehicle owners across Miami-Dade and Broward counties. We're minutes from Miami International Airport and easily accessible via the Palmetto Expressway and Dolphin Expressway.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Doral", "Brickell", "Coral Gables", "Miami Beach", "Aventura",
                  "Coconut Grove", "Wynwood", "Kendall", "Hialeah", "Miami Lakes",
                  "Pinecrest", "Key Biscayne", "Sunny Isles Beach", "South Miami",
                  "Fort Lauderdale", "Hollywood", "Weston"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <p>
                Miami's car culture is about expression, individuality, and making a statement. Whether you're cruising South Beach, showing off at Cars and Coffee Aventura, or building a brand across Miami-Dade — a professional vinyl wrap from Bespoke Auto Design will get you noticed. Contact us for a free design consultation and quote.
              </p>
            </div>
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
                <a href="tel:7863959172" onClick={() => trackPhoneCall()} className="flex items-center gap-2">
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
