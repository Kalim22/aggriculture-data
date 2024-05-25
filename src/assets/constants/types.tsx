export interface CropDataProps {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": number | string;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | string;
  "Area Under Cultivation (UOM:Ha(Hectares))": number | string;
}

export interface MaxMinProps {
  year: string;
  maxCrop: string;
  minCrop: string;
  cropProduction: number | string;
}

export interface averageDataProps {
  crop: string;
  averageYield: number;
  averageArea: number;
}
