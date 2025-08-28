import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqData = [
  {
    question: "Why is Paint Protection Film essential for cars in Miami?",
    answer: "In Miami's intense UV environment and coastal conditions, XPEL PPF is crucial protection against salt air corrosion, bird droppings, tree sap, and road debris. Our Miami location specializes in protecting luxury vehicles from South Florida's unique challenges with premium XPEL films."
  },
  {
    question: "How does Miami's climate affect PPF and ceramic coating installation?",
    answer: "Miami's humidity and heat require specialized installation techniques. Our climate-controlled facility in Miami ensures optimal curing conditions for PPF and ceramic coatings, typically taking 2-5 days for complete installation and proper bonding."
  },
  {
    question: "What ceramic coating protection do Miami drivers need?",
    answer: "Miami's salt air, intense sun, and frequent rain make XPEL Ceramic Coatings essential. Our professional-grade coatings provide 2-5 years of protection against UV damage, salt corrosion, and water spots common in South Florida driving conditions."
  },
  {
    question: "Is ceramic window tint legal in Miami-Dade County?",
    answer: "Yes, XPEL ceramic tint meets Florida's legal requirements. In Miami, front side windows must allow 28% light transmission, while rear windows can be darker. Our ceramic tint provides maximum heat rejection - crucial for Miami's year-round heat."
  },
  {
    question: "Can PPF handle Miami's beach and highway driving conditions?",
    answer: "Absolutely. XPEL PPF is specifically designed for harsh environments like Miami's coastal roads. It protects against sand, salt spray from ocean driving, and road debris from I-95 and other busy Miami highways."
  },
  {
    question: "How do I maintain ceramic coating in Miami's humid climate?",
    answer: "In Miami's humidity, maintain ceramic coatings with bi-weekly washing using pH-neutral soap, avoid automatic car washes, and apply ceramic boosters every 6 months due to increased environmental stress from salt air and UV exposure."
  },
  {
    question: "What makes XPEL STEALTH PPF popular with Miami luxury car owners?",
    answer: "XPEL STEALTH PPF's matte finish is perfect for Miami's exotic car scene. It provides full paint protection while creating a unique satin appearance that stands out on Ocean Drive and throughout Miami's luxury automotive community."
  },
  {
    question: "How long does ceramic tint installation take in Miami?",
    answer: "Professional XPEL ceramic tint installation takes 2-4 hours at our Miami facility. We use climate-controlled conditions to ensure proper adhesion despite Miami's humidity, with 24-48 hour curing time for optimal performance."
  },
  {
    question: "Do you offer vinyl wraps for Miami's car customization scene?",
    answer: "Yes! Our Miami location specializes in premium vinyl wraps for South Florida's vibrant car culture. From color changes to custom designs, we use high-quality materials that withstand Miami's sun and salt air exposure."
  },
  {
    question: "What warranties do you provide for Miami customers?",
    answer: "We stand behind our work with comprehensive warranties: 10 years on XPEL PPF, 5 years on ceramic coatings, and lifetime warranty on ceramic tint installations - all backed by our local Miami service commitment."
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