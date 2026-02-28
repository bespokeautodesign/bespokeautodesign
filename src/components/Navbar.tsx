import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import { trackPhoneCall } from "@/utils/gadsConversions";
import { QuoteModal } from "@/components/QuoteModal";

const ppfSubItems = [
{ label: "PPF Packages", href: "/ppf-packages" },
{ label: "Stealth PPF", href: "/stealth-ppf" },
{ label: "Color PPF", href: "/colorppf" }];

const marineSubItems = [
{ label: "Marine PPF", href: "/marine-ppf" },
{ label: "Marine Ceramic Coating", href: "/marine-ceramic-coating" },
{ label: "Marine Ceramic Tint", href: "/marine-ceramic-tint" }];

const navItemsBefore = [
{ label: "Ceramic Coating", href: "/ceramic-coating" },
{ label: "Ceramic Tint", href: "/ceramic-tint" },
{ label: "Color Change Wrap", href: "/color-change-wrap" }];

const navItemsAfter: {label: string;href: string;}[] = [
  // { label: "Portfolio", href: "/portfolio" },
];

const NavLink = ({ href, active, children, className = "" }: {href: string;active: boolean;children: React.ReactNode;className?: string;}) =>
<Link
  to={href}
  className={`text-sm xl:text-base whitespace-nowrap transition-all duration-300 ${
  active ?
  "text-[hsl(var(--nav-foreground-active))] font-semibold" :
  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))]"} ${
  className}`}>
  {children}
  </Link>;


const Navbar = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [ppfOpen, setPpfOpen] = useState(false);
  const [marineOpen, setMarineOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const marineDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isPPFActive = ppfSubItems.some((item) => location.pathname === item.href);
  const isMarineActive = marineSubItems.some((item) => location.pathname === item.href);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setPpfOpen(false);
      if (marineDropdownRef.current && !marineDropdownRef.current.contains(e.target as Node)) setMarineOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 20);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownClasses = "absolute top-full left-0 pt-3";
  const dropdownInnerClasses = "bg-[hsl(var(--nav-dropdown-bg))] border border-[hsl(var(--nav-dropdown-border))] rounded-lg shadow-2xl py-2 backdrop-blur-sm";

  const dropdownLinkClasses = (active: boolean) =>
  `block px-5 py-2.5 text-sm transition-all duration-200 ${
  active ?
  "text-[hsl(var(--nav-highlight))] font-semibold bg-[hsl(var(--nav-foreground-active)/0.05)]" :
  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.05)] hover:pl-6"}`;


  return (
    <>
      <nav className={`sticky top-0 z-50 bg-[hsl(var(--nav-bg))] border-b border-[hsl(var(--nav-border))] transition-all duration-500 ${scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-6 min-w-0">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img
                src="/bespoke-logo.png"
                alt="Bespoke Auto Design"
                className="h-9 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105" />

              <div className="flex flex-col leading-none">
                <span className="text-xs lg:text-sm tracking-[0.2em] uppercase font-bold text-[hsl(var(--nav-foreground-active))]">
                  Bespoke
                </span>
                <span className="text-sm lg:text-base font-light tracking-wider uppercase text-[hsl(var(--nav-foreground))]">
                  Auto Design
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 min-w-0">
              {/* PPF Dropdown */}
              <div className="relative" ref={dropdownRef} onMouseLeave={() => setPpfOpen(false)}>
                <Link
                  to="/paint-protection-film"
                  onMouseEnter={() => setPpfOpen(true)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm xl:text-base whitespace-nowrap transition-all duration-300 ${
                  isPPFActive || location.pathname === "/paint-protection-film" ?
                  "text-[hsl(var(--nav-foreground-active))] font-semibold bg-[hsl(var(--nav-foreground-active)/0.08)]" :
                  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.05)]"}`
                  }>
                  Xpel Paint Protection Film

                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${ppfOpen ? "rotate-180" : ""}`} />
                </Link>
                {ppfOpen &&
                <div className={dropdownClasses}>
                    <div className={`w-52 ${dropdownInnerClasses}`}>
                      {ppfSubItems.map((item) =>
                    <Link key={item.href} to={item.href} onClick={() => setPpfOpen(false)} className={dropdownLinkClasses(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                    )}
                    </div>
                  </div>
                }
              </div>

              {/* Middle nav items */}
              {navItemsBefore.map((item) =>
              <NavLink key={item.href} href={item.href} active={location.pathname === item.href} className="px-3 py-2 rounded-md hover:bg-[hsl(var(--nav-foreground-active)/0.05)]">
                  {item.label}
                </NavLink>
              )}

              {/* Marine Dropdown */}
              <div className="relative" ref={marineDropdownRef} onMouseLeave={() => setMarineOpen(false)}>
                <Link
                  to="/marine"
                  onMouseEnter={() => setMarineOpen(true)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm xl:text-base whitespace-nowrap transition-all duration-300 ${
                  isMarineActive || location.pathname === "/marine" ?
                  "text-[hsl(var(--nav-foreground-active))] font-semibold bg-[hsl(var(--nav-foreground-active)/0.08)]" :
                  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.05)]"}`
                  }>

                  Marine
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${marineOpen ? "rotate-180" : ""}`} />
                </Link>
                {marineOpen &&
                <div className={dropdownClasses}>
                    <div className={`w-56 ${dropdownInnerClasses}`}>
                      {marineSubItems.map((item) =>
                    <Link key={item.href} to={item.href} onClick={() => setMarineOpen(false)} className={dropdownLinkClasses(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                    )}
                    </div>
                  </div>
                }
              </div>

              {/* Portfolio */}
              {navItemsAfter.map((item) =>
              <NavLink key={item.href} href={item.href} active={location.pathname === item.href} className="px-3 py-2 rounded-md hover:bg-[hsl(var(--nav-foreground-active)/0.05)]">
                  {item.label}
                </NavLink>
              )}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:7863959172" onClick={() => trackPhoneCall()}
                className="hidden xl:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))] hover:bg-[hsl(var(--nav-highlight)/0.1)] hover:border-[hsl(var(--nav-highlight)/0.7)] transition-all duration-300">

                <Phone className="h-4 w-4" />
                (786) 395-9172
              </a>
              <Button
                variant="premium"
                size="sm"
                onClick={() => setQuoteModalOpen(true)}
                className="hidden xl:flex bg-[hsl(var(--nav-foreground-active))] text-[hsl(var(--nav-bg))] hover:bg-[hsl(var(--nav-foreground))] font-bold tracking-wide">

                Get Quote
              </Button>
              <a
                href="tel:7863959172" onClick={() => trackPhoneCall()}
                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))]">

                <Phone className="h-5 w-5" />
              </a>
              <div className="lg:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>);

};

export default Navbar;