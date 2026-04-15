/**
 * Post-build script: generates unique static HTML for each /service-areas/* route.
 * Reads dist/index.html as template and outputs dist/service-areas/{slug}/index.html
 * with unique <title>, meta description, canonical, OG tags, JSON-LD, and body content.
 * Vercel serves static files before rewrites, so these take priority over the SPA fallback.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const DIST = join(process.cwd(), "dist");
const template = readFileSync(join(DIST, "index.html"), "utf-8");

const SERVICE_AREAS = [
  {
    slug: "brickell",
    name: "Brickell",
    metaLine: "Protecting exotic and luxury vehicles parked in high-rise condo garages across Miami's financial district. Ideal for daily-driven Ferraris, Porsches, and G-Wagons navigating Brickell Avenue.",
    body: `
      <p>Bespoke Auto Design is Brickell's trusted XPEL Authorized Dealer, providing certified paint protection film, ceramic coating, and ceramic window tint installation for the luxury and exotic vehicles that define Miami's financial district. From the towering residential condos along Brickell Avenue to the corporate garages on SE 1st Avenue, vehicles in this neighborhood endure intense sun exposure on open-air parking decks, relentless rock chips from the I-95 on-ramp commute, and corrosive salt air drifting in from Biscayne Bay.</p>
      <p>Our climate-controlled installation facility at 7943 NW 64th St is purpose-built to deliver flawless results that Miami's humidity would otherwise compromise. Every XPEL Ultimate Plus PPF installation is backed by a 10-year manufacturer warranty against yellowing, cracking, and peeling — the strongest coverage in the industry. For daily-driven Ferraris, Porsches, G-Wagons, and Bentleys navigating Brickell's tight parking garages and congested intersections, full-front or full-body PPF is essential protection against the inevitable door dings, shopping cart encounters, and highway debris.</p>
      <p>Ceramic coating is equally critical for Brickell vehicles. XPEL Fusion Plus nano-ceramic coating creates a hydrophobic, UV-resistant barrier that repels water spots, bird droppings, tree sap, and the industrial fallout that settles on vehicles parked near construction sites — a constant reality in this rapidly developing neighborhood. Combined with XPEL Prime XR Plus ceramic window tint that blocks 98% of infrared heat and 99% of UV radiation, your vehicle stays cooler, more comfortable, and better protected year-round.</p>
      <p>We offer concierge pickup and return from Brickell condos, offices, and parking garages so you never lose a workday. Most full-front PPF installs complete in 1–2 days; full-body coverage takes 4–7 days. Currently booking 1–2 weeks out. Call (786) 395-9172 or request a free quote online — we respond within 30 minutes during business hours.</p>
    `,
  },
  {
    slug: "coral-gables",
    name: "Coral Gables",
    metaLine: "Serving Coral Gables homeowners along Miracle Mile, Old Cutler Road, and Granada Boulevard. Specializing in PPF for classic and luxury vehicles in Miami's historic Mediterranean neighborhood.",
    body: `
      <p>Bespoke Auto Design serves Coral Gables residents with certified XPEL paint protection film, ceramic coating, and ceramic window tint installation tailored for this neighborhood's unique mix of classic and luxury vehicles. Along Miracle Mile, Old Cutler Road, and Granada Boulevard, discerning homeowners trust us to protect everything from vintage Porsches and Mercedes-Benz classics to modern Rolls-Royces and Range Rovers navigating the city's tree-canopied boulevards and historic limestone streets.</p>
      <p>Coral Gables presents specific protection challenges that generic tint shops overlook. The neighborhood's lush Banyan tree canopy drops sap, berries, and debris onto parked vehicles year-round, while Florida's relentless UV radiation fades unprotected paint within just a few years. Road construction along US-1 and the Coral Way corridor sends gravel, sand, and tar onto hoods and fenders during the daily commute. XPEL Ultimate Plus PPF absorbs this punishment while self-healing minor scratches with heat activation — maintaining a factory-fresh finish for up to a decade.</p>
      <p>Our XPEL Fusion Plus ceramic coating packages are especially popular among Coral Gables clients who garage their vehicles but still want effortless maintenance. The hydrophobic coating causes water to bead and sheet off, carrying contaminants with it — reducing wash frequency while maintaining a deep, showroom-quality gloss. Combined with ceramic window tint that keeps interiors cooler and blocks UV damage to leather and dashboards, it's comprehensive protection engineered for South Florida's demanding climate.</p>
      <p>Bespoke Auto Design's climate-controlled facility is approximately 15 minutes northwest of Coral Gables via the Palmetto Expressway. We offer concierge vehicle pickup from Coral Gables homes, with flexible scheduling to accommodate your calendar. Full-front PPF installations take 1–2 business days; full-body coverage 4–7 days. Call (786) 395-9172 for a free quote — we respond within 30 minutes.</p>
    `,
  },
  {
    slug: "miami-beach",
    name: "Miami Beach",
    metaLine: "Protecting vehicles against intense salt air, UV exposure, and sand abrasion across South Beach, Mid-Beach, and North Beach. Ceramic coatings rated for Miami Beach's harshest oceanfront conditions.",
    body: `
      <p>Bespoke Auto Design is the premier XPEL Authorized Dealer serving Miami Beach vehicle owners across South Beach, Mid-Beach, and North Beach. Vehicles in this oceanfront environment face the most aggressive combination of paint-damaging conditions in South Florida: concentrated salt air that accelerates corrosion, intense UV radiation reflected off water and white sand, sand abrasion from ocean breezes, and the constant moisture that promotes water spotting and oxidation on unprotected surfaces.</p>
      <p>For Miami Beach residents who park in open-air hotel garages, beachside lots, or salt-spray-exposed condo decks, XPEL Ultimate Plus paint protection film provides a physical barrier engineered to withstand this environment. The film's self-healing topcoat resists scratches from wind-blown sand and road debris, while its UV-stable construction prevents the yellowing and peeling that plague lesser films within months of oceanfront installation. Our 10-year manufacturer warranty ensures your protection lasts — not just survives — in Miami Beach conditions.</p>
      <p>Ceramic coating is essential for Miami Beach vehicles, even those already wrapped in PPF. XPEL Fusion Plus nano-ceramic coating adds a hydrophobic layer that repels salt spray, prevents water spots from ocean mist, and protects against bird droppings and tree sap from the neighborhood's palm-lined streets. For convertibles and open-top vehicles popular on Ocean Drive, ceramic coating on wheels, trim, and glass keeps every surface easier to maintain and resistant to corrosion.</p>
      <p>XPEL Prime XR Plus ceramic window tint is particularly valuable for Miami Beach driving, blocking 98% of infrared heat that makes beach-adjacent vehicles unbearable in summer. Legal-compliant shades that look great on Collins Avenue while dramatically reducing interior temperatures. Our facility at 7943 NW 64th St is 25 minutes from South Beach via the MacArthur Causeway. Concierge pickup available. Call (786) 395-9172 for a free quote.</p>
    `,
  },
  {
    slug: "aventura",
    name: "Aventura",
    metaLine: "Trusted by Aventura residents from Williams Island to the Aventura Mall area. Full XPEL PPF and ceramic coating installs for luxury SUVs and performance sedans.",
    body: `
      <p>Bespoke Auto Design is Aventura's preferred XPEL Authorized Dealer for paint protection film, ceramic coating, and ceramic window tint. From Williams Island's waterfront estates to the residential towers surrounding Aventura Mall, this neighborhood's concentration of luxury SUVs, performance sedans, and exotic sports cars demands protection that matches the caliber of the vehicles. We deliver that with certified XPEL products installed in a climate-controlled facility — the only way to ensure proper curing and adhesion in South Florida's humidity.</p>
      <p>Aventura drivers face a combination of highway exposure on I-95 and the Turnpike, parking lot hazards at high-traffic retail centers, and the salt-laden air that drifts inland from the Intracoastal Waterway. XPEL Ultimate Plus PPF is engineered to handle all three — absorbing rock chips at highway speed, resisting door dings and shopping cart contact, and maintaining clarity and adhesion in salt-air environments where inferior films delaminate within a year. Our full-front packages start at $1,499 with a 10-year manufacturer warranty.</p>
      <p>For Aventura residents who want comprehensive protection without the visible film, XPEL Fusion Plus ceramic coating provides a hydrophobic, UV-resistant barrier that keeps paint looking freshly detailed between washes. It's especially popular for dark-colored SUVs and sedans that show water spots, swirl marks, and contamination more readily. Combined with ceramic window tint that blocks 98% of infrared heat, your vehicle stays cooler during the school run, mall trips, and Turnpike commute.</p>
      <p>Our facility is approximately 30 minutes south of Aventura via I-95. We offer concierge pickup from Aventura buildings and residences — coordinate it when you request your quote and we handle the logistics. Currently booking 1–2 weeks out. Call (786) 395-9172 or request a free quote online for a response within 30 minutes.</p>
    `,
  },
  {
    slug: "bal-harbour",
    name: "Bal Harbour",
    metaLine: "Discreet, by-appointment protection for the most exclusive vehicles in Bal Harbour. PPF and ceramic coatings for supercars, hypercars, and collector vehicles.",
    body: `
      <p>Bespoke Auto Design provides discreet, by-appointment paint protection services for Bal Harbour's most exclusive vehicles. This enclave of ultra-luxury residences, world-class shopping at Bal Harbour Shops, and oceanfront living demands a level of automotive care that standard shops simply cannot provide. We specialize in XPEL paint protection film, ceramic coating, and ceramic window tint for supercars, hypercars, and collector vehicles — the caliber of automobiles that define Bal Harbour's private garages.</p>
      <p>Bal Harbour vehicles face a unique convergence of threats: salt air from the Atlantic accelerates corrosion on exposed metal and clear coat, intense UV reflected off ocean and pool decks fades paint and damages interior leather, and the neighborhood's valet-heavy lifestyle means constant handling by third parties. XPEL Ultimate Plus PPF provides an invisible armor that protects against all of these while self-healing minor scratches — preserving the factory finish of vehicles worth hundreds of thousands to millions of dollars.</p>
      <p>For collector vehicles and limited-edition exotics, our XPEL Stealth PPF transforms gloss finishes into a striking satin matte appearance while providing the same 10-year protection. It's reversible, preserving the original paint underneath for concours-level originality. XPEL Fusion Plus ceramic coating adds hydrophobic UV protection on top of or instead of PPF, depending on your goals — keeping show cars looking immaculate between detailing sessions.</p>
      <p>Bespoke Auto Design's climate-controlled installation facility ensures perfect curing conditions regardless of Miami's humidity — critical for the multi-day installations required by full-body coverage on complex exotic body panels. We offer private concierge pickup from Bal Harbour residences with fully insured enclosed transport available for high-value vehicles. Call (786) 395-9172 to schedule a private consultation and quote.</p>
    `,
  },
  {
    slug: "key-biscayne",
    name: "Key Biscayne",
    metaLine: "Specialized salt-air and UV protection for vehicles crossing the Rickenbacker Causeway daily. Ceramic coatings engineered for Key Biscayne's island environment.",
    body: `
      <p>Bespoke Auto Design delivers specialized automotive protection for Key Biscayne residents whose vehicles endure some of the most punishing environmental conditions in Miami-Dade County. Every trip across the Rickenbacker Causeway exposes your vehicle to concentrated salt spray from Biscayne Bay, while the island's fully exposed position means year-round maximum UV radiation with no inland buffering. These conditions destroy unprotected paint, chrome, and interior surfaces faster than anywhere else in South Florida.</p>
      <p>XPEL Ultimate Plus paint protection film is essential for Key Biscayne daily drivers. The causeway's bridge joints and road surface launch gravel, road salt residue, and debris at highway speed — directly targeting hoods, fenders, bumpers, and mirrors. Our full-front PPF coverage absorbs this impact while maintaining optical clarity and self-healing minor scratches with heat. The 10-year manufacturer warranty provides confidence that your investment lasts through thousands of causeway crossings.</p>
      <p>Ceramic coating is equally critical on Key Biscayne. XPEL Fusion Plus nano-ceramic coating creates a chemical barrier against salt spray that would otherwise etch into clear coat and promote corrosion. Its hydrophobic properties cause salt water to bead and sheet off rather than sitting on surfaces and evaporating into damaging mineral deposits. For vehicles parked in Key Biscayne's outdoor lots and open-air condo garages, this protection is the difference between annual paint correction and effortless maintenance.</p>
      <p>XPEL Prime XR Plus ceramic window tint blocks 98% of infrared heat and 99% of UV — critical for Key Biscayne's fully exposed driving environment where there is virtually no shade on the causeway or island roads. Our climate-controlled facility is approximately 25 minutes from Key Biscayne via the Rickenbacker and I-95. Concierge pickup available from Key Biscayne residences. Call (786) 395-9172 for a free quote.</p>
    `,
  },
  {
    slug: "sunny-isles",
    name: "Sunny Isles",
    metaLine: "Serving Sunny Isles Beach high-rise residents at Trump Royale, Porsche Design Tower, and Jade Ocean. Concierge PPF installation with pickup from your building's valet.",
    body: `
      <p>Bespoke Auto Design is the trusted XPEL Authorized Dealer for Sunny Isles Beach's luxury high-rise residents. From Trump Royale and Porsche Design Tower to Jade Ocean, Turnberry Ocean Colony, and Residences by Armani Casa, this neighborhood's concentration of ultra-luxury vehicles demands protection services that match the lifestyle. We provide certified XPEL paint protection film, ceramic coating, and ceramic window tint with concierge pickup directly from your building's valet or parking garage.</p>
      <p>Sunny Isles vehicles face relentless oceanfront conditions: salt air corrosion from the Atlantic, UV radiation intensified by ocean reflection, sand abrasion from coastal winds, and the constant humidity that promotes water spotting and paint contamination. Open-air parking decks in high-rise towers compound these effects — vehicles parked on upper levels receive maximum sun exposure while salt-laden air circulates freely through the structure. XPEL Ultimate Plus PPF provides the physical barrier these conditions demand, with a self-healing topcoat that maintains clarity for up to 10 years.</p>
      <p>For Sunny Isles residents who value convenience, our concierge service eliminates the need to drive to our facility. We coordinate pickup from your building's valet, complete the installation in our climate-controlled bay, and return your vehicle to the same location — fully protected and detailed. Popular packages include full-body PPF combined with XPEL Fusion Plus ceramic coating for comprehensive protection, plus ceramic window tint for heat rejection and UV blocking.</p>
      <p>Our facility at 7943 NW 64th St is approximately 30 minutes from Sunny Isles via I-95. Full-front PPF takes 1–2 days; full-body coverage 4–7 days. Ceramic coating packages complete in 1–3 days depending on paint correction requirements. Currently booking 1–2 weeks out. Call (786) 395-9172 or request a free quote — we respond within 30 minutes during business hours.</p>
    `,
  },
  {
    slug: "coconut-grove",
    name: "Coconut Grove",
    metaLine: "Coconut Grove's bohemian heart meets luxury protection. PPF, ceramic coating, and marine ceramic for residents and boat owners in Miami's oldest neighborhood.",
    body: `
      <p>Bespoke Auto Design serves Coconut Grove's unique community of luxury vehicle owners, classic car enthusiasts, and boat owners with certified XPEL paint protection film, ceramic coating, and ceramic window tint. As Miami's oldest continuously inhabited neighborhood, the Grove blends historic charm with modern luxury — and the vehicles here reflect that range, from vintage Porsches and restored classics to new Bentleys, Land Rovers, and performance Teslas navigating the neighborhood's tree-canopied streets.</p>
      <p>Coconut Grove's lush tropical canopy is beautiful but brutal on automotive finishes. Banyan trees, royal palms, and tropical hardwoods continuously drop sap, berries, pollen, and seed pods onto parked vehicles. Combined with South Florida's UV intensity and the neighborhood's proximity to Biscayne Bay — which brings salt air and elevated humidity — unprotected paint deteriorates rapidly. XPEL Ultimate Plus PPF creates a self-healing physical barrier against tree debris and road contamination, while maintaining the optical clarity that lets your factory paint shine through.</p>
      <p>Ceramic coating is especially popular among Coconut Grove clients who park on tree-lined residential streets or in open-air garages. XPEL Fusion Plus nano-ceramic coating's hydrophobic surface causes sap, bird droppings, and pollen to slide off rather than bonding to the paint — dramatically reducing the risk of permanent etching that requires expensive paint correction. For boat owners at Grove marinas like Coconut Grove Sailing Club and Dinner Key Marina, we also offer marine-grade ceramic coating, PPF, and window tint for comprehensive vessel protection.</p>
      <p>Our facility is approximately 20 minutes from Coconut Grove via US-1 North and I-95. We offer concierge pickup from Grove residences and can coordinate with marina staff for marine projects. Call (786) 395-9172 for a free quote on automotive or marine protection — we respond within 30 minutes during business hours.</p>
    `,
  },
];

for (const area of SERVICE_AREAS) {
  const title = `PPF, Ceramic Coating & Window Tint in ${area.name}, Miami | Bespoke Auto Design`;
  const description = `Certified XPEL paint protection film, ceramic coating, and ceramic window tint installation serving ${area.name}, Miami. ${area.metaLine} Free quotes, 10-year warranty, concierge pickup.`;
  const canonical = `https://www.bespokeauto.design/service-areas/${area.slug}`;
  const ogImage = "https://www.bespokeauto.design/lovable-uploads/ferrari-california-t.webp";

  const localBusinessJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: `Bespoke Auto Design — ${area.name} Service Area`,
    description: description,
    url: canonical,
    telephone: "+1-786-395-9172",
    email: "sales@bespokeauto.design",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7943 NW 64th St",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33166",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: "25.823", longitude: "-80.318" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
    ],
    areaServed: { "@type": "City", name: `${area.name}, Miami, FL` },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47", bestRating: "5", worstRating: "1" },
    image: "https://www.bespokeauto.design/lovable-uploads/bespoke-logo.webp",
    sameAs: ["https://www.instagram.com/bespokeautodesign/", "https://www.facebook.com/bespokeautodesign"],
  });

  // Body content for inside <div id="root"> (visible to crawlers, replaced by React on hydration)
  const bodyHtml = `<div style="max-width:800px;margin:0 auto;padding:2rem;font-family:system-ui,sans-serif;color:#e5e5e5;background:#0f0f0f"><h1 style="font-size:2rem;margin-bottom:1rem">Premium PPF, Ceramic Coating &amp; Window Tint in ${area.name}, Miami</h1>${area.body}<p style="margin-top:1.5rem"><strong>Bespoke Auto Design</strong> — XPEL Authorized Dealer<br>7943 NW 64th St, Miami, FL 33166<br>Phone: <a href="tel:+17863959172" style="color:#f59e0b">(786) 395-9172</a><br><a href="https://www.bespokeauto.design/#contact" style="color:#f59e0b">Request a Free Quote</a></p></div>`;

  let html = template;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`
  );

  // Add unique JSON-LD before closing </head>
  const jsonLdTag = `<script type="application/ld+json">${localBusinessJson}</script>`;
  html = html.replace("</head>", `${jsonLdTag}\n</head>`);

  // Replace everything inside <div id="root">...</div> with neighborhood-specific body
  html = html.replace(
    /(<div id="root">)[\s\S]*?(<\/div>\s*<noscript>)/,
    `$1${bodyHtml}$2`
  );

  // Write file
  const dir = join(DIST, "service-areas", area.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf-8");
  console.log(`✓ Generated ${area.slug}`);
}

console.log(`\nDone — ${SERVICE_AREAS.length} service area pages generated.`);
