import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const ColorChangeWrap = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Color Change Wrap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Custom color change vinyl wraps in Miami. Content coming soon.
          </p>
          <Button variant="premium" size="lg" onClick={() => setQuoteModalOpen(true)}>Get a Quote</Button>
        </div>
      </section>
    </div>
  );
};

export default ColorChangeWrap;
