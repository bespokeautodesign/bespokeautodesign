import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const marineFaqData = [
  // Marine PPF Section
  {
    question: "Can XPEL paint protection film be applied to marine vessels?",
    answer: "Yes, XPEL paint protection film can be applied to boats and marine vessels to protect gel coat and painted surfaces from saltwater, UV rays, and harsh marine conditions. It provides excellent protection against impact damage and environmental wear."
  },
  {
    question: "How does PPF perform in marine environments?",
    answer: "PPF performs exceptionally well in marine environments, providing robust protection against scratches, chips, and debris commonly encountered on the water. The film's UV resistance and saltwater compatibility make it ideal for marine applications."
  },
  {
    question: "Does marine PPF protect against saltwater damage?",
    answer: "Yes, high-quality PPF like XPEL provides excellent protection against saltwater corrosion and damage. The film acts as a barrier between your vessel's surface and the harsh marine environment, preventing oxidation and maintaining the finish."
  },
  {
    question: "How long does marine PPF last?",
    answer: "Marine PPF typically lasts 5-10 years depending on environmental conditions and maintenance. The harsh marine environment may affect longevity, but proper care and regular maintenance can extend the film's protective life."
  },

  // Marine Ceramic Coating Section
  {
    question: "Is ceramic coating worth it for boats?",
    answer: "Yes, ceramic coating a boat is worth it as it provides superior protection against harsh marine environments, preventing oxidation, corrosion, and fading. Additionally, it enhances the vessel's longevity by creating a durable, hydrophobic surface that makes maintenance easier."
  },
  {
    question: "Can you put ceramic coating on fiberglass?",
    answer: "Yes, ceramic coating can be applied to fiberglass surfaces, providing excellent compatibility and protection. It enhances the fiberglass's durability, offering a glossy finish that resists oxidation, UV damage, and staining, while making cleaning and maintenance much easier."
  },
  {
    question: "How long does ceramic coating last on a boat?",
    answer: "Typically, ceramic coating on a boat can last 2-5 years, depending on the quality of the product and environmental conditions. Factors such as maintenance, exposure to harsh marine elements, and frequency of use can influence its longevity."
  },
  {
    question: "Does marine ceramic coating help with maintenance?",
    answer: "Yes, marine ceramic coating significantly reduces maintenance by creating a hydrophobic surface that repels water, salt, and contaminants. This makes cleaning easier and helps prevent staining and oxidation from marine environments."
  },

  // Marine Ceramic Tint Section
  {
    question: "What is the best window film for boats?",
    answer: "The best window film for boats is XPEL marine window film, designed to offer exceptional UV protection, durability, and clarity specifically for marine environments. Its advanced technology ensures long-lasting performance while maintaining crystal-clear views on the water."
  },
  {
    question: "Does marine window film reduce heat and glare?",
    answer: "Yes, marine window film effectively reduces heat and blocks harmful UV rays, significantly enhancing comfort and protection for marine vessels. XPEL marine window film is specially crafted to withstand marine conditions while keeping your boat cooler."
  },
  {
    question: "How do I choose good marine window film?",
    answer: "When choosing marine window film, prioritize options that offer robust UV protection, high durability, and clear visibility tailored for marine environments. XPEL marine window film stands out for its advanced features designed to withstand harsh marine conditions."
  },
  {
    question: "Is marine window film different from automotive film?",
    answer: "Yes, marine window film is specifically designed to withstand the unique challenges of marine environments, including saltwater exposure, intense UV rays, and constant moisture. Marine-grade films offer enhanced durability and corrosion resistance compared to standard automotive films."
  }
];

export const MarineFAQ = () => {
  return (
    <section className="py-20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Marine Protection FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Marine Services Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about our specialized marine protection services for boats, yachts, and watercraft.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Marine Protection FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {marineFaqData.map((faq, index) => (
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