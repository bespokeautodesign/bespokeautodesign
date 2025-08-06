import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Anchor, Waves, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import MobileMenu from "@/components/MobileMenu";

const Marine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  const marineServices = [{
    title: "Marine Paint Protection Film",
    description: "Protect your vessel's gel coat and paint from saltwater, UV rays, and harsh marine conditions.",
    image: "/lovable-uploads/19e444ef-f150-42ce-b195-9a306b95f8d5.png",
    features: ["Saltwater resistance", "UV protection", "Impact protection", "Maintains resale value"]
  }, {
    title: "Marine Ceramic Coating",
    description: "Advanced marine-grade ceramic coating for superior protection and easy maintenance.",
    image: "/lovable-uploads/b0ee1d07-d81d-4edf-8181-95046e093b94.png",
    features: ["Hydrophobic surface", "Stain resistance", "Anti-fouling properties", "Extended protection"]
  }, {
    title: "Marine Ceramic Tint",
    description: "Premium window tinting for boats and yachts providing comfort and protection on the water.",
    image: "/lovable-uploads/e718d34b-ad4c-4a28-b853-895d849751ea.png",
    features: ["Glare reduction", "UV protection", "Heat rejection", "Enhanced privacy"]
  }];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-12 w-auto" />
              <span className="text-lg md:text-xl font-bold text-primary">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/marine" className="text-primary font-medium">Marine Services</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/e1bc0d57-a486-4aee-bdf8-ca28e3fc9453.png')`,
            transform: 'translateZ(0)',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-600 bg-background/80 backdrop-blur-sm">Marine Division</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-lg">Marine Protection Services</h1>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 text-shadow-lg">
              Specialized protection services for boats, yachts, and marine vessels. We understand the unique challenges of the marine environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" onClick={navigateToContact}>
                Get Marine Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {marineServices.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-premium hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-[center_30%] transition-transform duration-300 hover:scale-110" />
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
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium" className="w-full mt-6" onClick={navigateToContact}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Marine Protection Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Marine Protection Matters</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Harsh Marine Environment</h3>
                  <p className="text-muted-foreground">
                    Saltwater, UV rays, and constant moisture create unique challenges for marine vessels. Our specialized protection services are designed to combat these harsh conditions and keep your vessel looking pristine.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Preserve Your Investment</h3>
                  <p className="text-muted-foreground">
                    Marine vessels represent significant investments. Our protection services help maintain their appearance, performance, and resale value while reducing maintenance costs over time.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8225318e-5a65-40a0-90ed-9a488787ed64.png" 
                  alt="XPEL Marine Protection Solutions" 
                  className="w-full max-w-md rounded-lg shadow-premium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Vessel?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a consultation and discover how our marine protection services can benefit your vessel.
            </p>
            <Button variant="premium" size="lg" onClick={navigateToContact}>
              Schedule Marine Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marine;