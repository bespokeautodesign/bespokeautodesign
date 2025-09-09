import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PPFColor {
  name: string;
  color: string;
  filter: string;
  popular?: boolean;
}

const ppfColors: PPFColor[] = [
  { name: 'Clear', color: 'transparent', filter: 'none', popular: true },
  { name: 'Midnight Black', color: '#1a1a1a', filter: 'brightness(0.3) contrast(1.2)' },
  { name: 'Racing Red', color: '#dc2626', filter: 'hue-rotate(0deg) saturate(1.8) brightness(0.9)', popular: true },
  { name: 'Ocean Blue', color: '#2563eb', filter: 'hue-rotate(220deg) saturate(1.5) brightness(0.8)' },
  { name: 'Forest Green', color: '#16a34a', filter: 'hue-rotate(120deg) saturate(1.3) brightness(0.7)' },
  { name: 'Sunset Orange', color: '#ea580c', filter: 'hue-rotate(25deg) saturate(1.6) brightness(1.1)' },
  { name: 'Royal Purple', color: '#7c3aed', filter: 'hue-rotate(280deg) saturate(1.4) brightness(0.8)' },
  { name: 'Pearl White', color: '#f8fafc', filter: 'brightness(1.3) contrast(0.9)', popular: true },
  { name: 'Charcoal Grey', color: '#374151', filter: 'brightness(0.6) saturate(0.3)' },
  { name: 'Gold Chrome', color: '#fbbf24', filter: 'hue-rotate(45deg) saturate(2) brightness(1.2)' },
];

export const PPFColorPreview = () => {
  const [selectedColor, setSelectedColor] = useState<PPFColor>(ppfColors[0]);
  const carImage = "/lovable-uploads/34fc4d04-6eac-424d-946f-ca9c48793493.png";

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            PPF Color Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how your vehicle would look with different colored Paint Protection Film options. 
            Click any color below to instantly preview it on the car.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-primary">
                Interactive Color Showcase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Car Display */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-background/50 p-8">
                <div className="text-center mb-6">
                  <Badge variant="outline" className="text-lg px-4 py-2 bg-primary/10">
                    {selectedColor.name} PPF
                  </Badge>
                </div>
                
                <div className="relative mx-auto max-w-4xl">
                  <img
                    src={carImage}
                    alt="Sports car with PPF"
                    className="w-full h-auto transition-all duration-700 ease-in-out rounded-lg shadow-2xl"
                    style={{
                      filter: selectedColor.filter,
                    }}
                  />
                  
                  {/* Overlay for colored PPF effect */}
                  {selectedColor.color !== 'transparent' && (
                    <div
                      className="absolute inset-0 rounded-lg transition-all duration-700 ease-in-out mix-blend-overlay opacity-30"
                      style={{
                        backgroundColor: selectedColor.color,
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Color Selection Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {ppfColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      selectedColor.name === color.name
                        ? 'border-primary shadow-lg scale-105'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="space-y-3">
                      <div
                        className="w-full h-12 rounded-lg border-2 border-border/50 shadow-inner"
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
                        <p className="font-medium text-sm text-foreground">{color.name}</p>
                        {color.popular && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Information */}
              <div className="text-center space-y-4 pt-6 border-t border-border">
                <p className="text-muted-foreground">
                  Our premium PPF options provide superior protection while allowing you to customize your vehicle's appearance.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    ✓ Self-healing technology
                  </span>
                  <span className="flex items-center gap-2">
                    ✓ 10-year warranty
                  </span>
                  <span className="flex items-center gap-2">
                    ✓ UV protection
                  </span>
                  <span className="flex items-center gap-2">
                    ✓ Professional installation
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};