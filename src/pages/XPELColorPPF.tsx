import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Droplet, Star, Zap, CheckCircle, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface XPELColor {
  name: string;
  color: string;
  finish: 'Gloss' | 'Satin' | 'Metallic';
}

const xpelColors: XPELColor[] = [
  { name: 'XPEL Yellow', color: '#F2C94C', finish: 'Gloss' },
  { name: 'XPEL Molten Orange', color: '#E17B47', finish: 'Gloss' },
  { name: 'XPEL Monza Red', color: '#C4312F', finish: 'Gloss' },
  { name: 'XPEL Satin Thermal Beige', color: '#C4A574', finish: 'Satin' },
  { name: 'XPEL Satin Battle Green', color: '#4A5542', finish: 'Satin' },
  { name: 'XPEL Moss Green', color: '#6B7C32', finish: 'Gloss' },
  { name: 'XPEL South Beach Blue', color: '#4A90A4', finish: 'Gloss' },
  { name: 'XPEL Satin Abyss Blue', color: '#2C3E50', finish: 'Satin' },
  { name: 'XPEL Ultra Plum', color: '#4A2C4A', finish: 'Gloss' },
  { name: 'XPEL Bond Silver', color: '#E8E8E8', finish: 'Metallic' },
  { name: 'XPEL Heritage Grey', color: '#9B9B9B', finish: 'Gloss' },
  { name: 'XPEL Satin Tarmac', color: '#4A525A', finish: 'Satin' },
  { name: 'XPEL Obsidian Black', color: '#2C2C2C', finish: 'Gloss' },
  { name: 'XPEL Satin Midnight Black', color: '#1A1A1A', finish: 'Satin' },
  { name: 'XPEL Grey Black', color: '#3A3A3A', finish: 'Gloss' },
  { name: 'XPEL Pearl White', color: '#F5F5F5', finish: 'Metallic' },
];


const XPELColorPPF = () => {
  const [selectedColor, setSelectedColor] = useState<XPELColor>(xpelColors[0]);

  return (
    <div className="min-h-screen bg-background">
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Color Paint Protection Film
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            PPF benefits. Now in COLOR. Get more than just protection with XPEL's color-rich, 
            high-impact film engineered for the road ahead.
          </p>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Skip the Boring. Style + Shield in One.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Style and substance collide with XPEL COLOR, our vibrant paint-like protection film 
              that's engineered to turn heads and take hits.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Bold Finishes</h3>
                <p className="text-sm text-muted-foreground">
                  Customize your ride using OEM-inspired colors with smooth, low-texture surfaces in gloss, satin, and metallic finishes.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Self-Healing</h3>
                <p className="text-sm text-muted-foreground">
                  An advanced topcoat construction self-heals light scratches and swirl marks.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Defensive Shield</h3>
                <p className="text-sm text-muted-foreground">
                  Guards against rock chips and road hazards for ultimate protection.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Superior Design</h3>
                <p className="text-sm text-muted-foreground">
                  Won't yellow, crack, or stain. 10-year warranty included.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto">
                <Droplet className="h-8 w-8 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Easy Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge hydrophilic tech repels water, chemicals, and grime for easier maintenance.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Color Selection Section */}
        <section id="colors" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">XPEL Color Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Express yourself without saying a word. Our premium paint protection film comes in a variety of bold colors to show off your signature style.
            </p>
          </div>

          {/* Selected Color Display */}
          <Card className="p-8 mb-12 bg-background/50 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="text-2xl px-6 py-3">
                {selectedColor.name}
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {selectedColor.finish} Finish
              </Badge>
              <div className="flex justify-center">
                <div
                  className="w-48 h-48 rounded-full border-8 border-white shadow-2xl"
                  style={{
                    backgroundColor: selectedColor.color,
                    background: selectedColor.finish === 'Metallic'
                      ? `linear-gradient(135deg, ${selectedColor.color}, #ffffff20, ${selectedColor.color})`
                      : selectedColor.color,
                    filter: selectedColor.finish === 'Satin' ? 'brightness(0.9) contrast(1.1)' : 'none'
                  }}
                />
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                This premium {selectedColor.finish.toLowerCase()} finish provides superior protection while delivering stunning visual impact.
              </p>
            </div>
          </Card>

          {/* Color Grid */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">All Available Colors</h3>
            <p className="text-muted-foreground">
              Click on any color to view details. Each color provides the same superior protection with a unique aesthetic finish.
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 mb-8">
            {xpelColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`group relative p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedColor.name === color.name
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="space-y-3">
                  <div
                    className="w-full h-16 rounded-lg border-2 border-border/50 shadow-inner transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: color.color,
                      background: color.finish === 'Metallic'
                        ? `linear-gradient(135deg, ${color.color}, #ffffff20, ${color.color})`
                        : color.color,
                      filter: color.finish === 'Satin' ? 'brightness(0.9) contrast(1.1)' : 'none'
                    }}
                  />
                  <div className="text-center">
                    <p className="font-medium text-xs text-foreground leading-tight">{color.name}</p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {color.finish}
                    </Badge>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mb-8">
            Colors are for reference only. Visit an XPEL dealer to view physical samples.
          </p>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            variant="premium" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Your Quote
          </Button>
          <p className="text-muted-foreground mt-4">
            Professional installation • Premium XPEL materials • 10-year warranty
          </p>
        </div>
      </div>
    </div>
  );
};

export default XPELColorPPF;