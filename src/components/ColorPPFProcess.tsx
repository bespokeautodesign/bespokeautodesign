import { Badge } from '@/components/ui/badge';

const steps = [
  {
    step: "01",
    title: "Consultation & Color Selection",
    description: "We discuss your vision, review the 16 XPEL COLOR options, and help you choose the perfect shade and finish for your vehicle."
  },
  {
    step: "02",
    title: "Surface Preparation",
    description: "Your vehicle undergoes a thorough decontamination wash, clay bar treatment, and paint correction to ensure a flawless foundation."
  },
  {
    step: "03",
    title: "Precision Installation",
    description: "Our certified technicians apply XPEL COLOR PPF using computer-cut patterns specific to your vehicle, ensuring edge-to-edge coverage with zero gaps."
  },
  {
    step: "04",
    title: "Detail & Finishing",
    description: "Edges are tucked and sealed for a seamless, factory-quality appearance. Removed emblems and trim pieces are carefully reinstalled."
  },
  {
    step: "05",
    title: "Quality Inspection & Delivery",
    description: "A multi-point inspection ensures every panel meets our exacting standards. You'll receive care instructions and warranty documentation."
  }
];

export const ColorPPFProcess = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">OUR PROCESS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Selection to Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every XPEL COLOR PPF installation at Bespoke Auto Design follows a meticulous 5-step process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((item, index) => (
            <div key={index} className="flex gap-6 group">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-10">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
