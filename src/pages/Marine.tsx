import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Anchor, Waves, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MarineFAQ } from "@/components/MarineFAQ";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteModal } from "@/components/QuoteModal";
import { addStructuredData } from "@/utils/seoHelpers";
import { addOpenGraphTags, addCanonicalUrl } from "@/utils/metaHelpers";

const Marine = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = "Marine Protection Services Miami | Boat PPF & Ceramic Coating | Bespoke Auto Design";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional marine protection services for boats and yachts in Miami. XPEL marine PPF, ceramic coating, and window tint. Protect your vessel from saltwater and UV damage.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional marine protection services for boats and yachts in Miami. XPEL marine PPF, ceramic coating, and window tint. Protect your vessel from saltwater and UV damage.';
      document.head.appendChild(meta);
    }

    addOpenGraphTags(
      "Marine Protection Services Miami | Boat PPF & Ceramic Coating | Bespoke Auto Design",
      "Professional marine protection services for boats and yachts in Miami. XPEL marine PPF, ceramic coating, and window tint."
    );
    addCanonicalUrl("https://bespokeautodesign.com/marine");

    // Add marine-specific structured data
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Marine Protection Services",
      "description": "Specialized XPEL protection services for boats, yachts, and marine vessels in Miami, FL",
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
        { "@type": "City", "name": "Fort Lauderdale" }
      ],
      "serviceType": "Marine Protection"
    });
  }, []);

  const marineServices = [{
    title: "Marine Paint Protection Film",
    description: "Protect your vessel's gel coat and paint from saltwater, UV rays, and harsh marine conditions.",
    image: "/lovable-uploads/19e444ef-f150-42ce-b195-9a306b95f8d5.png",
    features: ["Saltwater resistance", "UV protection", "Impact protection", "Maintains resale value"],
    href: "/marine-ppf"
  }, {
    title: "Marine Ceramic Coating",
    description: "Advanced marine-grade ceramic coating for superior protection and easy maintenance.",
    image: "/lovable-uploads/b0ee1d07-d81d-4edf-8181-95046e093b94.png",
    features: ["Hydrophobic surface", "Stain resistance", "Anti-fouling properties", "Extended protection"],
    href: "/marine-ceramic-coating"
  }, {
    title: "Marine Ceramic Tint",
    description: "Premium window tinting for boats and yachts providing comfort and protection on the water.",
    image: "/lovable-uploads/e718d34b-ad4c-4a28-b853-895d849751ea.png",
    features: ["Glare reduction", "UV protection", "Heat rejection", "Enhanced privacy"],
    href: "/marine-ceramic-tint"
  }];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image - Full width coverage */}
      <div 
        className="fixed inset-0 w-screen bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/e1bc0d57-a486-4aee-bdf8-ca28e3fc9453.png')`,
          backgroundPosition: 'center top'
        }}
      ></div>
      <div className="relative z-10 min-h-screen">
      <Navbar />
      <Breadcrumbs 
        items={[
          { name: "Home", path: "/" },
          { name: "Marine Services", path: "/marine", current: true }
        ]} 
      />

      {/* Hero Section */}
      <header className="relative text-primary-foreground min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/40 backdrop-blur-sm">Marine Division</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">Professional Marine Protection Services Miami</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Specialized XPEL protection services for boats, yachts, and marine vessels. Expert protection against saltwater, UV damage, and harsh marine environments in South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
                Get Marine Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Marine Protection Section */}
      <section className="py-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Why Marine Protection Matters</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Harsh Marine Environment</h3>
                  <p className="text-foreground">
                    Saltwater, UV rays, and constant moisture create unique challenges for marine vessels. Our specialized protection services are designed to combat these harsh conditions and keep your vessel looking pristine.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Preserve Your Investment</h3>
                  <p className="text-foreground">
                    Marine vessels represent significant investments. Our protection services help maintain their appearance, performance, and resale value while reducing maintenance costs over time.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/8225318e-5a65-40a0-90ed-9a488787ed64.png" 
                  alt="XPEL Marine Protection Solutions for boats and yachts in Miami Florida" 
                  className="w-full max-w-md rounded-lg shadow-premium"
                />
              </div>
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
                  <Link to={service.href}>
                    <Button variant="premium" className="w-full mt-6">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
            <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>
              Schedule Marine Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Marine FAQ Section */}
      <MarineFAQ />
      <Footer />
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default Marine;