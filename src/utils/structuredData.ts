// Structured data generators for SEO

export const generateBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design",
  "description": "Premium automotive protection services specializing in XPEL paint protection film, ceramic coating, and window tint installation in Miami, Florida.",
  "url": "https://bespokeautodesign.com",
  "logo": "https://bespokeautodesign.com/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png",
  "image": "https://bespokeautodesign.com/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png",
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
  "servesCuisine": [],
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
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
});

export const generateServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "AutomotiveBusiness",
    "name": "Bespoke Auto Design",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7943 NW 64th St",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33166",
      "addressCountry": "US"
    },
    "telephone": "+1-786-395-9172"
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida"
  },
  "serviceType": "Automotive Protection",
  "category": "Automotive Services",
  ...(price && { "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "USD"
  }})
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "AutomotiveBusiness",
    "name": "Bespoke Auto Design"
  },
  "author": {
    "@type": "Person",
    "name": reviews[0]?.author || "Customer"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviews[0]?.rating || 5,
    "bestRating": 5,
    "worstRating": 1
  },
  "reviewBody": reviews[0]?.text || "Excellent service and professional installation.",
  "datePublished": reviews[0]?.date || new Date().toISOString()
});