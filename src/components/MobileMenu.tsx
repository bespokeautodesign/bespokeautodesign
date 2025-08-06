import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Marine Services", href: "/marine" },
    { label: "Portfolio", href: "/projects" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
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
            <div className="flex items-center gap-3 mb-6">
              <img src="/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png" alt="Bespoke Auto Design Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold text-primary">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
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
            
            <Button 
              variant="premium" 
              size="lg" 
              className="mt-6"
              onClick={() => {
                setIsOpen(false);
                // Navigate to home page contact section if not already there
                if (window.location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Quote
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;