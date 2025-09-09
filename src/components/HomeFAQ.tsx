import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const homeFaqData = [
  // PPF Section
  {
    question: "What is paint protection film (PPF)?",
    answer: "Paint protection film (PPF) is a transparent, durable polyurethane film designed to protect a vehicle's paint from scratches, chips, stains, and environmental damage. PPF maintains the car's aesthetic appeal while providing long-lasting protection against everyday wear and tear."
  },
  {
    question: "How long does PPF last?",
    answer: "Paint protection film (PPF) typically lasts between 5 to 10 years, depending on factors such as the quality of the film, installation techniques, and environmental conditions. High-quality films like XPEL offer durable protection and are backed by substantial warranties."
  },
  {
    question: "Does PPF protect against rock chips?",
    answer: "Yes, paint protection film (PPF) effectively protects against rock chips by creating a durable, transparent barrier over your vehicle's paint. This protective layer absorbs the impact of rocks and debris, preventing damage and maintaining the pristine appearance of your car's exterior."
  },
  {
    question: "Will removing PPF harm my vehicle's paint?",
    answer: "No, removing paint protection film (PPF) will not harm your vehicle's paint when done correctly. High-quality films like XPEL are designed to be safely removed, leaving the original paint intact and free from residue."
  },
  
  // Ceramic Coating Section
  {
    question: "What does ceramic coating do for a car?",
    answer: "Ceramic coating provides a protective shield against environmental damage like UV rays, bird droppings, and road grime. It also reduces the need for frequent washing by making the surface hydrophobic and dirt-resistant, while enhancing the vehicle's gloss and shine."
  },
  {
    question: "Does ceramic coating protect paint?",
    answer: "Yes, ceramic coating offers a protective barrier that helps prevent paint from fading, oxidizing, and being damaged by contaminants. It also makes the paint more resilient to minor scratches and swirl marks while providing long-lasting protection."
  },
  {
    question: "How long does ceramic coating last?",
    answer: "Ceramic coating typically lasts 2-5 years depending on the quality of the product, environmental conditions, and maintenance. Professional-grade coatings like XPEL's Fusion Plus are designed to withstand harsh conditions and provide extended protection."
  },
  {
    question: "Can you apply ceramic coating over PPF?",
    answer: "Yes, ceramic coating can be applied over paint protection film for enhanced protection and easier maintenance. XPEL COLOR PPF and other XPEL films are specifically designed to be compatible with ceramic coatings for optimal performance."
  },

  // Ceramic Tint Section
  {
    question: "What is ceramic window tint?",
    answer: "Ceramic window tint is a premium film that uses nano-ceramic technology to block heat, UV rays, and infrared light without compromising visibility. It offers superior performance compared to traditional tint films, providing advanced protection and comfort."
  },
  {
    question: "Does window film reduce heat in a car?",
    answer: "Yes, XPEL's ceramic window films are engineered to reduce heat by blocking infrared and UV rays. Ceramic films offer superior heat rejection, keeping your car cooler and more comfortable while reducing air conditioning usage."
  },
  {
    question: "How long does window film last?",
    answer: "XPEL automotive window films are designed to be durable and long-lasting, with an average lifespan of 5 to 10 years depending on the film type and installation quality. Proper care and maintenance can extend the life of the film."
  },
  {
    question: "What is the warranty for XPEL's automotive window film?",
    answer: "XPEL automotive window films come with a lifetime warranty, covering issues like peeling, cracking, fading, and discoloration. This ensures that your investment in window film is protected for the long term."
  }
];

export const HomeFAQ = () => {
  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Frequently Asked Questions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Answers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about PPF, ceramic coating, and ceramic tint services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Protection Services FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {homeFaqData.map((faq, index) => (
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