import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import { QuoteModal } from "@/components/QuoteModal";

const ppfSubItems = [
  { label: "PPF Packages", href: "/ppf-packages" },
  { label: "Stealth PPF", href: "/stealth-ppf" },
  { label: "Color PPF", href: "/colorppf" },
];

const navItems = [
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Ceramic Tint", href: "/ceramic-tint" },
  { label: "Color Change Wrap", href: "/color-change-wrap" },
  { label: "Marine Services", href: "/marine" },
  { label: "Portfolio", href: "/portfolio" },
];

const Navbar = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [ppfOpen, setPpfOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isPPFActive = ppfSubItems.some((item) => location.pathname === item.href);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPpfOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
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
              {/* PPF Dropdown */}
              <div className="relative" ref={dropdownRef} onMouseLeave={() => setPpfOpen(false)}>
                <Link
                  to="/paint-protection-film"
                  onMouseEnter={() => setPpfOpen(true)}
                  className={`flex items-center gap-1 transition-colors ${
                    isPPFActive || location.pathname === "/paint-protection-film" ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Paint Protection Film
                  <ChevronDown className={`h-4 w-4 transition-transform ${ppfOpen ? "rotate-180" : ""}`} />
                </Link>
                {ppfOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-48 bg-background border border-border rounded-lg shadow-lg z-50 py-2">
                      {ppfSubItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setPpfOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === item.href
                              ? "text-primary font-semibold bg-accent"
                              : "text-muted-foreground hover:text-primary hover:bg-accent"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden sm:flex bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-md hover:shadow-lg hover:from-emerald-400 hover:to-green-500 hover:scale-105 transition-all duration-300 font-semibold"
              >
                <a href="tel:7863959172" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button variant="premium" size="sm" onClick={() => setQuoteModalOpen(true)} className="hidden sm:flex">
                Get Quote
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="md:hidden bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-md p-2"
              >
                <a href="tel:7863959172">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
};

export default Navbar;
