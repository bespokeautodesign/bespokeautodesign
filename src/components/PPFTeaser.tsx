import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Ferrari488Pista } from '@/components/Ferrari488Pista';

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
              Ferrari 488 Pista Preview
              <Star className="h-6 w-6 text-yellow-500" />
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Car Preview */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/30 to-background/50 p-12">
              <div className="relative mx-auto max-w-3xl transform group-hover:scale-105 transition-transform duration-700">
                <Ferrari488Pista
                  color="#dc2626"
                  filter="hue-rotate(0deg) saturate(1.8) brightness(0.9)"
                  className="drop-shadow-2xl"
                />
                
                {/* Animated highlights */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Color dots preview */}
              <div className="flex justify-center mt-8 gap-3">
                <div className="w-4 h-4 rounded-full bg-red-600 ring-2 ring-white shadow-lg"></div>
                <div className="w-4 h-4 rounded-full bg-blue-600 ring-2 ring-white shadow-lg"></div>
                <div className="w-4 h-4 rounded-full bg-green-600 ring-2 ring-white shadow-lg"></div>
                <div className="w-4 h-4 rounded-full bg-purple-600 ring-2 ring-white shadow-lg"></div>
                <div className="w-4 h-4 rounded-full bg-orange-600 ring-2 ring-white shadow-lg"></div>
                <span className="text-muted-foreground text-sm ml-3 self-center">+5 more colors</span>
              </div>
            </div>

            {/* Features Quick List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <p className="font-medium text-sm">Ultimate Protection</p>
              </div>
              <div className="space-y-2">
                <Sparkles className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="font-medium text-sm">10 Color Options</p>
              </div>
              <div className="space-y-2">
                <Star className="h-8 w-8 text-orange-500 mx-auto" />
                <p className="font-medium text-sm">Self-Healing Tech</p>
              </div>
              <div className="space-y-2">
                <ArrowRight className="h-8 w-8 text-green-500 mx-auto" />
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
                See your vehicle in 10 different PPF colors • Interactive 3D preview
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};