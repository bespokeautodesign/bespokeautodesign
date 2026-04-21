import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight } from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  priceLabel?: string; // e.g. "starting at"
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingCardsProps {
  title: string;
  subtitle: string;
  tiers: PricingTier[];
  onGetQuote: (tierName?: string) => void;
  footnote?: string;
}

export const PricingCards = ({ title, subtitle, tiers, onGetQuote, footnote }: PricingCardsProps) => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4">Transparent Pricing</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className={`grid gap-6 max-w-5xl mx-auto ${tiers.length === 1 ? 'max-w-md' : tiers.length === 2 ? 'md:grid-cols-2 max-w-3xl' : 'md:grid-cols-3'}`}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-shadow hover:shadow-lg ${
                tier.popular
                  ? 'border-gold bg-card shadow-md ring-2 ring-gold/20'
                  : 'border-border bg-card'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gold text-gold-foreground px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

              <div className="mb-6">
                {tier.priceLabel && (
                  <span className="text-sm text-muted-foreground">{tier.priceLabel}</span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "premium" : "outline"}
                className="w-full"
                onClick={() => onGetQuote(tier.name)}
              >
                Get a Quote <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {footnote && (
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">{footnote}</p>
        )}
      </div>
    </section>
  );
};
