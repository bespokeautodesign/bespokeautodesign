import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LiveChat } from "@/components/LiveChat";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Marine from "./pages/Marine";
import XPELColorPPF from "./pages/XPELColorPPF";
import PaintProtectionFilm from "./pages/PaintProtectionFilm";
import CeramicCoating from "./pages/CeramicCoating";
import CeramicTint from "./pages/CeramicTint";
import ColorChangeWrap from "./pages/ColorChangeWrap";
import PPFPackages from "./pages/PPFPackages";
import StealthPPF from "./pages/StealthPPF";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quote" element={<Index autoScrollToContact />} />
          <Route path="/services" element={<Index autoScrollToServices />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/marine" element={<Marine />} />
          <Route path="/colorppf" element={<XPELColorPPF />} />
          <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
          <Route path="/ceramic-coating" element={<CeramicCoating />} />
          <Route path="/ceramic-tint" element={<CeramicTint />} />
          <Route path="/color-change-wrap" element={<ColorChangeWrap />} />
          <Route path="/stealth-ppf" element={<StealthPPF />} />
          <Route path="/ppf-packages" element={<PPFPackages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <LiveChat />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
