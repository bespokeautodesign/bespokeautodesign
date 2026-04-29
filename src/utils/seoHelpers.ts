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

const areaServed = [
  { "@type": "City", "name": "Miami" },
  { "@type": "City", "name": "Brickell" },
  { "@type": "City", "name": "Coral Gables" },
  { "@type": "City", "name": "Bal Harbour" },
  { "@type": "City", "name": "Key Biscayne" },
  { "@type": "City", "name": "Sunny Isles" },
  { "@type": "City", "name": "Coconut Grove" },
  { "@type": "City", "name": "Aventura" },
  { "@type": "City", "name": "Miami Beach" },
  { "@type": "City", "name": "South Miami" },
  { "@type": "City", "name": "Doral" },
  { "@type": "City", "name": "Pinecrest" }
];

export const providerSchema = {
  "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design",
  "address": { "@type": "PostalAddress", "streetAddress": "7943 NW 64th St", "addressLocality": "Miami", "addressRegion": "FL", "postalCode": "33166", "addressCountry": "US" },
  "telephone": "+1-786-395-9172",
  "geo": { "@type": "GeoCoordinates", "latitude": "25.823", "longitude": "-80.318" },
  // Update reviewCount manually when crossing review-count milestones — Google indexes this for rich snippets
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "45", "bestRating": "5", "worstRating": "1" }
};

export { areaServed };

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Bespoke Auto Design",
  "description": "Premium automotive protection services specializing in XPEL paint protection film, ceramic coating, and window tint installation in Miami, Florida.",
  "url": "https://www.bespokeauto.design",
  "telephone": "+1-786-395-9172",
  "email": "sales@bespokeauto.design",
  "slogan": "Miami's Premier XPEL-Certified Auto Protection Studio",
  "priceRange": "$$$",
  "founder": { "@type": "Person", "name": "Alessandro" },
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
    "latitude": "25.823",
    "longitude": "-80.318"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "16:00" }
  ],
  areaServed,
  "knowsAbout": [
    "Paint Protection Film", "PPF Installation", "Ceramic Coating", "XPEL",
    "Ceramic Window Tint", "Color Change Wrap", "Vehicle Wrap",
    "Automotive Detailing", "Marine Ceramic Coating"
  ],
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
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  },
  "image": "https://www.bespokeauto.design/bespoke-logo.png",
  "sameAs": [
    "https://www.instagram.com/bespokeautodesign/",
    "https://www.facebook.com/bespokeautodesign"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does ceramic coating cost in Miami?", "acceptedAnswer": { "@type": "Answer", "text": "At Bespoke Auto Design in Miami, ceramic coating starts at $599 for entry-level packages and ranges up to $1,500+ for multi-year XPEL Fusion Plus protection. Pricing depends on vehicle size, paint condition, and the coating tier you choose. All packages include thorough paint decontamination and machine polishing before application in our climate-controlled facility — critical for proper bonding in Miami's humidity." } },
    { "@type": "Question", "name": "What's the best PPF installer in Miami?", "acceptedAnswer": { "@type": "Answer", "text": "Bespoke Auto Design is Miami's premier XPEL Authorized Dealer with 7+ years of experience and 500+ vehicles protected. We're certified by XPEL — the industry's leading manufacturer — and specialize in luxury and exotic vehicles including Ferrari, Lamborghini, Rolls-Royce, and Bentley. All work is done in a climate-controlled facility and backed by up to a 10-year manufacturer warranty." } },
    { "@type": "Question", "name": "Does ceramic coating work in Miami's humidity and heat?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — but only if applied correctly. Miami's high humidity makes climate-controlled application essential, because moisture during curing can ruin a ceramic coating's bond. Bespoke Auto Design uses a sealed, climate-controlled installation bay specifically to ensure flawless curing. Properly applied XPEL Fusion Plus ceramic coating actually thrives in Miami — repelling water, salt, UV, and bird droppings that destroy unprotected paint." } },
    { "@type": "Question", "name": "How long does PPF last in Florida?", "acceptedAnswer": { "@type": "Answer", "text": "Quality XPEL Paint Protection Film lasts 7-10 years in Florida when professionally installed and properly maintained. Miami's intense UV and heat are tough on lesser films, but XPEL's self-healing topcoat resists yellowing and degradation. Bespoke Auto Design's installations include a 10-year manufacturer warranty against yellowing, cracking, and peeling — the strongest in the industry." } },
    { "@type": "Question", "name": "Is ceramic coating or PPF better for Miami drivers?", "acceptedAnswer": { "@type": "Answer", "text": "For maximum protection, both. PPF is a thick urethane film that physically blocks rock chips, sand, and road debris — critical for Miami's highway driving and construction zones. Ceramic coating is a thin chemical layer that adds gloss, hydrophobic properties, and UV protection. Many of our luxury clients combine the two: PPF on high-impact areas (hood, fenders, mirrors) plus full-car ceramic coating on top." } },
    { "@type": "Question", "name": "What's the legal window tint percentage in Florida?", "acceptedAnswer": { "@type": "Answer", "text": "Florida law allows 28% VLT (visible light transmission) on front side windows and 15% VLT on rear side and back windows for sedans. SUVs and vans can have any darkness on rear windows. Bespoke Auto Design uses XPEL Prime XR Plus ceramic tint, which delivers up to 98% infrared heat rejection and 99% UV blocking — even at legal-friendly shades — making a real difference in Miami summers." } },
    { "@type": "Question", "name": "How much does it cost to wrap a car in Miami?", "acceptedAnswer": { "@type": "Answer", "text": "Color change wraps at Bespoke Auto Design start at $2,500 and range up to $7,500+ depending on the vehicle, film brand, and coverage. We use premium 3M, Avery Dennison, and KPMF films with hundreds of finishes including gloss, satin, matte, chrome, and color-shift. All wraps are removable and protect your factory paint underneath." } },
    { "@type": "Question", "name": "How long does PPF installation take?", "acceptedAnswer": { "@type": "Answer", "text": "Most full-front PPF installations take 1-2 days at Bespoke Auto Design, while full-body coverage takes 4-7 days. We never rush — proper paint decontamination, precision DAP-cut templates, and careful edge work are what separate a 10-year install from one that peels in 6 months. We're currently booking 1-2 weeks out for new installations." } },
    { "@type": "Question", "name": "Will PPF damage my car's paint when removed?", "acceptedAnswer": { "@type": "Answer", "text": "No — quality PPF is designed to remove cleanly without damaging factory paint. XPEL Ultimate Plus uses a removable adhesive that won't pull clear coat or leave residue when removed by a professional. In fact, PPF preserves your original paint underneath for years, often making the protected paint look better than unprotected sections at trade-in time." } },
    { "@type": "Question", "name": "Do you offer ceramic coating for boats and yachts in Miami?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Bespoke Auto Design specializes in marine ceramic coating, marine PPF, and marine window tint for boats and yachts in the Miami area. Saltwater, intense sun, and constant moisture destroy unprotected gel coat and paint. Our marine ceramic coatings provide hydrophobic protection, UV defense, and gloss enhancement that significantly extend the life of your vessel's finish." } },
    { "@type": "Question", "name": "What's included in your XPEL ceramic coating packages?", "acceptedAnswer": { "@type": "Answer", "text": "Every Bespoke Auto Design ceramic coating package includes thorough hand wash, full paint decontamination (clay bar + iron remover), multi-stage paint correction to remove existing swirls and scratches, panel-by-panel application of XPEL Fusion Plus ceramic, infrared curing, and a maintenance guide. Manufacturer warranties range from 5 years to lifetime depending on the package." } },
    { "@type": "Question", "name": "Where is Bespoke Auto Design located?", "acceptedAnswer": { "@type": "Answer", "text": "Bespoke Auto Design is located at 7943 NW 64th St, Miami, FL 33166 — easily accessible from Brickell, Coral Gables, Bal Harbour, Key Biscayne, Sunny Isles, Aventura, Miami Beach, and Coconut Grove. Our climate-controlled installation facility is purpose-built for flawless XPEL paint protection film, ceramic coating, and ceramic window tint installations. Call (786) 395-9172 or email sales@bespokeauto.design for a free quote." } }
  ]
};
