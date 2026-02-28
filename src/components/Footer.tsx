import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { trackPhoneCall } from "@/utils/gadsConversions";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/bespoke-logo.png" alt="Bespoke Auto Design Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold">
                <span className="text-silver">Bespoke</span> Auto Design
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Miami's premier automotive protection and customization studio. XPEL authorized dealer offering PPF, ceramic coating, vinyl wraps, and ceramic tint.
            </p>
          </div>

          {/* NAP — Name, Address, Phone */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <address className="not-italic">
                7943 NW 64th St<br />Miami, FL 33166
              </address>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <a href="tel:+17863959172" onClick={() => trackPhoneCall()} className="hover:text-primary-foreground transition-colors">(786) 395-9172</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a href="mailto:sales@bespokeauto.design" className="hover:text-primary-foreground transition-colors">sales@bespokeauto.design</a>
            </div>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Mon–Fri 9 AM–6 PM · Sat 10 AM–4 PM</span>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <nav aria-label="Footer services navigation">
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link to="/paint-protection-film" className="hover:text-primary-foreground transition-colors">Paint Protection Film (PPF)</Link></li>
                <li><Link to="/stealth-ppf" className="hover:text-primary-foreground transition-colors">Stealth PPF</Link></li>
                <li><Link to="/colorppf" className="hover:text-primary-foreground transition-colors">XPEL Color PPF</Link></li>
                <li><Link to="/ceramic-coating" className="hover:text-primary-foreground transition-colors">Ceramic Coating</Link></li>
                <li><Link to="/ceramic-tint" className="hover:text-primary-foreground transition-colors">Ceramic Window Tint</Link></li>
                <li><Link to="/color-change-wrap" className="hover:text-primary-foreground transition-colors">Color Change Wraps</Link></li>
                <li><Link to="/marine" className="hover:text-primary-foreground transition-colors">Marine Services</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Bespoke Auto Design. All rights reserved.</p>
          <p className="mt-2 md:mt-0">XPEL Authorized Dealer · Professional Installation · Lifetime Support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
