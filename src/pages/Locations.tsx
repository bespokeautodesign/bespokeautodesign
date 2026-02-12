import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { addStructuredData } from "@/utils/seoHelpers";

const CONFIGURATION = {
  locations: [
    {
      title: "Bespoke Auto Design",
      address1: "7943 NW 64th St",
      address2: "Miami, FL, United States",
      coords: { lat: 25.8320086, lng: -80.326452 },
      placeId: "ChIJP8iFysu72YgRXIwYjMCWrEQ",
    },
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: "",
  },
  mapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  capabilities: {
    input: true,
    autocomplete: true,
    directions: true,
    distanceMatrix: true,
    details: true,
    actions: false,
  },
};

const Locations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    document.title = "Find Us | Bespoke Auto Design - Miami, FL";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Visit Bespoke Auto Design at 7943 NW 64th St, Miami, FL 33166. Premium PPF, ceramic coating, vinyl wraps & ceramic tint. Call (786) 395-9172."
      );
    }

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      name: "Bespoke Auto Design",
      image: "https://bespokeautodesign.com/bespoke-logo.png",
      telephone: "+1-786-395-9172",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7943 NW 64th St",
        addressLocality: "Miami",
        addressRegion: "FL",
        postalCode: "33166",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.8320086,
        longitude: -80.326452,
      },
      url: "https://bespokeautodesign.com/locations",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
    });
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Load the Extended Component Library script
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js";
    document.head.appendChild(script);

    script.onload = () => {
      if (!containerRef.current) return;

      // Create API loader
      const apiLoader = document.createElement("gmpx-api-loader");
      apiLoader.setAttribute("key", CONFIGURATION.mapsApiKey);
      apiLoader.setAttribute(
        "solution-channel",
        "GMP_QB_locatorplus_v11_cABCDE"
      );
      containerRef.current.appendChild(apiLoader);

      // Create store locator
      const locator = document.createElement("gmpx-store-locator");
      locator.setAttribute("map-id", "DEMO_MAP_ID");
      containerRef.current.appendChild(locator);

      // Configure once the custom element is defined
      customElements.whenDefined("gmpx-store-locator").then(() => {
        (locator as any).configureFromQuickBuilder(CONFIGURATION);
      });
    };

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div
        ref={containerRef}
        className="w-full"
        style={{ height: "calc(100vh - 64px)" }}
      />
      <style>{`
        gmpx-store-locator {
          width: 100%;
          height: 100%;
          --gmpx-color-surface: #fff;
          --gmpx-color-on-surface: #212121;
          --gmpx-color-on-surface-variant: #757575;
          --gmpx-color-primary: #1a1a1a;
          --gmpx-color-outline: #e0e0e0;
          --gmpx-fixed-panel-width-row-layout: 28.5em;
          --gmpx-fixed-panel-height-column-layout: 65%;
          --gmpx-font-family-base: "Roboto", sans-serif;
          --gmpx-font-family-headings: "Roboto", sans-serif;
          --gmpx-font-size-base: 0.875rem;
          --gmpx-hours-color-open: #188038;
          --gmpx-hours-color-closed: #d50000;
          --gmpx-rating-color: #ffb300;
          --gmpx-rating-color-empty: #e0e0e0;
        }
      `}</style>
    </div>
  );
};

export default Locations;
