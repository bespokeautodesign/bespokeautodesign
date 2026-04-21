import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, Star, Award, ArrowRight, ParkingCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import PageSEO from "@/components/PageSEO";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";

const faqData = [
  { question: "Do you pick up vehicles from Aventura?", answer: "Yes — concierge pickup and return service available from Aventura homes, offices, and the Aventura Mall valet. Just request it when booking." },
  { question: "Will PPF protect against Aventura Mall parking dings?", answer: "Yes — XPEL Ultimate Plus PPF on door panels, mirrors, and rocker panels significantly reduces door-ding damage by absorbing minor impacts. While no film prevents 100% of dings, PPF dramatically reduces visible damage from parking-lot contact." },
  { question: "How long does ceramic window tint last in Aventura?", answer: "XPEL Prime XR Plus ceramic tint comes with a lifetime warranty against fading, bubbling, peeling, or color change. With normal care, it lasts indefinitely — and the heat rejection makes a real difference for school pickup and golf days." },
  { question: "Can you protect my Range Rover or Tesla X?", answer: "Absolutely — daily-driver luxury SUVs and Teslas are some of our most common installs. Full-front PPF ($1,499 starting) plus ceramic coating ($599 starting) is a popular Aventura combination for protecting family vehicles." },
  { question: "Closest XPEL dealer to Aventura?", answer: "Bespoke Auto Design — 25 minutes south at 7943 NW 64th St. 7+ years, 500+ vehicles, climate-controlled facility. Or schedule our concierge pickup." },
];

const whyCards = [
  { icon: ParkingCircle, title: "Aventura Mall & Valet Door-Ding Defense", text: "Busy mall valets and tight parking decks lead to door dings, scratches, and chips. XPEL Ultimate Plus PPF on side panels and door edges absorbs the impacts that ruin factory paint." },
  { icon: Sun, title: "Country Club Drive & Golf-Bound Exotic Protection", text: "Long days on Country Club Drive expose paint to direct sun. XPEL Fusion Plus ceramic coating prevents UV oxidation and bird droppings from etching clear coat." },
  { icon: Thermometer, title: "Climate-Controlled Application for Family-Heirloom Vehicles", text: "Proper PPF and ceramic coating require sealed temperature-controlled application; our facility is built for it." },
  { icon: Car, title: "Concierge Pickup From Aventura — Optional", text: "We can arrange pickup from your Aventura home, office, or the Aventura Mall valet and return your vehicle when work is complete. Just request it when you book." },
];

const services = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF shields against parking-lot dings, rock chips, and road debris." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating prevents UV oxidation and bird droppings from etching clear coat." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — a real difference for school runs and golf days." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design — Aventura Service Area",
  "description": "Aventura's premier XPEL Authorized Dealer for Paint Protection Film, Ceramic Coating, and Window Tint.",
  "url": "https://www.bespokeauto.design/service-areas/aventura",
  "telephone": "+1-786-395-9172", "email": "sales@bespokeauto.design", "priceRange": "$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "areaServed": { "@type": "City", "name": "Aventura, FL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
  "image": "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
  "sameAs": ["https://www.instagram.com/bespokeautodesign/", "https://www.facebook.com/bespokeautodesign"]
};

const faqPageSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
};

const ServiceAreaAventura = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  return (
  <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
    <PageSEO title="PPF, Ceramic Coating & Window Tint in Aventura, Miami | Bespoke Auto Design" description="Certified XPEL paint protection film, ceramic coating, and ceramic window tint installation serving Aventura, Miami. Trusted by Aventura residents from Williams Island to the Aventura Mall area. Full XPEL PPF and ceramic coating installs for luxury SUVs and performance sedans. Free quotes, 10-year warranty, concierge pickup." canonical="https://www.bespokeauto.design/service-areas/aventura" structuredData={[localBusinessSchema, faqPageSchema]} />
    <Navbar />
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Family-First Premium Auto Protection in Aventura</h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">Bespoke Auto Design protects Aventura's daily-driver luxury SUVs, golf-bound exotics, and family vehicles from mall valet damage, Country Club Drive UV, and parking-deck dings — installed in our climate-controlled Miami facility 25 minutes south.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button>
          <a href="tel:+17863959172" onClick={() => trackPhoneClick('service_area_aventura')}><Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172</Button></a>
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
    <div className="bg-brand-red/10 border-y border-brand-red/40"><div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm"><span className="text-brand-red font-medium">💡 Get an instant price range for your vehicle</span><Link to="/instant-quote" className="inline-flex items-center gap-1 text-brand-red font-bold hover:text-brand-red underline underline-offset-2">Try the Instant Quote Calculator <ArrowRight className="w-3.5 h-3.5" /></Link></div></div>
    <section className="py-20 px-4 bg-[#141414]"><div className="max-w-6xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Why Aventura Drivers Choose Bespoke</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{whyCards.map((card, i) => (<Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5]"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="p-2 rounded-lg bg-brand-red/10"><card.icon className="w-6 h-6 text-brand-red" /></div><CardTitle className="text-lg text-white">{card.title}</CardTitle></div></CardHeader><CardContent><p className="text-white/70 leading-relaxed">{card.text}</p></CardContent></Card>))}</div></div></section>
    <section className="py-20 px-4 bg-[#0f0f0f]"><div className="max-w-6xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Services Available for Aventura Clients</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((svc, i) => (<Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5] flex flex-col"><CardHeader><CardTitle className="text-lg text-white">{svc.title}</CardTitle><p className="text-brand-red font-bold text-xl mt-1">From {svc.price}</p></CardHeader><CardContent className="flex flex-col flex-1"><p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p><Link to={svc.link}><Button variant="outline" className="w-full bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Button></Link></CardContent></Card>))}</div></div></section>
    <section className="py-20 px-4 bg-[#141414]"><div className="max-w-4xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">Getting to Bespoke From Aventura</h2><p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">Our Miami facility at 7943 NW 64th St is approximately 25 minutes south of Aventura via I-95 S to NW 71st St. Many Aventura clients drop off before work and we coordinate same-day or next-business-day return.</p><div className="rounded-xl overflow-hidden border border-[#333]"><iframe title="Bespoke Auto Design Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.318!3d25.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzIyLjgiTiA4MMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
    <section className="py-20 px-4 bg-[#0f0f0f]"><div className="max-w-3xl mx-auto"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Aventura FAQ</h2><Accordion type="single" collapsible className="space-y-3">{faqData.map((faq, i) => (<AccordionItem key={i} value={`faq-${i}`} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6"><AccordionTrigger className="text-white hover:text-brand-red text-left py-5 text-base font-medium">{faq.question}</AccordionTrigger><AccordionContent className="text-white/70 leading-relaxed pb-5">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></div></section>
    <section className="py-20 px-4 bg-gradient-to-b from-[#141414] to-[#0f0f0f]"><div className="max-w-3xl mx-auto text-center"><h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Aventura Vehicle?</h2><p className="text-white/60 text-lg mb-8">Get a free quote within 30 minutes — currently booking 1-2 weeks out</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Get a Free Quote</Button><a href="tel:+17863959172" onClick={() => trackPhoneClick('service_area_aventura')}><Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> (786) 395-9172</Button></a></div></div></section>
    <Footer />
    <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
  </div>
  );
};

export default ServiceAreaAventura;
