import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Shield, Sun, Droplet, Phone, Mail, MapPin, Clock, Anchor, Waves, ArrowRight, Calendar } from "lucide-react";
import Footer from "@/components/Footer";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { HomeFAQ } from "@/components/HomeFAQ";
import { XPELTeaser } from "@/components/XPELTeaser";
import { QuoteModal } from "@/components/QuoteModal";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { businessSchema, faqSchema } from "@/utils/seoHelpers";
import { trackFormSubmission, trackPhoneCall } from "@/utils/gadsConversions";
import { trackAdsConversion, trackLead, trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import PageSEO from "@/components/PageSEO";
import { LazyImage } from "@/components/LazyImage";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CompetitiveEdge } from "@/components/CompetitiveEdge";
import { AnimatedStats } from "@/components/AnimatedStats";
import { ServiceCategoryCards } from "@/components/ServiceCategoryCards";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import ppfWorkImage from "/lovable-uploads/dc9fb3be-e06e-456a-b5a0-2a2b352dae8a.webp";
const ceramicWorkImage = "/lovable-uploads/83f64f7b-88e3-468d-9f88-d13e551c6289.webp";
import vinylWorkImage from "/lovable-uploads/46142ae2-d86c-47ab-bfdb-e96aa4c9b855.webp";
import tintWorkImage from "/lovable-uploads/870ad52a-53a2-4536-922b-33d54d2f71e0.webp";
import ppfInstallationImage from "@/assets/ppf-installation.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";
import vinylGT2RSImage from "@/assets/vinyl-gt2rs.jpg";
import xpelLogo from "@/assets/xpel-logo.svg";

const Index = ({ autoScrollToContact, autoScrollToServices }: {autoScrollToContact?: boolean;autoScrollToServices?: boolean;} = {}) => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<number | null>(null);

  const scrollToQuote = () => {
    setQuoteModalOpen(true);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    if (autoScrollToContact) {
      setTimeout(() => {
        scrollToQuote();
      }, 100);
    }
    if (autoScrollToServices) {
      setTimeout(() => {
        scrollToServices();
      }, 100);
    }
  }, [autoScrollToContact, autoScrollToServices]);

  const indexTitle = "Premium PPF, Ceramic Coating & Window Tint Miami | Bespoke Auto Design";
  const indexDescription = "Professional XPEL paint protection film, ceramic coating & window tint installation in Miami. Authorized dealer with lifetime warranties. Protect your luxury vehicle investment.";
  const indexSchema = { "@context": "https://schema.org", "@graph": [businessSchema, faqSchema] };

  React.useEffect(() => {
    if (!document.querySelector('script[src*="lightwidget"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const services = [{
    title: "Paint Protection Film (PPF)",
    description: "Premium protection for your vehicle's paint with virtually invisible film technology.",
    startingPrice: "$1,499",
    image: ppfWorkImage,
    link: "/paint-protection-film",
    features: ["Self-healing technology", "10-year warranty", "UV protection", "Maintains original appearance"],
    detailedInfo: {
      overview: "XPEL Paint Protection Film is the world's leading automotive paint protection solution. Our premium film provides an invisible barrier against rock chips, scratches, and environmental damage while maintaining your vehicle's factory finish.",
      benefits: [
      "Self-healing top coat eliminates minor scratches and swirl marks with heat",
      "10-year manufacturer warranty against yellowing, cracking, and peeling",
      "Blocks 99% of harmful UV rays to prevent paint fading",
      "Hydrophobic surface makes cleaning easier and repels water and dirt",
      "Optically clear - virtually invisible once applied",
      "Can be removed without damaging original paint"],
      coverage: "We offer full-front coverage, full-body coverage, or custom packages tailored to your needs. Popular areas include hood, fenders, bumper, mirrors, door edges, and rocker panels.",
      warranty: "XPEL Ultimate Plus comes with a 10-year manufacturer warranty and lifetime installation warranty from Bespoke Auto Design."
    }
  }, {
    title: "Ceramic Coating",
    description: "Advanced nanotechnology coating providing long-lasting protection and enhanced gloss.",
    startingPrice: "$599",
    image: "/lovable-uploads/210820a3-2a16-4238-857f-70b41f9e1807.webp",
    link: "/ceramic-coating",
    features: ["Hydrophobic properties", "Enhanced durability", "Chemical resistance", "Easy maintenance"],
    detailedInfo: {
      overview: "XPEL Fusion Plus Ceramic Coating uses advanced nanotechnology to create a permanent bond with your vehicle's paint, providing superior protection and an incredible depth of gloss that lasts for years.",
      benefits: [
      "9H hardness ceramic coating - superior scratch resistance",
      "Extreme hydrophobic effect creates a 'self-cleaning' surface",
      "Chemical resistant - protects against bird droppings, bug splatter, and harsh detergents",
      "UV resistant - prevents oxidation and fading",
      "Enhanced gloss and depth - makes paint colors pop",
      "Reduces swirl marks and light scratches during washing",
      "Lasts 5+ years with proper maintenance"],
      coverage: "Applied to all painted surfaces, wheels, glass, and trim. We offer multi-year warranties depending on the package selected.",
      warranty: "5-year warranty on Fusion Plus coating with annual maintenance inspections included."
    }
  }, {
    title: "Vinyl Wraps",
    description: "Transform your vehicle's appearance with high-quality color change vinyl wraps.",
    startingPrice: "$2,500",
    image: vinylGT2RSImage,
    link: "/color-change-wrap",
    features: ["Color customization", "Removable protection", "Premium materials", "Professional installation"],
    detailedInfo: {
      overview: "Color change vinyl wraps allow you to completely transform your vehicle's appearance while protecting the original paint. Choose from hundreds of colors and finishes including matte, gloss, satin, chrome, and textured options.",
      benefits: [
      "Unlimited color and finish options - matte, gloss, satin, metallic, chrome",
      "Protects original paint from UV damage and minor scratches",
      "Completely removable - return to factory color anytime",
      "More affordable than a quality paint job",
      "Can be repaired in sections if damaged",
      "Maintains vehicle resale value by preserving original paint",
      "Durable 5-7 year lifespan with proper care"],
      coverage: "Full vehicle wraps, partial wraps, accent wraps, and chrome delete packages available. We use only premium 3M and Avery Dennison films.",
      warranty: "Manufacturer warranty on materials plus our installation warranty against peeling and lifting."
    }
  }, {
    title: "Ceramic Tint",
    description: "Superior window tinting with ceramic technology for maximum comfort and protection.",
    startingPrice: "$150",
    image: tintWorkImage,
    link: "/ceramic-tint",
    features: ["Heat rejection", "UV protection", "Enhanced privacy", "Lifetime warranty"],
    detailedInfo: {
      overview: "XPEL PRIME XR PLUS ceramic window film combines infrared heat rejection with superior optical clarity. Experience cooler cabin temperatures, reduced glare, and ultimate UV protection without affecting electronics or signals.",
      benefits: [
      "Up to 88% infrared heat rejection - significantly cooler interior",
      "Blocks 99% of harmful UV rays - protects skin and prevents interior fading",
      "Won't interfere with cell phones, GPS, or radio signals",
      "Superior optical clarity - true color perception",
      "Nano-ceramic technology - no metal, won't corrode",
      "Reduces glare for safer driving",
      "Shatter-resistant - holds glass together in accidents"],
      coverage: "Available in multiple shades to meet legal requirements. We tint all windows including windshield strip, front windows, rear window, and sunroof.",
      warranty: "Lifetime manufacturer warranty against fading, bubbling, peeling, and cracking. Lifetime installation warranty."
    }
  }];
  return (
    <div className="min-h-screen bg-background relative">
      <PageSEO
        title={indexTitle}
        description={indexDescription}
        canonical="https://www.bespokeauto.design/"
        structuredData={indexSchema}
      />
      {/* Background Video - Rotating */}
      <HeroVideoBackground />
      <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Urgency Banner */}
      <div className="bg-xpel-yellow text-black text-center py-2 px-4 text-sm font-medium tracking-wide">
        <Calendar className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
        Currently booking 1–2 weeks out <span className="mx-1.5 text-black/40">·</span> <span className="font-semibold">Call for urgent availability</span>
      </div>

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-32 md:py-36">
        <div className="container mx-auto px-6 relative z-10">
          <header className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <img src={xpelLogo} alt="XPEL Authorized Dealer" className="h-16 md:h-20 w-auto brightness-0 invert opacity-90 translate-y-1.5"  width={200} height={60} />
              <span className="text-lg md:text-xl font-semibold tracking-widest uppercase text-white/90 border-l border-white/30 pl-4">Authorized Dealer</span>
            </div>
            <p className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-silver-muted mb-3">Boutique Auto Protection · Miami</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight font-playfair">Xpel Premier Paint Protection Film (PPF) Installation in <span className="text-brand-red">Miami</span>

              </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)' }}>
              Protect Your Vehicle From Rock Chips, Scratches & Miami Road Damage — Installed by Certified XPEL Experts
            </p>
            <p className="text-sm md:text-base text-white/60 mb-6 tracking-wide">
              Limited weekly installation spots available — book yours today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                  variant="premium"
                  size="lg"
                   className="text-lg px-10 py-5 shadow-premium hover:shadow-glow transform hover:scale-105 transition-all duration-300 animate-fade-in"
                   onClick={() => { trackQuoteButton('hero'); setQuoteModalOpen(true); }}>Request a Consultation</Button>
              <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  asChild>
                <a href="tel:+17863959172" onClick={() => { trackPhoneCall(); trackPhoneClick('hero_cta'); }}>
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
            {/* Trust signals — flex with auto-hiding separators (CSS-only) */}
            <div
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm md:text-base text-white/80 [&>*+*]:before:content-['•'] [&>*+*]:before:mr-5 [&>*+*]:before:text-white/30"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
            >
              <GoogleRatingChip />
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4" /> Certified XPEL Installers
              </span>
              <span>Up to 10-Year Warranty</span>
              <span>500+ Vehicles Protected</span>
            </div>
          </header>
        </div>
      </section>

      {/* Quick Process Bar */}
      <section className="bg-primary/95 backdrop-blur-sm py-5 border-y border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm font-medium">Request a Quote</span>
            </div>
            <ArrowRight className="hidden md:block h-4 w-4 text-primary-foreground/40" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm font-medium">Bring Your Vehicle In</span>
            </div>
            <ArrowRight className="hidden md:block h-4 w-4 text-primary-foreground/40" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">3</div>
              <span className="text-sm font-medium">Leave Protected</span>
            </div>
          </div>
          <p className="text-center text-primary-foreground/60 text-xs mt-3">Get a free quote within 30 minutes • PPF starting at $1,499 • Ceramic Coating from $599

            </p>
        </div>
      </section>

      {/* XPEL Partnership Section */}
      <section id="xpel" className="py-20 bg-black text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at top, hsl(0 0% 10%) 0%, hsl(0 0% 4%) 70%)'
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <article className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-xpel-yellow text-primary">
              Official XPEL Partner
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground flex items-center justify-center gap-4">
              XPEL Authorized Dealer Miami
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-xpel-yellow text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">XPEL Ultimate Plus</h3>
                <p className="text-primary-foreground/70">Premium paint protection with enhanced self-healing technology</p>
              </div>
              
              <div className="text-center">
                <div className="bg-xpel-yellow text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">XPEL Prime Window Tint</h3>
                <p className="text-primary-foreground/70">Superior heat rejection and UV protection for maximum comfort</p>
              </div>
              
              <div className="text-center">
                <div className="bg-xpel-yellow text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Droplet className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">XPEL Fusion Plus Ceramic Coating</h3>
                <p className="text-primary-foreground/70">Advanced ceramic coating with exceptional durability and gloss</p>
              </div>
            </div>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                size="lg"
                className="bg-xpel-yellow text-black font-semibold hover:bg-xpel-yellow-dark hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => { trackQuoteButton('xpel_section'); setQuoteModalOpen(true); }}
              >Request a Consultation</Button>
              <Button variant="silver" size="lg" asChild>
                <a href="tel:+17863959172" onClick={() => { trackPhoneCall(); trackPhoneClick('xpel_section'); }}>
                  <Phone className="h-4 w-4" /> Call (786) 395-9172
                </a>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-white/20 text-white/70">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-white">Premium Protection Services</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Comprehensive vehicle protection solutions using only the finest XPEL products. Every service backed by manufacturer warranties.
            </p>
          </header>
          
          <div className="space-y-0 -mx-6">
            {services.map((service, index) => {
              const photo = service.image;
              const reverse = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 min-h-[500px] ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Text side */}
                  <div className="relative z-20 flex items-center px-6 md:px-16 py-12 md:py-20" style={{ backgroundColor: '#111111' }}>
                    <div className="max-w-xl">
                      <h3 className="text-3xl md:text-5xl font-bold mb-5 font-playfair text-white">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-2xl md:text-3xl font-playfair font-semibold mb-8" style={{ color: '#D4A84B' }}>
                        Starting at {service.startingPrice}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="outline" asChild className="border-white/30 text-white hover:bg-white hover:text-[#111]">
                          <Link to={service.link}>
                            Learn More <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                        <Button variant="premium" onClick={() => setQuoteModalOpen(true)}>
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Photo side */}
                  <div className="relative min-h-[300px] md:min-h-[500px] overflow-hidden">
                    <LazyImage
                      src={photo}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Gradient that fades from dark text-side INTO photo, no hard border */}
                    <div
                      className="absolute inset-0 pointer-events-none hidden md:block"
                      style={{
                        background: reverse
                          ? 'linear-gradient(to left, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)'
                          : 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.85) 15%, rgba(17,17,17,0) 45%)',
                      }}
                    />
                    {/* Mobile top fade for legibility continuity */}
                    <div
                      className="absolute inset-0 pointer-events-none md:hidden"
                      style={{ background: 'linear-gradient(to bottom, #111111 0%, rgba(17,17,17,0) 35%)' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Animated Stats */}
      <AnimatedStats />

      {/* Competitive Edge */}
      <CompetitiveEdge onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-white/20 text-white/70">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Ready to protect and enhance your vehicle? Get in touch with our expert team today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Right Column - Quote Form (Mobile: First, Desktop: Second) */}
            <div className="flex flex-col order-1 md:order-2">
              <div className="shadow-premium flex-1 rounded-lg p-6" style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">Request a Consultation</h3>
                  <p className="text-sm text-white/50">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                <div className="space-y-4">
                  <form id="quote-form">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">First Name *</label>
                        <input name="firstName" required className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }} placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Last Name</label>
                        <input name="lastName" className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }} placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Phone *</label>
                      <input name="phone" type="tel" required className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }} placeholder="(786) 395-9172" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Email</label>
                      <input name="email" type="email" className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }} placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Vehicle Make & Model *</label>
                      <input name="vehicle" required className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }} placeholder="2024 Porsche 911" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Service Interest *</label>
                      <select name="service" required className="w-full px-3 py-2 rounded-md text-white" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }}>
                        <option value="">Select a service...</option>
                        <option>Paint Protection Film (PPF)</option>
                        <option>Ceramic Coating</option>
                        <option>Vinyl Wrap</option>
                        <option>Ceramic Tint</option>
                        <option>Marine PPF</option>
                        <option>Marine Ceramic Coating</option>
                        <option>Marine Ceramic Tint</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Preferred Contact Method</label>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2 text-white/70">
                          <input type="checkbox" name="contactMethod" value="text" className="rounded" />
                          <span className="text-sm">Text</span>
                        </label>
                        <label className="flex items-center space-x-2 text-white/70">
                          <input type="checkbox" name="contactMethod" value="phone" className="rounded" />
                          <span className="text-sm">Phone</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Message</label>
                      <textarea name="message" className="w-full px-3 py-2 rounded-md text-white placeholder:text-white/30 min-h-24" style={{ backgroundColor: '#222', border: '1px solid rgba(255,255,255,0.15)' }} placeholder="Tell us about your project..."></textarea>
                    </div>
                  </form>
                  {formSubmitted &&
                    <div className="mb-4 p-4 bg-primary/10 border border-primary/20 rounded-md text-primary">
                      <p className="font-medium">✓ Quote request sent successfully!</p>
                      <p className="text-sm mt-1">We'll get back to you soon at the contact information you provided.</p>
                    </div>
                    }
                  <Button variant="premium" className="w-full" onClick={async () => {
                      const form = document.querySelector('#quote-form') as HTMLFormElement;

                      if (!form.checkValidity()) {
                        form.reportValidity();
                        return;
                      }

                      const contactMethods = Array.from(form.querySelectorAll('input[name="contactMethod"]:checked')).map((input) => (input as HTMLInputElement).value);
                      const formData = new FormData(form);

                      try {
                        const { supabase } = await import('@/integrations/supabase/client');

                        const { error } = await supabase.functions.invoke('send-quote-email', {
                          body: {
                            firstName: formData.get('firstName'),
                            lastName: formData.get('lastName'),
                            email: formData.get('email'),
                            phone: formData.get('phone'),
                            vehicle: formData.get('vehicle'),
                            service: formData.get('service'),
                            contactMethods: contactMethods,
                            message: formData.get('message')
                          }
                        });

                        if (error) throw error;

                        trackFormSubmission();
                        trackLead({
                          form: 'contact',
                          service: String(formData.get('service') || ''),
                          vehicle: String(formData.get('vehicle') || ''),
                        });
                        setFormSubmitted(true);
                        form.reset();
                      } catch (error) {
                        console.error('Error sending quote:', error);
                        alert('There was an error sending your quote. Please try again or call us at (786) 395-9172.');
                      }
                    }}>
                    Request Consultation
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Left Column - Contact Info + Map (Mobile: Second, Desktop: First) */}
            <div className="flex flex-col space-y-8 order-2 md:order-1">
              {/* Contact Information - Top Left */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3" style={{ backgroundColor: '#222' }}>
                    <Phone className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Phone</h3>
                    <a href="tel:+17863959172" onClick={() => { trackPhoneCall(); trackPhoneClick('contact_section'); }} className="text-white/60 hover:text-brand-red transition-colors">(786) 395-9172</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3" style={{ backgroundColor: '#222' }}>
                    <Mail className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Email</h3>
                    <a href="mailto:sales@bespokeauto.design" className="text-white/60 hover:text-brand-red transition-colors">sales@bespokeauto.design</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3" style={{ backgroundColor: '#222' }}>
                    <MapPin className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Location</h3>
                    <a href="https://maps.google.com/?q=7943+NW+64th+St+Miami+FL+33166" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-red transition-colors">7943 NW 64th St<br />Miami, FL 33166</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3" style={{ backgroundColor: '#222' }}>
                    <Clock className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">Hours</h3>
                    <p className="text-white/60">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Interactive Map - Bottom Left */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5 text-brand-red" />
                  Visit Our Shop
                </h3>
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.8746624265947!2d-80.33659262378845!3d25.838912777359095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c3e8f5f5f5f5%3A0x1234567890abcdef!2s7943%20NW%2064th%20St%2C%20Miami%2C%20FL%2033166!5e0!3m2!1sen!2sus!4v1234567890123&q=7943+NW+64th+St+Miami+FL+33166"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bespoke Auto Design Location" />

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/5 to-transparent" />
                </div>
                <div className="flex gap-2 mt-3">
                  <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.location.href = 'https://maps.google.com/?q=7943+NW+64th+St+Miami+FL+33166'}>
                    Open in Google Maps
                  </Button>
                  <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.location.href = 'https://maps.apple.com/?q=7943+NW+64th+St+Miami+FL+33166'}>
                    Apple Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Google Reviews Section */}
      <GoogleReviewsSection />

      {/* Instagram Feed Section */}
      <section className="py-12" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4 border-white/20 text-white/70">Follow Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Latest from Instagram</h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <iframe
                src="https://cdn.lightwidget.com/widgets/9a8f74d2954154f3a96a8ea3e94b3b8f.html"
                scrolling="no"
                allowTransparency={true}
                className="lightwidget-widget w-full border-0 overflow-hidden"
                title="Bespoke Auto Design Instagram Feed" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <HomeFAQ />

      {/* Footer */}
      <Footer />
      </div>


      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Service Details Modal */}
      <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedService !== null &&
          <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{services[selectedService].title}</DialogTitle>
                <DialogDescription className="text-base">
                  {services[selectedService].detailedInfo.overview}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {services[selectedService].detailedInfo.benefits.map((benefit, idx) =>
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                  )}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Coverage Options</h3>
                  <p className="text-sm text-muted-foreground">{services[selectedService].detailedInfo.coverage}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                  <p className="text-sm text-muted-foreground">{services[selectedService].detailedInfo.warranty}</p>
                </div>
                
                <div className="pt-4 border-t">
                <Button variant="premium" className="w-full" onClick={() => {
                  setSelectedService(null);
                  trackQuoteButton('service_detail_modal');
                  scrollToQuote();
                }}>
                    Get a Quote for {services[selectedService].title}
                  </Button>
                </div>
              </div>
            </>
          }
        </DialogContent>
      </Dialog>
    </div>);

};
export default Index;