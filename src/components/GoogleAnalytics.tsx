import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-11469882843", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
