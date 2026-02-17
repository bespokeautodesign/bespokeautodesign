import { ShieldAlert, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const risks = [
  { icon: AlertTriangle, text: "Uncertified installers using cheap, off-brand film" },
  { icon: AlertTriangle, text: "No manufacturer warranty — you're on your own" },
  { icon: AlertTriangle, text: "Garage or outdoor installs with dust contamination" },
  { icon: AlertTriangle, text: "Poor edge work that lifts, peels, and yellows within months" },
  { icon: AlertTriangle, text: "No paint correction — imperfections sealed under film" },
  { icon: AlertTriangle, text: "Zero accountability when things go wrong" },
];

const bespokeAdvantages = [
  { icon: CheckCircle2, text: "XPEL-certified installers with 500+ documented installs" },
  { icon: CheckCircle2, text: "Full manufacturer warranties — up to 10 years on PPF" },
  { icon: CheckCircle2, text: "Climate-controlled facility built for flawless adhesion" },
  { icon: CheckCircle2, text: "Precision DAP-cut templates — zero guesswork" },
  { icon: CheckCircle2, text: "Multi-stage paint correction before every coating" },
  { icon: CheckCircle2, text: "Direct XPEL support & annual maintenance inspections" },
];

interface CompetitiveEdgeProps {
  onQuoteClick?: () => void;
}

export const CompetitiveEdge = ({ onQuoteClick }: CompetitiveEdgeProps) => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/40 via-transparent to-primary" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 border-destructive/30 text-destructive">
            BUYER BEWARE
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair text-foreground">
            Not All Shops Are Created Equal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Miami is full of "PPF guys" working out of garages with no certifications and no warranties.
            Here's what's really at stake when you choose the wrong installer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Risk Column */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <ShieldAlert className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Average Shop</h3>
            </div>
            <div className="space-y-4 bg-destructive/[0.03] border border-destructive/10 rounded-2xl p-6">
              {risks.map((risk, i) => (
                <div key={i} className="flex items-start gap-3">
                  <risk.icon className="h-5 w-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{risk.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Bespoke Column */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Bespoke Auto Design</h3>
            </div>
            <div className="space-y-4 bg-primary/[0.03] border border-primary/10 rounded-2xl p-6">
              {bespokeAdvantages.map((adv, i) => (
                <div key={i} className="flex items-start gap-3">
                  <adv.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">{adv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-5 text-sm max-w-xl mx-auto">
            Your vehicle deserves more than a gamble. Get it done right the first time — by Miami's most trusted certified installers.
          </p>
          {onQuoteClick && (
            <Button variant="premium" size="lg" onClick={onQuoteClick}>
              Get Your Free Quote
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
