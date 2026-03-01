// Simple structured data injection without external dependencies

export const addStructuredData = (schemaData: object) => {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design",
  "description": "Premium automotive protection services specializing in XPEL paint protection film, ceramic coating, and window tint installation in Miami, Florida.",
  "url": "https://www.bespokeauto.design",
  "telephone": "+1-786-395-9172",
  "email": "sales@bespokeauto.design",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7943 NW 64th St",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "postalCode": "33166",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.838912",
    "longitude": "-80.33659"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-16:00"
  ],
  "priceRange": "$$$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.838912",
      "longitude": "-80.33659"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive Protection Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paint Protection Film (PPF)",
          "description": "Professional XPEL paint protection film installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating",
          "description": "Advanced ceramic coating application for paint protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Window Tinting",
          "description": "Premium ceramic window tint installation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "40",
    "bestRating": "5",
    "worstRating": "1"
  },
  "image": "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
  "sameAs": [
    "https://www.instagram.com/bespokeautodesign/",
    "https://www.facebook.com/bespokeautodesign"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is paint protection film (PPF)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paint protection film (PPF) is a transparent, durable polyurethane film designed to protect a vehicle's paint from scratches, chips, stains, and environmental damage."
      }
    },
    {
      "@type": "Question",
      "name": "How long does PPF last in Miami's climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paint protection film typically lasts 5-10 years in Miami's climate. High-quality films like XPEL are specifically designed to withstand Florida's intense UV rays and humidity."
      }
    },
    {
      "@type": "Question",
      "name": "What does ceramic coating do for cars in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ceramic coating provides protection against UV rays, bird droppings, and road grime while making the surface hydrophobic. It's especially beneficial in Florida's harsh climate."
      }
    }
  ]
};