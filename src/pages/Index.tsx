import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Shield, Palette, Eye, Phone, Mail, MapPin, Clock } from "lucide-react";

// Import assets
import heroCarImage from "@/assets/hero-car.jpg";
import ppfServiceImage from "@/assets/ppf-service.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";
import ceramicTintImage from "@/assets/ceramic-tint.jpg";

const Index = () => {
  const services = [
    {
      title: "Paint Protection Film (PPF)",
      description: "Premium protection for your vehicle's paint with virtually invisible film technology.",
      image: ppfServiceImage,
      features: ["Self-healing technology", "10-year warranty", "UV protection", "Maintains original appearance"]
    },
    {
      title: "Ceramic Coating",
      description: "Advanced nanotechnology coating providing long-lasting protection and enhanced gloss.",
      image: ceramicCoatingImage,
      features: ["Hydrophobic properties", "Enhanced durability", "Chemical resistance", "Easy maintenance"]
    },
    {
      title: "Vinyl Wraps",
      description: "Transform your vehicle's appearance with high-quality color change vinyl wraps.",
      image: vinylWrapImage,
      features: ["Color customization", "Removable protection", "Premium materials", "Professional installation"]
    },
    {
      title: "Ceramic Tint",
      description: "Superior window tinting with ceramic technology for maximum comfort and protection.",
      image: ceramicTintImage,
      features: ["Heat rejection", "UV protection", "Enhanced privacy", "Lifetime warranty"]
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      vehicle: "2023 Porsche 911",
      rating: 5,
      text: "Exceptional craftsmanship! The PPF installation was flawless and the attention to detail is unmatched. My Porsche looks stunning and I have complete peace of mind."
    },
    {
      name: "Sarah Chen",
      vehicle: "2022 Tesla Model S",
      rating: 5,
      text: "The ceramic coating exceeded my expectations. The depth of gloss is incredible and maintenance is so much easier. Highly recommend Bespoke Auto Design!"
    },
    {
      name: "David Thompson",
      vehicle: "2024 BMW M4",
      rating: 5,
      text: "Professional team, premium results. The vinyl wrap transformation was exactly what I envisioned. Outstanding customer service throughout the entire process."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" 
                alt="Bespoke Auto Design Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-primary">Bespoke Auto Design</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#xpel" className="text-muted-foreground hover:text-primary transition-colors">Xpel Partnership</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button variant="premium" size="lg">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroCarImage} 
            alt="Luxury car in professional garage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Premium Automotive Protection
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bespoke Auto Design
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Elevating automotive excellence through precision protection, premium finishes, and uncompromising craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="silver" size="lg" className="text-lg px-8 py-4">
                Explore Services
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in advanced automotive protection and customization services using only the finest materials and techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium" className="w-full mt-6">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Xpel Partnership Section */}
      <section id="xpel" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-xpel opacity-90"></div>
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
                <h3 className="text-xl font-semibold mb-2">ULTIMATE Protection</h3>
                <p className="text-primary-foreground/70">Industry-leading 10-year warranty on all XPEL products</p>
              </div>
              
              <div className="text-center">
                <div className="bg-xpel-yellow text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">STEALTH Technology</h3>
                <p className="text-primary-foreground/70">Matte finish protection that transforms your vehicle's appearance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-xpel-yellow text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ULTIMATE PLUS</h3>
                <p className="text-primary-foreground/70">Enhanced clarity and self-healing capabilities</p>
              </div>
            </div>
            
            <Button variant="xpel" size="lg" className="mt-12 bg-xpel-yellow text-primary hover:bg-xpel-yellow-dark">
              Explore XPEL Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Reviews</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-silver hover:shadow-premium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-xpel-yellow text-xpel-yellow" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.vehicle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
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
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@bespokeautodesign.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">123 Premium Auto Drive<br />Luxury District, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vehicle Make & Model</label>
                  <input className="w-full px-3 py-2 border border-input rounded-md bg-background" placeholder="2024 Porsche 911" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Interest</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Paint Protection Film (PPF)</option>
                    <option>Ceramic Coating</option>
                    <option>Vinyl Wrap</option>
                    <option>Ceramic Tint</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background min-h-24" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button variant="premium" className="w-full">
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
              <img 
                src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" 
                alt="Bespoke Auto Design Logo" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold">Bespoke Auto Design</span>
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
  );
};

export default Index;