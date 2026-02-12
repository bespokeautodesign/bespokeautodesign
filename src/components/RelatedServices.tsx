import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const allServices = [
  { slug: "paint-protection-film", title: "Paint Protection Film (PPF)", desc: "Invisible self-healing protection against rock chips, scratches & UV damage." },
  { slug: "ceramic-coating", title: "Ceramic Coating", desc: "Nano-ceramic paint protection with extreme gloss and hydrophobic performance." },
  { slug: "ceramic-tint", title: "Ceramic Window Tint", desc: "XPEL XR Plus — 99% UV rejection, up to 98% infrared heat rejection." },
  { slug: "color-change-wrap", title: "Color Change Wraps", desc: "Premium vinyl wraps in hundreds of colors and finishes for total transformation." },
  { slug: "stealth-ppf", title: "Stealth PPF", desc: "Matte/satin paint protection film that transforms or preserves your finish." },
  { slug: "colorppf", title: "XPEL Color PPF", desc: "The world's first colored paint protection film — 16 colors, full protection." },
  { slug: "marine", title: "Marine Services", desc: "PPF, ceramic coating & tint protection for boats and yachts in Miami." },
];

interface RelatedServicesProps {
  currentSlug: string;
}

export const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  const related = allServices.filter(s => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">Explore More</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">
            Related Services in Miami
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {related.map(service => (
            <Card key={service.slug} className="bg-background border-border shadow-premium hover:shadow-glow transition-shadow duration-300">
              <CardContent className="pt-6 pb-5 px-6 space-y-3">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <Button variant="outline" size="sm" asChild className="w-full mt-2">
                  <Link to={`/${service.slug}`}>
                    Learn More <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
