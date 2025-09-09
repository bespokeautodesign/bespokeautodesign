import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const colorPpfFaqData = [
  {
    question: "What is XPEL COLOR PPF?",
    answer: "XPEL COLOR PPF is a paint protection film that not only safeguards your vehicle's paint from scratches, chips, and UV damage but also adds a stylish, custom color finish. It combines protection with personalization in one premium solution."
  },
  {
    question: "How is COLOR PPF different from traditional vinyl wrap?",
    answer: "Unlike vinyl, COLOR PPF is 60% thicker, self-healing, and offers superior protection against rock chips, swirl marks, and environmental contaminants. It is much more durable and resembles a factory-painted finish while providing actual protection."
  },
  {
    question: "Will COLOR PPF damage my original paint?",
    answer: "No. When professionally installed and removed, COLOR PPF does not damage the factory paint. In fact, it preserves the original finish and maintains your vehicle's resale value by protecting the underlying paint."
  },
  {
    question: "Can I choose from multiple colors or finishes?",
    answer: "Yes! Our XPEL COLOR range includes gloss, satin, and metallic finishes in 16 vibrant colors to match your style. From bold yellows to sophisticated blacks, there's a color for every preference."
  },
  {
    question: "How long does COLOR PPF last?",
    answer: "With proper care and routine maintenance, our high-quality COLOR PPF can last up to 10 years, maintaining both its color and protective properties throughout its lifespan."
  },
  {
    question: "Is it safe to wash my car normally after COLOR PPF installation?",
    answer: "Absolutely! You can wash your car as usual after an initial 72-hour curing period. Hand washing is recommended, but touchless car washes are also safe for COLOR PPF."
  },
  {
    question: "How do I maintain the COLOR PPF finish?",
    answer: "Routine washing, yearly inspections with your authorized installer, and sealing the finish with ceramic boost are key maintenance steps. Regular care ensures optimal appearance and longevity."
  },
  {
    question: "Is there a warranty on COLOR PPF?",
    answer: "Yes. We offer an industry-leading limited 10-year warranty that covers against yellowing, blistering, cracking, and delamination, giving you peace of mind with your investment."
  },
  {
    question: "Can COLOR PPF be ceramic coated?",
    answer: "Yes, we designed XPEL COLOR PPF to be compatible with our range of FUSION PLUS ceramic coatings and aftercare products for enhanced protection and easier maintenance."
  },
  {
    question: "Does my car have to be taken apart for COLOR PPF installation?",
    answer: "While removing minor components like emblems, door handles, and window trim can create a more seamless look, it is not required. Contact your local installer for specific details about your vehicle."
  },
  {
    question: "If I get into an accident, can I replace just one or two panels?",
    answer: "Yes, however, depending on climate, storage conditions, driving style, and maintenance, the new material may have a slightly different hue from the original material. Contact your installer for details."
  },
  {
    question: "Is my car a good fit for COLOR PPF?",
    answer: "Your authorized XPEL Dealer will assess your vehicle to determine if COLOR PPF is the right option. Your dealer can review coverage options, confirm your color choice, and outline the installation process."
  }
];

export const ColorPPFFAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">COLOR PPF FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Color PPF Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about XPEL COLOR paint protection film.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl text-center">XPEL COLOR PPF FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {colorPpfFaqData.map((faq, index) => (
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