// Google Places API config
export const GOOGLE_PLACES_API_KEY = "AIzaSyAO02l0QEgOZJtXklf1vE_qNRpEpeAk_N4";
export const GOOGLE_PLACE_ID = "ChIJP8iFysu72YgRXIwYjMCWrEQ";

// ── Vehicle types ──────────────────────────────────────────
export type VehicleType = "Coupe" | "Sedan" | "SmallSUV" | "LargeSUV" | "Truck" | "Exotic";

export const vehicleTypes: { key: VehicleType; label: string; sub: string }[] = [
  { key: "Coupe", label: "Coupe / 2-Door", sub: "Sports cars, coupes" },
  { key: "Sedan", label: "Sedan", sub: "4-door sedans" },
  { key: "SmallSUV", label: "Small SUV", sub: "Macan, Evoque, Model Y" },
  { key: "LargeSUV", label: "Large SUV", sub: "Range Rover, G-Wagon, Cayenne, Cullinan" },
  { key: "Truck", label: "Truck", sub: "Pickup trucks" },
  { key: "Exotic", label: "Exotic / Supercar", sub: "Ferrari, Lambo, McLaren" },
];

// ── Service types ──────────────────────────────────────────
export type ServiceType = "ppf" | "coating" | "tint" | "wrap";

export const serviceOptions: { key: ServiceType; label: string }[] = [
  { key: "ppf", label: "Paint Protection Film (PPF)" },
  { key: "coating", label: "Ceramic Coating" },
  { key: "tint", label: "Ceramic Window Tint" },
  { key: "wrap", label: "Color Change Wrap" },
];

// ── Package types per service ──────────────────────────────
export type PPFPackage = "fullFront" | "track" | "fullBody";
export type CoatingPackage = "entry" | "fusionPlus";
export type TintPackage = "front2" | "allWindows";

export const WINDSHIELD_ADDON: [number, number] = [180, 250];
export type WrapPackage = "standard" | "premium";

export const ppfPackages: { key: PPFPackage; label: string }[] = [
  { key: "fullFront", label: "Full Front" },
  { key: "track", label: "Track Package" },
  { key: "fullBody", label: "Full Body" },
];
export const coatingPackages: { key: CoatingPackage; label: string }[] = [
  { key: "entry", label: "1–2 Year Ceramic" },
  { key: "fusionPlus", label: "3–5 Year Ceramic" },
];
export const tintPackages: { key: TintPackage; label: string }[] = [
  { key: "front2", label: "Front 2 Windows" },
  { key: "allWindows", label: "All Windows" },
];
export const wrapPackages: { key: WrapPackage; label: string }[] = [
  { key: "standard", label: "Standard Finish (Gloss / Satin / Matte)" },
  { key: "premium", label: "Premium Finish (Satin Chrome / Color-Shift / Specialty)" },
];

// ── Price lookup [min, max] ────────────────────────────────
type PriceRange = [number, number];
type VehiclePriceMap = Record<VehicleType, PriceRange>;

export const ppfPricing: Record<PPFPackage, VehiclePriceMap> = {
  fullFront: { Coupe: [1499, 1899], Sedan: [1599, 1999], SmallSUV: [1799, 2199], LargeSUV: [2199, 2799], Truck: [1999, 2499], Exotic: [2499, 3199] },
  track: { Coupe: [2499, 2999], Sedan: [2599, 3099], SmallSUV: [2899, 3499], LargeSUV: [3399, 3999], Truck: [3199, 3799], Exotic: [3799, 4499] },
  fullBody: { Coupe: [4500, 5500], Sedan: [4800, 5800], SmallSUV: [5200, 6200], LargeSUV: [5500, 7000], Truck: [5500, 6800], Exotic: [6500, 8000] },
};

export const coatingPricing: Record<CoatingPackage, VehiclePriceMap> = {
  entry: { Coupe: [599, 749], Sedan: [649, 799], SmallSUV: [699, 849], LargeSUV: [799, 999], Truck: [749, 949], Exotic: [899, 1099] },
  fusionPlus: { Coupe: [799, 999], Sedan: [849, 1049], SmallSUV: [899, 1099], LargeSUV: [999, 1299], Truck: [949, 1199], Exotic: [1099, 1399] },
};

export const tintPricing: Record<TintPackage, VehiclePriceMap> = {
  front2: { Coupe: [149, 199], Sedan: [149, 199], SmallSUV: [169, 219], LargeSUV: [199, 249], Truck: [149, 199], Exotic: [169, 219] },
  allWindows: { Coupe: [399, 499], Sedan: [449, 549], SmallSUV: [499, 599], LargeSUV: [599, 799], Truck: [399, 499], Exotic: [449, 569] },
};

export const wrapPricing: Record<WrapPackage, VehiclePriceMap> = {
  standard: { Coupe: [2500, 3500], Sedan: [2700, 3700], SmallSUV: [2999, 3999], LargeSUV: [3499, 4499], Truck: [3299, 4299], Exotic: [3799, 4999] },
  premium: { Coupe: [3500, 4500], Sedan: [3700, 4700], SmallSUV: [4000, 5000], LargeSUV: [4500, 6500], Truck: [4200, 5500], Exotic: [5000, 7500] },
};
