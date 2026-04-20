import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const homeFaqData = [
  {
    question: "How much does ceramic coating cost in Miami?",
    answer: "At Bespoke Auto Design in Miami, ceramic coating starts at $599 for entry-level packages and ranges up to $1,500+ for multi-year XPEL Fusion Plus protection. Pricing depends on vehicle size, paint condition, and the coating tier you choose. All packages include thorough paint decontamination and machine polishing before application in our climate-controlled facility — critical for proper bonding in Miami's humidity."
  },
  {
    question: "What's the best PPF installer in Miami?",
    answer: "Bespoke Auto Design is Miami's premier XPEL Authorized Dealer with 7+ years of experience and 500+ vehicles protected. We're certified by XPEL — the industry's leading manufacturer — and specialize in luxury and exotic vehicles including Ferrari, Lamborghini, Rolls-Royce, and Bentley. All work is done in a climate-controlled facility and backed by up to a 10-year manufacturer warranty."
  },
  {
    question: "Does ceramic coating work in Miami's humidity and heat?",
    answer: "Yes — but only if applied correctly. Miami's high humidity makes climate-controlled application essential, because moisture during curing can ruin a ceramic coating's bond. Bespoke Auto Design uses a sealed, climate-controlled installation bay specifically to ensure flawless curing. Properly applied XPEL Fusion Plus ceramic coating actually thrives in Miami — repelling water, salt, UV, and bird droppings that destroy unprotected paint."
  },
  {
    question: "How long does PPF last in Florida?",
    answer: "Quality XPEL Paint Protection Film lasts 7-10 years in Florida when professionally installed and properly maintained. Miami's intense UV and heat are tough on lesser films, but XPEL's self-healing topcoat resists yellowing and degradation. Bespoke Auto Design's installations include a 10-year manufacturer warranty against yellowing, cracking, and peeling — the strongest in the industry."
  },
  {
    question: "Is ceramic coating or PPF better for Miami drivers?",
    answer: "For maximum protection, both. PPF is a thick urethane film that physically blocks rock chips, sand, and road debris — critical for Miami's highway driving and construction zones. Ceramic coating is a thin chemical layer that adds gloss, hydrophobic properties, and UV protection. Many of our luxury clients combine the two: PPF on high-impact areas (hood, fenders, mirrors) plus full-car ceramic coating on top."
  },
  {
    question: "What's the legal window tint percentage in Florida?",
    answer: "Florida law allows 28% VLT (visible light transmission) on front side windows and 15% VLT on rear side and back windows for sedans. SUVs and vans can have any darkness on rear windows. Bespoke Auto Design uses XPEL Prime XR Plus ceramic tint, which delivers up to 98% infrared heat rejection and 99% UV blocking — even at legal-friendly shades — making a real difference in Miami summers."
  },
  {
    question: "How much does it cost to wrap a car in Miami?",
    answer: "Color change wraps at Bespoke Auto Design start at $2,500 and range up to $7,500+ depending on the vehicle, film brand, and coverage. We use premium 3M, Avery Dennison, and KPMF films with hundreds of finishes including gloss, satin, matte, chrome, and color-shift. All wraps are removable and protect your factory paint underneath."
  },
  {
    question: "How long does PPF installation take?",
    answer: "Most full-front PPF installations take 1-2 days at Bespoke Auto Design, while full-body coverage takes 4-7 days. We never rush — proper paint decontamination, precision DAP-cut templates, and careful edge work are what separate a 10-year install from one that peels in 6 months. We're currently booking 1-2 weeks out for new installations."
  },
  {
    question: "Will PPF damage my car's paint when removed?",
    answer: "No — quality PPF is designed to remove cleanly without damaging factory paint. XPEL Ultimate Plus uses a removable adhesive that won't pull clear coat or leave residue when removed by a professional. In fact, PPF preserves your original paint underneath for years, often making the protected paint look better than unprotected sections at trade-in time."
  },
  {
    question: "Do you offer ceramic coating for boats and yachts in Miami?",
    answer: "Yes — Bespoke Auto Design specializes in marine ceramic coating, marine PPF, and marine window tint for boats and yachts in the Miami area. Saltwater, intense sun, and constant moisture destroy unprotected gel coat and paint. Our marine ceramic coatings provide hydrophobic protection, UV defense, and gloss enhancement that significantly extend the life of your vessel's finish."
  },
  {
    question: "What's included in your XPEL ceramic coating packages?",
    answer: "Every Bespoke Auto Design ceramic coating package includes thorough hand wash, full paint decontamination (clay bar + iron remover), multi-stage paint correction to remove existing swirls and scratches, panel-by-panel application of XPEL Fusion Plus ceramic, infrared curing, and a maintenance guide. Manufacturer warranties range from 5 years to lifetime depending on the package."
  },
  {
    question: "Where is Bespoke Auto Design located?",
    answer: "Bespoke Auto Design is located at 7943 NW 64th St, Miami, FL 33166 — easily accessible from Brickell, Coral Gables, Bal Harbour, Key Biscayne, Sunny Isles, Aventura, Miami Beach, and Coconut Grove. Our climate-controlled installation facility is purpose-built for flawless XPEL paint protection film, ceramic coating, and ceramic window tint installations. Call (786) 395-9172 or email sales@bespokeauto.design for a free quote."
  }
];

export const HomeFAQ = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-white/20 text-white/70">Frequently Asked Questions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Expert Answers</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get answers to the most common questions about PPF, ceramic coating, and ceramic tint services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {homeFaqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/60 rounded-lg px-5 shadow-premium"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
