import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
    if (choice === "accepted") {
      // Load gtag now
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            We use cookies to analyze site traffic and improve your experience. By clicking "Accept," you consent to our use of cookies.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleChoice("declined")}
              className="text-xs"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={() => handleChoice("accepted")}
              className="bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
