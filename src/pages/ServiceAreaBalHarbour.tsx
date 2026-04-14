import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, Waves, Star, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

const faqData = [
  { question: "Do you pick up exotics from Bal Harbour?", answer: "Yes — we offer concierge pickup and return service for Bal Harbour clients, including transport for exotic vehicles. We treat every pickup with the care your vehicle deserves. Just request it when you book your quote." },
  { question: "Will ceramic coating protect against Bal Harbour salt air?", answer: "Yes — XPEL Fusion Plus ceramic coating is one of the best defenses against salt-air corrosion. The chemical bond creates a hydrophobic, salt-resistant layer that prevents oxidation. Combine it with regular rinses and your paint stays factory-new." },
  { question: "Do you work on Lamborghinis, Ferraris, Rolls-Royces, and McLarens?", answer: "Yes — exotic and luxury vehicles are our specialty. We've protected Ferraris, Lamborghinis, Rolls-Royce Cullinans, Bentley Continentals, McLarens, and Aston Martins. Our XPEL-certified technicians and climate-controlled bay are built for vehicles that demand precision." },
  { question: "How long does PPF last on a beach-driven exotic?", answer: "Quality XPEL Ultimate Plus PPF lasts up to 10 years even in coastal conditions when properly installed. Self-healing topcoat repels minor scratches, the urethane absorbs rock chips, and the manufacturer warranty covers yellowing and cracking — exactly the protection a Bal Harbour exotic needs." },
  { question: "What's the closest XPEL Authorized Dealer to Bal Harbour?", answer: "Bespoke Auto Design is Bal Harbour's nearest XPEL Authorized Dealer — about 25 minutes south at 7943 NW 64th St, Miami. With 7+ years protecting exotic vehicles and a climate-controlled facility, we're worth the short drive (or schedule our concierge pickup)." },
];

const whyCards = [
  { icon: Waves, title: "Salt-Air Defense for Coastal Garages", text: "Bal Harbour's ocean-front condos and homes mean constant salt mist, even in covered garages. XPEL Fusion Plus ceramic coating creates an inorganic barrier that resists salt corrosion and oxidation that strips unprotected clear coat in months." },
  { icon: Sun, title: "Sand & UV Protection for the A1A Drive", text: "Driving Collins Avenue and A1A means constant exposure to airborne sand, intense reflected UV from white sand and water, and high-traffic stop-and-go that exposes paint to baking sun. XPEL Ultimate Plus PPF + ceramic coating handle both." },
  { icon: Thermometer, title: "Climate-Controlled Installation — Non-Negotiable for Coastal Vehicles", text: "Humidity and salt at the application stage will doom any PPF or ceramic install. Our sealed climate-controlled bay is essential to a flawless bond — especially for the high-value vehicles Bal Harbour clients trust us with." },
  { icon: Car, title: "Concierge Pickup From Bal Harbour — Optional", text: "We can arrange pickup from your Bal Harbour residence or the Bal Harbour Shops valet and return your vehicle when work is complete. Just request it when you book." },
];

const services = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF shields against sand abrasion, rock chips, and coastal debris." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating defends against salt-air corrosion and intense ocean UV." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — essential for coastal driving." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design — Bal Harbour Service Area",
  "description": "Bal Harbour's premier XPEL Authorized Dealer for exotic and luxury vehicle protection. Salt-air ceramic coating, PPF, ceramic tint.",
  "url": "https://www.bespokeauto.design/service-areas/bal-harbour",
  "telephone": "+1-786-395-9172", "email": "sales@bespokeauto.design", "priceRange": "$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "areaServed": { "@type": "City", "name": "Bal Harbour, FL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
  "image": "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
  "sameAs": ["https://www.instagram.com/bespokeautodesign/", "https://www.facebook.com/bespokeautodesign"]
};

const faqPageSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
};

const ServiceAreaBalHarbour = () => (
  <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
    <PageSEO title="Exotic Auto Protection in Bal Harbour | Bespoke Auto Design Miami" description="Bal Harbour's premier XPEL Authorized Dealer for exotic and luxury vehicle protection. Salt-air ceramic coating, PPF, ceramic tint. Concierge pickup available." canonical="https://www.bespokeauto.design/service-areas/bal-harbour" structuredData={[localBusinessSchema, faqPageSchema]} />
    <Navbar />

    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Exotic-Caliber PPF, Ceramic Coating & Window Tint for Bal Harbour</h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">Bespoke Auto Design protects Bal Harbour's exotic and luxury vehicles against salt air, ocean UV, and sand abrasion — installed in our climate-controlled Miami facility 25 minutes south.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/#contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button></Link>
          <a href="tel:+17863959172"><Button size="lg" variant="outline" className="bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500 px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172</Button></a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60">
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500" /> 5-Star Rated</span><span>•</span>
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-500" /> XPEL Authorized Dealer</span><span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-amber-500" /> Up to 10-Year Warranty</span><span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-amber-500" /> Concierge Pickup Available</span>
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Why Bal Harbour Drivers Choose Bespoke</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyCards.map((card, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5]">
              <CardHeader><div className="flex items-center gap-3 mb-2"><div className="p-2 rounded-lg bg-amber-500/10"><card.icon className="w-6 h-6 text-amber-500" /></div><CardTitle className="text-lg text-white">{card.title}</CardTitle></div></CardHeader>
              <CardContent><p className="text-white/70 leading-relaxed">{card.text}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Services Available for Bal Harbour Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5] flex flex-col">
              <CardHeader><CardTitle className="text-lg text-white">{svc.title}</CardTitle><p className="text-amber-500 font-bold text-xl mt-1">From {svc.price}</p></CardHeader>
              <CardContent className="flex flex-col flex-1"><p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p><Link to={svc.link}><Button variant="outline" className="w-full bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#141414]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">Getting to Bespoke From Bal Harbour</h2>
        <p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">Our Miami facility at 7943 NW 64th St is approximately 25 minutes south of Bal Harbour via Collins Avenue to 195 W to I-95 S, then west on NW 71st. We coordinate pickup and return for clients who prefer to skip the drive.</p>
        <div className="rounded-xl overflow-hidden border border-[#333]">
          <iframe title="Bespoke Auto Design Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.318!3d25.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzIyLjgiTiA4MMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Bal Harbour FAQ</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-amber-500 text-left py-5 text-base font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-white/70 leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="py-20 px-4 bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Bal Harbour Exotic?</h2>
        <p className="text-white/60 text-lg mb-8">Get a free quote within 30 minutes — currently booking 1-2 weeks out</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/#contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button></Link>
          <a href="tel:+17863959172"><Button size="lg" variant="outline" className="bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500 px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> (786) 395-9172</Button></a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServiceAreaBalHarbour;
