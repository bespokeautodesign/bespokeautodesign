export type WhyIcon = "shield" | "sun" | "thermo" | "car";

export type ServiceAreaContent = {
  slug: string;
  name: string;
  audienceLabel: "Drivers" | "Residents";
  eyebrow: string;
  heroHeadline: { before: string; highlight: string; after: string };
  heroSubhead: string;
  why: { icon: WhyIcon; title: string; text: string }[];
  services: { title: string; price: string; link: string; desc: string }[];
  gettingTitle: string;
  gettingBody: string;
  faq: { question: string; answer: string }[];
  finalCtaTitle: string;
  finalCtaNote: string;
  metaTitle: string;
  metaDescription: string;
  geo?: { lat: string; lng: string };
};

const standardServices = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus self-healing PPF protects against rock chips, sand, and road debris on Miami's worst stretches." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus ceramic coating adds hydrophobic UV protection that thrives in Miami's heat and humidity." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat — legal shades that make a real difference." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "Premium 3M, Avery Dennison, and KPMF vinyl wraps in hundreds of finishes — fully removable, paint-safe." },
];

const discreetServices = [
  { title: "Paint Protection Film", price: "$1,499", link: "/paint-protection-film", desc: "XPEL Ultimate Plus on gloss, Stealth on matte and satin — the films we use on hypercar paint." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus nano-ceramic coating, climate-controlled application, 10-year manufacturer warranty." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus — true heat rejection without compromising visibility or factory glass tone." },
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "3M, Avery Dennison, and KPMF premium films for full color change — fully reversible, paint-safe." },
];

const wynwoodServices = [
  { title: "Color Change Wrap", price: "$2,500", link: "/color-change-wrap", desc: "3M 1080, Avery Dennison Supreme, KPMF K75400 — every premium film in stock, hundreds of finishes." },
  { title: "Stealth & Color PPF", price: "$1,499", link: "/stealth-ppf", desc: "XPEL Stealth matte PPF and 16-shade Color PPF — color change with self-healing protection underneath." },
  { title: "Ceramic Coating", price: "$599", link: "/ceramic-coating", desc: "XPEL Fusion Plus for the daily driver — hydrophobic UV-resistant coating engineered for Miami." },
  { title: "Ceramic Window Tint", price: "$150", link: "/ceramic-tint", desc: "XPEL Prime XR Plus ceramic tint — 98% infrared heat rejection in legal shades." },
];

export const serviceAreaContent: ServiceAreaContent[] = [
  {
    slug: "pinecrest",
    name: "Pinecrest",
    audienceLabel: "Drivers",
    eyebrow: "Boutique Auto Protection · PINECREST",
    heroHeadline: { before: "Premium PPF, Ceramic Coating & Window Tint in ", highlight: "Pinecrest", after: "" },
    heroSubhead: "Bespoke Auto Design protects Pinecrest families' daily drivers, weekend Teslas, and well-loved SUVs from Miami's harshest sun, sand, and sealcoat — installed in our climate-controlled Doral facility just up the Palmetto.",
    why: [
      { icon: "shield", title: "Built for the School-Run Fleet", text: "Pinecrest families put real miles on their Range Rovers, Teslas, and G-Wagons. XPEL Ultimate Plus PPF absorbs rock chips, lovebug splatter, and parking-lot dings without yellowing or peeling — so the daily driver still looks new at trade-in." },
      { icon: "sun", title: "Sun-Baked Driveway Protection", text: "Most Pinecrest homes have long, exposed driveways. XPEL Fusion Plus ceramic coating adds a hydrophobic UV barrier that defends against oxidation and water spots from sprinklers — the two killers of South Florida paint." },
      { icon: "thermo", title: "Climate-Controlled Install for the Long Game", text: "PPF and ceramic coating require dust-, temperature-, and humidity-controlled application. Our purpose-built bay is the difference between a 10-year install and a 6-month peel — non-negotiable in Miami humidity." },
      { icon: "car", title: "Concierge Pickup From Pinecrest — Optional", text: "Short on time between school drop-off and tennis? We'll pick up from your Pinecrest home or US-1 office and return the vehicle when the work is done. Just ask when you book." },
    ],
    services: standardServices,
    gettingTitle: "Getting to Bespoke From Pinecrest",
    gettingBody: "Our Miami facility at 7943 NW 64th St is approximately 25 minutes north of Pinecrest via the Palmetto Expressway (SR-826) to NW 36th Street, then west to NW 64th. Most clients drop off their vehicle in the morning and coordinate return the same business day for tint and small jobs, or next-day for full-front PPF.",
    faq: [
      { question: "Do you pick up vehicles from Pinecrest?", answer: "Yes — concierge pickup is available from Pinecrest homes, offices along US-1, and the US-1/Palmetto corridor. Most pickups happen between 8–10 AM and same-day return between 4–6 PM." },
      { question: "How long does PPF take to install on a Pinecrest daily driver?", answer: "Full Front packages typically take 1–2 full days; Track packages 2–3 days; Full Body 4–5 days. We schedule installs to minimize daily-driver downtime." },
      { question: "Will ceramic coating hold up to Pinecrest's sun and humidity?", answer: "Yes — XPEL Fusion Plus is specifically engineered for high-UV, high-humidity environments and carries a 10-year manufacturer warranty when professionally installed." },
      { question: "Is window tint legal for my Pinecrest daily driver in Florida?", answer: "Florida law: 28% VLT minimum on front side windows, 15% on rear. We install only legal shades unless you specifically request a medical exemption film." },
      { question: "What's the closest XPEL Authorized Dealer to Pinecrest?", answer: "Bespoke Auto Design — 7943 NW 64th St in Doral, 25 minutes via Palmetto. We're the only XPEL Authorized Dealer servicing Pinecrest with a climate-controlled bay." },
    ],
    finalCtaTitle: "Ready to Protect Your Pinecrest Vehicle?",
    finalCtaNote: "Get a free quote within 30 minutes — currently booking 1-2 weeks out",
    metaTitle: "PPF, Ceramic Coating & Window Tint in Pinecrest | Bespoke Auto Design",
    metaDescription: "XPEL-certified paint protection film, ceramic coating, and window tint for Pinecrest's luxury daily drivers and family SUVs. Climate-controlled install, concierge pickup. Call (786) 395-9172.",
  },
  {
    slug: "doral",
    name: "Doral",
    audienceLabel: "Drivers",
    eyebrow: "Boutique Auto Protection · DORAL",
    heroHeadline: { before: "Premium PPF, Ceramic Coating & Window Tint in ", highlight: "Doral", after: "" },
    heroSubhead: "Bespoke Auto Design is Doral's neighborhood XPEL studio — 6 minutes from Trump National, walk-in friendly, multilingual, and built for both professional fleets and weekend Lambos.",
    why: [
      { icon: "shield", title: "Your Neighborhood XPEL Studio — 6 Minutes Away", text: "Located at 7943 NW 64th St, we're the closest XPEL Authorized Dealer to Doral residents and businesses. Drop off before a meeting at Trump National, walk over for lunch at Downtown Doral, pick up before sundown." },
      { icon: "sun", title: "Built for Doral's Daily I-95 / Palmetto Commuters", text: "Doral professionals split their day between client sites across Miami-Dade. XPEL Ultimate Plus PPF protects against the rock chips, sand, and construction debris that come with that many freeway miles." },
      { icon: "thermo", title: "Multilingual Service", text: "Spanish-speaking clients are welcome. Alessandro handles every consultation personally, and we communicate in your preferred language." },
      { icon: "car", title: "Same-Day Turnaround for Tint, Front-Half PPF & Quick Coatings", text: "Drop the vehicle in the morning, we'll often have it ready by close of business. Larger installs (full body, multi-stage paint correction) are coordinated to minimize daily-driver disruption." },
    ],
    services: standardServices,
    gettingTitle: "Getting to Bespoke From Doral",
    gettingBody: "Our facility at 7943 NW 64th St is 6 minutes from the Doral central business district. From NW 41st St, take NW 79th Ave north to NW 64th St, then east. Walk-in consultations welcome — just call ahead so we can schedule your install bay.",
    faq: [
      { question: "Do you pick up vehicles from Doral?", answer: "Pickup is rarely necessary — we're 6 minutes away. But yes, available for executives who can't break from meetings." },
      { question: "How long does PPF take to install on a Doral daily driver?", answer: "Front Bumper / Full Hood: same day. Full Front: 1–2 days. Full Body: 4–5 days. We work around your schedule." },
      { question: "Will ceramic coating hold up to Doral's sun and humidity?", answer: "Yes — XPEL Fusion Plus is engineered for South Florida conditions and carries a 10-year manufacturer warranty." },
      { question: "Is window tint legal for my Doral daily driver in Florida?", answer: "Yes — we install only legal shades (28% front, 15% rear minimum VLT) unless you have a medical exemption." },
      { question: "What's the closest XPEL Authorized Dealer to Doral?", answer: "Bespoke Auto Design at 7943 NW 64th St is in Doral, 6 minutes from the central business district. There is no closer XPEL Authorized Dealer." },
    ],
    finalCtaTitle: "Ready to Protect Your Doral Vehicle?",
    finalCtaNote: "Get a free quote within 30 minutes — currently booking 1-2 weeks out",
    metaTitle: "Doral PPF, Ceramic Coating & Tint | XPEL Studio | Bespoke Auto Design",
    metaDescription: "Doral's only XPEL Authorized Dealer with a climate-controlled install bay. Paint protection film, ceramic coating, and tint for daily drivers, executive fleets, and exotics. (786) 395-9172.",
  },
  {
    slug: "fisher-island",
    name: "Fisher Island",
    audienceLabel: "Residents",
    eyebrow: "Boutique Auto Protection · FISHER ISLAND",
    heroHeadline: { before: "Discreet PPF, Ceramic Coating & Window Tint for ", highlight: "Fisher Island", after: " Residents" },
    heroSubhead: "Bespoke Auto Design coordinates fully discreet concierge transport from Fisher Island — your vehicle is collected at the ferry terminal, protected in our climate-controlled Miami facility, and returned without a single photograph, social post, or third-party touch.",
    why: [
      { icon: "car", title: "Ferry-Terminal Concierge Pickup", text: "We coordinate with your house manager or assistant. Your vehicle is collected mainland-side at the Fisher Island Club ferry terminal by Alessandro or a vetted transport partner — fully insured, fully discreet." },
      { icon: "shield", title: "NDA-Level Discretion", text: "No photos, no social media, no third-party detailers. Every install is performed personally by Alessandro in our climate-controlled bay, with the vehicle returned exactly as it left." },
      { icon: "sun", title: "The Right Films for Six- and Seven-Figure Paint", text: "Pagani, Bugatti, Koenigsegg, Ferrari, McLaren, Rolls-Royce, Bentley — we've protected them all. XPEL Ultimate Plus or Stealth (for matte finishes) is the only film we recommend on irreplaceable paint." },
      { icon: "thermo", title: "One-Vehicle-at-a-Time Bay Time", text: "Your install isn't sharing a bay with three other cars. We dedicate the bay and the day to one vehicle, with documented before/after under the same controlled lighting every time." },
    ],
    services: discreetServices,
    gettingTitle: "Getting Your Vehicle to Bespoke From Fisher Island",
    gettingBody: "We coordinate ferry-terminal pickup directly with your residence or house manager — no public drop-off required. Vehicles are transported under cover when requested, installed in our climate-controlled Doral bay, and returned on your schedule. The full process is documented privately and shared only with you.",
    faq: [
      { question: "Do you collect vehicles from Fisher Island?", answer: "Yes — we coordinate ferry-terminal pickup directly with your house manager or assistant. Fully insured, fully discreet, no public drop-off required." },
      { question: "How discreet is your install process?", answer: "We do not photograph or post Fisher Island client work without explicit written permission. NDAs available on request. Every install is performed personally by Alessandro." },
      { question: "What films do you use on exotic and hypercar paint?", answer: "XPEL Ultimate Plus for gloss finishes and XPEL Stealth for matte and satin OEM finishes. Both carry a 10-year manufacturer warranty when professionally installed." },
      { question: "Can you handle a fleet of vehicles?", answer: "Yes — we sequence multi-vehicle installs to minimize household disruption. Daily transport coordination is included." },
      { question: "What's the closest XPEL Authorized Dealer to Fisher Island?", answer: "Bespoke Auto Design is the only XPEL Authorized Dealer offering Fisher Island ferry-terminal concierge service. Our climate-controlled bay in Doral is approximately 30 minutes from the ferry terminal." },
    ],
    finalCtaTitle: "Ready to Protect Your Fisher Island Vehicle?",
    finalCtaNote: "Discreet quote and concierge coordination — typically booking 1-2 weeks out",
    metaTitle: "Fisher Island PPF & Concierge Protection | Bespoke Auto Design",
    metaDescription: "Fully discreet XPEL paint protection film, ceramic coating, and window tint for Fisher Island residents. Climate-controlled install, ferry-terminal concierge transport, full NDA discretion. (786) 395-9172.",
  },
  {
    slug: "star-island",
    name: "Star Island",
    audienceLabel: "Residents",
    eyebrow: "Boutique Auto Protection · STAR ISLAND",
    heroHeadline: { before: "Discreet PPF, Ceramic Coating & Window Tint for ", highlight: "Star Island", after: " Residents" },
    heroSubhead: "Bespoke Auto Design coordinates concierge transport from Star Island via MacArthur Causeway — your vehicle is protected in our climate-controlled Doral facility under full discretion, with no public drop-off, photos, or third-party handlers.",
    why: [
      { icon: "car", title: "MacArthur Concierge Pickup", text: "We coordinate with your assistant or house manager. Vehicle is collected at your gate, transported under cover when requested, and returned on your schedule." },
      { icon: "shield", title: "Discretion as Default", text: "No social media, no third-party detailers, no public photos. Alessandro handles every install personally. NDA available on request." },
      { icon: "sun", title: "Films That Match the Paint", text: "Pagani Huayra, Ferrari SF90, McLaren 765LT, Rolls-Royce Cullinan, G63 6x6, custom-paint Defender — XPEL Ultimate Plus on gloss, XPEL Stealth on matte and satin." },
      { icon: "thermo", title: "One Bay, One Vehicle, One Day", text: "Your supercar isn't competing for bay time. Dedicated install slot, dedicated documentation, dedicated return window." },
    ],
    services: discreetServices,
    gettingTitle: "Getting Your Vehicle to Bespoke From Star Island",
    gettingBody: "We pick up at your gate via the MacArthur Causeway and transport directly to our Doral facility (approximately 18 minutes from the Star Island bridge). Optional enclosed transport for matte, satin, or unique-spec vehicles. Return on your schedule — same day for tint, next day for PPF Full Front, sequenced for full-body installs.",
    faq: [
      { question: "Do you pick up vehicles from Star Island?", answer: "Yes — concierge pickup at your gate is standard for Star Island clients. Fully insured, fully discreet." },
      { question: "How discreet is the install?", answer: "No social, no public photos, NDA available on request. Alessandro is the only installer." },
      { question: "What films do you recommend on hypercars?", answer: "XPEL Ultimate Plus for gloss, XPEL Stealth for matte/satin OEM finishes. Both 10-year warranty." },
      { question: "Can you handle multiple vehicles?", answer: "Yes — we sequence multi-car installs to keep your fleet operational." },
      { question: "What's the closest XPEL Authorized Dealer to Star Island?", answer: "Bespoke Auto Design — climate-controlled, concierge transport, NDA-discretion. 18 minutes via MacArthur." },
    ],
    finalCtaTitle: "Ready to Protect Your Star Island Vehicle?",
    finalCtaNote: "Discreet quote and concierge coordination — typically booking 1-2 weeks out",
    metaTitle: "Star Island PPF & Concierge Auto Protection | Bespoke Auto Design",
    metaDescription: "Discreet XPEL PPF, ceramic coating, and tint for Star Island residents. Concierge pickup via MacArthur, climate-controlled install, NDA-level privacy. Personally installed by Alessandro. (786) 395-9172.",
  },
  {
    slug: "indian-creek",
    name: "Indian Creek",
    audienceLabel: "Residents",
    eyebrow: "Boutique Auto Protection · INDIAN CREEK",
    heroHeadline: { before: "Discreet PPF, Ceramic Coating & Window Tint for ", highlight: "Indian Creek", after: " Residents" },
    heroSubhead: "Bespoke Auto Design provides the most discreet automotive protection service available to Indian Creek's 41 residences — concierge transport across the bridge, climate-controlled install, NDA on file, and off-hours return when required.",
    why: [
      { icon: "car", title: "Bridge-Side Concierge Pickup", text: "Coordinated directly with your security detail or estate manager. Vehicle collected at the gate by Alessandro or a single vetted transport, no third-party handlers." },
      { icon: "shield", title: "Strictest Discretion Available", text: "NDA on file. No social posts, no portfolio inclusion, no client list mention. Indian Creek work is handled by Alessandro personally with no exceptions." },
      { icon: "thermo", title: "Off-Hours Coordination Available", text: "Drop-off and return can be scheduled outside business hours to minimize any visible activity at the gate. We work on your security team's clock, not ours." },
      { icon: "sun", title: "Hypercar-Grade Films and Process", text: "XPEL Ultimate Plus (gloss) or Stealth (matte/satin), one vehicle per bay, documented privately, returned to specification." },
    ],
    services: discreetServices,
    gettingTitle: "Getting Your Vehicle to Bespoke From Indian Creek",
    gettingBody: "We coordinate transport across the single bridge from Surfside directly to our Doral facility (approximately 25 minutes). Optional enclosed transport for any matte, satin, or unique-spec vehicle. Off-hours return windows available with 48-hour notice.",
    faq: [
      { question: "Do you collect vehicles from Indian Creek?", answer: "Yes — concierge pickup at your gate is coordinated with your security team. Fully insured, fully discreet." },
      { question: "How discreet is your process?", answer: "Strictly. NDA on file, no public photos, no portfolio inclusion. Alessandro is the only installer on any Indian Creek vehicle." },
      { question: "Can you work off-hours?", answer: "Yes — we coordinate drop-off and return outside normal business hours when required, with 48-hour notice." },
      { question: "What films do you use on Indian Creek paint?", answer: "XPEL Ultimate Plus for gloss, XPEL Stealth for matte and satin. Both 10-year manufacturer warranty." },
      { question: "What's the closest XPEL Authorized Dealer to Indian Creek?", answer: "Bespoke Auto Design — 25 minutes via the Surfside bridge. The only XPEL Dealer offering Indian Creek-level discretion." },
    ],
    finalCtaTitle: "Ready to Protect Your Indian Creek Vehicle?",
    finalCtaNote: "Discreet quote and concierge coordination — typically booking 1-2 weeks out",
    metaTitle: "Indian Creek PPF & Concierge Auto Protection | Bespoke Auto Design",
    metaDescription: "Strictly discreet XPEL PPF, ceramic coating, and tint for Indian Creek residents. Concierge transport, climate-controlled install, NDA standard, off-hours coordination. (786) 395-9172.",
  },
  {
    slug: "surfside",
    name: "Surfside",
    audienceLabel: "Drivers",
    eyebrow: "Boutique Auto Protection · SURFSIDE",
    heroHeadline: { before: "Premium PPF, Ceramic Coating & Window Tint in ", highlight: "Surfside", after: "" },
    heroSubhead: "Bespoke Auto Design protects Surfside's beachfront daily drivers and weekend specials from salt-air corrosion, sand abrasion, and sun-baked paint oxidation — installed in our climate-controlled facility just 25 minutes west.",
    why: [
      { icon: "shield", title: "Salt-Air Protection You Can't Skip on the Beach", text: "Surfside's oceanfront block puts cars in constant salt-spray contact. XPEL Fusion Plus ceramic coating creates a hydrophobic barrier that prevents salt accumulation and oxidation — the #1 paint killer for beach-block residents." },
      { icon: "sun", title: "Sand Abrasion + Lovebug Defense", text: "XPEL Ultimate Plus PPF absorbs the daily abrasion of beach-blown sand and the seasonal lovebug splatter that etches unprotected paint within hours." },
      { icon: "thermo", title: "Heat-Rejection Tint for Open-Garage Condos", text: "Many Surfside condos have semi-open garage decks. XPEL Prime XR Plus ceramic tint blocks 98% of infrared heat, keeping interiors cool and reducing dashboard cracking." },
      { icon: "car", title: "Concierge Pickup From Surfside", text: "Short on time between morning beach and afternoon meetings? We arrange pickup from your Surfside building and return when the work is done." },
    ],
    services: standardServices,
    gettingTitle: "Getting to Bespoke From Surfside",
    gettingBody: "Our Doral facility at 7943 NW 64th St is approximately 25 minutes west of Surfside via the 96th Street causeway and I-95 South to NW 79th St. Most Surfside clients drop off in the morning and pick up the same business day for tint, next day for PPF Front, sequenced for larger installs.",
    faq: [
      { question: "Do you pick up vehicles from Surfside?", answer: "Yes — concierge pickup is available from any Surfside address. Pickup typically 8–10 AM, return 4–6 PM same-day for smaller jobs." },
      { question: "How long does PPF take to install on a Surfside daily driver?", answer: "Front Bumper or Hood: same day. Full Front: 1–2 days. Full Body: 4–5 days." },
      { question: "Will ceramic coating hold up to Surfside's salt and sun?", answer: "Yes — XPEL Fusion Plus is engineered for high-salinity, high-UV environments. 10-year manufacturer warranty." },
      { question: "Is window tint legal for my Surfside daily driver in Florida?", answer: "Yes — we install only legal shades (28% front side, 15% rear minimum) unless you have a medical exemption." },
      { question: "What's the closest XPEL Authorized Dealer to Surfside?", answer: "Bespoke Auto Design — 25 minutes via the 96th Street causeway. The only climate-controlled XPEL bay serving Surfside." },
    ],
    finalCtaTitle: "Ready to Protect Your Surfside Vehicle?",
    finalCtaNote: "Get a free quote within 30 minutes — currently booking 1-2 weeks out",
    metaTitle: "Surfside PPF, Ceramic Coating & Window Tint | Bespoke Auto Design",
    metaDescription: "XPEL paint protection film, ceramic coating, and window tint for Surfside daily drivers, beach SUVs, and luxury weekend cars. Salt-air protection, climate-controlled install. (786) 395-9172.",
  },
  {
    slug: "wynwood",
    name: "Wynwood",
    audienceLabel: "Drivers",
    eyebrow: "Boutique Auto Protection · WYNWOOD",
    heroHeadline: { before: "PPF, Ceramic Coating, Color Change Wraps & Tint in ", highlight: "Wynwood", after: "" },
    heroSubhead: "Bespoke Auto Design is Wynwood's neighborhood studio for statement vehicles — XPEL Stealth matte conversions, custom-color PPF, full color change wraps in 3M, Avery Dennison and KPMF, and ceramic protection for the daily driver.",
    why: [
      { icon: "shield", title: "Color Change Wraps That Match Wynwood's Energy", text: "3M 1080, Avery Dennison Supreme, KPMF K75400 — every premium film in stock, hundreds of finishes including satin, matte, gloss, chrome, and color-shift. Fully removable, paint-safe, and reversible." },
      { icon: "sun", title: "XPEL Stealth for the Matte-Finish Statement", text: "The single best matte PPF on the market. Turns any gloss factory paint into a satin protective finish — without the maintenance penalty of true matte paint." },
      { icon: "thermo", title: "Custom XPEL Color PPF in 16 Shades", text: "Change color without paint, fully reversible, with self-healing PPF underneath. The right move for leased exotics and fashion-forward dailies." },
      { icon: "car", title: "Documented, Content-Worthy Process", text: "Wynwood clients tend to want process content. We'll happily photograph and document your install for social use (with your permission and final approval) — the bay's lighting is set up for it." },
    ],
    services: wynwoodServices,
    gettingTitle: "Getting to Bespoke From Wynwood",
    gettingBody: "Our facility at 7943 NW 64th St is approximately 12 minutes northwest of Wynwood Walls via NW 5th Ave or I-95 North to NW 36th St, then west. Walk-in consultations welcome — bring inspiration photos and we'll mock up the wrap or PPF combination.",
    faq: [
      { question: "Do you do full color change wraps?", answer: "Yes — we install 3M 1080, Avery Dennison Supreme, and KPMF K75400 in hundreds of finishes. Full body wraps typically run 4–7 days depending on vehicle complexity." },
      { question: "What's the difference between XPEL Color PPF, Stealth, and a vinyl wrap?", answer: "Color PPF is paint protection + color in one (self-healing, 10-year warranty). Stealth is matte PPF over your factory paint. Vinyl wrap is the most affordable for full color change, 3–5 year lifespan." },
      { question: "Can I document the install for social content?", answer: "Yes — with your written permission, we'll photograph and video the install. Our bay's lighting is set up for content-quality documentation." },
      { question: "Will a wrap damage my paint?", answer: "No — premium 3M, Avery, and KPMF films are paint-safe and fully removable when applied to factory paint in good condition." },
      { question: "What's the closest XPEL Authorized Dealer to Wynwood?", answer: "Bespoke Auto Design — 12 minutes northwest. The only XPEL Dealer in the Miami area offering matching Color PPF and Stealth PPF stock." },
    ],
    finalCtaTitle: "Ready to Protect Your Wynwood Vehicle?",
    finalCtaNote: "Get a free quote within 30 minutes — currently booking 1-2 weeks out",
    metaTitle: "Wynwood Color Change Wraps, PPF & Ceramic Tint | Bespoke Auto Design",
    metaDescription: "Color change wraps, XPEL Stealth matte PPF, ceramic coating, and tint for Wynwood's creative class. 3M, Avery, KPMF films. 12 minutes from Wynwood Walls. (786) 395-9172.",
  },
  {
    slug: "design-district",
    name: "Design District",
    audienceLabel: "Drivers",
    eyebrow: "Boutique Auto Protection · DESIGN DISTRICT",
    heroHeadline: { before: "Premium PPF, Ceramic Coating, Color Change & Tint in ", highlight: "Miami Design District", after: "" },
    heroSubhead: "Bespoke Auto Design protects the Design District's showroom-grade daily drivers and exotic weekenders — XPEL Ultimate Plus on gloss, Stealth on matte, full color change in premium films, all installed in our climate-controlled bay 11 minutes away.",
    why: [
      { icon: "shield", title: "Showroom-Grade Finish, Field-Proven Films", text: "Your car is parked between Louis Vuitton and Hermès. The finish needs to look like it came off a stand at the ICA Miami. XPEL Ultimate Plus or Stealth, applied in a climate-controlled bay, holds that finish." },
      { icon: "sun", title: "Designer-Grade Color Options", text: "Custom XPEL Color PPF in 16 shades, plus 3M, Avery Dennison, and KPMF premium films in hundreds of finishes. Fully reversible — change color for a season or a launch and revert." },
      { icon: "thermo", title: "Dealership-Adjacent Service", text: "We work with several Design District-adjacent dealerships on new-delivery PPF and ceramic. Ask about our delivery-day full-front package." },
      { icon: "car", title: "Concierge Pickup From the District", text: "We pick up from your Design District residence, retail location, or dealership service drop-off and return on your schedule." },
    ],
    services: wynwoodServices,
    gettingTitle: "Getting to Bespoke From Design District",
    gettingBody: "Our facility at 7943 NW 64th St is approximately 11 minutes west of the Design District via NW 36th St or I-195 West. Same-day return for tint and small jobs, next-day for Front Full PPF, sequenced for larger work. Concierge pickup recommended given the District's parking constraints.",
    faq: [
      { question: "Do you do new-vehicle delivery-day PPF?", answer: "Yes — we coordinate with dealerships for clean-paint delivery installs. Pre-PDI is ideal; same-day-as-delivery is also fine. Most factories deliver with paint that needs prep — we handle it." },
      { question: "Can I match my PPF color to my paint?", answer: "With XPEL Color PPF, yes — in 16 shades. For exact match on a specialty paint, ask about matched ColorPPF samples first." },
      { question: "What's the difference between a wrap and Stealth PPF?", answer: "Stealth is matte PPF — protective film with self-healing tech, 10-year warranty. Wraps are cosmetic vinyl — 3–5 year lifespan, lower cost." },
      { question: "Do you offer fleet or multi-vehicle pricing?", answer: "Yes — multi-vehicle households and small dealer fleets get sequenced installs and tiered pricing." },
      { question: "What's the closest XPEL Authorized Dealer to the Design District?", answer: "Bespoke Auto Design — 11 minutes via NW 36th. The only XPEL Dealer offering matched color PPF, Stealth, and premium wrap films in stock." },
    ],
    finalCtaTitle: "Ready to Protect Your Design District Vehicle?",
    finalCtaNote: "Get a free quote within 30 minutes — currently booking 1-2 weeks out",
    metaTitle: "Design District PPF, Color Change & Ceramic | Bespoke Auto Design",
    metaDescription: "XPEL paint protection film, ceramic coating, color change wraps, and tint for Miami Design District residents and showroom vehicles. Climate-controlled install, concierge pickup. (786) 395-9172.",
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    audienceLabel: "Drivers",
    eyebrow: "Boutique Auto Protection · FORT LAUDERDALE",
    heroHeadline: { before: "Premium PPF, Ceramic Coating & Window Tint for ", highlight: "Fort Lauderdale", after: "" },
    heroSubhead: "Bespoke Auto Design serves Fort Lauderdale's Las Olas residents, Coral Ridge daily drivers, and Rio Vista yachting community with concierge pickup, climate-controlled installs, and the same XPEL-Authorized service trusted by Miami's exotic owners.",
    why: [
      { icon: "car", title: "Broward Concierge Pickup — No Trade-Off", text: "Our pickup service runs daily from Las Olas, Coral Ridge, Rio Vista, Harbor Beach, and Lauderdale-by-the-Sea. Your vehicle is collected, protected in our climate-controlled bay, and returned on your schedule — without you ever crossing the county line." },
      { icon: "shield", title: "Yacht-Owner Logistics for Yacht-Sized Vehicles", text: "Range Rover SVRs, G-Wagons, Bentaygas, and full-size SUVs come standard in Fort Lauderdale. We've installed full body PPF on every one of them, with films and curing schedules optimized for the larger surface area." },
      { icon: "sun", title: "Marine-Adjacent Salt-Air Protection", text: "Like Miami Beach, Fort Lauderdale's proximity to saltwater is paint's worst enemy. XPEL Fusion Plus ceramic coating is the only realistic long-term defense — and we install it the way the manufacturer specifies, not the shortcut way." },
      { icon: "thermo", title: "Marine PPF & Ceramic for the Yacht Itself", text: "Beyond the car: we also install marine PPF on hulls, ceramic coating on gelcoat, and ceramic tint on yacht windshields. One studio, one trusted installer, both garages." },
    ],
    services: standardServices,
    gettingTitle: "Getting to Bespoke From Fort Lauderdale",
    gettingBody: "Our Doral facility at 7943 NW 64th St is approximately 35 minutes south of Fort Lauderdale via I-95 South to NW 79th St. For Broward clients, concierge pickup is the recommended path — vehicle is collected, transported, installed, and returned without you making the drive.",
    faq: [
      { question: "Do you pick up vehicles from Fort Lauderdale?", answer: "Yes — daily concierge pickup from Las Olas, Coral Ridge, Rio Vista, Harbor Beach, Lauderdale-by-the-Sea, Pompano, and surrounding Broward neighborhoods." },
      { question: "How long does the round trip take?", answer: "Same-day return for tint and small jobs (collected by 9 AM, returned by 6 PM). Next-day for Full Front PPF. Multi-day for Full Body — we coordinate alternate transport." },
      { question: "Will ceramic coating hold up to Fort Lauderdale's salt and sun?", answer: "Yes — XPEL Fusion Plus is engineered for coastal high-UV environments and carries a 10-year manufacturer warranty." },
      { question: "Do you do marine PPF and ceramic on yachts?", answer: "Yes — we install marine-grade XPEL PPF on hulls and ceramic coating on gelcoat. Separate scheduling, dock-side or marina coordination available." },
      { question: "What's the closest XPEL Authorized Dealer to Fort Lauderdale?", answer: "Bespoke Auto Design — 35 minutes south in Doral, with daily Broward concierge pickup. The most experienced XPEL studio serving Fort Lauderdale's luxury and exotic owners." },
    ],
    finalCtaTitle: "Ready to Protect Your Fort Lauderdale Vehicle?",
    finalCtaNote: "Get a free quote within 30 minutes — currently booking 1-2 weeks out",
    metaTitle: "Fort Lauderdale PPF, Ceramic Coating & Tint | Bespoke Auto Design",
    metaDescription: "XPEL paint protection film, ceramic coating, and tint for Fort Lauderdale daily drivers and exotic owners. Broward concierge pickup, climate-controlled Miami install bay. (786) 395-9172.",
  },
];

export const getServiceAreaContent = (slug: string) =>
  serviceAreaContent.find((c) => c.slug === slug)!;