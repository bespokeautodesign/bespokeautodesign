import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Star, Palette, Zap, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

export const XPELTeaser = () => {
  return (
    <section className="py-14 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 px-3 py-1 bg-primary/10">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            XPEL COLOR PPF
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Protection Meets Color
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The world's first colored paint protection film. Change your vehicle's color while adding industry-leading protection — all in one film.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 space-y-6 group hover:shadow-elegant transition-all duration-500">
          
          {/* Color Swatches */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-secondary/30 to-background/50 p-6 md:p-8">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-3xl mx-auto">
              {[
                { color: 'from-yellow-400 to-yellow-600', name: 'Yellow' },
                { color: 'from-orange-500 to-orange-700', name: 'Orange' },
                { color: 'from-red-500 to-red-700', name: 'Red' },
                { color: 'from-green-500 to-green-700', name: 'Green' },
                { color: 'from-blue-500 to-blue-700', name: 'Blue' },
                { color: 'from-purple-500 to-purple-700', name: 'Purple' },
                { color: 'from-gray-400 to-gray-600', name: 'Silver' },
                { color: 'from-gray-800 to-black', name: 'Black' },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center space-y-2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${c.color} ring-3 ring-white shadow-md hover:scale-110 transition-transform`}></div>
                  <span className="text-xs font-medium text-muted-foreground">{c.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <p className="text-center text-xs text-muted-foreground mt-4">16 colors available in Gloss, Satin & Metallic finishes</p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">8mil Thickness</p>
                <p className="text-xs text-muted-foreground">Superior chip & scratch defense</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Self-Healing</p>
                <p className="text-xs text-muted-foreground">Minor scratches vanish with heat</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">10-Year Warranty</p>
                <p className="text-xs text-muted-foreground">XPEL-backed long-term coverage</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Droplet className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Hydrophobic</p>
                <p className="text-xs text-muted-foreground">Water & contaminants bead off</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Palette className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Reversible Color</p>
                <p className="text-xs text-muted-foreground">Remove to reveal original paint</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20">
              <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">UV Resistant</p>
                <p className="text-xs text-muted-foreground">No fading under Miami sun</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4 border-t border-border">
            <Link to="/colorppf">
              <Button variant="premium" size="lg" className="px-8 group">
                Explore XPEL COLOR
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
