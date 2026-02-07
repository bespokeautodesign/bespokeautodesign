import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Paint Protection Film", href: "/paint-protection-film" },
    { label: "Ceramic Coating", href: "/ceramic-coating" },
    { label: "Ceramic Tint", href: "/ceramic-tint" },
    { label: "Color Change Wrap", href: "/color-change-wrap" },
    { label: "Color PPF", href: "/colorppf" },
    { label: "Marine Services", href: "/marine" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-2 mb-6 min-w-0">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design Logo" className="h-7 w-auto flex-shrink-0" />
              <div className="text-xs font-bold text-primary whitespace-nowrap overflow-hidden">
                <span className="text-silver">Bespoke</span> Auto Design
              </div>
            </div>
            
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex flex-col gap-3 mt-6">
              <Button 
                variant="premium" 
                size="lg" 
                onClick={() => {
                  setIsOpen(false);
                  // Always navigate to home page contact section
                  window.location.href = '/#contact';
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;