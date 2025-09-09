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

interface VehicleModel {
  name: string;
  type: 'Sedan' | 'Sport' | 'SUV';
  image: string;
}

const vehicleModels: VehicleModel[] = [
  { name: 'Porsche GT3 RS', type: 'Sport', image: '/lovable-uploads/91bdd6c7-9fa5-400d-be4b-fdbb223d5f74.png' },
  { name: 'Bugatti Bolide', type: 'Sport', image: '/lovable-uploads/34fc4d04-6eac-424d-946f-ca9c48793493.png' },
  { name: 'Ferrari F8', type: 'Sport', image: '/lovable-uploads/3f1daf49-c3df-4080-ae59-f3d51dde5a5e.png' },
  { name: 'McLaren 570S', type: 'Sport', image: '/lovable-uploads/0043b483-74ac-46c5-916a-44e46e97b88b.png' },
  { name: 'Mercedes G-Wagon', type: 'SUV', image: '/lovable-uploads/954a24eb-a0e4-4854-a5ae-cc3558261924.png' },
];

const vehicleTypes = ['Sport', 'SUV'];

const getColorFilter = (color: XPELColor) => {
  const colorMap: { [key: string]: string } = {
    '#FFD700': 'hue-rotate(45deg) saturate(1.8) brightness(1.1)', // Yellow
    '#FF4500': 'hue-rotate(15deg) saturate(1.6) brightness(1.0)', // Orange
    '#DC143C': 'hue-rotate(350deg) saturate(1.5) brightness(0.9)', // Red
    '#D2B48C': 'hue-rotate(35deg) saturate(0.8) brightness(1.1)', // Beige
    '#556B2F': 'hue-rotate(80deg) saturate(1.2) brightness(0.8)', // Battle Green
    '#228B22': 'hue-rotate(120deg) saturate(1.4) brightness(0.9)', // Moss Green
    '#4169E1': 'hue-rotate(230deg) saturate(1.3) brightness(0.8)', // Blue
    '#191970': 'hue-rotate(240deg) saturate(1.1) brightness(0.6)', // Abyss Blue
    '#8B008B': 'hue-rotate(300deg) saturate(1.5) brightness(0.8)', // Purple
    '#C0C0C0': 'saturate(0.3) brightness(1.2)', // Silver
    '#708090': 'saturate(0.5) brightness(0.9)', // Grey
    '#2F4F4F': 'saturate(0.4) brightness(0.7)', // Tarmac
    '#000000': 'brightness(0.3) contrast(1.2)', // Black
    '#2C2C2C': 'brightness(0.4) contrast(1.1)', // Midnight Black
    '#36454F': 'brightness(0.5) contrast(1.0)', // Grey Black
    '#F8F8FF': 'brightness(1.3) contrast(0.9)', // Pearl White
  };
  return colorMap[color.color] || 'none';
};

const XPELColorPPF = () => {
  const [selectedColor, setSelectedColor] = useState<XPELColor>(xpelColors[0]);
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>('Sport');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleModel>(vehicleModels[0]);

  const filteredVehicles = vehicleModels.filter(vehicle => vehicle.type === selectedVehicleType);

  // Update selected vehicle when type changes
  React.useEffect(() => {
    const firstVehicleOfType = vehicleModels.find(v => v.type === selectedVehicleType);
    if (firstVehicleOfType) {
      setSelectedVehicle(firstVehicleOfType);
    }
  }, [selectedVehicleType]);

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

        {/* Vehicle Type and Model Selector */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-4">Your Car. Your Color. Your Style.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Express yourself without saying a word. Select your vehicle type and model to see how our paint protection film colors would look.
            </p>
          </div>

          {/* Vehicle Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 p-1 bg-secondary rounded-lg">
              {vehicleTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedVehicleType(type)}
                  className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                    selectedVehicleType === type
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

          {/* Vehicle Model Selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {filteredVehicles.map((vehicle) => (
              <button
                key={vehicle.name}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedVehicle.name === vehicle.name
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="space-y-3">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-24 object-cover object-center rounded-md"
                  />
                  <p className="font-medium text-sm text-center">{vehicle.name}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Vehicle with Color Preview */}
          <Card className="p-8 mb-8 bg-background/50 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="text-lg px-4 py-2">
                  {selectedVehicle.name}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {selectedColor.name} - {selectedColor.finish} Finish
                </Badge>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                <img
                  src={selectedVehicle.image}
                  alt={`${selectedVehicle.name} with ${selectedColor.name} PPF`}
                  className="w-full h-auto rounded-lg shadow-2xl transition-all duration-700 ease-in-out"
                  style={{
                    filter: getColorFilter(selectedColor),
                  }}
                />
                
                {/* Color overlay for enhanced effect */}
                <div
                  className="absolute inset-0 rounded-lg transition-all duration-700 ease-in-out mix-blend-overlay opacity-15"
                  style={{
                    backgroundColor: selectedColor.color,
                  }}
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Color Selection Section */}
        <section id="colors" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Choose Your XPEL Color</h3>
            <p className="text-muted-foreground">
              Click any color below to see how it would look on your selected vehicle.
            </p>
          </div>

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