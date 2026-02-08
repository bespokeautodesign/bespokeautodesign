import { Shield, Zap, Star, Droplet, Sun, Layers, RefreshCw, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Shield,
    title: "60% Thicker Than Vinyl",
    description: "XPEL COLOR PPF is significantly thicker than traditional vinyl wrap, providing real protection against rock chips, road debris, and minor abrasions — not just a cosmetic layer."
  },
  {
    icon: Zap,
    title: "Self-Healing Technology",
    description: "Minor scratches and swirl marks disappear with heat exposure. The film's elastomeric polymer layer reforms itself, keeping your finish flawless without professional buffing."
  },
  {
    icon: Sun,
    title: "UV & Oxidation Resistance",
    description: "Advanced UV inhibitors prevent yellowing, fading, and oxidation — critical for Miami's intense sun exposure. Your color stays vibrant for the life of the film."
  },
  {
    icon: Droplet,
    title: "Hydrophobic Surface",
    description: "The built-in hydrophobic top coat repels water, dirt, and contaminants on contact. Water beads and sheets off effortlessly, making maintenance a breeze."
  },
  {
    icon: Layers,
    title: "Factory-Paint Finish",
    description: "Unlike vinyl wraps that look applied, COLOR PPF delivers a depth and clarity that rivals a professional respray. The finish is virtually indistinguishable from factory paint."
  },
  {
    icon: RefreshCw,
    title: "Removable & Reversible",
    description: "When professionally removed, COLOR PPF leaves your original paint in pristine condition underneath — preserving resale value and giving you the freedom to change colors."
  },
  {
    icon: Award,
    title: "10-Year Warranty",
    description: "Backed by XPEL's industry-leading limited 10-year warranty against yellowing, cracking, blistering, and delamination. True peace of mind for your investment."
  },
  {
    icon: Star,
    title: "Ceramic Coat Compatible",
    description: "Designed to pair seamlessly with XPEL FUSION PLUS™ ceramic coatings for enhanced gloss, easier cleaning, and an additional layer of environmental protection."
  }
];

export const ColorPPFBenefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">WHY COLOR PPF</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Protection Meets Personalization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            XPEL COLOR PPF isn't just a color change — it's a complete paint protection system. 
            Here's why it outperforms traditional vinyl wraps in every category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
