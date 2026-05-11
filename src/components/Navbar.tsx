import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Instagram } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import { trackPhoneCall } from "@/utils/gadsConversions";
import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import { QuoteModal } from "@/components/QuoteModal";
import { SMS_NUMBER_HREF, handleTextUsClick } from "@/lib/smsContact";

const IMessageBubbleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 3C6.48 3 2 6.81 2 11.5c0 2.62 1.4 4.96 3.6 6.5-.18 1.07-.78 2.4-1.78 3.4-.2.2-.07.55.21.6 1.97.32 4.06-.18 5.6-1.36.76.16 1.55.26 2.37.26 5.52 0 10-3.81 10-8.5S17.52 3 12 3z" />
  </svg>
);

const ppfSubItems = [
{ label: "PPF Packages", href: "/ppf-packages" },
{ label: "Stealth PPF", href: "/stealth-ppf" },
{ label: "Color PPF", href: "/colorppf" }];

const servicesFlatItems = [
{ label: "Ceramic Coating", href: "/ceramic-coating" },
{ label: "Ceramic Tint", href: "/ceramic-tint" },
{ label: "Color Change Wrap", href: "/color-change-wrap" }];

const marineSubItems = [
{ label: "Marine PPF", href: "/marine-ppf" },
{ label: "Marine Ceramic Coating", href: "/marine-ceramic-coating" },
{ label: "Marine Ceramic Tint", href: "/marine-ceramic-tint" }];

const serviceAreaItems = [
  { label: "Aventura", href: "/service-areas/aventura" },
  { label: "Bal Harbour", href: "/service-areas/bal-harbour" },
  { label: "Brickell", href: "/service-areas/brickell" },
  { label: "Coconut Grove", href: "/service-areas/coconut-grove" },
  { label: "Coral Gables", href: "/service-areas/coral-gables" },
  { label: "Key Biscayne", href: "/service-areas/key-biscayne" },
  { label: "Miami Beach", href: "/service-areas/miami-beach" },
  { label: "Sunny Isles", href: "/service-areas/sunny-isles" },
  { label: "Pinecrest", href: "/service-areas/pinecrest" },
  { label: "Doral", href: "/service-areas/doral" },
  { label: "Fisher Island", href: "/service-areas/fisher-island" },
  { label: "Star Island", href: "/service-areas/star-island" },
  { label: "Indian Creek", href: "/service-areas/indian-creek" },
  { label: "Surfside", href: "/service-areas/surfside" },
  { label: "Wynwood", href: "/service-areas/wynwood" },
  { label: "Design District", href: "/service-areas/design-district" },
  { label: "Fort Lauderdale", href: "/service-areas/fort-lauderdale" },
];

const navItemsAfter: {label: string;href: string;}[] = [
  { label: "Instant Quote", href: "/instant-quote" },
];

const NavLink = ({ href, active, children, className = "" }: {href: string;active: boolean;children: React.ReactNode;className?: string;}) =>
<Link
  to={href}
  className={`text-xs xl:text-sm whitespace-nowrap transition-all duration-300 ${
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
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ppfDropdownRef = useRef<HTMLDivElement>(null);
  const marineDropdownRef = useRef<HTMLDivElement>(null);
  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isPpfActive =
    ppfSubItems.some((item) => location.pathname === item.href) ||
    location.pathname === "/paint-protection-film";
  const isMarineActive = marineSubItems.some((item) => location.pathname === item.href);
  const isAreasActive = serviceAreaItems.some((item) => location.pathname === item.href);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ppfDropdownRef.current && !ppfDropdownRef.current.contains(e.target as Node)) setPpfOpen(false);
      if (marineDropdownRef.current && !marineDropdownRef.current.contains(e.target as Node)) setMarineOpen(false);
      if (areasDropdownRef.current && !areasDropdownRef.current.contains(e.target as Node)) setAreasOpen(false);
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
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#1a1a1a] border-b border-white/5">
        <div className="container mx-auto px-6 h-9 flex items-center justify-between text-[11px] text-silver-muted">
          <div className="flex items-center gap-3">
            <span>By Appointment · Mon–Fri 9–6 · Sat 10–4</span>
            <span className="text-white/20">|</span>
            <span>Est. 2018</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/bespokeautodesign/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-silver transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
      <nav className={`sticky top-0 z-50 bg-[hsl(var(--nav-bg))] border-b border-[hsl(var(--nav-border))] transition-all duration-500 ${scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-3 lg:gap-4 min-w-0">
            {/* Logo */}
            <Link to="/" aria-label="Bespoke Auto Design — Home" className="flex items-center flex-shrink-0 group">
              <img
                src="/bespoke-logo.png"
                alt="Bespoke Auto Design"
                className="h-9 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1 min-w-0">
              {/* PPF Dropdown */}
              <div className="relative" ref={ppfDropdownRef} onMouseLeave={() => setPpfOpen(false)}>
                <Link
                  to="/paint-protection-film"
                  onMouseEnter={() => setPpfOpen(true)}
                  className={`flex items-center gap-1 px-1.5 lg:px-2 py-2 rounded-md text-[13px] whitespace-nowrap transition-all duration-300 ${
                  isPpfActive ?
                  "text-[hsl(var(--nav-foreground-active))] font-semibold bg-[hsl(var(--nav-foreground-active)/0.08)]" :
                  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.05)]"}`
                  }>
                  PPF
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${ppfOpen ? "rotate-180" : ""}`} />
                </Link>
                {ppfOpen &&
                <div className={dropdownClasses}>
                    <div className={`w-56 ${dropdownInnerClasses}`}>
                      {ppfSubItems.map((item) =>
                        <Link key={item.href} to={item.href} onClick={() => setPpfOpen(false)} className={dropdownLinkClasses(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                      )}
                    </div>
                  </div>
                }
              </div>

              {/* Individual service links */}
              {servicesFlatItems.map((item) =>
                <NavLink key={item.href} href={item.href} active={location.pathname === item.href} className="!text-[13px] px-1.5 lg:px-2 py-2 rounded-md hover:bg-[hsl(var(--nav-foreground-active)/0.05)]">
                  {item.label}
                </NavLink>
              )}

              {/* Marine Dropdown */}
              <div className="relative" ref={marineDropdownRef} onMouseLeave={() => setMarineOpen(false)}>
                <Link
                  to="/marine"
                  onMouseEnter={() => setMarineOpen(true)}
                  className={`flex items-center gap-1 px-1.5 lg:px-2 py-2 rounded-md text-[13px] whitespace-nowrap transition-all duration-300 ${
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

              {/* After items */}
              {navItemsAfter.map((item) =>
              <NavLink key={item.href} href={item.href} active={location.pathname === item.href} className="!text-[13px] px-1.5 lg:px-2 py-2 rounded-md hover:bg-[hsl(var(--nav-foreground-active)/0.05)]">
                  {item.label}
                </NavLink>
              )}

            </div>

            {/* CTAs */}
            <div className="flex items-center gap-1.5 flex-shrink-0 ml-1">
              {/* Service Areas Dropdown */}
              <div className="relative hidden md:block mr-1" ref={areasDropdownRef}>
                <button
                  type="button"
                  aria-expanded={areasOpen}
                  onClick={() => setAreasOpen((open) => !open)}
                  onMouseEnter={() => setAreasOpen(true)}
                  className={`flex items-center gap-1 px-1.5 lg:px-2 py-2 rounded-md text-[13px] whitespace-nowrap transition-all duration-300 ${
                  isAreasActive ?
                  "text-[hsl(var(--nav-foreground-active))] font-semibold bg-[hsl(var(--nav-foreground-active)/0.08)]" :
                  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.05)]"}`
                  }>
                  Areas
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen &&
                <div className="absolute top-full right-0 pt-3">
                    <div className={`w-96 max-w-[calc(100vw-2rem)] grid grid-cols-2 ${dropdownInnerClasses}`}>
                      {serviceAreaItems.map((item) =>
                    <Link key={item.href} to={item.href} onClick={() => setAreasOpen(false)} className={dropdownLinkClasses(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                    )}
                    </div>
                  </div>
                }
              </div>
              <a
                href="tel:7863959172" onClick={() => { trackPhoneCall(); trackPhoneClick('header'); }}
                aria-label="Call (786) 395-9172"
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))] hover:bg-[hsl(var(--nav-highlight)/0.1)] hover:border-[hsl(var(--nav-highlight)/0.7)] transition-all duration-300">
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={SMS_NUMBER_HREF}
                onClick={handleTextUsClick}
                aria-label="Text us"
                title="Text us at (786) 395-9172"
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))] hover:bg-[hsl(var(--nav-highlight)/0.1)] hover:border-[hsl(var(--nav-highlight)/0.7)] transition-all duration-300">
                <IMessageBubbleIcon className="h-4 w-4" />
              </a>
              <Button
                variant="premium"
                size="sm"
                onClick={() => { trackQuoteButton('header'); setQuoteModalOpen(true); }}
                className="hidden md:flex h-8 px-4 bg-[hsl(var(--nav-foreground-active))] text-[hsl(var(--nav-bg))] hover:bg-[hsl(var(--nav-foreground))] font-bold tracking-wide text-[12px]">
                Get Quote
              </Button>
              <a
                href="tel:7863959172" onClick={() => { trackPhoneCall(); trackPhoneClick('header_mobile'); }}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))]">

                <Phone className="h-5 w-5" />
              </a>
              <a
                href={SMS_NUMBER_HREF}
                onClick={handleTextUsClick}
                aria-label="Text us"
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))]">
                <IMessageBubbleIcon className="h-5 w-5" />
              </a>
              <div className="md:hidden">
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