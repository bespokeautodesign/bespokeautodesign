import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Shield, Sun, Droplet, Phone, Mail, MapPin, Clock, Anchor, Waves, ArrowRight, Calendar } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FAQ } from "@/components/FAQ";
import { Link } from "react-router-dom";

// Import assets
const heroBugattiBolideImage = "/lovable-uploads/34fc4d04-6eac-424d-946f-ca9c48793493.png";
import ppfWorkImage from "/lovable-uploads/dc9fb3be-e06e-456a-b5a0-2a2b352dae8a.png";
import ceramicWorkImage from "/lovable-uploads/0dbb420e-a7b1-4b4e-87ec-f0e09e0b57f9.png";
import vinylWorkImage from "/lovable-uploads/46142ae2-d86c-47ab-bfdb-e96aa4c9b855.png";
import tintWorkImage from "/lovable-uploads/870ad52a-53a2-4536-922b-33d54d2f71e0.png";
import marinePpfImage from "@/assets/marine-ppf.jpg";
import marineCeramicImage from "@/assets/marine-ceramic.jpg";
import marineTintImage from "@/assets/marine-tint.jpg";
import ppfInstallationImage from "@/assets/ppf-installation.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";

const Index = () => {
  const scrollToQuote = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const services = [{
    title: "Paint Protection Film (PPF)",
    description: "Premium protection for your vehicle's paint with virtually invisible film technology.",
    image: ppfWorkImage,
    features: ["Self-healing technology", "10-year warranty", "UV protection", "Maintains original appearance"]
  }, {
    title: "Ceramic Coating",
    description: "Advanced nanotechnology coating providing long-lasting protection and enhanced gloss.",
    image: ceramicWorkImage,
    features: ["Hydrophobic properties", "Enhanced durability", "Chemical resistance", "Easy maintenance"]
  }, {
    title: "Vinyl Wraps",
    description: "Transform your vehicle's appearance with high-quality color change vinyl wraps.",
    image: vinylWorkImage,
    features: ["Color customization", "Removable protection", "Premium materials", "Professional installation"]
  }, {
    title: "Ceramic Tint",
    description: "Superior window tinting with ceramic technology for maximum comfort and protection.",
    image: tintWorkImage,
    features: ["Heat rejection", "UV protection", "Enhanced privacy", "Lifetime warranty"]
  }];
  const marineServices = [{
    title: "Marine Paint Protection Film",
    description: "Protect your vessel's gel coat and paint from saltwater, UV rays, and harsh marine conditions.",
    image: marinePpfImage,
    features: ["Saltwater resistance", "UV protection", "Impact protection", "Maintains resale value"]
  }, {
    title: "Marine Ceramic Coating",
    description: "Advanced marine-grade ceramic coating for superior protection and easy maintenance.",
    image: marineCeramicImage,
    features: ["Hydrophobic surface", "Stain resistance", "Anti-fouling properties", "Extended protection"]
  }, {
    title: "Marine Ceramic Tint",
    description: "Premium window tinting for boats and yachts providing comfort and protection on the water.",
    image: marineTintImage,
    features: ["Glare reduction", "UV protection", "Heat rejection", "Enhanced privacy"]
  }];
  return <div className="min-h-screen bg-background relative">
      {/* Background Image - Cover for mobile visibility, contain + fixed for desktop */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat md:bg-contain z-0"
        style={{
          backgroundImage: `url(${heroBugattiBolideImage})`
        }}
      ></div>
      <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold text-primary">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-muted-foreground hover:text-primary transition-colors">Services</button>
              <button onClick={() => document.getElementById('marine')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-muted-foreground hover:text-primary transition-colors">Marine Services</button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-muted-foreground hover:text-primary transition-colors">Portfolio</button>
              <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-muted-foreground hover:text-primary transition-colors">Testimonials</button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            <Button variant="premium" size="lg" onClick={scrollToQuote}>
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/40 shadow-glow text-base px-6 py-2 font-semibold animate-pulse">
              Premium Automotive Protection
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bespoke Auto Design
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Elevating automotive excellence through precision protection, premium finishes, and uncompromising craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="silver" size="lg" className="text-lg px-8 py-4" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Explore Services
              </Button>
              <Button variant="silver" size="lg" className="text-lg px-8 py-4" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in advanced automotive protection and customization services using only the finest materials and techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className={`w-full h-full transition-transform duration-300 hover:scale-110 ${
                      service.title === "Vinyl Wraps" 
                        ? "object-cover object-[center_70%]" 
                        : "object-cover"
                    }`} 
                  />
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
                  <Button variant="premium" className="w-full mt-6" onClick={scrollToQuote}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Marine Services Section */}
      <section id="marine" className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">Marine Division</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Marine Protection Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized protection services for boats, yachts, and marine vessels. We understand the unique challenges of the marine environment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {marineServices.map((service, index) => <Card key={index} className="overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-fade-in">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Anchor className="h-5 w-5 text-blue-600" />
                    <Waves className="h-4 w-4 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <Button variant="premium" className="w-full mt-6" onClick={scrollToQuote}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Trusted by yacht owners, boat enthusiasts, and marine professionals
            </p>
            <Button variant="silver" size="lg" onClick={scrollToQuote}>
              Schedule Marine Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Recent Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our recent automotive protection and customization projects showcasing exceptional craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src="/lovable-uploads/0043b483-74ac-46c5-916a-44e46e97b88b.png" alt="PPF Installation Project" className="w-full h-64 object-cover object-[center_60%] transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/60 text-white border-white/20">Vinyl Wrap + Ceramic Tints</Badge>
                </div>
              </div>
              <CardHeader>
                
                <CardTitle className="line-clamp-2">McLaren 570S </CardTitle>
                <CardDescription>Super Gloss Metallic Kato's Kenmery Blue Inozetek Wrap & Prime XR Plus Ceramic Tints.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src="/lovable-uploads/3f1daf49-c3df-4080-ae59-f3d51dde5a5e.png" alt="Ferrari in Bespoke Auto Design Shop" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/60 text-white border-white/20">PPF + Ceramic Coating</Badge>
                </div>
              </div>
              <CardHeader>
                
                <CardTitle className="line-clamp-2">Ferrari F8 Tributo</CardTitle>
                <CardDescription>Full Body Xpel Ultimate Plus PPF Protection & Fusion Plus Ceramic Coating.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src="/lovable-uploads/2b4efeb0-51dc-4e2f-b7e3-9c4e9882c48e.png" alt="BMW X7 Tint Project" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/60 text-white border-white/20">Stealth PPF + Ceramic Coating + Ceramic Tints</Badge>
                </div>
              </div>
              <CardHeader>
                
                <CardTitle className="line-clamp-2">BMW X5 sDrive40i</CardTitle>
                <CardDescription>Full Body Xpel Stealth PPF Protection, Fusion Plus Ceramic Coating & Prime XR Plus Ceramic Tints.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button variant="premium" size="lg" className="flex items-center gap-2 mx-auto">
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* XPEL Partnership Section */}
      <section id="xpel" className="py-20 bg-black text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-95"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-xpel-yellow text-primary">
              Official Partner
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              XPEL Authorized Dealer
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              As an authorized XPEL dealer, we bring you the world's leading paint protection film technology with unmatched clarity, durability, and self-healing properties.
            </p>
            
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
            
            <Button variant="xpel" size="lg" className="mt-12 bg-xpel-yellow text-primary hover:bg-xpel-yellow-dark" onClick={scrollToQuote}>
              Get XPEL Quote
            </Button>
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
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

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
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
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
            
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form id="quote-form">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input name="firstName" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input name="lastName" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input name="phone" type="tel" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="(786) 395-9172" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input name="email" type="email" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Vehicle Make & Model</label>
                    <input name="vehicle" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="2024 Porsche 911" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interest</label>
                    <select name="service" className="w-full px-3 py-2 border border-input rounded-md bg-background">
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
                    <label className="text-sm font-medium">Message</label>
                    <textarea name="message" className="w-full px-3 py-2 border border-input rounded-md bg-background min-h-24" placeholder="Tell us about your project..."></textarea>
                  </div>
                </form>
                <Button variant="premium" className="w-full" onClick={() => {
                const form = document.querySelector('#quote-form') as HTMLFormElement;
                const formData = new FormData(form);
                const subject = `Quote Request - ${formData.get('service')}`;
                const body = `Name: ${formData.get('firstName')} ${formData.get('lastName')}%0D%0AEmail: ${formData.get('email')}%0D%0APhone: ${formData.get('phone')}%0D%0AVehicle: ${formData.get('vehicle')}%0D%0AService: ${formData.get('service')}%0D%0AMessage: ${formData.get('message')}`;
                window.location.href = `mailto:sales@bespokeauto.design?subject=${subject}&body=${body}`;
                alert('Thank you! Your quote request has been prepared. Please send the email that just opened, or call us at (786) 395-9172.');
              }}>
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </div>
            <div className="text-center md:text-right text-primary-foreground/80">
              <p>&copy; 2024 Bespoke Auto Design. All rights reserved.</p>
              <p className="text-sm mt-1">Premium automotive protection and customization</p>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-primary-foreground/60 text-sm">
            <p>XPEL Authorized Dealer | Professional Installation | Lifetime Support</p>
          </div>
        </div>
      </footer>
      </div>
    </div>;
};
export default Index;
