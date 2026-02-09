import { Button } from '@/components/ui/button';
import xpelLogo from '@/assets/xpel-logo.svg';

interface ColorPPFHeroProps {
  onGetQuote: () => void;
}

export const ColorPPFHero = ({ onGetQuote }: ColorPPFHeroProps) => {
  return (
    <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary-glow)),transparent_70%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img 
            src={xpelLogo} 
            alt="XPEL Authorized Dealer" 
            className="h-20 mb-6 opacity-80 invert" 
          />
          <p className="text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">
            Authorized XPEL Dealer • Miami, FL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair leading-tight">
            XPEL COLOR PPF
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-4">
            The world's first colored paint protection film. Change your vehicle's color while adding 
            industry-leading protection against chips, scratches, and UV damage — all in one film.
          </p>
          <p className="text-base text-primary-foreground/60 max-w-xl mb-8">
            16 stunning colors • Gloss, Satin & Metallic finishes • 10-year warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" onClick={onGetQuote}>
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
              Explore Colors ↓
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
