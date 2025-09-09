import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Star, Droplet, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PorscheGT3RS } from '@/components/PorscheGT3RS';

interface PPFColor {
  name: string;
  color: string;
  filter: string;
  popular?: boolean;
  description: string;
}

const ppfColors: PPFColor[] = [
  { 
    name: 'Clear', 
    color: '#4ade80', 
    filter: 'none', 
    popular: true,
    description: 'Original paint color with invisible protection'
  },
  { 
    name: 'Midnight Black', 
    color: '#1a1a1a', 
    filter: 'brightness(0.3) contrast(1.2)',
    description: 'Deep black finish with premium protection'
  },
  { 
    name: 'Racing Red', 
    color: '#dc2626', 
    filter: 'hue-rotate(0deg) saturate(1.8) brightness(0.9)', 
    popular: true,
    description: 'Classic racing red enhanced'
  },
  { 
    name: 'Ocean Blue', 
    color: '#2563eb', 
    filter: 'hue-rotate(220deg) saturate(1.5) brightness(0.8)',
    description: 'Deep ocean blue metallic finish'
  },
  { 
    name: 'Forest Green', 
    color: '#16a34a', 
    filter: 'hue-rotate(120deg) saturate(1.3) brightness(0.7)',
    description: 'Rich forest green with metallic flake'
  },
  { 
    name: 'Sunset Orange', 
    color: '#ea580c', 
    filter: 'hue-rotate(25deg) saturate(1.6) brightness(1.1)',
    description: 'Vibrant sunset orange with pearl finish'
  },
  { 
    name: 'Royal Purple', 
    color: '#7c3aed', 
    filter: 'hue-rotate(280deg) saturate(1.4) brightness(0.8)',
    description: 'Luxurious royal purple metallic'
  },
  { 
    name: 'Pearl White', 
    color: '#f8fafc', 
    filter: 'brightness(1.3) contrast(0.9)', 
    popular: true,
    description: 'Premium pearl white with luminous depth'
  },
  { 
    name: 'Charcoal Grey', 
    color: '#374151', 
    filter: 'brightness(0.6) saturate(0.3)',
    description: 'Sophisticated charcoal grey matte'
  },
  { 
    name: 'Gold Chrome', 
    color: '#fbbf24', 
    filter: 'hue-rotate(45deg) saturate(2) brightness(1.2)',
    description: 'Luxury gold chrome mirror finish'
  },
];

const PPFShowcase = () => {
  const [selectedColor, setSelectedColor] = useState<PPFColor>(ppfColors[0]); // Default to Clear (mint green)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-8 w-auto" />
              <span className="text-lg font-bold text-primary">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            XPEL Colored PPF Collection
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            PPF Color Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of automotive protection with XPEL's revolutionary colored Paint Protection Film. 
            See how your Porsche GT3 RS would look with our premium colored PPF options.
          </p>
        </div>

        {/* Main Showcase */}
        <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/20 mb-12">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl text-primary flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-yellow-500" />
              Porsche GT3 RS
              <Star className="h-8 w-8 text-yellow-500" />
            </CardTitle>
            <Badge variant="secondary" className="text-lg px-6 py-2 mx-auto">
              {selectedColor.name} XPEL PPF
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Car Display with Hover Effect */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-background/50 p-12">
              <div className="relative mx-auto max-w-4xl transform hover:scale-105 transition-transform duration-500">
                <PorscheGT3RS
                  color={selectedColor.color}
                  filter={selectedColor.filter}
                  className="drop-shadow-2xl"
                />
                
                {/* Floating animation effect */}
                <div className="absolute inset-0 animate-pulse opacity-30">
                  <PorscheGT3RS
                    color={selectedColor.color}
                    filter={`${selectedColor.filter} blur(2px)`}
                    className="scale-110"
                  />
                </div>
              </div>
              
              {/* Description */}
              <div className="text-center mt-8">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {selectedColor.description}
                </p>
              </div>
            </div>

            {/* Color Selection Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-primary">Choose Your PPF Color</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {ppfColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
                      selectedColor.name === color.name
                        ? 'border-primary shadow-lg scale-105 ring-2 ring-primary/50'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="space-y-4">
                      <div
                        className="w-full h-16 rounded-lg border-2 border-border/50 shadow-inner transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: color.color === 'transparent' ? '#f1f5f9' : color.color,
                          background: color.color === 'transparent' 
                            ? 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)'
                            : color.color,
                          backgroundSize: color.color === 'transparent' ? '8px 8px' : 'auto',
                          backgroundPosition: color.color === 'transparent' ? '0 0, 0 4px, 4px -4px, -4px 0px' : 'auto',
                        }}
                      />
                      <div className="text-center">
                        <p className="font-bold text-foreground">{color.name}</p>
                        {color.popular && (
                          <Badge variant="secondary" className="text-xs mt-2">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div className="text-center space-y-3">
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <h4 className="font-bold text-lg">Self-Healing</h4>
                <p className="text-muted-foreground text-sm">Minor scratches disappear with heat</p>
              </div>
              <div className="text-center space-y-3">
                <Star className="h-12 w-12 text-yellow-500 mx-auto" />
                <h4 className="font-bold text-lg">10-Year Warranty</h4>
                <p className="text-muted-foreground text-sm">Industry-leading protection guarantee</p>
              </div>
              <div className="text-center space-y-3">
                <Sun className="h-12 w-12 text-orange-500 mx-auto" />
                <h4 className="font-bold text-lg">UV Protection</h4>
                <p className="text-muted-foreground text-sm">Prevents paint fading and oxidation</p>
              </div>
              <div className="text-center space-y-3">
                <Droplet className="h-12 w-12 text-blue-500 mx-auto" />
                <h4 className="font-bold text-lg">Hydrophobic</h4>
                <p className="text-muted-foreground text-sm">Water and dirt repellent surface</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Button 
                variant="premium" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your Custom PPF Quote
              </Button>
              <p className="text-muted-foreground mt-4">
                Professional installation • Premium materials • Lifetime support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PPFShowcase;