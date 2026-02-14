import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const COOKIE_KEY = "bespoke_cookie_consent";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent === "accepted" && window.gtag) {
      window.gtag("config", "AW-11469882843", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
