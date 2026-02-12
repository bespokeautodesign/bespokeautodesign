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
import { addStructuredData, businessSchema, faqSchema } from "@/utils/seoHelpers";
import { addOpenGraphTags, addCanonicalUrl, preloadCriticalImages } from "@/utils/metaHelpers";
import { LazyImage } from "@/components/LazyImage";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import ppfWorkImage from "/lovable-uploads/dc9fb3be-e06e-456a-b5a0-2a2b352dae8a.png";
const ceramicWorkImage = "/lovable-uploads/83f64f7b-88e3-468d-9f88-d13e551c6289.png";
import vinylWorkImage from "/lovable-uploads/46142ae2-d86c-47ab-bfdb-e96aa4c9b855.png";
import tintWorkImage from "/lovable-uploads/870ad52a-53a2-4536-922b-33d54d2f71e0.png";
import ppfInstallationImage from "@/assets/ppf-installation.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";
import vinylGT2RSImage from "@/assets/vinyl-gt2rs.jpg";

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
      // Small delay to ensure page is loaded
      setTimeout(() => {
        scrollToQuote();
      }, 100);
    }
    if (autoScrollToServices) {
      // Small delay to ensure page is loaded
      setTimeout(() => {
        scrollToServices();
      }, 100);
    }
  }, [autoScrollToContact, autoScrollToServices]);

  // Set page title and meta description for SEO
  React.useEffect(() => {
    const title = "Premium PPF, Ceramic Coating & Window Tint Miami | Bespoke Auto Design";
    const description = "Professional XPEL paint protection film, ceramic coating & window tint installation in Miami. Authorized dealer with lifetime warranties. Protect your luxury vehicle investment.";

    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add comprehensive social media and geo tags
    addOpenGraphTags(title, description, '/bespoke-logo.png');
    addCanonicalUrl(window.location.origin + '/');

    // Preload critical images
    preloadCriticalImages([
    '/lovable-uploads/34fc4d04-6eac-424d-946f-ca9c48793493.png', // Hero image
    '/bespoke-logo.png' // Logo
    ]);

    // Add structured data for local business and FAQ
    const combinedSchema = {
      "@context": "https://schema.org",
      "@graph": [businessSchema, faqSchema]
    };
    addStructuredData(combinedSchema);
  }, []);

  // Load LightWidget script
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
    image: "/lovable-uploads/210820a3-2a16-4238-857f-70b41f9e1807.png",
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
      {/* Background Video - Rotating */}
      <HeroVideoBackground />
      <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-44 md:py-36">
        <div className="container mx-auto px-6 relative z-10">
          <header className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/40 shadow-glow text-base px-6 py-2 font-semibold animate-pulse">
              Premium Automotive Protection
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-playfair">Miami’s Leading Paint Protection Film (PPF) & Vehicle Wrap Specialists

              </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6)' }}>
              Miami's Most Trusted Car Protection Boutique
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-premium hover:shadow-glow transform hover:scale-105 transition-all duration-300 animate-fade-in"
                  onClick={() => setQuoteModalOpen(true)}>
                Book Now
              </Button>
            </div>
          </header>
        </div>
      </section>

      {/* XPEL Partnership Section */}
      <section id="xpel" className="py-20 bg-black text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-95"></div>
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
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Request a Free Quote
              </Button>
              <Button variant="silver" size="lg" asChild>
                <a href="tel:+17863959172">
                  <Phone className="h-4 w-4" /> Call (786) 395-9172
                </a>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <main id="services" className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Protection Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in advanced automotive protection and customization services using only the finest XPEL materials and proven techniques. Serving Miami's luxury automotive community with excellence.
            </p>
          </header>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={`Professional ${service.title} installation at Bespoke Auto Design Miami - XPEL authorized dealer`}
                    className={`w-full h-full transition-transform duration-300 hover:scale-110 ${
                    service.title === "Vinyl Wraps" ?
                    "object-cover object-[center_48%] brightness-115 contrast-115 saturate-115" :
                    service.title === "Ceramic Coating" ?
                    "object-cover object-[center_30%]" :
                    "object-cover"}`
                    }
                    loading="lazy"
                    decoding="async" />

                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                    <Button variant="premium" className="flex-1" onClick={scrollToQuote}>
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </main>


      {/* Why Choose Us */}
      <WhyChooseUs variant="homepage" />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to protect and enhance your vehicle? Get in touch with our expert team today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Right Column - Quote Form (Mobile: First, Desktop: Second) */}
            <div className="flex flex-col order-1 md:order-2">
              <Card className="shadow-premium flex-1">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form id="quote-form">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name *</label>
                        <input name="firstName" required className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <input name="lastName" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone *</label>
                      <input name="phone" type="tel" required className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="(786) 395-9172" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input name="email" type="email" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Vehicle Make & Model *</label>
                      <input name="vehicle" required className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="2024 Porsche 911" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Interest *</label>
                      <select name="service" required className="w-full px-3 py-2 border border-input rounded-md bg-background">
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
                      <label className="text-sm font-medium">Preferred Contact Method</label>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="contactMethod" value="text" className="rounded border-input" />
                          <span className="text-sm">Text</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="contactMethod" value="phone" className="rounded border-input" />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" name="contactMethod" value="email" className="rounded border-input" />
                          <span className="text-sm">Email</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message *</label>
                      <textarea name="message" required className="w-full px-3 py-2 border border-input rounded-md bg-background min-h-24" placeholder="Tell us about your project..."></textarea>
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

                        setFormSubmitted(true);
                        form.reset();
                      } catch (error) {
                        console.error('Error sending quote:', error);
                        alert('There was an error sending your quote. Please try again or call us at (786) 395-9172.');
                      }
                    }}>
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Left Column - Contact Info + Map (Mobile: Second, Desktop: First) */}
            <div className="flex flex-col space-y-8 order-2 md:order-1">
              {/* Contact Information - Top Left */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+17863959172" className="text-muted-foreground hover:text-primary transition-colors">(786) 395-9172</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:sales@bespokeauto.design" className="text-muted-foreground hover:text-primary transition-colors">sales@bespokeauto.design</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <a href="https://maps.google.com/?q=7943+NW+64th+St+Miami+FL+33166" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">7943 NW 64th St<br />Miami, FL 33166</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Interactive Map - Bottom Left */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Visit Our Shop
                </h3>
                <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border">
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
                      onClick={() => window.location.href = 'https://maps.google.com/?q=7943+NW+64th+St+Miami+FL+33166'}>

                    Open in Google Maps
                  </Button>
                  <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = 'https://maps.apple.com/?q=7943+NW+64th+St+Miami+FL+33166'}>

                    Apple Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Reviews</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From luxury sports cars to premium yachts, our clients trust us with their most prized possessions.
            </p>
          </div>
          
          <TestimonialCarousel />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
              Get Your Free Quote
            </Button>
            <Button variant="silver" size="lg" asChild>
              <a href="tel:+17863959172">
                <Phone className="h-4 w-4" /> (786) 395-9172
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Google Review CTA */}
      <section className="py-16 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) =>
                <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                )}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Love Your Experience?</h2>
            <p className="text-lg text-white/70 mb-8">
              Your feedback means the world to us. Share your experience and help others discover Miami's most trusted car boutique.
            </p>
            <Button
                variant="premium"
                size="lg"
                className="text-lg px-10"
                asChild>

              <a href="https://g.page/r/CVyMGIzAlqxEEAE/review" target="_blank" rel="noopener noreferrer">
                <Star className="h-5 w-5 mr-2" />
                Leave a Google Review
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-12 bg-background/80 backdrop-blur-sm text-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">Follow Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Latest from Instagram</h2>
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

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
        <Button variant="premium" className="flex-1" onClick={() => setQuoteModalOpen(true)}>
          Get Quote
        </Button>
        <Button variant="silver" className="flex-1" asChild>
          <a href="tel:+17863959172">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </Button>
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