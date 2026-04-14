import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { LiveChat } from "@/components/LiveChat";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import React, { Suspense, lazy } from "react";

// Eager load the homepage (critical path)
import Index from "./pages/Index";

// Lazy load all other pages (code splitting)
const Projects = lazy(() => import("./pages/Projects"));
const Marine = lazy(() => import("./pages/Marine"));
const MarinePPF = lazy(() => import("./pages/MarinePPF"));
const MarineCeramicCoating = lazy(() => import("./pages/MarineCeramicCoating"));
const MarineCeramicTint = lazy(() => import("./pages/MarineCeramicTint"));
const XPELColorPPF = lazy(() => import("./pages/XPELColorPPF"));
const PaintProtectionFilm = lazy(() => import("./pages/PaintProtectionFilm"));
const CeramicCoating = lazy(() => import("./pages/CeramicCoating"));
const CeramicTint = lazy(() => import("./pages/CeramicTint"));
const ColorChangeWrap = lazy(() => import("./pages/ColorChangeWrap"));
const PPFPackages = lazy(() => import("./pages/PPFPackages"));
const StealthPPF = lazy(() => import("./pages/StealthPPF"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ServiceAreaBrickell = lazy(() => import("./pages/ServiceAreaBrickell"));
const ServiceAreaCoralGables = lazy(() => import("./pages/ServiceAreaCoralGables"));
const ServiceAreaBalHarbour = lazy(() => import("./pages/ServiceAreaBalHarbour"));
const ServiceAreaKeyBiscayne = lazy(() => import("./pages/ServiceAreaKeyBiscayne"));
const ServiceAreaCoconutGrove = lazy(() => import("./pages/ServiceAreaCoconutGrove"));
const ServiceAreaSunnyIsles = lazy(() => import("./pages/ServiceAreaSunnyIsles"));
const ServiceAreaAventura = lazy(() => import("./pages/ServiceAreaAventura"));
const ServiceAreaMiamiBeach = lazy(() => import("./pages/ServiceAreaMiamiBeach"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 40, height: 40, border: "3px solid #e5e7eb", borderTopColor: "#111", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<Index autoScrollToContact />} />
            <Route path="/services" element={<Index autoScrollToServices />} />
            {/* <Route path="/portfolio" element={<Projects />} /> */}
            <Route path="/marine" element={<Marine />} />
            <Route path="/marine-ppf" element={<MarinePPF />} />
            <Route path="/marine-ceramic-coating" element={<MarineCeramicCoating />} />
            <Route path="/marine-ceramic-tint" element={<MarineCeramicTint />} />
            <Route path="/colorppf" element={<XPELColorPPF />} />
            <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
            <Route path="/ceramic-coating" element={<CeramicCoating />} />
            <Route path="/ceramic-tint" element={<CeramicTint />} />
            <Route path="/color-change-wrap" element={<ColorChangeWrap />} />
            <Route path="/stealth-ppf" element={<StealthPPF />} />
            <Route path="/ppf-packages" element={<PPFPackages />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service-areas/brickell" element={<ServiceAreaBrickell />} />
            <Route path="/service-areas/coral-gables" element={<ServiceAreaCoralGables />} />
            <Route path="/service-areas/bal-harbour" element={<ServiceAreaBalHarbour />} />
            <Route path="/service-areas/key-biscayne" element={<ServiceAreaKeyBiscayne />} />
            <Route path="/service-areas/coconut-grove" element={<ServiceAreaCoconutGrove />} />
            <Route path="/service-areas/sunny-isles" element={<ServiceAreaSunnyIsles />} />
            <Route path="/service-areas/aventura" element={<ServiceAreaAventura />} />
            <Route path="/service-areas/miami-beach" element={<ServiceAreaMiamiBeach />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <LiveChat />
        <StickyMobileCTA />
      </BrowserRouter>
      
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
