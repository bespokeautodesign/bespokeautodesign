import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, Palette, Star, Award, ArrowRight, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import PageSEO from "@/components/PageSEO";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";

const faqData = [
  { question: "Do you pick up vehicles from the Design District?", answer: "Yes — we offer concierge pickup and return service from Design District condos and galleries. Just request it when you book your quote and we'll coordinate timing so you don't lose a day at the studio or showroom." },
  { question: "What PPF protection do you recommend for Design District daily drivers?", answer: "For the luxury and exotic vehicles common in the Design District, we recommend full-front XPEL Ultimate Plus PPF ($1,499 starting) to protect against rock chips on I-195 and the Julia Tuttle Causeway. For show cars and weekend exotics, full-body PPF ensures complete protection." },
  { question: "How does ceramic coating protect against the Design District's sun exposure?", answer: "Design District parking — whether valet at a gallery or street-side along NE 2nd Avenue — exposes paint to intense Miami UV. XPEL Fusion Plus ceramic coating creates a hydrophobic UV-resistant layer that prevents oxidation, water spots, and fading for years." },
  { question: "Can you protect my collection vehicle while it's stored in the Design District?", answer: "Absolutely. We protect everything from daily-driven Range Rovers and G-Wagons to Ferrari, Lamborghini, and McLaren collection cars. Our climate-controlled facility ensures every installation cures perfectly before your vehicle returns to storage or the street." },
  { question: "What's the closest XPEL Authorized Dealer to the Design District?", answer: "Bespoke Auto Design is the nearest XPEL Authorized Dealer to the Design District — about 15-20 minutes north at 7943 NW 64th St, Miami. With 7+ years and 500+ vehicles protected, our certification and climate-controlled bay are worth the short drive from the Design District." },
];

const whyCards = [
  { icon: Palette, title: "Gallery-Grade Protection for Art District Vehicles", text: "The Design District is home to Miami's most curated aesthetic — and your vehicle should match. Whether you drive a matte-wrapped Urus or a classic 911, XPEL PPF and ceramic coating keep your finish as pristine as the gallery walls surrounding you." },
  { icon: Shield, title: "I-195 & Julia Tuttle Causeway Chip Defense", text: "The daily commute from the Design District crosses some of Miami's most debris-heavy stretches. XPEL Ultimate Plus PPF on the hood, fenders, bumper, and mirrors absorbs the impacts that ruin show-quality paint." },
  { icon: Thermometer, title: "Climate-Controlled Installation — Never Rushed", text: "Design District residents expect precision. Our sealed, temperature- and humidity-controlled bay means every PPF edge wraps cleanly and every ceramic layer bonds flawlessly. No shortcuts. No sun-curing." },
  { icon: Car, title: "Concierge Pickup From the Design District — Optional", text: "Running between showrooms, galleries, or your penthouse? We can arrange pickup from your Design District building and return your vehicle when the work is complete. Mention it when you request your quote." },
];

const services = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF protects against rock chips and debris on your daily drive from the Design District." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating adds hydrophobic UV protection — essential for sun-exposed Design District parking." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — legal shades that make a real difference." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design — Design District Service Area",
  "description": "Design District's XPEL Authorized Dealer for Paint Protection Film, Ceramic Coating, and Window Tint. Climate-controlled installations, 7+ years experience.",
  "url": "https://www.bespokeauto.design/service-areas/design-district",
  "telephone": "+1-786-395-9172", "email": "sales@bespokeauto.design", "priceRange": "$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "areaServed": { "@type": "City", "name": "Design District, Miami, FL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "46", "bestRating": "5", "worstRating": "1" },
  "image": "https://www.bespokeauto.design/bespoke-logo.png",
  "sameAs": ["https://www.instagram.com/bespokeautodesign/"]
};

const faqPageSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
};

const ServiceAreaDesignDistrict = () => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  return (
  <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
    <PageSEO title="PPF, Ceramic Coating & Window Tint in Design District, Miami | Bespoke Auto Design" description="Certified XPEL paint protection film, ceramic coating, and ceramic window tint installation serving the Design District, Miami. Protecting luxury and exotic vehicles from Miami's harshest road and sun conditions — installed in our climate-controlled facility just minutes away. Concierge pickup available." canonical="https://www.bespokeauto.design/service-areas/design-district" structuredData={[localBusinessSchema, faqPageSchema]} />
    <Navbar />

    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-silver-muted mb-3">Boutique Auto Protection · DESIGN DISTRICT</p>
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Premium PPF, Ceramic Coating & Window Tint in <span className="text-brand-red">Design District</span>, Miami</h1>
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">Bespoke Auto Design protects Design District luxury and exotic vehicles from rock chips, sun, and urban road debris — installed in our climate-controlled facility just minutes from the gallery district.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Request a Consultation</Button>
          <a href="tel:+17863959172" onClick={() => trackPhoneClick('service_area_design_district')}><Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172</Button></a>
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
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Why Design District Drivers Choose Bespoke</h2>
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
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Services Available for Design District Clients</h2>
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
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">Getting to Bespoke From the Design District</h2>
        <p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">Our Miami facility at 7943 NW 64th St is approximately 15-20 minutes north of the Design District via I-195 W to I-95 N, exiting at NW 36th Street and heading west to NW 64th. Many Design District clients drop off their vehicle before gallery hours and we coordinate return the same day or next business day depending on install scope.</p>
        <div className="rounded-xl overflow-hidden border border-[#333]">
          <iframe title="Bespoke Auto Design Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.318!3d25.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzIyLjgiTiA4MMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1700000000000" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>

    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">Design District FAQ</h2>
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
        <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Design District Vehicle?</h2>
        <p className="text-white/60 text-lg mb-8">Get a free quote within 30 minutes — currently booking 1-2 weeks out</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">Request a Consultation</Button>
          <a href="tel:+17863959172" onClick={() => trackPhoneClick('service_area_design_district')}><Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto"><Phone className="w-5 h-5 mr-2" /> (786) 395-9172</Button></a>
        </div>
      </div>
    </section>

    <Footer />
    <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
  </div>
  );
};

export default ServiceAreaDesignDistrict;
