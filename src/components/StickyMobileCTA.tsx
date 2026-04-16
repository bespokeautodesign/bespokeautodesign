import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";
import { trackPhoneCall } from "@/utils/gadsConversions";
import { trackPhoneClick, trackQuoteButton } from "@/lib/analytics";
import { useState } from "react";

export const StickyMobileCTA = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 py-3 flex gap-3"
           style={{ backgroundColor: '#1a1a1a', boxShadow: '0 -2px 10px rgba(0,0,0,0.3)' }}>
        <Button variant="premium" className="flex-1 text-sm font-semibold" onClick={() => { trackQuoteButton('sticky_cta'); setQuoteOpen(true); }}>
          Get Free Quote
        </Button>
        <Button className="flex-1 text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-white border-0" asChild>
          <a href="tel:+17863959172" onClick={() => { trackPhoneCall(); trackPhoneClick('sticky_cta'); }}>
            <Phone className="h-4 w-4 mr-1" /> Call Now
          </a>
        </Button>
      </div>
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};
