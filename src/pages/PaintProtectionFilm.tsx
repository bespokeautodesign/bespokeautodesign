import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import { QuoteModal } from "@/components/QuoteModal";

const PaintProtectionFilm = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design" className="h-10 w-auto" />
              <span className="text-sm md:text-lg font-bold text-primary whitespace-nowrap">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/paint-protection-film" className="text-primary font-semibold transition-colors">Paint Protection Film</Link>
              <Link to="/ceramic-coating" className="text-muted-foreground hover:text-primary transition-colors">Ceramic Coating</Link>
              <Link to="/ceramic-tint" className="text-muted-foreground hover:text-primary transition-colors">Ceramic Tint</Link>
              <Link to="/color-change-wrap" className="text-muted-foreground hover:text-primary transition-colors">Color Change Wrap</Link>
              <Link to="/colorppf" className="text-muted-foreground hover:text-primary transition-colors">Color PPF</Link>
              <Link to="/marine" className="text-muted-foreground hover:text-primary transition-colors">Marine Services</Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild className="hidden sm:flex bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-md hover:shadow-lg hover:from-emerald-400 hover:to-green-500 hover:scale-105 transition-all duration-300 font-semibold">
                <a href="tel:7863959172" className="flex items-center gap-2"><Phone className="h-4 w-4" />Call Now</a>
              </Button>
              <Button variant="premium" size="sm" onClick={() => setQuoteModalOpen(true)} className="hidden sm:flex">Get Quote</Button>
              <Button variant="outline" size="sm" asChild className="md:hidden bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-md p-2">
                <a href="tel:7863959172"><Phone className="h-5 w-5" /></a>
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Paint Protection Film</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Premium XPEL paint protection film installation in Miami. Content coming soon.
          </p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Get a Quote</Button>
        </div>
      </section>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default PaintProtectionFilm;
