import { Button } from '@/components/ui/button';
import xpelLogo from '@/assets/xpel-logo.svg';

interface ColorPPFHeroProps {
  onGetQuote: () => void;
}

export const ColorPPFHero = ({ onGetQuote }: ColorPPFHeroProps) => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/lovable-uploads/color-ppf-gt2rs.jpg" alt="Porsche GT2 RS with XPEL Color PPF" className="w-full h-full object-cover object-[center_45%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 via-60% to-background/80 to-90%" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img 
            src={xpelLogo} 
            alt="XPEL Authorized Dealer" 
            className="h-20 mb-6 opacity-80 brightness-200" 
          />
          <p className="text-sm tracking-widest uppercase text-white/60 mb-4">
            Authorized XPEL Dealer • Miami, FL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair leading-tight text-white">
            XPEL COLOR PPF
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4">
            The world's first colored paint protection film. Change your vehicle's color while adding 
            industry-leading protection against chips, scratches, and UV damage — all in one film.
          </p>
          <p className="text-base text-white/60 max-w-xl mb-8">
            16 stunning colors • Gloss, Satin & Metallic finishes • 10-year warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="premium" size="lg" onClick={onGetQuote}>
              Get a Quote
            </Button>
            <Button variant="silver" size="lg">
              Explore Colors ↓
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
