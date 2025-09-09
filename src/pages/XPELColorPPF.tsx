import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Droplet, Star, Zap, CheckCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import porsche911TurboS from '@/assets/porsche-911-turbo-s.jpg';

interface XPELColor {
  name: string;
  color: string;
  finish: 'Gloss' | 'Satin' | 'Metallic';
  category: 'Bright' | 'Metallic' | 'Dark' | 'Natural';
}

const xpelColors: XPELColor[] = [
  // Bright Colors
  { name: 'XPEL Yellow', color: '#FFD700', finish: 'Gloss', category: 'Bright' },
  { name: 'XPEL Molten Orange', color: '#FF7F00', finish: 'Gloss', category: 'Bright' },
  { name: 'XPEL Monza Red', color: '#DC143C', finish: 'Gloss', category: 'Bright' },
  { name: 'XPEL South Beach Blue', color: '#00BFFF', finish: 'Gloss', category: 'Bright' },
  { name: 'XPEL Ultra Plum', color: '#8B008B', finish: 'Gloss', category: 'Bright' },
  { name: 'XPEL Moss Green', color: '#8FBC8F', finish: 'Gloss', category: 'Bright' },
  
  // Metallic Colors
  { name: 'XPEL Bond Silver', color: '#C0C0C0', finish: 'Metallic', category: 'Metallic' },
  { name: 'XPEL Pearl White', color: '#FFFFFF', finish: 'Metallic', category: 'Metallic' },
  
  // Dark Colors
  { name: 'XPEL Obsidian Black', color: '#000000', finish: 'Gloss', category: 'Dark' },
  { name: 'XPEL Satin Midnight Black', color: '#1C1C1C', finish: 'Satin', category: 'Dark' },
  { name: 'XPEL Grey Black', color: '#36454F', finish: 'Gloss', category: 'Dark' },
  { name: 'XPEL Satin Abyss Blue', color: '#191970', finish: 'Satin', category: 'Dark' },
  { name: 'XPEL Satin Tarmac', color: '#2F4F4F', finish: 'Satin', category: 'Dark' },
  
  // Natural Colors
  { name: 'XPEL Satin Thermal Beige', color: '#D2B48C', finish: 'Satin', category: 'Natural' },
  { name: 'XPEL Satin Battle Green', color: '#355E3B', finish: 'Satin', category: 'Natural' },
  { name: 'XPEL Heritage Grey', color: '#808080', finish: 'Gloss', category: 'Natural' },
];

const XPELColorPPF = () => {
  const [selectedColor, setSelectedColor] = useState<XPELColor>(xpelColors[0]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Bright', 'Metallic', 'Dark', 'Natural']);
  
  const categories = ['Bright', 'Metallic', 'Dark', 'Natural'];
  
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getColorsByCategory = (category: string) => {
    return xpelColors.filter(color => color.category === category);
  };

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

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Car Viewer - Left Side */}
        <div className="flex-1 relative bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative max-w-4xl w-full">
              <div className="relative group">
                <img
                  src={porsche911TurboS}
                  alt="Porsche 911 Turbo S with XPEL Color PPF"
                  className="w-full h-auto drop-shadow-2xl transition-all duration-500"
                />
                
                {/* Color overlay */}
                <div
                  className="absolute inset-0 transition-all duration-700 ease-in-out opacity-30 mix-blend-multiply"
                  style={{
                    backgroundColor: selectedColor.color,
                  }}
                />
                
                {/* Metallic effect */}
                {selectedColor.finish === 'Metallic' && (
                  <div
                    className="absolute inset-0 transition-all duration-700 ease-in-out opacity-20 mix-blend-screen"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${selectedColor.color}60 50%, transparent 70%)`,
                    }}
                  />
                )}
                
                {/* Satin effect */}
                {selectedColor.finish === 'Satin' && (
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-all duration-700" />
                )}
              </div>
              
              {/* Car Info Overlay */}
              <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm p-6 rounded-tr-lg">
                <h2 className="text-2xl font-bold text-gray-900">Porsche GT3 RS</h2>
                <p className="text-gray-600">with XPEL Color PPF</p>
                <Badge variant="secondary" className="mt-2">
                  {selectedColor.name} - {selectedColor.finish}
                </Badge>
              </div>
            </div>
          </div>
          
          {/* View Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
              Exterior
            </Button>
            <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm">
              Interior
            </Button>
          </div>
        </div>

        {/* Configuration Panel - Right Side */}
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">XPEL Color PPF</h1>
              <p className="text-gray-600 text-sm">Configure your paint protection film</p>
            </div>

            {/* Color Categories */}
            <div className="space-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">PPF Colors</h3>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              
              {categories.map((category) => {
                const categoryColors = getColorsByCategory(category);
                const isExpanded = expandedCategories.includes(category);
                
                return (
                  <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium text-gray-900">{category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{categoryColors.length}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-4 gap-2">
                          {categoryColors.map((color) => (
                            <button
                              key={color.name}
                              onClick={() => setSelectedColor(color)}
                              className={`relative aspect-square rounded-lg border-2 transition-all hover:scale-105 ${
                                selectedColor.name === color.name
                                  ? 'border-blue-500 ring-2 ring-blue-200'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              title={color.name}
                            >
                              <div
                                className="w-full h-full rounded-md"
                                style={{
                                  backgroundColor: color.color,
                                  background: color.finish === 'Metallic'
                                    ? `linear-gradient(135deg, ${color.color}, #ffffff40, ${color.color})`
                                    : color.color,
                                  filter: color.finish === 'Satin' ? 'brightness(0.9)' : 'none'
                                }}
                              />
                              {selectedColor.name === color.name && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
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
    </div>
  );
};

export default XPELColorPPF;