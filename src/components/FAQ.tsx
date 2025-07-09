import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqData = [
  {
    question: "What is XPEL Paint Protection Film (PPF)?",
    answer: "XPEL PPF is a premium, virtually invisible urethane film that protects your vehicle's paint from rock chips, scratches, bug damage, and environmental contaminants. It features self-healing technology and comes with a 10-year warranty."
  },
  {
    question: "How long does PPF installation take?",
    answer: "Typical PPF installation takes 2-5 days depending on the coverage level (partial front end vs. full vehicle protection). We ensure precision cutting and proper curing time for optimal results."
  },
  {
    question: "How long does XPEL Ceramic Coating last?",
    answer: "XPEL Ceramic Coatings provide 2-5 years of protection depending on the product selected. Our professional-grade coatings offer superior durability, hydrophobic properties, and enhanced gloss."
  },
  {
    question: "Can PPF be removed without damaging the paint?",
    answer: "Yes, XPEL PPF can be safely removed by trained professionals without damaging the original paint. The film is designed to come off cleanly when proper removal techniques are used."
  },
  {
    question: "What is XPEL STEALTH Paint Protection Film?",
    answer: "XPEL STEALTH is a matte finish PPF that transforms your vehicle's appearance while providing the same protection as clear PPF. It creates a unique satin look that's becoming increasingly popular."
  },
  {
    question: "How do I maintain my XPEL Ceramic Coating?",
    answer: "Maintain your ceramic coating with regular washing using pH-neutral soap, avoid automatic car washes with brushes, and apply a ceramic booster every 6-12 months to extend the coating's life."
  },
  {
    question: "What's the difference between dyed, metallic, and ceramic window tint?",
    answer: "XPEL Ceramic Tint offers superior heat rejection, no signal interference, and doesn't fade like dyed films. It provides better clarity and performance compared to metallic or dyed alternatives."
  },
  {
    question: "How long does ceramic tint installation take?",
    answer: "Professional ceramic tint installation typically takes 2-4 hours for a standard vehicle. We ensure proper curing and precise installation for optimal performance and appearance."
  },
  {
    question: "Do you offer warranties on your services?",
    answer: "Yes! We provide comprehensive warranties: 10 years on XPEL PPF, 5 years on ceramic coatings, and lifetime warranty on XPEL ceramic tint installations."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
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
              <CardTitle className="text-2xl text-center">XPEL Protection Services FAQ</CardTitle>
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