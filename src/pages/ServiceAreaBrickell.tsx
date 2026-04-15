import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, MapPin, Star, Award, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";
import { providerSchema, areaServed } from "@/utils/seoHelpers";

const brickellFaqData = [
  {
    question: "Do you pick up vehicles from Brickell?",
    answer: "Yes — we offer concierge pickup and return service from Brickell condos, offices, and parking garages. Coordinate it when you request your quote and we'll handle the logistics so you don't lose a workday."
  },
  {
    question: "How long does PPF take to install on a Brickell daily driver?",
    answer: "A full-front PPF install on most sedans and SUVs takes 1-2 days. Full-body installations take 4-7 days. Because our Miami facility is climate-controlled, we never rush curing — that's why our installs last 10 years instead of 10 months."
  },
  {
    question: "Will ceramic coating hold up to Brickell's sun and humidity?",
    answer: "Absolutely — properly applied XPEL Fusion Plus ceramic coating thrives in Miami's climate. The key is application: humidity during curing destroys lesser installs, which is why we apply in our sealed climate-controlled bay. Your coating will repel water, salt, and bird droppings for years."
  },
  {
    question: "Is window tint legal for my Brickell daily driver in Florida?",
    answer: "Yes — Florida law allows 28% VLT on front side windows and 15% VLT on rear sides for sedans (any darkness on rear for SUVs/vans). Our XPEL Prime XR Plus ceramic tint blocks up to 98% of infrared heat and 99% of UV at any legal shade — a real difference on the I-95 commute."
  },
  {
    question: "What's the closest XPEL Authorized Dealer to Brickell?",
    answer: "Bespoke Auto Design is Brickell's nearest XPEL Authorized Dealer with 7+ years of experience and 500+ vehicles protected. We're 20 minutes north on I-95 at 7943 NW 64th St — easily accessible and worth the short drive for certified XPEL installation."
  }
];

const brickellServices = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF protects against rock chips, sand, and road debris on your daily I-95 commute." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating adds hydrophobic UV protection that thrives in Miami's heat and humidity." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — legal shades that make a real difference." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const whyCards = [
  {
    icon: Shield,
    title: "Highway-Grade PPF for the I-95 Commute",
    text: "Brickell's daily run up I-95 means constant exposure to rock chips, sand, and construction debris. XPEL Ultimate Plus PPF is engineered to absorb that abuse without yellowing, peeling, or compromising your factory paint."
  },
  {
    icon: Sun,
    title: "Sun-Baked Garage Decks Met Their Match",
    text: "Many Brickell condo and office towers have open-air garage decks where Florida sun bakes paint year-round. XPEL Fusion Plus ceramic coating adds a hydrophobic UV-resistant layer that defends against oxidation, water spots, and contamination."
  },
  {
    icon: Thermometer,
    title: "Climate-Controlled Installation You Won't Find at Most Shops",
    text: "Proper PPF and ceramic coating require temperature- and humidity-controlled application. Our purpose-built bay is the difference between a 10-year install and a 6-month peel job — critical for Miami humidity."
  },
  {
    icon: Car,
    title: "Concierge Pickup From Brickell — Optional",
    text: "Short on time? We'll arrange pickup from your Brickell building or office and return your vehicle when the work is done. Just ask when you book your quote."
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design — Brickell Service Area",
  "description": "Bespoke Auto Design is Brickell's premier XPEL Authorized Dealer for Paint Protection Film, Ceramic Coating, and Window Tint. Climate-controlled facility, 7+ years experience. Concierge pickup available.",
  "url": "https://www.bespokeauto.design/service-areas/brickell",
  "telephone": "+1-786-395-9172",
  "email": "sales@bespokeauto.design",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7943 NW 64th St",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "postalCode": "33166",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  "areaServed": { "@type": "City", "name": "Brickell, Miami, FL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
  "image": "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
  "sameAs": [
    "https://www.instagram.com/bespokeautodesign/",
    "https://www.facebook.com/bespokeautodesign"
  ]
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": brickellFaqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const ServiceAreaBrickell = () => {
  const structuredData = [localBusinessSchema, faqPageSchema];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
      <PageSEO
        title="Premium PPF & Ceramic Coating in Brickell, Miami | Bespoke Auto Design"
        description="Bespoke Auto Design is Brickell's premier XPEL Authorized Dealer for Paint Protection Film, Ceramic Coating, and Window Tint. Climate-controlled facility, 7+ years experience. Concierge pickup available. Free quotes."
        canonical="https://www.bespokeauto.design/service-areas/brickell"
        structuredData={structuredData}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Premium PPF, Ceramic Coating & Window Tint in Brickell, Miami
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bespoke Auto Design protects Brickell's daily-driver luxury and exotic vehicles from Miami's harshest road and sun conditions — installed in our climate-controlled facility just minutes from downtown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/#contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+17863959172">
              <Button size="lg" variant="outline" className="bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500 px-8 py-6 text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172
              </Button>
            </a>
          </div>
          {/* Stat strip */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60">
            <GoogleRatingChip />
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-500" /> XPEL Authorized Dealer</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-amber-500" /> Up to 10-Year Warranty</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-amber-500" /> Concierge Pickup Available</span>
          </div>
        </div>
      </section>

      {/* Instant Quote CTA */}
      <div className="bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm">
          <span className="text-amber-400 font-medium">💡 Get an instant price range for your vehicle</span>
          <Link to="/instant-quote" className="inline-flex items-center gap-1 text-amber-400 font-bold hover:text-amber-300 underline underline-offset-2">Try the Instant Quote Calculator <ArrowRight className="w-3.5 h-3.5" /></Link>
        </div>
      </div>

      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">
            Why Brickell Drivers Choose Bespoke
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyCards.map((card, i) => (
              <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <card.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <CardTitle className="text-lg text-white">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 leading-relaxed">{card.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES AVAILABLE */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">
            Services Available for Brickell Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brickellServices.map((svc, i) => (
              <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{svc.title}</CardTitle>
                  <p className="text-amber-500 font-bold text-xl mt-1">From {svc.price}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p>
                  <Link to={svc.link}>
                    <Button variant="outline" className="w-full bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING TO BESPOKE FROM BRICKELL */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">
            Getting to Bespoke From Brickell
          </h2>
          <p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            Our Miami facility at 7943 NW 64th St is approximately 20 minutes north of Brickell via I-95 N to NW 36th Street, then west on NW 64th. Most clients drop off their vehicle in the morning before work and we coordinate return for the same day or next business day depending on the install scope.
          </p>
          <div className="rounded-xl overflow-hidden border border-[#333]">
            <iframe
              title="Bespoke Auto Design Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.5!2d-80.318!3d25.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzIyLjgiTiA4MMKwMTknMDQuOCJX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* BRICKELL FAQ */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">
            Brickell FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {brickellFaqData.map((faq, i) => (
              <AccordionItem key={i} value={`brickell-faq-${i}`} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-amber-500 text-left py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Brickell Vehicle?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Get a free quote within 30 minutes — currently booking 1-2 weeks out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+17863959172">
              <Button size="lg" variant="outline" className="bg-transparent border-amber-500/50 text-white hover:bg-amber-500 hover:text-[#1a1a1a] hover:border-amber-500 px-8 py-6 text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> (786) 395-9172
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAreaBrickell;
