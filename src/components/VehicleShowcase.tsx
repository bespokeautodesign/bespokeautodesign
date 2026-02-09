import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Shield, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import type { PortfolioVehicle, VinylWrapVehicle } from "@/data/portfolioVehicles";
import { useState } from "react";

interface VehicleShowcaseProps {
  title: string;
  description: string;
  vehicles: PortfolioVehicle[];
  imageStyles?: Record<string, string>;
  badgeLabel: string;
  badgeColor?: string;
  icon?: "shield" | "palette";
}

export const VehicleShowcase = ({
  title,
  description,
  vehicles,
  imageStyles = {},
  badgeLabel,
  badgeColor = "bg-blue-500/10 text-blue-600 border-blue-500/20",
  icon = "shield",
}: VehicleShowcaseProps) => {
  const Icon = icon === "palette" ? Palette : Shield;

  return (
    <div>
      <div className="text-center mb-12">
        <Badge variant="secondary" className={`mb-4 ${badgeColor}`}>
          <Icon className="h-4 w-4 mr-2" />
          {badgeLabel}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="relative">
        <div className="md:hidden text-center mb-4">
          <div className="bg-accent/20 border border-accent/30 rounded-lg px-4 py-2 text-sm text-accent-foreground inline-flex items-center gap-2 font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Swipe to see more vehicles
          </div>
        </div>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {vehicles.map((vehicle) => (
              <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} - ${badgeLabel}`}
                      loading="lazy"
                      className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 ${
                        imageStyles[vehicle.name] || "object-[center_70%]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{vehicle.name}</h3>
                      <p className="text-sm opacity-90">{vehicle.year}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="text-center mt-8">
        <Link to="/portfolio" className="text-primary hover:underline text-sm font-medium">
          View Full Portfolio →
        </Link>
      </div>
    </div>
  );
};

interface VinylShowcaseProps {
  vehicles: VinylWrapVehicle[];
}

export const VinylWrapShowcase = ({ vehicles }: VinylShowcaseProps) => {
  const [clickedVinyls, setClickedVinyls] = useState<Set<number>>(new Set());

  const handleClick = (id: number) => {
    setClickedVinyls((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div>
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 border-purple-500/20">
          <Palette className="h-4 w-4 mr-2" />
          Our Work
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Color Change Transformations</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tap or click to see the before and after transformation.
        </p>
      </div>
      <div className="relative">
        <div className="md:hidden text-center mb-4">
          <div className="bg-accent/20 border border-accent/30 rounded-lg px-4 py-2 text-sm text-accent-foreground inline-flex items-center gap-2 font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Swipe to see more vehicles
          </div>
        </div>
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {vehicles.map((vehicle) => (
              <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer"
                  onClick={() => handleClick(vehicle.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={clickedVinyls.has(vehicle.id) ? vehicle.afterImage : vehicle.beforeImage}
                      alt={`${vehicle.name} - ${clickedVinyls.has(vehicle.id) ? "After" : "Before"}`}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 object-[center_70%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge className={clickedVinyls.has(vehicle.id) ? "bg-green-600" : "bg-muted"}>
                        {clickedVinyls.has(vehicle.id) ? "After" : "Before"}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{vehicle.name}</h3>
                      <p className="text-sm opacity-90">{vehicle.year} • Tap to toggle</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="text-center mt-8">
        <Link to="/portfolio" className="text-primary hover:underline text-sm font-medium">
          View Full Portfolio →
        </Link>
      </div>
    </div>
  );
};
