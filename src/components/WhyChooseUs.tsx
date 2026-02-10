import { Shield, Award, Car, Clock, CheckCircle, Thermometer } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const differentiators = [
  {
    icon: Shield,
    title: "XPEL Authorized Dealer",
    description: "We carry the full XPEL product line — Ultimate Plus™ PPF, Fusion Plus™ Ceramic Coating, and Prime XR Plus™ Ceramic Tint — backed by the world's most trusted automotive protection brand."
  },
  {
    icon: Award,
    title: "XPEL Certified Installers",
    description: "Every installation is performed by factory-trained, XPEL-certified technicians who meet the highest standards for precision, technique, and quality control."
  },
  {
    icon: Car,
    title: "Exotic & Luxury Specialists",
    description: "From Ferraris and Lamborghinis to Rolls-Royces and Bentleys — we specialize in high-value vehicles that demand the highest level of care and craftsmanship."
  },
  {
    icon: Clock,
    title: "7+ Years of Excellence",
    description: "With over seven years of hands-on experience and 500+ vehicles protected, we've built a reputation that Miami's most discerning car owners trust."
  },
  {
    icon: Thermometer,
    title: "Climate-Controlled Facility",
    description: "Our purpose-built installation bay maintains optimal temperature and humidity levels — critical for flawless film adhesion and curing in Miami's tropical climate."
  },
  {
    icon: CheckCircle,
    title: "Industry-Leading Warranties",
    description: "10-year warranty on PPF, 5-year warranty on ceramic coatings, and lifetime warranty on ceramic tints. Your investment is protected for the long haul."
  }
];

interface WhyChooseUsProps {
  variant?: 'homepage' | 'service';
}

export const WhyChooseUs = ({ variant = 'homepage' }: WhyChooseUsProps) => {
  if (variant === 'service') {
    return (
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-3">WHY BESPOKE</Badge>
              <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                Miami's Most Trusted Auto Boutique
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Homepage variant — high-impact
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(0 0% 100% / 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(0 0% 100% / 0.08) 0%, transparent 50%)'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-xpel-yellow text-primary">
            Why Choose Bespoke
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
            The Bespoke Difference
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-3xl mx-auto">
            When you trust us with your vehicle, you're choosing Miami's premier XPEL-certified installation facility — where precision, expertise, and uncompromising quality come standard.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-primary-foreground/10">
          {[
            { value: "500+", label: "Vehicles Protected" },
            { value: "7+", label: "Years Experience" },
            { value: "10yr", label: "PPF Warranty" },
            { value: "Lifetime", label: "Tint Warranty" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-xpel-yellow font-playfair">{stat.value}</div>
              <div className="text-sm text-primary-foreground/60 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Differentiator cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-xpel-yellow/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-xpel-yellow/20 transition-colors">
                <item.icon className="h-6 w-6 text-xpel-yellow" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
