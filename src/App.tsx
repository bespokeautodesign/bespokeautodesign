import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load components for code splitting
const LiveChat = lazy(() => import("@/components/LiveChat").then(m => ({ default: m.LiveChat })));
const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Marine = lazy(() => import("./pages/Marine"));
const XPELColorPPF = lazy(() => import("./pages/XPELColorPPF"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<Index autoScrollToContact />} />
            <Route path="/services" element={<Index autoScrollToServices />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/marine" element={<Marine />} />
            <Route path="/colorppf" element={<XPELColorPPF />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Suspense fallback={null}>
        <LiveChat />
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
