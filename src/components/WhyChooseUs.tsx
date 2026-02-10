import { Shield, Award, Car, Clock, CheckCircle, Thermometer, Zap, Droplets, Sun, Eye, Sparkles, Palette, Paintbrush, Layers, Anchor, Waves } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

export interface ServiceDifferentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

const defaultDifferentiators: ServiceDifferentiator[] = [
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

// Service-specific differentiator presets
export const ppfDifferentiators: ServiceDifferentiator[] = [
  { icon: Shield, title: "XPEL Certified Installers", description: "Factory-trained technicians with 500+ PPF installations completed — precision-cut using XPEL's DAP templates for seamless edge-to-edge coverage." },
  { icon: Zap, title: "Self-Healing Film Technology", description: "XPEL Ultimate Plus™ features an elastomeric top coat that eliminates scratches with heat. In Miami's sun, blemishes disappear in minutes." },
  { icon: CheckCircle, title: "10-Year XPEL Warranty", description: "Every PPF installation is backed by XPEL's comprehensive 10-year manufacturer warranty against yellowing, cracking, peeling, and delamination." },
  { icon: Car, title: "Exotic & Luxury Specialists", description: "We specialize in high-value vehicles — Ferrari, Lamborghini, Porsche, McLaren, Rolls-Royce — where flawless installation is non-negotiable." },
];

export const ceramicDifferentiators: ServiceDifferentiator[] = [
  { icon: Shield, title: "XPEL Authorized Dealer", description: "We exclusively install XPEL Fusion Plus™ — a professional-grade nano-ceramic coating not available in consumer products, with higher SiO₂ concentrations for superior performance." },
  { icon: Sparkles, title: "Multi-Stage Paint Correction", description: "Every ceramic coating begins with meticulous paint correction — removing swirl marks, scratches, and oxidation so the coating locks in a flawless, mirror-like finish." },
  { icon: CheckCircle, title: "5-Year Coating Warranty", description: "XPEL Fusion Plus comes with a 5-year manufacturer warranty and annual maintenance inspections to ensure your coating performs at its peak." },
  { icon: Thermometer, title: "Climate-Controlled Curing", description: "Proper curing is critical. Our facility maintains ideal temperature and humidity for ceramic bonding — something outdoor or garage-based installers simply can't replicate." },
];

export const tintDifferentiators: ServiceDifferentiator[] = [
  { icon: Sun, title: "99% UV + 98% IR Rejection", description: "XPEL XR Plus blocks over 99% of harmful UV rays and rejects up to 98% of infrared heat — the highest performance ratings in the ceramic tint category." },
  { icon: Eye, title: "Crystal-Clear Optical Clarity", description: "No haze, no purple fading, no distortion. XR Plus maintains perfect visibility day and night — even in lighter shades that maximize heat rejection." },
  { icon: CheckCircle, title: "Lifetime Tint Warranty", description: "XPEL XR Plus comes with a lifetime manufacturer warranty against fading, bubbling, peeling, and cracking. One installation, permanent protection." },
  { icon: Award, title: "Skin Cancer Foundation Recommended", description: "XR Plus is officially recommended by The Skin Cancer Foundation as an effective UV protectant — science-backed health protection for every drive." },
];

export const wrapDifferentiators: ServiceDifferentiator[] = [
  { icon: Palette, title: "Premium Film Only", description: "We source exclusively from 3M, Avery Dennison, and KPMF — the three most trusted names in cast vinyl. No budget films, no shortcuts, no exceptions." },
  { icon: Car, title: "Exotic Vehicle Expertise", description: "Complex body lines on supercars and luxury vehicles demand advanced technique. Our 7+ years of experience means confident, flawless installations on even the most aggressive curves." },
  { icon: Clock, title: "3–5 Day Turnaround", description: "A full color change wrap is completed in 3–5 days — significantly faster than a quality respray, with less downtime and a fully reversible result." },
  { icon: Layers, title: "Warranty-Backed Craftsmanship", description: "Every wrap includes a manufacturer warranty on film plus our installation warranty against peeling, lifting, and edge failure." },
];

export const stealthDifferentiators: ServiceDifferentiator[] = [
  { icon: Paintbrush, title: "Satin Finish Specialists", description: "We've wrapped hundreds of vehicles in XPEL Stealth — from gloss-to-satin conversions to factory matte preservation. Precision is everything with matte film." },
  { icon: Zap, title: "Self-Healing Matte Technology", description: "XPEL Stealth's satin top coat heals scratches just like clear PPF — keeping your matte finish pristine without the impossible task of buffing matte paint." },
  { icon: CheckCircle, title: "10-Year XPEL Warranty", description: "Stealth carries the same comprehensive 10-year manufacturer warranty as Ultimate Plus™ — against yellowing, cracking, peeling, and texture degradation." },
  { icon: Car, title: "Factory Matte Paint Experts", description: "BMW Frozen, Mercedes Magno, Porsche Chalk — we protect factory matte finishes that can't be polished or repaired. Stealth PPF is the only solution." },
];

export const marinePPFDifferentiators: ServiceDifferentiator[] = [
  { icon: Anchor, title: "Marine-Grade XPEL Film", description: "We use XPEL paint protection film engineered to withstand constant saltwater exposure, dock abrasion, and harsh UV — protecting gel coat and painted marine surfaces." },
  { icon: Shield, title: "XPEL Certified Installers", description: "Our factory-trained technicians bring 7+ years of precision installation experience to every vessel — from center consoles to superyachts." },
  { icon: Waves, title: "Built for Miami Waters", description: "Salt spray, tropical UV, and constant moisture demand specialized protection. We understand South Florida's marine environment inside and out." },
  { icon: CheckCircle, title: "Impact & Abrasion Defense", description: "Marine PPF shields against dock rash, fender contact, anchor chain marks, and waterline debris — preserving your hull's finish and resale value." },
];

export const marineCeramicDifferentiators: ServiceDifferentiator[] = [
  { icon: Droplets, title: "Saltwater-Resistant Coating", description: "XPEL Fusion Plus™ creates a hydrophobic barrier that repels salt, minerals, and marine contaminants — dramatically reducing corrosion and staining on gel coat." },
  { icon: Anchor, title: "Marine Application Experts", description: "Coating a boat isn't like coating a car. We understand marine surfaces — gel coat, fiberglass, painted hulls — and the prep required for lasting adhesion." },
  { icon: CheckCircle, title: "5-Year Marine Warranty", description: "Professional-grade ceramic coating backed by a 5-year warranty. Annual maintenance inspections keep your vessel's coating performing at its peak." },
  { icon: Sun, title: "UV & Oxidation Shield", description: "Miami's relentless sun oxidizes marine surfaces fast. Ceramic coating blocks UV degradation, keeping gel coat and paint vibrant season after season." },
];

export const marineTintDifferentiators: ServiceDifferentiator[] = [
  { icon: Sun, title: "99% UV Rejection on the Water", description: "XPEL XR Plus blocks over 99% of harmful UV rays — critical for captains and passengers spending extended hours on open water under Miami's intense sun." },
  { icon: Eye, title: "Glare Reduction Without Distortion", description: "Nano-ceramic technology cuts blinding water glare while maintaining crystal-clear visibility — essential for safe navigation and spotting markers." },
  { icon: CheckCircle, title: "Lifetime Marine Tint Warranty", description: "XPEL XR Plus comes with a lifetime warranty against fading, bubbling, and peeling — even in the harsh saltwater marine environment." },
  { icon: Anchor, title: "Zero Electronic Interference", description: "Metal-free ceramic film won't interfere with GPS, radar, VHF, depth finders, or any marine electronics. Full protection with zero compromise." },
];

interface WhyChooseUsProps {
  variant?: 'homepage' | 'service';
  differentiators?: ServiceDifferentiator[];
  title?: string;
}

export const WhyChooseUs = ({ variant = 'homepage', differentiators, title }: WhyChooseUsProps) => {
  if (variant === 'service') {
    const items = differentiators || defaultDifferentiators;
    return (
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="secondary" className="mb-3 bg-xpel-yellow text-primary">WHY BESPOKE</Badge>
              <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                {title || "Why Choose Bespoke Auto Design"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 items-start bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5">
                  <div className="w-10 h-10 bg-xpel-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-xpel-yellow" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-primary-foreground/60 leading-relaxed">{item.description}</p>
                  </div>
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
          {defaultDifferentiators.map((item, index) => (
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
