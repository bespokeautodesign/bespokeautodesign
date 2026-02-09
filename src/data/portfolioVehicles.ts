export interface PortfolioVehicle {
  id: number;
  name: string;
  image: string;
  year: string;
}

export interface VinylWrapVehicle {
  id: number;
  name: string;
  beforeImage: string;
  afterImage: string;
  year: string;
}

export const clearPPFVehicles: PortfolioVehicle[] = [
  { id: 1, name: "Ferrari California T", image: "/lovable-uploads/ferrari-california-t.jpg", year: "2018" },
  { id: 2, name: "Rolls-Royce Cullinan", image: "/lovable-uploads/rolls-royce-cullinan.jpg", year: "2022" },
  { id: 3, name: "Ferrari LaFerrari", image: "/lovable-uploads/ferrari-laferrari-shop-enhanced.png", year: "2016" },
  { id: 4, name: "Aston Martin Vantage", image: "/lovable-uploads/06b4e251-b273-487e-8f43-394aa71342f8.png", year: "2021" },
  { id: 5, name: "2024 BMW M4", image: "/lovable-uploads/2ba942d5-5b05-4d45-8455-fd19f9b765c6.png", year: "2024" },
  { id: 6, name: "Ferrari F8 Tributo", image: "/lovable-uploads/3f1daf49-c3df-4080-ae59-f3d51dde5a5e.png", year: "2020" },
  { id: 7, name: "2024 Corvette Stingray", image: "/lovable-uploads/e1a77901-cd16-499b-9d39-f725cce775d5.png", year: "2024" },
  { id: 8, name: "Toyota Land Cruiser", image: "/lovable-uploads/fdf28998-66d9-4078-980c-8d7cb1c0485f.png", year: "2024" },
  { id: 9, name: "Ram 1500", image: "/lovable-uploads/f14f599e-ddd2-47ac-ae95-ffbcd59b8f60.png", year: "2023" },
  { id: 10, name: "Corvette Z06", image: "/lovable-uploads/e456804b-63fa-4640-bebe-d3ade09ef953.png", year: "2023" },
  { id: 11, name: "Tesla Model 3", image: "/lovable-uploads/a777b2aa-1d9f-42db-9b41-327227b99e44.png", year: "2024" },
];

export const stealthPPFVehicles: PortfolioVehicle[] = [
  { id: 1, name: "Porsche Carrera", image: "/lovable-uploads/porsche-carrera.jpg", year: "2024" },
  { id: 2, name: "Mercedes G-Wagon G63 AMG", image: "/lovable-uploads/954a24eb-a0e4-4854-a5ae-cc3558261924.png", year: "2025" },
  { id: 3, name: "2024 BMW M2", image: "/lovable-uploads/2a622203-bfde-4c8c-99bb-c9fb7ee08311.png", year: "2024" },
  { id: 4, name: "BMW X5", image: "/lovable-uploads/da44c7f8-8dcf-47d1-81f6-9171955481d6.png", year: "2024" },
  { id: 5, name: "Mercedes GLC 300 AMG", image: "/lovable-uploads/f9e187dd-581d-4e92-8353-50180501ec8a.png", year: "2023" },
  { id: 6, name: "Porsche 911", image: "/lovable-uploads/562b3389-466e-41a1-ac50-df897f65bde7.png", year: "2024" },
  { id: 7, name: "Porsche Taycan", image: "/lovable-uploads/d315e50e-7d7b-4141-91a7-0c12cbb561b1.png", year: "2023" },
  { id: 8, name: "Tesla Model Y", image: "/lovable-uploads/357fab8a-95e2-43dc-a92f-5e792952f28e.png", year: "2024" },
];

export const vinylWrapVehicles: VinylWrapVehicle[] = [
  { id: 1, name: "Aston Martin DBX", beforeImage: "/lovable-uploads/714ade11-8742-4c61-b8fc-1577ddc3dceb.png", afterImage: "/lovable-uploads/19163148-510a-4a7c-9bb2-ba187ab86dc4.png", year: "2023" },
  { id: 2, name: "Mazda Miata", beforeImage: "/lovable-uploads/6313432b-9fe6-44eb-82af-82cd8cf3bc37.png", afterImage: "/lovable-uploads/57c73f3f-f506-407c-949f-9b6266f61d81.png", year: "2023" },
  { id: 3, name: "McLaren 570S", beforeImage: "/lovable-uploads/0e6ef2c1-78f7-410c-a663-0c83402a98d5.png", afterImage: "/lovable-uploads/067b368c-69cf-4e91-a81e-01263ad83820.png", year: "2019" },
];

/** Image positioning overrides for clear PPF carousel */
export const clearPPFImageStyles: Record<string, string> = {
  "Ferrari California T": "object-[center_60%]",
  "Rolls-Royce Cullinan": "object-[center_65%]",
  "Aston Martin Vantage": "object-[center_60%]",
  "Ferrari F8 Tributo": "object-[center_50%]",
};

/** Image positioning overrides for stealth PPF carousel */
export const stealthPPFImageStyles: Record<string, string> = {
  "Porsche Carrera": "object-[center_62%]",
  "2024 BMW M2": "object-[center_80%]",
  "Mercedes G-Wagon G63 AMG": "object-[center_45%]",
  "Mercedes GLC 300 AMG": "object-[center_80%]",
};
