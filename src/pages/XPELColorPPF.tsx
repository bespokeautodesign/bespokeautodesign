import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Droplet, Star, Zap, CheckCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface XPELColor {
  name: string;
  color: string;
  finish: 'Gloss' | 'Satin' | 'Metallic';
}

const xpelColors: XPELColor[] = [
  { name: 'XPEL Yellow', color: '#FFD700', finish: 'Gloss' },
  { name: 'XPEL Molten Orange', color: '#FF7F00', finish: 'Gloss' },
  { name: 'XPEL Monza Red', color: '#DC143C', finish: 'Gloss' },
  { name: 'XPEL South Beach Blue', color: '#00BFFF', finish: 'Gloss' },
  { name: 'XPEL Ultra Plum', color: '#8B008B', finish: 'Gloss' },
  { name: 'XPEL Moss Green', color: '#8FBC8F', finish: 'Gloss' },
  { name: 'XPEL Bond Silver', color: '#C0C0C0', finish: 'Metallic' },
  { name: 'XPEL Pearl White', color: '#FFFFFF', finish: 'Metallic' },
  { name: 'XPEL Obsidian Black', color: '#000000', finish: 'Gloss' },
  { name: 'XPEL Satin Midnight Black', color: '#1C1C1C', finish: 'Satin' },
  { name: 'XPEL Grey Black', color: '#36454F', finish: 'Gloss' },
  { name: 'XPEL Satin Abyss Blue', color: '#191970', finish: 'Satin' },
  { name: 'XPEL Satin Tarmac', color: '#2F4F4F', finish: 'Satin' },
  { name: 'XPEL Satin Thermal Beige', color: '#D2B48C', finish: 'Satin' },
  { name: 'XPEL Satin Battle Green', color: '#355E3B', finish: 'Satin' },
  { name: 'XPEL Heritage Grey', color: '#808080', finish: 'Gloss' },
];

const XPELColorPPF = () => {
  const [selectedColor, setSelectedColor] = useState<XPELColor>(xpelColors[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-8 w-auto" />
                <span className="text-lg font-bold text-primary">
                  <span className="text-silver">Bespoke</span> Auto Design
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Summary</Button>
              <Button variant="default" size="sm">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">XPEL Color PPF</h1>
            <p className="text-gray-600 text-sm">Browse and configure your paint protection film colors</p>
          </div>

          {/* XPEL Color Palette */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">XPEL Color Collection</h3>
              <p className="text-muted-foreground">Premium paint protection films in stunning colors</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-sm border">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {xpelColors.map((color) => (
                  <div
                    key={color.name}
                    className="flex flex-col items-center space-y-3 group cursor-pointer"
                    onClick={() => setSelectedColor(color)}
                  >
                    <div
                      className={`relative w-16 h-16 rounded-full border-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                        selectedColor.name === color.name
                          ? 'border-primary shadow-xl scale-110'
                          : 'border-border group-hover:border-primary/50'
                      }`}
                    >
                      <div
                        className="w-full h-full rounded-full overflow-hidden"
                        style={{
                          backgroundColor: color.color,
                          background: color.finish === 'Metallic'
                            ? `linear-gradient(135deg, ${color.color}, #ffffff60, ${color.color})`
                            : color.color,
                          filter: color.finish === 'Satin' ? 'brightness(0.85) contrast(1.1)' : 'none'
                        }}
                      />
                      {selectedColor.name === color.name && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-primary bg-background rounded-full" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium transition-colors ${
                        selectedColor.name === color.name ? 'text-primary' : 'text-foreground'
                      }`}>
                        {color.name.replace('XPEL ', '')}
                      </p>
                      <Badge 
                        variant={selectedColor.name === color.name ? 'default' : 'secondary'}
                        className="text-xs mt-1"
                      >
                        {color.finish}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Color Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">{selectedColor.name}</h4>
            <p className="text-sm text-gray-600 mb-2">{selectedColor.finish} Finish</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="h-4 w-4" />
              <span>10-year warranty included</span>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <h4 className="font-semibold text-gray-900">Features</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Zap className="h-4 w-4 text-green-500" />
                <span>Self-healing technology</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>Rock chip protection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>UV resistance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Droplet className="h-4 w-4 text-cyan-500" />
                <span>Hydrophobic surface</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Button className="w-full mb-3" size="lg">
              Get Quote for {selectedColor.name}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Professional installation • Premium materials • Warranty included
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPELColorPPF;