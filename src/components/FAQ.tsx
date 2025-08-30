import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqData = [
  {
    question: "What warranties do you offer for PPF, ceramic coatings, and ceramic tints?",
    answer: "We provide comprehensive warranties backed by XPEL's industry-leading protection. PPF installations include a 10-year manufacturer warranty against yellowing, cracking, and peeling. Ceramic coatings come with a 2-5 year warranty depending on the product tier. Ceramic tint installations include a lifetime warranty against fading, bubbling, and delamination. All warranties are transferable and include our craftsmanship guarantee."
  },
  {
    question: "Does PPF protect against Miami's intense sun and UV rays?",
    answer: "Yes, XPEL PPF provides superior UV protection crucial for Miami's climate. Our premium films block 99% of harmful UV rays, preventing paint fading and oxidation common in South Florida's year-round sunshine. Miami's intense UV index makes PPF essential for maintaining your vehicle's appearance and resale value."
  },
  {
    question: "What's the cost of PPF installation in Miami?",
    answer: "PPF costs in Miami vary based on coverage area and vehicle size. Partial front-end protection typically ranges from $1,500-$3,000, while full-vehicle XPEL PPF installation ranges from $4,000-$8,000. Our Miami location offers competitive pricing with premium installation quality and comprehensive warranties."
  },
  {
    question: "Can PPF prevent rock chips on I-95 and Miami highways?",
    answer: "Absolutely. XPEL PPF is specifically engineered to absorb impact from road debris common on I-95, the Palmetto Expressway, and Miami's busy highways. The self-healing technology repairs minor scratches from highway driving, keeping your vehicle protected during daily South Florida commutes."
  },
  {
    question: "How long does ceramic coating last in Miami's climate?",
    answer: "In Miami's harsh environment, professional-grade XPEL ceramic coatings last 2-5 years with proper maintenance. Miami's salt air, UV exposure, and humidity can reduce coating life, but our premium formulations are specifically designed to withstand South Florida's challenging conditions longer than standard coatings."
  },
  {
    question: "Do ceramic coatings work against Miami's environmental contaminants?",
    answer: "Yes, XPEL ceramic coatings excel against Miami-specific contaminants including salt air, bird droppings, tree sap, and water spots. The hydrophobic surface repels contaminants and makes cleaning easier, essential for vehicles exposed to Miami Beach salt spray and urban pollution."
  },
  {
    question: "What are Florida's legal tint limits for front and rear windows?",
    answer: "Florida law requires front side windows to allow at least 28% light transmission (VLT), while rear windows and back glass can be darker. Our XPEL ceramic tint meets all Florida legal requirements while providing maximum heat rejection - crucial for Miami's year-round heat."
  },
  {
    question: "What's the difference between ceramic and regular tint in Florida?",
    answer: "Ceramic tint offers superior heat rejection (up to 80% vs 50% for regular film), blocks 99% of UV rays, and doesn't interfere with electronics - essential for Miami's intense sun. While more expensive, ceramic tint provides better comfort and protection for Florida's extreme climate conditions."
  },
  {
    question: "Can ceramic tint reduce heat in Florida's climate?",
    answer: "Yes, XPEL ceramic tint dramatically reduces heat in Florida's climate, providing up to 98% heat rejection. This translates to significantly cooler interiors in Miami's 90°F+ temperatures, reduced AC usage, and improved fuel efficiency - making it essential for South Florida driving comfort."
  },
  {
    question: "What's the difference between vinyl wrap and PPF protection?",
    answer: "Vinyl wraps are primarily cosmetic with minimal protection (2-5 year lifespan), while XPEL PPF provides superior paint protection against rock chips, scratches, and UV damage (10-year warranty). PPF is thicker, self-healing, and designed for protection, whereas vinyl focuses on appearance customization."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Frequently Asked Questions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Answers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about XPEL protection services, installation, and maintenance.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-center">FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};