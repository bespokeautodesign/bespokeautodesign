import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Star, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PPFTeaser = () => {
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
            NEW ARRIVAL
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            XPEL Colored PPF
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Introducing revolutionary colored Paint Protection Film technology. 
            Transform your vehicle while providing ultimate protection.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 bg-background/50 backdrop-blur-sm border-primary/20 group hover:shadow-elegant transition-all duration-500">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
            <Star className="h-6 w-6 text-yellow-500" />
            Interactive PPF Color Preview
            <Star className="h-6 w-6 text-yellow-500" />
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Visual Preview Grid */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-background/50 p-12">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
                {/* Color preview circles */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Mint Green</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Racing Red</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Ocean Blue</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Royal Purple</span>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-white shadow-lg transform hover:scale-110 transition-transform"></div>
                  <span className="text-xs font-medium">Sunset Orange</span>
                </div>
              </div>
              
              {/* Animated highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Features Quick List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <p className="font-medium text-sm">Ultimate Protection</p>
              </div>
              <div className="space-y-2">
                <Palette className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="font-medium text-sm">10 Color Options</p>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-orange-500 mx-auto" />
                <p className="font-medium text-sm">Self-Healing Tech</p>
              </div>
              <div className="space-y-2">
                <Star className="h-8 w-8 text-green-500 mx-auto" />
                <p className="font-medium text-sm">10-Year Warranty</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-border">
              <Link to="/ppf-showcase">
                <Button variant="premium" size="lg" className="text-lg px-8 py-4 group">
                  Explore Interactive Preview
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-muted-foreground mt-4 text-sm">
                Interactive 3D Porsche GT3 RS • 10 color options • Real-time preview
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};