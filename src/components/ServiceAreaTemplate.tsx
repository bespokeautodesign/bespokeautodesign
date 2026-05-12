import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Sun, Thermometer, Car, Phone, Award, ArrowRight, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import PageSEO from "@/components/PageSEO";
import { GoogleRatingChip } from "@/components/GoogleRatingChip";
import { trackPhoneClick } from "@/lib/analytics";
import type { ServiceAreaContent, WhyIcon } from "@/data/serviceAreaContent";

const ICONS: Record<WhyIcon, typeof Shield> = {
  shield: Shield,
  sun: Sun,
  thermo: Thermometer,
  car: Car,
};

const ServiceAreaTemplate = ({ content }: { content: ServiceAreaContent }) => {
  const [quoteModalOpen, setQuoteModalOpen] = React.useState(false);
  const canonical = `https://www.bespokeauto.design/service-areas/${content.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: `Bespoke Auto Design — ${content.name} Service Area`,
    description: content.metaDescription,
    url: canonical,
    telephone: "+1-786-395-9172",
    email: "sales@bespokeauto.design",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7943 NW 64th St",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33166",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: "25.823", longitude: "-80.318" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
    ],
    areaServed: { "@type": "City", name: `${content.name}, FL` },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "46", bestRating: "5", worstRating: "1" },
    image: "https://www.bespokeauto.design/bespoke-logo.png",
    sameAs: ["https://www.instagram.com/bespokeautodesign/", "https://www.facebook.com/bespokeautodesign"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bespokeauto.design/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.bespokeauto.design/#service-areas" },
      { "@type": "ListItem", position: 3, name: content.name, item: canonical },
    ],
  };

  const trackKey = `service_area_${content.slug.replace(/-/g, "_")}`;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
      <PageSEO
        title={content.metaTitle}
        description={content.metaDescription}
        canonical={canonical}
        structuredData={[localBusinessSchema, faqSchema, breadcrumbSchema]}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow-tag">
            {content.eyebrow}
          </p>
          <h1 className="font-sans text-[clamp(30px,5vw,54px)] font-medium text-white mb-6 leading-[1.05] uppercase tracking-[0.02em]">
            {content.heroHeadline.before}
            <span className="text-brand-red">{content.heroHeadline.highlight}</span>
            {content.heroHeadline.after}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            {content.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">
              Request a Consultation
            </Button>
            <a href="tel:+17863959172" onClick={() => trackPhoneClick(trackKey)}>
              <Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> Call (786) 395-9172
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-white/60">
            <GoogleRatingChip />
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-xpel-yellow" /> XPEL Authorized Dealer</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-brand-red" /> Up to 10-Year Warranty</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-brand-red" /> Concierge Pickup Available</span>
          </div>
        </div>
      </section>

      {/* Instant Quote CTA */}
      <div className="bg-black border-y border-silver-muted/40">
        <div className="container mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-silver">
          <span className="font-medium flex items-center gap-1.5"><Calculator className="w-4 h-4 text-silver-muted" /> Get an instant price range for your vehicle</span>
          <Link to="/instant-quote" className="inline-flex items-center gap-1 text-silver font-semibold underline-offset-4 hover:underline">
            Try the Instant Quote Calculator <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* WHY */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">
            Why {content.name} {content.audienceLabel} Choose Bespoke
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.why.map((card, i) => {
              const Icon = ICONS[card.icon];
              return (
                <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-brand-red/10">
                        <Icon className="w-6 h-6 text-brand-red" />
                      </div>
                      <CardTitle className="text-lg text-white">{card.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 leading-relaxed">{card.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">
            Services Available for {content.name} Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((svc, i) => (
              <Card key={i} className="bg-[#1a1a1a] border-[#333] text-[#e5e5e5] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{svc.title}</CardTitle>
                  <p className="text-brand-red font-bold text-xl mt-1">From {svc.price}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{svc.desc}</p>
                  <Link to={svc.link}>
                    <Button variant="outline" className="w-full bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING TO BESPOKE */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-8">
            {content.gettingTitle}
          </h2>
          <p className="text-white/70 leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            {content.gettingBody}
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl font-bold text-white text-center mb-12">
            {content.name} FAQ
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {content.faq.map((faq, i) => (
              <AccordionItem key={i} value={`${content.slug}-faq-${i}`} className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-brand-red text-left py-5 text-base font-medium">
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
            {content.finalCtaTitle}
          </h2>
          <p className="text-white/60 text-lg mb-8">{content.finalCtaNote}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setQuoteModalOpen(true)} className="bg-brand-red hover:bg-brand-red-dark text-[#1a1a1a] font-bold px-8 py-6 text-lg w-full sm:w-auto">
              Request a Consultation
            </Button>
            <a href="tel:+17863959172" onClick={() => trackPhoneClick(trackKey)}>
              <Button size="lg" variant="outline" className="bg-transparent border-brand-red/40 text-white hover:bg-brand-red hover:text-[#1a1a1a] hover:border-brand-red px-8 py-6 text-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> (786) 395-9172
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default ServiceAreaTemplate;