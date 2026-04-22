import { Button } from '@/components/ui/button';
import xpelLogo from '@/assets/xpel-logo.svg';
import HeroVideoBackground from '@/components/HeroVideoBackground';

interface ColorPPFHeroProps {
  onGetQuote: () => void;
}

export const ColorPPFHero = ({ onGetQuote }: ColorPPFHeroProps) => {
  return (
    <section className="relative py-8 md:py-12">
      <HeroVideoBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img 
            src={xpelLogo} 
            alt="XPEL Authorized Dealer" 
            className="h-20 mb-6 opacity-80 brightness-200" 
           width={200} height={60} />
          <p className="text-sm tracking-widest uppercase text-xpel-yellow mb-4">
            Authorized XPEL Dealer • Miami, FL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair leading-tight text-white">
            XPEL COLOR PPF
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4">
            The world's first colored paint protection film. Change your vehicle's color while adding 
            industry-leading protection against chips, scratches, and UV damage — all in one film.
          </p>
          <p className="text-lg font-semibold text-white/90 mb-2">
            Starting at $5,000 • Free Consultation
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
