import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Car, Palette, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import project images
import ppfInstallationImage from "@/assets/ppf-installation.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";
import ceramicTintImage from "/lovable-uploads/85ac03b2-7e26-4573-80f5-a2cdbb10cd1f.png";
import ppfServiceImage from "@/assets/ppf-service.jpg";
import ceramicInstallationImage from "@/assets/ceramic-installation.jpg";

const Projects = () => {
  const [clickedVinyls, setClickedVinyls] = useState<Set<number>>(new Set());
  const projects = [
    {
      id: 1,
      title: "Ferrari LaFerrari",
      description: "Full Body Xpel Ultimate Plus PPF, Fusion Plus Ceramic Coating & Prime XR Plus Ceramic Tints",
      image: "/lovable-uploads/ferrari-laferrari-shop-enhanced.png",
      category: "PPF + Ceramic Coating + Ceramic Tints",
      
      services: ["Full Body PPF", "Fusion Plus Ceramic Coating", "Prime XR Plus Ceramic Tints"],
      vehicle: "2016 Ferrari LaFerrari",
      completion: "5 Days"
    },
    {
      id: 2,
      title: "McLaren 570S",
      description: "Super Gloss Metallic Kato's Kenmery Blue Inozetek Wrap & Prime XR Plus Ceramic Tints.",
      image: "/lovable-uploads/0043b483-74ac-46c5-916a-44e46e97b88b.png",
      category: "Vinyl Wrap + Ceramic Tints",
      
      services: ["Color Change", "Ceramic Tints"],
      vehicle: "2019 McLaren 570S Coupe",
      completion: "5 days"
    },
    {
      id: 3,
      title: "Ferrari F8 Tributo",
      description: "Full Body Xpel Ultimate Plus PPF Protection & Fusion Plus Ceramic Coating.",
      image: "/lovable-uploads/3f1daf49-c3df-4080-ae59-f3d51dde5a5e.png",
      category: "PPF + Ceramic Coating",
      
      services: ["Full Body PPF", "Fusion Plus Ceramic Coating", "Paint Correction"],
      vehicle: "2020 Ferrari F8 Tributo",
      completion: "5 days"
    },
    {
      id: 4,
      title: "Mercedes G-Wagon G63 AMG",
      description: "Full Body Xpel Stealth PPF Protection & Prime XR Plus Ceramic Tints.",
      image: "/lovable-uploads/954a24eb-a0e4-4854-a5ae-cc3558261924.png",
      category: "Stealth PPF + Ceramic Tints",
      
      services: ["Stealth PPF", "Prime XR Plus Ceramic Tints"],
      vehicle: "2025 Mercedes Benz G-Wagon G63 AMG",
      completion: "5 days"
    },
    {
      id: 5,
      title: "BMW X5 sDrive40i",
      description: "Full Body Xpel Stealth PPF Protection, Fusion Plus Ceramic Coating & Prime XR Plus Ceramic Tints.",
      image: "/lovable-uploads/2b4efeb0-51dc-4e2f-b7e3-9c4e9882c48e.png",
      category: "Stealth PPF + Ceramic Coating + Ceramic Tints",
      
      services: ["Stealth PPF", "Fusion Plus Ceramic Coating", "Prime XR Plus Ceramic Tints"],
      vehicle: "2025 BMW X5 sDrive40i",
      completion: "5 days"
    },
    {
      id: 6,
      title: "Corvette C8 Stingray",
      description: "Xpel Ultimate Plus Track Package Paint Protection Film – Enhanced Coverage for High-Performance Driving",
      image: "/lovable-uploads/171000e1-8047-462c-b8fd-a3e367867858.png",
      category: "Track Package PPF",
      
      services: ["Track Package PPF"],
      vehicle: "2024 Chevrolet Corvette C8 Stingray",
      completion: "3 days"
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
    { id: 3, name: "Mercedes G-Wagon G63 AMG", image: "/lovable-uploads/954a24eb-a0e4-4854-a5ae-cc3558261924.png", year: "2025" },
    { id: 4, name: "Mercedes GLC 300 AMG", image: "/lovable-uploads/f9e187dd-581d-4e92-8353-50180501ec8a.png", year: "2023" },
    { id: 5, name: "Porsche 911", image: "/lovable-uploads/562b3389-466e-41a1-ac50-df897f65bde7.png", year: "2024" },
    { id: 6, name: "Porsche Taycan", image: "/lovable-uploads/d315e50e-7d7b-4141-91a7-0c12cbb561b1.png", year: "2023" },
    { id: 7, name: "Tesla Model Y", image: "/lovable-uploads/357fab8a-95e2-43dc-a92f-5e792952f28e.png", year: "2024" }
  ];

  // Vinyl Wrap vehicle showcases
  const vinylWrapVehicles = [
    { id: 1, name: "Aston Martin DBX", beforeImage: "/lovable-uploads/714ade11-8742-4c61-b8fc-1577ddc3dceb.png", afterImage: "/lovable-uploads/19163148-510a-4a7c-9bb2-ba187ab86dc4.png", year: "2023" },
    { id: 2, name: "Mazda Miata", beforeImage: "/lovable-uploads/6313432b-9fe6-44eb-82af-82cd8cf3bc37.png", afterImage: "/lovable-uploads/57c73f3f-f506-407c-949f-9b6266f61d81.png", year: "2023" },
    { id: 3, name: "McLaren 570S", beforeImage: "/lovable-uploads/0e6ef2c1-78f7-410c-a663-0c83402a98d5.png", afterImage: "/lovable-uploads/067b368c-69cf-4e91-a81e-01263ad83820.png", year: "2019" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "PPF":
      case "PPF + Ceramic":
      case "PPF + Ceramic Coating":
      case "Track Package PPF":
      case "Stealth PPF + Ceramic Coating + Ceramic Tints":
      case "Stealth PPF + Ceramic Tints":
        return <Shield className="h-4 w-4" />;
      case "Vinyl Wrap":
      case "Vinyl Wrap + Ceramic Tints":
        return <Palette className="h-4 w-4" />;
      case "Ceramic Coating":
      case "Ceramic Tint":
        return <Car className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    return "bg-white/90 text-black border-white/20";
  };

  const handleVinylClick = (vehicleId: number) => {
    setClickedVinyls(prev => {
      const newSet = new Set(prev);
      if (newSet.has(vehicleId)) {
        newSet.delete(vehicleId);
      } else {
        newSet.add(vehicleId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image - Full width coverage */}
      <div 
        className="fixed inset-0 w-screen bg-cover bg-[center_30%] bg-no-repeat z-0"
        style={{
          backgroundImage: `url(/lovable-uploads/ab1ac973-95da-4423-878b-7808fe62cc38.png)`
        }}
      ></div>
      <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design Logo" className="h-12 w-auto" />
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
      <section className="relative text-primary-foreground py-24">
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
            <Button size="lg" className="animate-pulse" onClick={() => {
              window.location.href = '/#contact';
            }}>
              Get Your Quote Today
            </Button>
          </div>
        </div>
      </section>

      {/* Vehicle Showcase Carousels */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
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
            <div className="relative">
              {/* Mobile scroll indicator */}
              <div className="md:hidden text-center mb-4">
                <div className="bg-accent/20 border border-accent/30 rounded-lg px-4 py-2 text-sm text-accent-foreground inline-flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Swipe to see more vehicles
                </div>
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
            <div className="relative">
              {/* Mobile scroll indicator */}
              <div className="md:hidden text-center mb-4">
                <div className="bg-accent/20 border border-accent/30 rounded-lg px-4 py-2 text-sm text-accent-foreground inline-flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Swipe to see more vehicles
                </div>
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
                              vehicle.name === "Mercedes G-Wagon G63 AMG" ? "object-[center_45%] scale-85" :
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
            <div className="relative">
              {/* Mobile scroll indicator */}
              <div className="md:hidden text-center mb-4">
                <div className="bg-accent/20 border border-accent/30 rounded-lg px-4 py-2 text-sm text-accent-foreground inline-flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Swipe to see more vehicles
                </div>
              </div>
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                  {vinylWrapVehicles.map((vehicle) => (
                  <CarouselItem key={vehicle.id} className="md:basis-1/2 lg:basis-1/3">
                     <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                       <div 
                         className="relative overflow-hidden cursor-pointer md:cursor-default"
                         onClick={() => handleVinylClick(vehicle.id)}
                       >
                         <div className="relative">
                           <img
                             src={vehicle.beforeImage}
                             alt={`${vehicle.name} - Before`}
                             className={`w-full h-48 object-cover transition-all duration-500 ${
                               clickedVinyls.has(vehicle.id) 
                                 ? 'md:group-hover:opacity-0 opacity-0' 
                                 : 'md:group-hover:opacity-0'
                             }`}
                             style={{ objectPosition: vehicle.name === "McLaren 570S" ? 'center 75%' : 'center 60%' }}
                           />
                           <img
                             src={vehicle.afterImage}
                             alt={`${vehicle.name} - After`}
                             className={`absolute inset-0 w-full h-48 object-cover transition-all duration-500 ${
                               clickedVinyls.has(vehicle.id) 
                                 ? 'md:group-hover:opacity-100 opacity-100' 
                                 : 'opacity-0 md:group-hover:opacity-100'
                             }`}
                             style={{ objectPosition: vehicle.name === "Aston Martin DBX" ? 'center 70%' : vehicle.name === "McLaren 570S" ? 'center 75%' : 'center 75%' }}
                           />
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                         <div className="absolute top-4 right-4">
                           <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                             <span className={`text-white text-xs font-medium transition-opacity duration-300 ${
                               clickedVinyls.has(vehicle.id) 
                                 ? 'md:opacity-0 md:group-hover:opacity-100 opacity-100' 
                                 : 'opacity-0 md:group-hover:opacity-100'
                             }`}>
                               AFTER
                             </span>
                             <span className={`text-white text-xs font-medium transition-opacity duration-300 ${
                               clickedVinyls.has(vehicle.id) 
                                 ? 'md:group-hover:opacity-0 opacity-0' 
                                 : 'md:group-hover:opacity-0'
                             }`}>
                               BEFORE
                             </span>
                           </div>
                         </div>
                         <div className="absolute bottom-4 left-4 text-white">
                           <h3 className="font-bold text-lg">{vehicle.name}</h3>
                           <p className="text-sm opacity-90">{vehicle.year}</p>
                         </div>
                         <div className="absolute top-4 left-4 md:hidden">
                           <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                             <span className="text-white text-xs font-medium">
                               Tap to toggle
                             </span>
                           </div>
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Portfolio</h2>
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
                    className={`w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 ${project.id === 1 ? 'object-[center_65%]' : ''} ${project.id === 2 ? 'object-[center_75%]' : ''} ${project.id === 3 ? 'object-[center_45%]' : ''} ${project.id === 4 ? 'object-[center_45%]' : ''} ${project.id === 5 ? 'object-[center_50%]' : ''} ${project.id === 6 ? 'object-[center_80%]' : ''}`}
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
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Bespoke Auto Design difference.
          </p>
          <Button size="lg" className="animate-pulse" onClick={() => {
            window.location.href = '/#contact';
          }}>
            Get Your Quote Today
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Projects;
