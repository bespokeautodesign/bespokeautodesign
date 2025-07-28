import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Car, Palette, Shield } from "lucide-react";
import { Link } from "react-router-dom";

// Import project images
import ppfInstallationImage from "@/assets/ppf-installation.jpg";
import ceramicCoatingImage from "@/assets/ceramic-coating.jpg";
import vinylWrapImage from "@/assets/vinyl-wrap.jpg";
import ceramicTintImage from "@/assets/ceramic-tint.jpg";
import ppfServiceImage from "@/assets/ppf-service.jpg";
import ceramicInstallationImage from "@/assets/ceramic-installation.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "2023 Porsche 911 GT3 - Full PPF & Ceramic Package",
      description: "Complete paint protection film installation with ceramic coating topcoat for ultimate protection.",
      image: ppfInstallationImage,
      category: "PPF + Ceramic",
      date: "March 2024",
      services: ["Full Body PPF", "Ceramic Coating", "Paint Correction"],
      vehicle: "Porsche 911 GT3",
      completion: "7 days"
    },
    {
      id: 2,
      title: "Ferrari 488 Spider - Satin Black Vinyl Wrap",
      description: "Color change vinyl wrap transformation from red to satin black with gloss accents.",
      image: vinylWrapImage,
      category: "Vinyl Wrap",
      date: "February 2024",
      services: ["Color Change Wrap", "Gloss Accent Details", "Chrome Delete"],
      vehicle: "Ferrari 488 Spider",
      completion: "5 days"
    },
    {
      id: 3,
      title: "BMW M4 Competition - Ceramic Coating & Tint",
      description: "9H ceramic coating application with premium ceramic window tinting for enhanced protection.",
      image: ceramicCoatingImage,
      category: "Ceramic Coating",
      date: "January 2024",
      services: ["9H Ceramic Coating", "Ceramic Window Tint", "Paint Correction"],
      vehicle: "BMW M4 Competition",
      completion: "3 days"
    },
    {
      id: 4,
      title: "Lamborghini Huracán - Track Package PPF",
      description: "High-impact areas protected with premium PPF for track day enthusiasts.",
      image: ppfServiceImage,
      category: "PPF",
      date: "December 2023",
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
      date: "November 2023",
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
      date: "October 2023",
      services: ["Multi-Layer Ceramic", "Paint Correction", "Interior Protection"],
      vehicle: "Aston Martin DB11",
      completion: "4 days"
    }
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
    switch (category) {
      case "PPF":
      case "PPF + Ceramic":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Vinyl Wrap":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Ceramic Coating":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Ceramic Tint":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

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
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our portfolio of completed projects showcasing premium automotive protection and customization work.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`flex items-center gap-1 ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
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
          <Link to="/">
            <Button size="lg" className="animate-pulse">
              Get Your Quote Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;