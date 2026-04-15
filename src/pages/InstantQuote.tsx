import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Shield, Award, Car, ChevronRight, Calculator, Check, Star, ArrowRight, Phone } from "lucide-react";
import {
  VehicleType, ServiceType,
  vehicleTypes, serviceOptions,
  ppfPackages, coatingPackages, tintPackages, wrapPackages,
  ppfPricing, coatingPricing, tintPricing, wrapPricing,
  PPFPackage, CoatingPackage, TintPackage, WrapPackage,
  WINDSHIELD_ADDON,
} from "@/config/pricing";

// ── FAQ data ───────────────────────────────────────────────
const faqs = [
  { q: "Why is this only a price range?", a: "Every vehicle's paint condition, surface prep needs, and exact square footage varies. The range reflects typical costs for your vehicle size and package; final quote comes after a quick in-person inspection where we assess paint condition, measure specific panels, and confirm scope." },
  { q: "How accurate are these estimates?", a: "Very accurate for 90% of vehicles — our pricing data comes from 500+ installations over 7+ years. Luxury/exotic vehicles with specialty prep may fall at the upper end. Final quotes land within the estimated range for the vast majority of clients." },
  { q: "What if my vehicle isn't listed?", a: "No problem. Select the closest match (e.g., for a Rolls-Royce Cullinan choose 'Large SUV', for a McLaren choose 'Exotic') and submit your quote request — we'll confirm the exact number once we see the vehicle." },
  { q: "Do you offer financing?", a: "Yes — we partner with financing providers for installs over $2,000. Mention financing when you submit your quote and we'll send over the application options along with your exact quote." },
  { q: "Can I see example work before booking?", a: "Absolutely — check our Gallery page for recent installs, and read our 44+ 5-star Google reviews. You're also welcome to visit our climate-controlled Miami facility to see work in progress by appointment." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ── Component ──────────────────────────────────────────────
const InstantQuote = () => {
  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [services, setServices] = useState<Set<ServiceType>>(new Set());
  const [ppfPkg, setPpfPkg] = useState<PPFPackage | null>(null);
  const [coatingPkg, setCoatingPkg] = useState<CoatingPackage | null>(null);
  const [tintPkg, setTintPkg] = useState<TintPackage | null>(null);
  const [wrapPkg, setWrapPkg] = useState<WrapPackage | null>(null);
  const [windshieldAddon, setWindshieldAddon] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // interaction tracking for inline validation
  const [touched, setTouched] = useState({ vehicle: false, services: false });

  // form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [message, setMessage] = useState("");

  const toggleService = (s: ServiceType) => {
    setTouched(prev => ({ ...prev, services: true }));
    setServices(prev => {
      const next = new Set(prev);
      if (next.has(s)) {
        next.delete(s);
        if (s === "ppf") setPpfPkg(null);
        if (s === "coating") setCoatingPkg(null);
        if (s === "tint") { setTintPkg(null); setWindshieldAddon(false); }
        if (s === "wrap") setWrapPkg(null);
      } else {
        next.add(s);
      }
      return next;
    });
  };

  // Check all selected services have a package chosen
  const allPackagesSelected = useMemo(() => {
    if (services.size === 0) return false;
    if (services.has("ppf") && !ppfPkg) return false;
    if (services.has("coating") && !coatingPkg) return false;
    if (services.has("tint") && !tintPkg) return false;
    if (services.has("wrap") && !wrapPkg) return false;
    return true;
  }, [services, ppfPkg, coatingPkg, tintPkg, wrapPkg]);

  const formReady = Boolean(vehicle && services.size > 0 && allPackagesSelected);

  // price calculation
  const priceRange = useMemo(() => {
    if (!vehicle) return null;
    let min = 0, max = 0;
    if (services.has("ppf") && ppfPkg) {
      const r = ppfPricing[ppfPkg][vehicle];
      min += r[0]; max += r[1];
    }
    if (services.has("coating") && coatingPkg) {
      const r = coatingPricing[coatingPkg][vehicle];
      min += r[0]; max += r[1];
    }
    if (services.has("tint") && tintPkg) {
      const r = tintPricing[tintPkg][vehicle];
      min += r[0]; max += r[1];
    }
    if (services.has("wrap") && wrapPkg) {
      const r = wrapPricing[wrapPkg][vehicle];
      min += r[0]; max += r[1];
    }
    if (min === 0 && max === 0) return null;
    return { min, max };
  }, [vehicle, services, ppfPkg, coatingPkg, tintPkg, wrapPkg]);

  const selectedSummary = useMemo(() => {
    const items: string[] = [];
    if (services.has("ppf") && ppfPkg) items.push(`PPF — ${ppfPackages.find(p => p.key === ppfPkg)?.label}`);
    if (services.has("coating") && coatingPkg) items.push(`Ceramic Coating — ${coatingPackages.find(p => p.key === coatingPkg)?.label}`);
    if (services.has("tint") && tintPkg) items.push(`Window Tint — ${tintPackages.find(p => p.key === tintPkg)?.label}`);
    if (services.has("wrap") && wrapPkg) items.push(`Color Change Wrap — ${wrapPackages.find(p => p.key === wrapPkg)?.label}`);
    return items;
  }, [services, ppfPkg, coatingPkg, tintPkg, wrapPkg]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("[InstantQuote] handleSubmit:start", {
      name: name.trim(),
      phone: phone.trim(),
      emailProvided: Boolean(email.trim()),
      vehicleInfo: vehicleInfo.trim(),
      vehicleCategory: vehicle,
      selectedServices: selectedSummary,
      estimatedRange: priceRange,
    });

    if (!name.trim() || !phone.trim()) {
      console.log("[InstantQuote] handleSubmit:blocked-missing-required-fields");
      return;
    }

    setFormSubmitting(true);
    setFormError(null);
    setFormSubmitted(false);

    try {
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const servicesList = selectedSummary.join(", ") || "Not specified";
      const rangeStr = priceRange ? `$${priceRange.min.toLocaleString()} – $${priceRange.max.toLocaleString()}` : "N/A";

      const messageBody = [
        `Vehicle Size Category: ${vehicle || "Not selected"}`,
        `Selected Services: ${servicesList}`,
        `Estimated Price Range: ${rangeStr}`,
        message.trim() ? `\nAdditional Notes: ${message.trim()}` : "",
      ].filter(Boolean).join("\n");

      const payload = {
        firstName,
        lastName,
        email: email.trim() || "",
        phone: phone.trim(),
        vehicle: vehicleInfo.trim() || "Not specified",
        service: `Instant Quote — ${servicesList}`,
        contactMethods: ["phone"],
        message: messageBody,
      };

      const { supabase } = await import("@/integrations/supabase/client");

      console.log("[InstantQuote] handleSubmit:beforeInvoke", {
        functionName: "send-quote-email",
        projectUrl: import.meta.env.VITE_SUPABASE_URL,
        payload,
      });

      let { data, error } = await supabase.functions.invoke("send-quote-email", {
        body: {
          ...payload,
        },
      });

      console.log("[InstantQuote] handleSubmit:afterInvoke", { data, error });

      if (error || !data?.success) {
        const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-email`;

        console.log("[InstantQuote] handleSubmit:beforeDirectFetch", {
          functionUrl,
          projectUrl: import.meta.env.VITE_SUPABASE_URL,
        });

        const response = await fetch(functionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify(payload),
        });

        const responseText = await response.text();
        let parsedResponse: unknown = null;

        try {
          parsedResponse = responseText ? JSON.parse(responseText) : null;
        } catch {
          parsedResponse = responseText;
        }

        console.log("[InstantQuote] handleSubmit:afterDirectFetch", {
          status: response.status,
          ok: response.ok,
          data: parsedResponse,
        });

        if (!response.ok) {
          const fetchError = typeof parsedResponse === "object" && parsedResponse && "error" in parsedResponse
            ? String((parsedResponse as { error?: unknown }).error)
            : `Request failed with status ${response.status}`;
          throw new Error(fetchError);
        }

        data = parsedResponse as { success?: boolean; message?: string } | null;
      }

      if (!data || (typeof data === "object" && "success" in data && !data.success)) {
        throw new Error("No success response returned from quote endpoint");
      }

      console.log("[InstantQuote] handleSubmit:success", { data });
      setFormSubmitted(true);
    } catch (err) {
      console.error("[InstantQuote] handleSubmit:catch", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown submission error";
      setFormError(`${errorMessage}. Call (786) 395-9172 or email sales@bespokeauto.design directly.`);
    } finally {
      setFormSubmitting(false);
    }
  };

  const fmt = (n: number) => "$" + n.toLocaleString();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
      <PageSEO
        title="Instant PPF & Ceramic Coating Quote Calculator Miami | Bespoke Auto Design"
        description="Get an instant price range for Paint Protection Film, Ceramic Coating, Window Tint, or Color Change Wrap in Miami. Select your vehicle and services for a real-time estimate."
        canonical="https://www.bespokeauto.design/instant-quote"
        structuredData={faqSchema}
      />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-6">
            <Calculator className="w-3.5 h-3.5 mr-1.5" /> Instant Price Calculator
          </Badge>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Get Your Instant Price Range — Miami's Most Transparent Auto Protection Quoting
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-4 max-w-3xl mx-auto leading-relaxed">
            Select your vehicle and services to see an estimated price range in real time. Final quote confirmed after a quick in-person inspection. Climate-controlled installs by XPEL-certified technicians at our Miami facility.
          </p>
          <p className="text-sm text-amber-400/80 font-medium tracking-wide">
            Free estimates • Typically respond within 30 minutes
          </p>
        </div>
      </section>

      {/* ═══ CALCULATOR ═══ */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left — selectors */}
          <div className="flex-1 space-y-10">
            {/* GROUP 1: Vehicle */}
            <div>
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold">1</span>
                Select Your Vehicle
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {vehicleTypes.map(v => (
                  <button
                    key={v.key}
                    onClick={() => { setVehicle(v.key); setTouched(prev => ({ ...prev, vehicle: true })); }}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      vehicle === v.key
                        ? "border-amber-500 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                        : "border-[#333] bg-[#1a1a1a] hover:border-[#555] hover:bg-[#222]"
                    }`}
                  >
                    <Car className={`w-5 h-5 mb-2 ${vehicle === v.key ? "text-amber-400" : "text-white/40"}`} />
                    <div className="font-semibold text-white text-sm">{v.label}</div>
                    <div className="text-xs text-white/50 mt-0.5">{v.sub}</div>
                  </button>
                ))}
              </div>
              {touched.vehicle && !vehicle && (
                <p className="text-amber-400/80 text-xs mt-2">Please select your vehicle</p>
              )}
            </div>

            {/* GROUP 2: Services */}
            <div>
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold">2</span>
                Select Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map(s => (
                  <button
                    key={s.key}
                    onClick={() => toggleService(s.key)}
                    className={`p-4 rounded-lg border-2 text-left flex items-center gap-3 transition-all duration-200 ${
                      services.has(s.key)
                        ? "border-amber-500 bg-amber-500/10"
                        : "border-[#333] bg-[#1a1a1a] hover:border-[#555] hover:bg-[#222]"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                      services.has(s.key) ? "border-amber-500 bg-amber-500" : "border-[#555]"
                    }`}>
                      {services.has(s.key) && <Check className="w-3 h-3 text-black" />}
                    </div>
                    <span className="font-semibold text-white text-sm">{s.label}</span>
                  </button>
                ))}
              </div>
              {touched.services && services.size === 0 && (
                <p className="text-amber-400/80 text-xs mt-2">Please select at least one service</p>
              )}
            </div>

            {/* GROUP 3: Packages (accordion) */}
            {services.size > 0 && (
              <div>
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold">3</span>
                  Choose Your Package
                </h2>
                <Accordion type="multiple" className="space-y-3">
                  {services.has("ppf") && (
                    <AccordionItem value="ppf" className="border border-[#333] rounded-lg bg-[#1a1a1a] overflow-hidden">
                      <AccordionTrigger className="px-5 py-4 text-white font-semibold hover:no-underline [&[data-state=open]]:bg-[#222]">
                        Paint Protection Film Package
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {ppfPackages.map(p => (
                            <button
                              key={p.key}
                              onClick={() => setPpfPkg(p.key)}
                              className={`p-3 rounded-md border text-left text-sm transition-all ${
                                ppfPkg === p.key
                                  ? "border-amber-500 bg-amber-500/10 text-white"
                                  : "border-[#444] text-white/70 hover:border-[#666] hover:text-white"
                              }`}
                            >
                              <div className="font-medium">{p.label}</div>
                              {vehicle && (
                                <div className="text-xs text-amber-400/70 mt-1">
                                  {fmt(ppfPricing[p.key][vehicle][0])} – {fmt(ppfPricing[p.key][vehicle][1])}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {!ppfPkg && <p className="text-amber-400/80 text-xs mt-2">Please choose a package</p>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {services.has("coating") && (
                    <AccordionItem value="coating" className="border border-[#333] rounded-lg bg-[#1a1a1a] overflow-hidden">
                      <AccordionTrigger className="px-5 py-4 text-white font-semibold hover:no-underline [&[data-state=open]]:bg-[#222]">
                        Ceramic Coating Package
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 pt-2">
                        <div className="grid grid-cols-1 gap-2">
                          {coatingPackages.map(p => (
                            <button
                              key={p.key}
                              onClick={() => setCoatingPkg(p.key)}
                              className={`p-3 rounded-md border text-left text-sm transition-all ${
                                coatingPkg === p.key
                                  ? "border-amber-500 bg-amber-500/10 text-white"
                                  : "border-[#444] text-white/70 hover:border-[#666] hover:text-white"
                              }`}
                            >
                              <div className="font-medium">{p.label}</div>
                              {vehicle && (
                                <div className="text-xs text-amber-400/70 mt-1">
                                  {fmt(coatingPricing[p.key][vehicle][0])} – {fmt(coatingPricing[p.key][vehicle][1])}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {!coatingPkg && <p className="text-amber-400/80 text-xs mt-2">Please choose a package</p>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {services.has("tint") && (
                    <AccordionItem value="tint" className="border border-[#333] rounded-lg bg-[#1a1a1a] overflow-hidden">
                      <AccordionTrigger className="px-5 py-4 text-white font-semibold hover:no-underline [&[data-state=open]]:bg-[#222]">
                        Window Tint Package
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {tintPackages.map(p => (
                            <button
                              key={p.key}
                              onClick={() => setTintPkg(p.key)}
                              className={`p-3 rounded-md border text-left text-sm transition-all ${
                                tintPkg === p.key
                                  ? "border-amber-500 bg-amber-500/10 text-white"
                                  : "border-[#444] text-white/70 hover:border-[#666] hover:text-white"
                              }`}
                            >
                              <div className="font-medium">{p.label}</div>
                              {vehicle && (
                                <div className="text-xs text-amber-400/70 mt-1">
                                  {fmt(tintPricing[p.key][vehicle][0])} – {fmt(tintPricing[p.key][vehicle][1])}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {!tintPkg && <p className="text-amber-400/80 text-xs mt-2">Please choose a package</p>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {services.has("wrap") && (
                    <AccordionItem value="wrap" className="border border-[#333] rounded-lg bg-[#1a1a1a] overflow-hidden">
                      <AccordionTrigger className="px-5 py-4 text-white font-semibold hover:no-underline [&[data-state=open]]:bg-[#222]">
                        Color Change Wrap Package
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {wrapPackages.map(p => (
                            <button
                              key={p.key}
                              onClick={() => setWrapPkg(p.key)}
                              className={`p-3 rounded-md border text-left text-sm transition-all ${
                                wrapPkg === p.key
                                  ? "border-amber-500 bg-amber-500/10 text-white"
                                  : "border-[#444] text-white/70 hover:border-[#666] hover:text-white"
                              }`}
                            >
                              <div className="font-medium">{p.label}</div>
                              {vehicle && (
                                <div className="text-xs text-amber-400/70 mt-1">
                                  {fmt(wrapPricing[p.key][vehicle][0])} – {fmt(wrapPricing[p.key][vehicle][1])}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {!wrapPkg && <p className="text-amber-400/80 text-xs mt-2">Please choose a package</p>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </div>
            )}
          </div>

          {/* Right — sticky price card (desktop sidebar / mobile bottom) */}
          <div className="lg:w-80 xl:w-96">
            <div className="lg:sticky lg:top-24">
              <Card className="bg-[#1a1a1a] border-[#333] shadow-2xl">
                <CardContent className="p-6 space-y-5">
                  <div className="text-center">
                    <div className="text-sm text-white/50 mb-1 uppercase tracking-wider font-medium">Estimated Range</div>
                    {priceRange ? (
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 font-playfair">
                        {fmt(priceRange.min)} – {fmt(priceRange.max)}
                      </div>
                    ) : (
                      <div className="text-2xl text-white/30 font-playfair">Select options above</div>
                    )}
                  </div>

                  {selectedSummary.length > 0 && (
                    <ul className="space-y-2 text-sm">
                      {selectedSummary.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/80">
                          <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {vehicle && (
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Car className="w-4 h-4 text-amber-500/60" />
                      {vehicleTypes.find(v => v.key === vehicle)?.label}
                    </div>
                  )}

                  <p className="text-xs text-white/40 leading-relaxed">
                    Estimates based on vehicle size and package selections. Final quote confirmed after in-person inspection and paint condition assessment.
                  </p>

                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full text-base font-bold"
                    onClick={scrollToForm}
                    disabled={!priceRange}
                  >
                    Request Your Exact Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section ref={formRef} className="py-16 px-4 bg-[#141414]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Request Your Exact Quote
          </h2>
          {formSubmitted ? (
            <Card className="bg-[#1a1a1a] border-amber-500/30">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
                <p className="text-white/70">We'll respond within 30 minutes during business hours with your exact pricing. Check your phone for a text.</p>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name *" value={name} onChange={e => setName(e.target.value)} required className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-white/40" />
                <Input placeholder="Phone Number *" value={phone} onChange={e => setPhone(e.target.value)} required type="tel" className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-white/40" />
              </div>
              <Input placeholder="Email (optional)" value={email} onChange={e => setEmail(e.target.value)} type="email" className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-white/40" />
              <Input placeholder="Vehicle Make, Model & Year *" value={vehicleInfo} onChange={e => setVehicleInfo(e.target.value)} required className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-white/40" />

              {/* Pre-filled selections summary */}
              {selectedSummary.length > 0 && (
                <div className="bg-[#222] rounded-lg p-4 border border-[#333]">
                  <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">Selected Services</div>
                  <ul className="space-y-1 text-sm text-white/80">
                    {selectedSummary.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                  {priceRange && (
                    <div className="mt-2 text-sm font-semibold text-amber-400">
                      Estimated: {fmt(priceRange.min)} – {fmt(priceRange.max)}
                    </div>
                  )}
                </div>
              )}

              <Textarea placeholder="Additional notes (optional)" value={message} onChange={e => setMessage(e.target.value)} rows={3} className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-white/40 resize-none" />

              {formError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                  {formError}
                </div>
              )}

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="w-full">
                      <Button
                        type="submit"
                        variant="premium"
                        size="lg"
                        className={`w-full text-base font-bold transition-all ${!formReady && !formSubmitting ? "opacity-40 cursor-not-allowed border-amber-500/30" : ""}`}
                        disabled={formSubmitting || !formReady}
                      >
                        {formSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending…
                          </span>
                        ) : "Submit Quote Request"}
                      </Button>
                    </span>
                  </TooltipTrigger>
                  {!formReady && (
                    <TooltipContent side="top" className="bg-[#222] border-[#444] text-amber-400 text-sm">
                      Please complete your selections to continue
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </form>
          )}
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="py-10 px-4 border-t border-[#222]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          <GoogleRatingChip />
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-500" /> Certified XPEL Installers</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-amber-500" /> Up to 10-Yr Warranty</span>
          <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-amber-500" /> Concierge Pickup Available</span>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-[#333] rounded-lg bg-[#1a1a1a] overflow-hidden px-5">
                <AccordionTrigger className="py-4 text-white font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-white/70 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstantQuote;
