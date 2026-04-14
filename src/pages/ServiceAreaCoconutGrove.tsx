import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, TreePine, Star, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";

const faqData = [
  { question: "Do you pick up vehicles from Coconut Grove?", answer: "Yes — we offer concierge pickup and return service from Coconut Grove. Coordinate it when you request your quote and we'll handle the logistics." },
  { question: "Will ceramic coating protect against tree sap and leaf acid?", answer: "Yes — XPEL Fusion Plus ceramic coating creates a hydrophobic surface that prevents sap and leaf-acid drips from bonding to your clear coat. You can wipe contaminants off with a quick rinse before they cause permanent etching." },
  { question: "How long does PPF last in Coconut Grove conditions?", answer: "Quality XPEL PPF lasts 7-10 years in Florida when professionally installed. Coconut Grove's tree shade actually helps by reducing UV — but proper climate-controlled installation matters more than location." },
  { question: "Can you protect my Range Rover or Land Cruiser?", answer: "Absolutely — daily-driver SUVs are common installs. Full-front PPF ($1,499 starting) protects the hood, fenders, mirrors, and bumper from rock chips, while ceramic coating ($599 starting) repels tree sap, salt mist, and water spots." },
  { question: "Closest XPEL dealer to Coconut Grove?", answer: "Bespoke Auto Design — about 25 minutes north at 7943 NW 64th St. With 7+ years and 500+ vehicles protected, our certification and climate-controlled bay are worth the short drive." },
];

const whyCards = [
  { icon: TreePine, title: "Tree-Canopy & Sap Defense", text: "Coconut Grove's mature oak and gumbo-limbo canopy is harsh on paint; sap and leaf-acid drip etch unprotected clear coat in days. XPEL Fusion Plus ceramic coating creates a slick barrier you can wipe contaminants off before they bond." },
  { icon: Sun, title: "Bayshore Drive UV & Coastal Mist", text: "Direct sun plus salt mist from Biscayne Bay attacks paint and interior; XPEL ceramic coating + ceramic tint defend both." },
  { icon: Thermometer, title: "Sealed Climate-Controlled Installation", text: "Many Grove homes have open carports; we apply every install in our sealed bay so the bond is flawless before your vehicle ever sees humidity again." },
  { icon: Car, title: "Concierge Pickup From Coconut Grove — Optional", text: "Short on time? We can arrange pickup from your Coconut Grove home or office and return your vehicle when work is complete. Mention it when you request your quote." },
];

const services = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF protects against rock chips, sand, and road debris on the Grove's tree-lined streets." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating adds hydrophobic UV protection — essential defense against sap and Bayshore mist." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — legal shades that make a real difference." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design — Coconut Grove Service Area",
  "description": "Coconut Grove's XPEL Authorized Dealer for Paint Protection Film, Ceramic Coating, and Window Tint. Climate-controlled installations, 7+ years experience.",
  "url": "https://www.bespokeauto.design/service-areas/coconut-grove",
  "telephone": "+1-786-395-9172", "email": "sales@bespokeauto.design", "priceRange": "$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "areaServed": { "@type": "City", "name": "Coconut Grove, FL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
  "image": "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
  "sameAs": ["https://www.instagram.com/bespokeautodesign/", "https://www.facebook.com/bespokeautodesign"]
};

const faqPageSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
};

const ServiceAreaCoconutGrove = () => (
  <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
    <PageSEO title="Premium PPF & Ceramic Coating in Coconut Grove | Bespoke Auto Design" description="Coconut Grove's XPEL Authorized Dealer for Paint Protection Film, Ceramic Coating, and Window Tint. Climate-controlled installations, 7+ years experience. Concierge pickup available." canonical="https://www.bespokeauto.design/service-areas/coconut-grove" structuredData={[localBusinessSchema, faqPageSchema]} />
    <Navbar />
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Premium PPF, Ceramic Coating & Window Tint in Coconut Grove</h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">Bespoke Auto Design protects Coconut Grove vehicles from tree sap, leaf-acid staining, Bayshore Drive UV, and Sailing Club salt exposure — installed in our climate-controlled Miami facility a short drive away.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/#contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button></Link>
          <a href="tel:+17863959172"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172</Button></a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60">
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500" /> 5-Star Rated</span><span>•</span>
          <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-500" /> XPEL Authorized Dealer</span><span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-amber-500" /> Up to 10-Year Warranty</span><span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-amber-500" /> Concierge Pickup Available</span>
        </div>
      </div>
    </section>
    <section className="py-20 px-4 bg-[#141414]"><div className="max-w-6xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Why Coconut Grove Drivers Choose Bespoke</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{whyCards.map((card, i) => (<Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5]"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="p-2 rounded-lg bg-amber-500/10"><card.icon className="w-6 h-6 text-amber-500" /></div><CardTitle className="text-lg text-white">{card.title}</CardTitle></div></CardHeader><CardContent><p className="text-white/70 leading-relaxed">{card.text}</p></CardContent></Card>))}</div></div></section>
    <section className="py-20 px-4 bg-[#0f0f0f]"><div className="max-w-6xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Services Available for Coconut Grove Clients</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((svc, i) => (<Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5] flex flex-col"><CardHeader><CardTitle className="text-lg text-white">{svc.title}</CardTitle><p className="text-amber-500 font-bold text-xl mt-1">From {svc.price}</p></CardHeader><CardContent className="flex flex-col flex-1"><p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p><Link to={svc.link}><Button variant="outline" className="w-full bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></CardContent></Card>))}</div></div></section>
    <section className="py-20 px-4 bg-[#141414]"><div className="max-w-4xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">Getting to Bespoke From Coconut Grove</h2><p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">Our Miami facility at 7943 NW 64th St is approximately 25 minutes north of Coconut Grove via US-1 N to NW 7th Avenue, then west on NW 64th. Most Grove clients drop off in the morning and pick up the same or next business day.</p><div className="rounded-xl overflow-hidden border border-[#333]"><iframe title="Bespoke Auto Design Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.318!3d25.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzIyLjgiTiA4MMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
    <section className="py-20 px-4 bg-[#0f0f0f]"><div className="max-w-3xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Coconut Grove FAQ</h2><Accordion type="single" collapsible className="space-y-3">{faqData.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6"><AccordionTrigger className="text-white hover:text-amber-500 text-left py-5 text-base font-medium">{faq.question}</AccordionTrigger><AccordionContent className="text-white/70 leading-relaxed pb-5">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></div></section>
    <section className="py-20 px-4 bg-gradient-to-b from-[#141414] to-[#0f0f0f]"><div className="max-w-3xl mx-auto text-center"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Coconut Grove Vehicle?</h2><p className="text-white/60 text-lg mb-8">Get a free quote within 30 minutes — currently booking 1-2 weeks out</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/#contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button></Link><a href="tel:+17863959172"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> (786) 395-9172</Button></a></div></div></section>
    <Footer />
  </div>
);

export default ServiceAreaCoconutGrove;
