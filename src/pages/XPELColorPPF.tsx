import React, { useState } from 'react';
import Footer from "@/components/Footer";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Droplet, Star, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ColorPPFFAQ } from '@/components/ColorPPFFAQ';
import { ColorPPFBenefits } from '@/components/ColorPPFBenefits';
import { ColorPPFComparison } from '@/components/ColorPPFComparison';
import { ColorPPFProcess } from '@/components/ColorPPFProcess';
import { ColorPPFHero } from '@/components/ColorPPFHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { QuoteModal } from '@/components/QuoteModal';
import { addStructuredData } from '@/utils/seoHelpers';
import { addOpenGraphTags, addCanonicalUrl } from '@/utils/metaHelpers';

interface XPELColor {
  name: string;
  color: string;
  finish: 'Gloss' | 'Satin' | 'Metallic';
}

const xpelColors: XPELColor[] = [
  { name: 'XPEL Yellow', color: '#FFD700', finish: 'Gloss' },
  { name: 'XPEL Molten Orange', color: '#FF6B35', finish: 'Gloss' },
  { name: 'XPEL Monza Red', color: '#DC143C', finish: 'Gloss' },
  { name: 'XPEL Satin Thermal Beige', color: '#D2B48C', finish: 'Satin' },
  { name: 'XPEL Satin Battle Green', color: '#355E3B', finish: 'Satin' },
  { name: 'XPEL Moss Green', color: '#8FBC8F', finish: 'Gloss' },
  { name: 'XPEL South Beach Blue', color: '#00BFFF', finish: 'Gloss' },
  { name: 'XPEL Satin Abyss Blue', color: '#1e3a5f', finish: 'Satin' },
  { name: 'XPEL Ultra Plum', color: '#8B008B', finish: 'Gloss' },
  { name: 'XPEL Bond Silver', color: '#C0C0C0', finish: 'Metallic' },
  { name: 'XPEL Heritage Grey', color: '#8C8C8C', finish: 'Gloss' },
  { name: 'XPEL Satin Tarmac', color: '#2F4F4F', finish: 'Satin' },
  { name: 'XPEL Obsidian Black', color: '#0A0A0A', finish: 'Gloss' },
  { name: 'XPEL Satin Midnight Black', color: '#1C1C1C', finish: 'Satin' },
  { name: 'XPEL Grey Black', color: '#36454F', finish: 'Gloss' },
  { name: 'XPEL Pearl White', color: '#FFFFFF', finish: 'Metallic' },
];

const XPELColorPPF = () => {
  const [selectedColor, setSelectedColor] = useState<XPELColor>(xpelColors[0]);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  React.useEffect(() => {
    document.title = "XPEL COLOR PPF Miami | Colored Paint Protection Film | 16 Colors Available";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your vehicle with XPEL COLOR paint protection film in Miami. 16 vibrant colors available in gloss, satin, and metallic finishes. Protection meets style.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your vehicle with XPEL COLOR paint protection film in Miami. 16 vibrant colors available in gloss, satin, and metallic finishes. Protection meets style.';
      document.head.appendChild(meta);
    }

    // Add OG tags & canonical
    addOpenGraphTags(
      "XPEL COLOR PPF Miami | Colored Paint Protection Film | Bespoke Auto Design",
      "Transform your vehicle with XPEL COLOR paint protection film in Miami. 16 vibrant colors in gloss, satin, and metallic finishes."
    );
    addCanonicalUrl("https://bespokeautodesign.com/colorppf");

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "XPEL COLOR Paint Protection Film",
      "description": "Premium colored paint protection film available in 16 vibrant colors with gloss, satin, and metallic finishes. Installed in Miami, FL.",
      "brand": { "@type": "Brand", "name": "XPEL" },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "seller": {
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
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <ColorPPFHero onGetQuote={() => setQuoteModalOpen(true)} />

      {/* Editorial Image — Installation */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-3/5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/8b43fed7-f7fb-4afb-9e85-d49fe7a3f5dc.png" 
                alt="Professional XPEL COLOR PPF installation process at Bespoke Auto Design Miami" 
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/5 space-y-4">
            <Badge variant="outline">PRECISION CRAFT</Badge>
            <h2 className="text-3xl font-bold font-playfair text-foreground">Installed by Certified Specialists</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every XPEL COLOR PPF installation at Bespoke Auto Design is performed by factory-trained technicians using computer-cut DAP templates — ensuring flawless, edge-to-edge coverage on every panel.
            </p>
            <Button variant="premium" onClick={() => setQuoteModalOpen(true)}>Get a Quote</Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <ColorPPFBenefits />

      {/* Editorial Image — Showcase (offset right) */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="w-full lg:w-3/5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/4b56ee72-ca4c-452a-9f3a-9a3df7fca4e0.png" 
                alt="XPEL COLOR Paint Protection Film benefits" 
                className="w-full h-72 md:h-96 object-cover object-[60%_25%] md:object-[50%_20%]"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/5 space-y-4">
            <Badge variant="outline">SUPERIOR FINISH</Badge>
            <h2 className="text-3xl font-bold font-playfair text-foreground">Indistinguishable from Factory Paint</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unlike vinyl wraps, XPEL COLOR PPF delivers a depth and clarity that rivals a professional respray — with the added benefit of self-healing protection and a 10-year warranty.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <ColorPPFComparison />

      {/* Editorial Images — Side by side between comparison and color selector */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src="/lovable-uploads/79c435f6-2f6b-4ece-87b1-9dce26b621a7.png" alt="XPEL PPF Color Motion" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <h4 className="font-semibold text-lg">Dynamic Protection</h4>
              <p className="text-sm text-white/80">Advanced self-healing film technology</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src="/lovable-uploads/86d579b0-d6bd-414a-a58b-23744306a9dd.png" alt="XPEL PPF Color Spectrum" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <h4 className="font-semibold text-lg">Vibrant Colors</h4>
              <p className="text-sm text-white/80">16 stunning shades to choose from</p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Selector */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4">16 COLORS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">XPEL Color Collection</h2>
            <p className="text-muted-foreground">Premium paint protection films in stunning colors</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Color Palette */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {xpelColors.map((color) => (
                    <div key={color.name} className="flex flex-col items-center space-y-3 group cursor-pointer" onClick={() => setSelectedColor(color)}>
                      <div className={`relative w-16 h-16 rounded-full border-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${selectedColor.name === color.name ? 'border-primary shadow-xl scale-110' : 'border-border group-hover:border-primary/50'}`}>
                        <div className="w-full h-full rounded-full overflow-hidden" style={{
                          backgroundColor: color.color,
                          background: color.finish === 'Metallic' ? `linear-gradient(135deg, ${color.color}, #ffffff60, ${color.color})` : color.color,
                          filter: color.finish === 'Satin' ? 'brightness(0.85) contrast(1.1)' : 'none'
                        }} />
                        {selectedColor.name === color.name && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-primary bg-background rounded-full" />
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <p className={`text-sm font-medium transition-colors ${selectedColor.name === color.name ? 'text-primary' : 'text-foreground'}`}>
                          {color.name.replace('XPEL ', '')}
                        </p>
                        <Badge variant={selectedColor.name === color.name ? 'default' : 'secondary'} className="text-xs mt-1">{color.finish}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Color Display */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full">
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl shadow-2xl border-4 border-background" style={{
                      backgroundColor: selectedColor.color,
                      background: selectedColor.finish === 'Metallic' ? `linear-gradient(135deg, ${selectedColor.color}, #ffffff60, ${selectedColor.color})` : selectedColor.color,
                      filter: selectedColor.finish === 'Satin' ? 'brightness(0.85) contrast(1.1)' : 'none'
                    }} />
                    <div className="absolute -bottom-2 -right-2">
                      <Badge variant="default" className="shadow-lg">{selectedColor.finish}</Badge>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{selectedColor.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{selectedColor.finish} Finish</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Shield className="h-3 w-3 text-primary" /><span>10-year warranty</span></div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Zap className="h-3 w-3 text-primary" /><span>Self-healing</span></div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Star className="h-3 w-3 text-primary" /><span>UV resistant</span></div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Droplet className="h-3 w-3 text-primary" /><span>Hydrophobic</span></div>
                  </div>
                  <Button className="w-full mt-6" onClick={() => setQuoteModalOpen(true)}>
                    Get Quote for {selectedColor.name.replace('XPEL ', '')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <ColorPPFProcess />

      {/* FAQ */}
      <ColorPPFFAQ />

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default XPELColorPPF;
