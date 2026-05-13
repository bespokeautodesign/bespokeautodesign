import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Instagram } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import { trackPhoneCall } from "@/utils/gadsConversions";
import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import { QuoteModal } from "@/components/QuoteModal";

const XPELLogoNav = ({ className }: { className?: string }) => (
  <svg
    viewBox="70 420 1060 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path fill="currentColor" d="M243.22,538.01c19.6,0,35.49-15.89,35.49-35.49s-15.89-35.49-35.49-35.49-35.49,15.89-35.49,35.49,15.89,35.49,35.49,35.49" />
    <path fill="currentColor" d="M164.64,476.5c-14.37,0-26.02,11.65-26.02,26.02s11.65,26.02,26.02,26.02,26.02-11.65,26.02-26.02-11.65-26.02-26.02-26.02" />
    <path fill="currentColor" d="M101.66,482.65c-10.97,0-19.87,8.9-19.87,19.87s8.9,19.87,19.87,19.87,19.87-8.9,19.87-19.87-8.9-19.87-19.87-19.87" />
    <polygon fill="currentColor" points="999.28 590.42 1034.35 439.01 952.35 439.01 904.46 646.34 1087.41 646.34 1100.19 590.42 999.28 590.42" />
    <path fill="currentColor" d="M899.98,563.71l9.86-42.69h-127.1l6.27-27.17h127.12l12.69-54.83h-209.36l-16.18,70.07c.66-4.93.79-10.17.75-15.24-.07-16.13-11.13-33.55-29.27-44.48-12.4-7.49-28.57-10.35-45.39-10.35h-133.2l52.85-53.69h-107.47l-56.84,59.04-35.27-59.04h-107.09l77.75,126.12-129.89,134.9h101.91l68.34-69.44,42.82,69.44h122.15l16.35-69.87h74.77c31.03,0,53.8-11.51,64.86-22.06,9.53-9.08,14.91-19.42,18.35-29.96l-28.14,121.89h209.29l12.92-55.92h-127.08l6.16-26.72h127.1ZM628.65,521.02h-155.36l-11.97,51.58-36.5-61.1,66.31-67.37-11.54,49.71h149.05c7.51,0,13.6,6.07,13.6,13.6s-6.09,13.58-13.6,13.58" />
  </svg>
);

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

const inlineFlatItems = [
  { label: "Ceramic Coating", href: "/ceramic-coating" },
  { label: "Ceramic Tint", href: "/ceramic-tint" },
  { label: "Color Change Wrap", href: "/color-change-wrap" },
];

const baseLink =
  "text-[13px] font-medium whitespace-nowrap px-2 py-1 rounded transition-colors duration-200";
const linkActive = "text-[hsl(var(--nav-foreground-active))]";
const linkIdle =
  "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))]";

const Navbar = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [ppfOpen, setPpfOpen] = useState(false);
  const [marineOpen, setMarineOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [hideUtility, setHideUtility] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const ppfRef = useRef<HTMLDivElement>(null);
  const marineRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isPpfActive =
    ppfSubItems.some((i) => location.pathname === i.href) ||
    location.pathname === "/paint-protection-film";
  const isMarineActive =
    marineSubItems.some((i) => location.pathname === i.href) ||
    location.pathname === "/marine";
  const isAreasActive = serviceAreaItems.some((i) => location.pathname === i.href);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ppfRef.current && !ppfRef.current.contains(e.target as Node)) setPpfOpen(false);
      if (marineRef.current && !marineRef.current.contains(e.target as Node)) setMarineOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
    };
    const handleScroll = () => {
      const y = window.scrollY;
      setHideUtility(y > 100);
      if (y > 80 && y > lastScrollY.current) {
        setNavHidden(true);
      } else if (y < lastScrollY.current) {
        setNavHidden(false);
      }
      lastScrollY.current = y;
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownInner =
    "bg-[hsl(var(--nav-dropdown-bg))] border border-[hsl(var(--nav-dropdown-border))] rounded-lg shadow-2xl py-2 backdrop-blur-sm";
  const dropdownLink = (active: boolean) =>
    `block px-5 py-2 text-[13px] transition-all duration-200 ${
      active
        ? "text-[hsl(var(--nav-highlight))] font-semibold bg-[hsl(var(--nav-foreground-active)/0.05)]"
        : "text-[hsl(var(--nav-foreground))] hover:text-[hsl(var(--nav-foreground-active))] hover:bg-[hsl(var(--nav-foreground-active)/0.05)]"
    }`;

  return (
    <>
      <div
        className={`sticky top-0 z-50 transition-transform duration-[250ms] ease-out ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Utility strip */}
        <div
          className={`hidden md:block bg-[#1a1a1a] border-b border-white/5 transition-all duration-200 overflow-hidden ${
            hideUtility ? "max-h-0 opacity-0" : "max-h-6 opacity-100"
          }`}
        >
          <div className="container mx-auto px-6 h-6 flex items-center justify-between text-[11px] tracking-[0.05em] text-silver-muted">
            <div className="flex items-center gap-3">
              <span>By Appointment · Mon–Fri 9–6 · Sat 10–4</span>
              <span className="text-white/20">|</span>
              <span>Est. 2018</span>
            </div>
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

        {/* Main nav — single row */}
        <nav className="bg-[hsl(var(--nav-bg))] border-b border-[hsl(var(--nav-border))]">
          {/* Desktop */}
          <div className="hidden md:flex container mx-auto px-6 h-12 items-center justify-between gap-4">
            <Link to="/" className="flex-shrink-0" aria-label="Bespoke Auto Design home">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design" className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-x-6">
              {/* PPF */}
              <div className="relative" ref={ppfRef} onMouseLeave={() => setPpfOpen(false)}>
                <Link
                  to="/paint-protection-film"
                  onMouseEnter={() => setPpfOpen(true)}
                  className={`${baseLink} flex items-center gap-1 ${isPpfActive ? linkActive : linkIdle}`}
                >
                  PPF
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${ppfOpen ? "rotate-180" : ""}`} />
                </Link>
                {ppfOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className={`w-56 ${dropdownInner}`}>
                      {ppfSubItems.map((item) => (
                        <Link key={item.href} to={item.href} onClick={() => setPpfOpen(false)} className={dropdownLink(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {inlineFlatItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`${baseLink} ${location.pathname === item.href ? linkActive : linkIdle}`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Marine */}
              <div className="relative" ref={marineRef} onMouseLeave={() => setMarineOpen(false)}>
                <Link
                  to="/marine"
                  onMouseEnter={() => setMarineOpen(true)}
                  className={`${baseLink} flex items-center gap-1 ${isMarineActive ? linkActive : linkIdle}`}
                >
                  Marine
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${marineOpen ? "rotate-180" : ""}`} />
                </Link>
                {marineOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className={`w-56 ${dropdownInner}`}>
                      {marineSubItems.map((item) => (
                        <Link key={item.href} to={item.href} onClick={() => setMarineOpen(false)} className={dropdownLink(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/instant-quote"
                className={`${baseLink} ${location.pathname === "/instant-quote" ? linkActive : linkIdle}`}
              >
                Instant Quote
              </Link>

              {/* Areas */}
              <div className="relative" ref={areasRef} onMouseLeave={() => setAreasOpen(false)}>
                <button
                  type="button"
                  aria-expanded={areasOpen}
                  onClick={() => setAreasOpen((v) => !v)}
                  onMouseEnter={() => setAreasOpen(true)}
                  className={`${baseLink} flex items-center gap-1 ${isAreasActive ? linkActive : linkIdle}`}
                >
                  Areas
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full right-0 pt-2 z-50">
                    <div className={`w-96 max-w-[calc(100vw-2rem)] grid grid-cols-2 ${dropdownInner}`}>
                      {serviceAreaItems.map((item) => (
                        <Link key={item.href} to={item.href} onClick={() => setAreasOpen(false)} className={dropdownLink(location.pathname === item.href)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <XPELLogoNav className="h-5 w-auto text-white opacity-90" />
              <Button
                size="sm"
                onClick={() => { trackQuoteButton('header'); setQuoteModalOpen(true); }}
                className="h-8 px-4 text-[13px] font-semibold bg-transparent border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden container mx-auto px-4 h-11 items-center justify-between">
            <Link to="/" aria-label="Bespoke Auto Design home" className="flex-shrink-0">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design" className="h-6 w-auto" />
            </Link>
            <div className="flex items-center gap-2">
              <a
                href="tel:7863959172"
                onClick={() => { trackPhoneCall(); trackPhoneClick('header_mobile'); }}
                aria-label="Call"
                className="flex items-center justify-center w-7 h-7 rounded-full border border-[hsl(var(--nav-highlight)/0.4)] text-[hsl(var(--nav-highlight))]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Yellow booking strip — homepage only */}
        {isHome && (
          <div className="bg-xpel-yellow text-black text-center py-1 px-4 text-[11px] md:text-[11px] leading-tight font-medium tracking-wide">
            Booking 1–2 weeks out · Call for urgent availability
          </div>
        )}
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
};

export default Navbar;
