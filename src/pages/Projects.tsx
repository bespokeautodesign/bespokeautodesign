import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Car, Palette, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Import project images
import ppfInstallationImage from "@/assets/ppf-installation.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";
import ceramicTintImage from "/lovable-uploads/85ac03b2-7e26-4573-80f5-a2cdbb10cd1f.png";
import ppfServiceImage from "@/assets/ppf-service.jpg";
import ceramicInstallationImage from "@/assets/ceramic-installation.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "McLaren 570S",
      description: "Super Gloss Metallic Kato's Kenmery Blue Inozetek Wrap & Prime XR Plus Ceramic Tints.",
      image: "/lovable-uploads/0043b483-74ac-46c5-916a-44e46e97b88b.png",
      category: "Vinyl Wrap + Ceramic Tints",
      
      services: ["Color Change", "Ceramic Tints"],
      vehicle: "2019 McLaren 570S Coupe",
      completion: "5 days"
    },
    {
      id: 2,
      title: "Ferrari F8 Tributo",
      description: "Full Body Xpel Ultimate Plus PPF Protection & Fusion Plus Ceramic Coating.",
      image: "/lovable-uploads/3f1daf49-c3df-4080-ae59-f3d51dde5a5e.png",
      category: "PPF + Ceramic",
      
      services: ["Full Body PPF", "Fusion Plus Ceramic Coating", "Paint Correction"],
      vehicle: "2020 Ferrari F8 Tributo",
      completion: "5 days"
    },
    {
      id: 3,
      title: "BMW X5 sDrive40i",
      description: "Full Body Xpel Stealth PPF Protection, Fusion Plus Ceramic Coating & Prime XR Plus Ceramic Tints.",
      image: "/lovable-uploads/2b4efeb0-51dc-4e2f-b7e3-9c4e9882c48e.png",
      category: "Stealth PPF + Ceramic Coating + Ceramic Tints",
      
      services: ["Stealth PPF", "Fusion Plus Ceramic Coating", "Prime XR Plus Ceramic Tints"],
      vehicle: "2025 BMW X5 sDrive40i",
      completion: "5 days"
    },
    {
      id: 4,
      title: "Lamborghini Huracán - Track Package PPF",
      description: "High-impact areas protected with premium PPF for track day enthusiasts.",
      image: ppfServiceImage,
      category: "PPF",
      
      services: ["Partial PPF", "Track Protection Package", "Clear Bra"],
      vehicle: "Lamborghini Huracán",
      completion: "4 days"
    },
    {
      id: 5,
      title: "Tesla Model S Plaid - Ceramic Tint Installation",
      description: "Premium ceramic tint application for enhanced comfort and UV protection.",
      image: ceramicTintImage,
      category: "Ceramic Tint",
      
      services: ["Ceramic Window Tint", "UV Protection", "Heat Rejection"],
      vehicle: "Tesla Model S Plaid",
      completion: "1 day"
    },
    {
      id: 6,
      title: "Aston Martin DB11 - Full Ceramic Protection",
      description: "Complete ceramic coating system with multi-layer protection for luxury vehicle.",
      image: ceramicInstallationImage,
      category: "Ceramic Coating",
      
      services: ["Multi-Layer Ceramic", "Paint Correction", "Interior Protection"],
      vehicle: "Aston Martin DB11",
      completion: "4 days"
    }
  ];

  // Clear PPF vehicle showcases
  const clearPPFVehicles = [
    { id: 1, name: "Aston Martin Vantage", image: "/lovable-uploads/06b4e251-b273-487e-8f43-394aa71342f8.png", year: "2021" },
    { id: 2, name: "2024 BMW M4", image: "/lovable-uploads/2ba942d5-5b05-4d45-8455-fd19f9b765c6.png", year: "2024" },
    { id: 3, name: "Ferrari F8 Tributo", image: "/lovable-uploads/3f1daf49-c3df-4080-ae59-f3d51dde5a5e.png", year: "2020" },
    { id: 4, name: "2024 Corvette Stingray", image: "/lovable-uploads/e1a77901-cd16-499b-9d39-f725cce775d5.png", year: "2024" },
    { id: 5, name: "Toyota Land Cruiser", image: "/lovable-uploads/fdf28998-66d9-4078-980c-8d7cb1c0485f.png", year: "2024" },
    { id: 6, name: "Ram 1500", image: "/lovable-uploads/f14f599e-ddd2-47ac-ae95-ffbcd59b8f60.png", year: "2023" },
    { id: 7, name: "Corvette Z06", image: "/lovable-uploads/e456804b-63fa-4640-bebe-d3ade09ef953.png", year: "2023" },
    { id: 8, name: "Tesla Model 3", image: "/lovable-uploads/a777b2aa-1d9f-42db-9b41-327227b99e44.png", year: "2024" }
  ];

  // Stealth PPF vehicle showcases
  const stealthPPFVehicles = [
    { id: 1, name: "2024 BMW M2", image: "/lovable-uploads/2a622203-bfde-4c8c-99bb-c9fb7ee08311.png", year: "2024" },
    { id: 2, name: "BMW X5", image: "/lovable-uploads/da44c7f8-8dcf-47d1-81f6-9171955481d6.png", year: "2024" },
    { id: 3, name: "Mercedes GLC 300 AMG", image: "/lovable-uploads/f9e187dd-581d-4e92-8353-50180501ec8a.png", year: "2023" },
    { id: 4, name: "Porsche 911", image: "/lovable-uploads/562b3389-466e-41a1-ac50-df897f65bde7.png", year: "2024" },
    { id: 5, name: "Porsche Taycan", image: "/lovable-uploads/d315e50e-7d7b-4141-91a7-0c12cbb561b1.png", year: "2023" },
    { id: 6, name: "Tesla Model Y", image: "/lovable-uploads/357fab8a-95e2-43dc-a92f-5e792952f28e.png", year: "2024" }
  ];

  // Vinyl Wrap vehicle showcases
  const vinylWrapVehicles = [
    { id: 1, name: "Ferrari 488 Spider", image: vinylWrapImage, year: "2023" },
    { id: 2, name: "Lamborghini Aventador", image: vinylWrapImage, year: "2024" },
    { id: 3, name: "BMW M5 Competition", image: ceramicCoatingImage, year: "2023" },
    { id: 4, name: "Tesla Model S Plaid", image: ceramicTintImage, year: "2024" },
    { id: 5, name: "Range Rover Sport", image: ppfInstallationImage, year: "2023" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "PPF":
      case "PPF + Ceramic":
        return <Shield className="h-4 w-4" />;
      case "Vinyl Wrap":
        return <Palette className="h-4 w-4" />;
      case "Ceramic Coating":
      case "Ceramic Tint":
        return <Car className="h-4 w-4" />;
      default:
        return <Car className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    return "bg-white/90 text-black border-white/20";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold text-primary">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exceptional Results
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Explore our portfolio of completed projects showcasing premium automotive protection and customization work.
            </p>
            <Link to="/">
              <Button size="lg" className="animate-pulse">
                Get Your Quote Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Showcase Carousels */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          {/* Clear PPF Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20">
                <Shield className="h-4 w-4 mr-2" />
                Clear PPF
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Clear Paint Protection Film</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Invisible protection that preserves your vehicle's original finish while providing superior defense against road debris and environmental damage.
              </p>
            </div>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {clearPPFVehicles.map((vehicle) => (
                  <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                           className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 ${
                             vehicle.name === "Aston Martin Vantage" ? "object-[center_60%]" : 
                             vehicle.name === "Ferrari F8 Tributo" ? "object-[center_50%]" : "object-[center_70%]"
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

          {/* Stealth PPF Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-gray-500/10 text-gray-600 border-gray-500/20">
                <Shield className="h-4 w-4 mr-2" />
                Stealth PPF
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stealth Paint Protection Film</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Matte finish protection that transforms your vehicle's appearance while providing the same superior protection as clear PPF.
              </p>
            </div>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {stealthPPFVehicles.map((vehicle) => (
                  <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 ${
                            vehicle.name === "2024 BMW M2" ? "object-[center_80%]" : 
                            vehicle.name === "BMW X5" ? "" : 
                            vehicle.name === "Mercedes GLC 300 AMG" ? "object-[center_80%]" : "object-[center_70%]"
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

          {/* Vinyl Wraps Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 border-purple-500/20">
                <Palette className="h-4 w-4 mr-2" />
                Vinyl Wraps
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vinyl Wraps (Color Change)</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete color transformation with premium vinyl films, offering endless customization possibilities while protecting your original paint.
              </p>
            </div>
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {vinylWrapVehicles.map((vehicle) => (
                  <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed showcase of our premium automotive protection and customization work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 ${project.id === 1 ? 'object-[center_60%]' : ''}`}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`flex items-center gap-1 ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                 <CardHeader>
                   <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Vehicle:</h4>
                      <p className="text-sm text-muted-foreground">{project.vehicle}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Completion Time:</h4>
                      <p className="text-sm text-muted-foreground">{project.completion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Bespoke Auto Design difference.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
