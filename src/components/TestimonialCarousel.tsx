import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Rodriguez",
    vehicle: "2023 Porsche 911",
    rating: 5,
    text: "Exceptional craftsmanship! The PPF installation was flawless and the attention to detail is unmatched. My Porsche looks stunning and I have complete peace of mind.",
    service: "Paint Protection Film"
  },
  {
    name: "Sarah Chen",
    vehicle: "2022 Tesla Model S",
    rating: 5,
    text: "The ceramic coating exceeded my expectations. The depth of gloss is incredible and maintenance is so much easier. Highly recommend Bespoke Auto Design!",
    service: "Ceramic Coating"
  },
  {
    name: "David Thompson",
    vehicle: "2024 BMW M4",
    rating: 5,
    text: "Professional team, premium results. The vinyl wrap transformation was exactly what I envisioned. Outstanding customer service throughout the entire process.",
    service: "Vinyl Wrap"
  },
  {
    name: "Jennifer Walsh",
    vehicle: "2023 Audi RS6",
    rating: 5,
    text: "The ceramic tint installation was perfect. No bubbles, perfect edges, and the heat rejection is amazing. Professional work from start to finish.",
    service: "Ceramic Tint"
  },
  {
    name: "Captain James Miller",
    vehicle: "55ft Sunseeker Yacht",
    rating: 5,
    text: "Outstanding marine PPF service! My yacht's gel coat is now protected from saltwater and UV damage. The team knows marine applications inside and out.",
    service: "Marine PPF"
  },
  {
    name: "Roberto Martinez",
    vehicle: "2024 Lamborghini Huracán",
    rating: 5,
    text: "XPEL Ultimate Plus installation was phenomenal. The self-healing properties are incredible and the clarity is perfect. Worth every penny!",
    service: "Paint Protection Film"
  },
  {
    name: "Emily Foster",
    vehicle: "2023 Range Rover Sport",
    rating: 5,
    text: "Complete transformation with ceramic coating and PPF combo. The paint depth and protection level exceeded all expectations. Truly bespoke service!",
    service: "Full Protection Package"
  },
  {
    name: "Captain Sarah Davis",
    vehicle: "42ft Boston Whaler",
    rating: 5,
    text: "Marine ceramic coating has made maintenance so much easier. Water beads off beautifully and the boat stays cleaner longer. Excellent marine expertise!",
    service: "Marine Ceramic Coating"
  },
  {
    name: "Marcus Thompson",
    vehicle: "2024 McLaren 720S",
    rating: 5,
    text: "The XPEL PPF installation on my McLaren is absolutely flawless. Every curve and contour is perfectly protected without affecting the stunning paint finish. Outstanding work!",
    service: "Paint Protection Film"
  },
  {
    name: "Alexandra Rivera",
    vehicle: "2023 Ferrari F8 Tributo",
    rating: 5,
    text: "Protecting my Ferrari was crucial, and Bespoke Auto Design delivered perfection. The PPF is completely invisible and the self-healing technology is incredible!",
    service: "Paint Protection Film"
  },
  {
    name: "Daniel Park",
    vehicle: "2024 Aston Martin Vantage",
    rating: 5,
    text: "My Aston Martin looks showroom perfect thanks to the expert PPF installation. The attention to detail and precision cutting is remarkable. Highly recommend!",
    service: "Paint Protection Film"
  },
  {
    name: "Christopher Martinez",
    vehicle: "2024 Ferrari SF90",
    rating: 5,
    text: "The XPEL PPF installation exceeded all expectations. Perfect coverage, invisible protection, and the self-healing properties are remarkable. My Ferrari is perfectly protected!",
    service: "Paint Protection Film"
  },
  {
    name: "Amanda Foster",
    vehicle: "2023 Lamborghini Aventador",
    rating: 5,
    text: "Outstanding PPF work on my Lamborghini. The film is completely invisible and provides incredible protection. Professional installation with amazing results!",
    service: "Paint Protection Film"
  },
  {
    name: "Vincent Chen",
    vehicle: "2024 Bentley Continental GT",
    rating: 5,
    text: "Exceptional XPEL PPF installation on my Bentley. The self-healing technology is incredible and the finish is flawless. Best investment I've made for paint protection!",
    service: "Paint Protection Film"
  },
  {
    name: "Isabella Rodriguez",
    vehicle: "2023 Rolls-Royce Cullinan",
    rating: 5,
    text: "Perfect PPF application on my Rolls-Royce. The precision cutting and seamless installation exceeded my expectations. Truly professional craftsmanship!",
    service: "Paint Protection Film"
  },
  {
    name: "Alexander Thompson",
    vehicle: "2024 Maserati MC20",
    rating: 5,
    text: "The XPEL PPF on my Maserati is absolutely invisible and provides incredible protection. Outstanding attention to detail and professional service throughout!",
    service: "Paint Protection Film"
  }
];

export const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const testimonialCards = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      testimonialCards.push(testimonials[index]);
    }
    
    return testimonialCards;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Client Success Stories</h3>
            <p className="text-muted-foreground">
              100+ satisfied customers and counting
            </p>
          </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="h-10 w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="h-10 w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)` 
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 md:px-0"
            >
              <Card className="h-full shadow-silver hover:shadow-premium transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-xpel-yellow text-xpel-yellow" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="space-y-1">
                    <div>{testimonial.vehicle}</div>
                    <div className="text-xs bg-muted px-2 py-1 rounded-md inline-block">
                      {testimonial.service}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary w-8" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};