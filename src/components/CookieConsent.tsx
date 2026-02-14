import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "bespoke_cookie_consent";

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored as "accepted" | "declined" | null;
  });

  return consent;
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
    if (choice === "accepted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] animate-in slide-in-from-bottom-4 fade-in duration-700">
      <div className="relative bg-foreground text-background rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-5 max-w-sm">
        {/* Close / Decline */}
        <button
          onClick={() => handleChoice("declined")}
          className="absolute top-3 right-3 text-background/40 hover:text-background/80 transition-colors"
          aria-label="Decline cookies"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-[hsl(var(--xpel-yellow))] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium mb-1">We value your privacy</p>
            <p className="text-xs text-background/60 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience and analyze traffic.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleChoice("declined")}
                className="text-xs text-background/50 hover:text-background/80 transition-colors py-1.5 px-3"
              >
                Decline
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="text-xs font-semibold bg-[hsl(var(--xpel-yellow))] text-foreground py-1.5 px-5 rounded-full hover:brightness-110 transition-all"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
