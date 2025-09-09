import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight, Shield, Droplet, Star, Zap, CheckCircle, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

interface XPELColor {
  name: string;
  color: string;
  finish: 'Gloss' | 'Satin' | 'Metallic';
}

const xpelColors: XPELColor[] = [
  { name: 'XPEL Yellow', color: '#FFD700', finish: 'Gloss' },
  { name: 'XPEL Molten Orange', color: '#FF4500', finish: 'Gloss' },
  { name: 'XPEL Monza Red', color: '#DC143C', finish: 'Gloss' },
  { name: 'XPEL Satin Thermal Beige', color: '#D2B48C', finish: 'Satin' },
  { name: 'XPEL Satin Battle Green', color: '#556B2F', finish: 'Satin' },
  { name: 'XPEL Moss Green', color: '#228B22', finish: 'Gloss' },
  { name: 'XPEL South Beach Blue', color: '#4169E1', finish: 'Gloss' },
  { name: 'XPEL Satin Abyss Blue', color: '#191970', finish: 'Satin' },
  { name: 'XPEL Ultra Plum', color: '#8B008B', finish: 'Gloss' },
  { name: 'XPEL Bond Silver', color: '#C0C0C0', finish: 'Metallic' },
  { name: 'XPEL Heritage Grey', color: '#708090', finish: 'Gloss' },
  { name: 'XPEL Satin Tarmac', color: '#2F4F4F', finish: 'Satin' },
  { name: 'XPEL Obsidian Black', color: '#000000', finish: 'Gloss' },
  { name: 'XPEL Satin Midnight Black', color: '#2C2C2C', finish: 'Satin' },
  { name: 'XPEL Grey Black', color: '#36454F', finish: 'Gloss' },
  { name: 'XPEL Pearl White', color: '#F8F8FF', finish: 'Metallic' },
];

const vehicleTypes = ['Sedan', 'Sport', 'SUV'];

const showcaseImages = [
  '/lovable-uploads/91bdd6c7-9fa5-400d-be4b-fdbb223d5f74.png',
  '/lovable-uploads/34fc4d04-6eac-424d-946f-ca9c48793493.png',
  '/lovable-uploads/46142ae2-d86c-47ab-bfdb-e96aa4c9b855.png',
];

const XPELColorPPF = () => {
  const [selectedColor, setSelectedColor] = useState<XPELColor>(xpelColors[0]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Sport');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

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

      {/* Hero Section with Image Carousel */}
      <section className="relative">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={showcaseImages[currentImageIndex]}
            alt="XPEL Color PPF Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Carousel Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating CTA */}
        <div className="absolute bottom-8 right-8 z-10">
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => document.getElementById('colors')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Find an Installer
          </Button>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold text-primary mb-4">Your Car. Your Color. Your Style.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Express yourself without saying a word. Our latest paint protection film comes in a variety of bold colors to show off your signature style.
            </p>
          </div>

          {/* Vehicle Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 p-1 bg-secondary rounded-lg">
              {vehicleTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedVehicle(type)}
                  className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                    selectedVehicle === type
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Car className="h-4 w-4" />
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Color Display */}
          <Card className="p-8 mb-8 bg-background/50 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="text-lg px-4 py-2">
                {selectedColor.name} - {selectedColor.finish} Finish
              </Badge>
              <div className="flex justify-center">
                <div
                  className="w-32 h-32 rounded-full border-4 border-white shadow-2xl"
                  style={{
                    backgroundColor: selectedColor.color,
                    background: selectedColor.finish === 'Metallic'
                      ? `linear-gradient(135deg, ${selectedColor.color}, #ffffff20, ${selectedColor.color})`
                      : selectedColor.color,
                    filter: selectedColor.finish === 'Satin' ? 'brightness(0.9) contrast(1.1)' : 'none'
                  }}
                />
              </div>
            </div>
          </Card>

          {/* Color Grid */}
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
          >
            Find an Installer
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