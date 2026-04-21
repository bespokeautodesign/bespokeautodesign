import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, Waves, Star, Award, ArrowRight, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import PageSEO from "@/components/PageSEO";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";

const faqData = [
  { question: "Do you pick up vehicles from Key Biscayne?", answer: "Yes — we offer concierge pickup and return service from Key Biscayne residences and the Crandon Park area. Skip the Causeway drive and let us handle the logistics. Just request it when you book your quote." },
  { question: "Will ceramic coating survive Key Biscayne's salt air?", answer: "Yes — XPEL Fusion Plus ceramic coating is specifically designed to resist salt-air corrosion. The chemical bond creates a hydrophobic, salt-resistant layer that prevents oxidation and water spotting. Combined with regular rinses, your paint stays factory-new despite the island environment." },
  { question: "How long does PPF last on a Key Biscayne vehicle?", answer: "Quality XPEL Ultimate Plus PPF lasts up to 10 years even in coastal conditions when properly installed. The self-healing topcoat repels minor scratches, the urethane absorbs rock chips and sand abrasion, and the manufacturer warranty covers yellowing and cracking." },
  { question: "Is window tint legal for my Key Biscayne daily driver?", answer: "Yes — Florida law allows 28% VLT on front side windows and 15% VLT on rear sides for sedans (any darkness on rear for SUVs/vans). Our XPEL Prime XR Plus ceramic tint blocks up to 98% of infrared heat and 99% of UV at any legal shade — a real difference crossing the Causeway." },
  { question: "What's the closest XPEL Authorized Dealer to Key Biscayne?", answer: "Bespoke Auto Design is Key Biscayne's nearest XPEL Authorized Dealer — about 30 minutes across the Causeway at 7943 NW 64th St, Miami. With 7+ years and 500+ vehicles protected, our climate-controlled facility is worth the drive (or schedule our concierge pickup)." },
];

const whyCards = [
  { icon: Waves, title: "Rickenbacker Causeway Salt-Spray Defense", text: "Every Key Biscayne resident deals with constant salt mist crossing the Causeway. XPEL Fusion Plus ceramic coating is a chemical barrier that resists salt oxidation that destroys unprotected paint in coastal environments." },
  { icon: Sun, title: "Crandon & Beach-Drive Sand Abrasion", text: "Sand kicked up off Crandon Park and the beach access roads acts like sandpaper at speed. XPEL Ultimate Plus PPF on the front fascia and hood absorbs the impacts that micro-scratch and dull factory paint." },
  { icon: Thermometer, title: "Sealed Climate-Controlled Install — Critical Across the Causeway", text: "Key Biscayne's humidity and salt mean any installation done outdoors is doomed. Our sealed mainland bay ensures every PPF and ceramic install bonds correctly before your vehicle ever sees coastal air again." },
  { icon: Car, title: "Concierge Pickup From Key Biscayne — Optional", text: "Skip the Causeway drive — we can coordinate pickup from your Key Biscayne residence or Crandon Park area and return your vehicle when work is complete." },
];

const services = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF shields against Causeway salt spray, sand abrasion, and road debris." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating defends against salt-air corrosion and intense island UV exposure." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — essential for the Causeway commute." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design — Key Biscayne Service Area",
  "description": "Key Biscayne's XPEL Authorized Dealer for island-tough Paint Protection Film, Ceramic Coating, and Window Tint. Salt-air protection, climate-controlled installs.",
  "url": "https://www.bespokeauto.design/service-areas/key-biscayne",
  "telephone": "+1-786-395-9172", "email": "sales@bespokeauto.design", "priceRange": "$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "areaServed": { "@type": "City", "name": "Key Biscayne, FL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
  "image": "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
  "sameAs": ["https://www.instagram.com/bespokeautodesign/", "https://www.facebook.com/bespokeautodesign"]
};

const faqPageSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
};

const ServiceAreaKeyBiscayne = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  return (
  <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
    <PageSEO title="PPF, Ceramic Coating & Window Tint in Key Biscayne, Miami | Bespoke Auto Design" description="Certified XPEL paint protection film, ceramic coating, and ceramic window tint installation serving Key Biscayne, Miami. Specialized salt-air and UV protection for vehicles crossing the Rickenbacker Causeway daily. Ceramic coatings engineered for Key Biscayne's island environment. Free quotes, 10-year warranty, concierge pickup." canonical="https://www.bespokeauto.design/service-areas/key-biscayne" structuredData={[localBusinessSchema, faqPageSchema]} />
    <Navbar />

    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Island-Tough PPF, Ceramic Coating & Window Tint for Key Biscayne</h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">Bespoke Auto Design protects Key Biscayne vehicles from Rickenbacker salt spray, Crandon Park sand, and intense island sun — installed in our climate-controlled mainland facility just minutes across the Causeway.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button>
          <a href="tel:+17863959172" onClick={() => trackPhoneClick('service_area_key_biscayne')}><Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172</Button></a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60">
          <GoogleRatingChip /><span>•</span>
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-xpel-yellow" /> XPEL Authorized Dealer</span><span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-red" /> Up to 10-Year Warranty</span><span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-brand-red" /> Concierge Pickup Available</span>
        </div>
      </div>
    </section>

    {/* Instant Quote CTA */}
    <div className="bg-black border-y border-silver-muted/40">
        <div className="container mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-silver">
          <span className="font-medium flex items-center gap-1.5"><Calculator className="w-4 h-4 text-silver-muted" /> Get an instant price range for your vehicle</span>
          <Link to="/instant-quote" className="inline-flex items-center gap-1 text-silver font-semibold underline-offset-4 hover:underline">Try the Instant Quote Calculator <ArrowRight className="w-3.5 h-3.5" /></Link>
        </div>
      </div>

    <section className="py-20 px-4 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Why Key Biscayne Drivers Choose Bespoke</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyCards.map((card, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5]">
              <CardHeader><div className="flex items-center gap-3 mb-2"><div className="p-2 rounded-lg bg-brand-red/10"><card.icon className="w-6 h-6 text-brand-red" /></div><CardTitle className="text-lg text-white">{card.title}</CardTitle></div></CardHeader>
              <CardContent><p className="text-white/70 leading-relaxed">{card.text}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Services Available for Key Biscayne Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5] flex flex-col">
              <CardHeader><CardTitle className="text-lg text-white">{svc.title}</CardTitle><p className="text-brand-red font-bold text-xl mt-1">From {svc.price}</p></CardHeader>
              <CardContent className="flex flex-col flex-1"><p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p><Link to={svc.link}><Button variant="outline" className="w-full bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#141414]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">Getting to Bespoke From Key Biscayne</h2>
        <p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">Our Miami facility at 7943 NW 64th St is approximately 30 minutes from Key Biscayne via Rickenbacker Causeway to I-95 N, then west on NW 71st. Many Key Biscayne clients prefer our concierge pickup service so they can skip the drive entirely.</p>
        <div className="rounded-xl overflow-hidden border border-[#333]">
          <iframe title="Bespoke Auto Design Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.318!3d25.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzIyLjgiTiA4MMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Key Biscayne FAQ</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-brand-red text-left py-5 text-base font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="py-20 px-4 bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Key Biscayne Vehicle?</h2>
        <p className="text-white/60 text-lg mb-8">Get a free quote within 30 minutes — currently booking 1-2 weeks out</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button>
          <a href="tel:+17863959172" onClick={() => trackPhoneClick('service_area_key_biscayne')}><Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> (786) 395-9172</Button></a>
        </div>
      </div>
    </section>

    <Footer />
    <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
  </div>
  );
};

export default ServiceAreaKeyBiscayne;
