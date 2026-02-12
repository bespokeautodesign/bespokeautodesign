import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, Phone } from "lucide-react";

const ppfSubItems = [
  { label: "PPF Packages", href: "/ppf-packages" },
  { label: "Stealth PPF", href: "/stealth-ppf" },
  { label: "Color PPF", href: "/colorppf" },
];

const marineSubItems = [
  { label: "Marine PPF", href: "/marine-ppf" },
  { label: "Marine Ceramic Coating", href: "/marine-ceramic-coating" },
  { label: "Marine Ceramic Tint", href: "/marine-ceramic-tint" },
];

const otherItemsBefore = [
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Ceramic Tint", href: "/ceramic-tint" },
  { label: "Color Change Wrap", href: "/color-change-wrap" },
];

const otherItemsAfter: { label: string; href: string }[] = [
  { label: "Find Us", href: "/locations" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ppfExpanded, setPpfExpanded] = useState(false);
  const [marineExpanded, setMarineExpanded] = useState(false);

  const linkClasses = "text-lg text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] transition-all duration-300 py-3 border-b border-[hsl(var(--nav-border))]";
  const subLinkClasses = "text-base text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-highlight))] transition-all duration-200 py-1.5";

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex items-center justify-center w-10 h-10 rounded-md text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.08)] transition-all duration-300">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-[hsl(var(--nav-bg))] border-l border-[hsl(var(--nav-border))] p-0">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 pt-8 pb-6 border-b border-[hsl(var(--nav-border))]">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design Logo" className="h-8 w-auto flex-shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] tracking-[0.2em] uppercase font-light text-[hsl(var(--nav-foreground))]">Bespoke</span>
                <span className="text-xs font-bold tracking-wider uppercase text-[hsl(var(--nav-foreground-active))]">Auto Design</span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-6 py-4 flex-1 overflow-y-auto">
              <Link to="/" onClick={() => setIsOpen(false)} className={linkClasses}>
                Home
              </Link>

              {/* PPF Dropdown */}
              <div className="border-b border-[hsl(var(--nav-border))]">
                <div className="flex items-center justify-between py-3">
                  <Link to="/paint-protection-film" onClick={() => setIsOpen(false)} className="text-lg text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] transition-all duration-300">
                    Paint Protection Film
                  </Link>
                  <button onClick={() => setPpfExpanded(!ppfExpanded)} className="p-1 rounded hover:bg-[hsl(var(--nav-foreground-active)/0.08)] transition-colors">
                    <ChevronDown className={`h-5 w-5 text-[hsl(var(--nav-foreground))] transition-transform duration-300 ${ppfExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {ppfExpanded && (
                  <div className="flex flex-col pl-4 pb-3 gap-1 border-l-2 border-[hsl(var(--nav-highlight)/0.3)] ml-2">
                    {ppfSubItems.map((item) => (
                      <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={subLinkClasses}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {otherItemsBefore.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={linkClasses}>
                  {item.label}
                </Link>
              ))}

              {/* Marine Dropdown */}
              <div className="border-b border-[hsl(var(--nav-border))]">
                <div className="flex items-center justify-between py-3">
                  <Link to="/marine" onClick={() => setIsOpen(false)} className="text-lg text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] transition-all duration-300">
                    Marine Services
                  </Link>
                  <button onClick={() => setMarineExpanded(!marineExpanded)} className="p-1 rounded hover:bg-[hsl(var(--nav-foreground-active)/0.08)] transition-colors">
                    <ChevronDown className={`h-5 w-5 text-[hsl(var(--nav-foreground))] transition-transform duration-300 ${marineExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {marineExpanded && (
                  <div className="flex flex-col pl-4 pb-3 gap-1 border-l-2 border-[hsl(var(--nav-highlight)/0.3)] ml-2">
                    {marineSubItems.map((item) => (
                      <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={subLinkClasses}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {otherItemsAfter.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className={linkClasses}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div className="px-6 py-6 border-t border-[hsl(var(--nav-border))] space-y-3">
              <a
                href="tel:7863959172"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-md border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))] hover:bg-[hsl(var(--nav-highlight)/0.1)] transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                (786) 395-9172
              </a>
              <Button
                variant="premium"
                size="lg"
                className="w-full bg-[hsl(var(--nav-foreground-active))] text-[hsl(var(--nav-bg))] hover:bg-[hsl(var(--nav-foreground))] font-bold tracking-wide"
                onClick={() => {
                  setIsOpen(false);
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
