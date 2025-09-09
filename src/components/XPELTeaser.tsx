import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Star, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const XPELTeaser = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 bg-primary/10">
            <Sparkles className="h-4 w-4 mr-2" />
            XPEL COLOR
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Now in COLOR
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PPF benefits. Now in COLOR. Get more than just protection with XPEL's color-rich, 
            high-impact film engineered for the road ahead.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 bg-background/50 backdrop-blur-sm border-primary/20 group hover:shadow-elegant transition-all duration-500">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
              <Star className="h-6 w-6 text-yellow-500" />
              Skip the Boring. Style + Shield in One.
              <Star className="h-6 w-6 text-yellow-500" />
            </CardTitle>
            <p className="text-muted-foreground mt-4">
              Style and substance collide with XPEL COLOR, our vibrant paint-like protection film that's engineered to turn heads and take hits.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Visual Preview Grid */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-background/50 p-12">
              <div className="grid grid-cols-2 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
                {/* Color preview circles - XPEL colors */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Yellow</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Orange</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Red</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Green</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Blue</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Purple</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Silver</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Black</span>
                </div>
              </div>
              
              {/* Animated highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="text-center mt-8">
                <Badge variant="secondary" className="text-sm">
                  16 Bold Colors Available
                </Badge>
              </div>
            </div>

            {/* Features Quick List */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <p className="font-medium text-sm">Ultimate Protection</p>
              </div>
              <div className="space-y-2">
                <Palette className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="font-medium text-sm">Bold Finishes</p>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-orange-500 mx-auto" />
                <p className="font-medium text-sm">Self-Healing</p>
              </div>
              <div className="space-y-2">
                <Star className="h-8 w-8 text-green-500 mx-auto" />
                <p className="font-medium text-sm">10-Year Warranty</p>
              </div>
              <div className="space-y-2">
                <ArrowRight className="h-8 w-8 text-blue-500 mx-auto" />
                <p className="font-medium text-sm">Easy Maintenance</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-border">
              <Link to="/colorppf">
                <Button variant="premium" size="lg" className="text-lg px-8 py-4 group">
                  Explore XPEL COLOR
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-muted-foreground mt-4 text-sm">
                16 bold colors • Gloss, Satin & Metallic finishes • Professional installation
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Colored PPF Extension */}
        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                <Badge variant="outline" className="text-sm px-3 py-1">
                  New Addition
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-primary">
                Colored Paint Protection Film
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Transform your vehicle's appearance while providing ultimate protection. Browse our complete collection of colored PPF options.
              </p>
              <Link to="/colorppf">
                <Button variant="outline" className="group">
                  View All Colors
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};