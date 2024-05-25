// import types from types
import {CropDataProps,MaxMinProps,averageDataProps, AverageCropArrayProps, cropObjectArrayProps} from "../assets/constants/types"

export const maxMinData = (data: CropDataProps[]): MaxMinProps[] => {
    // create a empty object for holding values 
    const yearData: cropObjectArrayProps = {}
  
    // iterate through the data to check every year
    data.forEach((item) => {
      const year = item.Year.split(",")[1].trim();
      const production = item["Crop Production (UOM:t(Tonnes))"];
  
      if (production === "") return;
  
      if (!yearData[year]) {
        yearData[year] = [];
      }
  
    //   store the element to the created empty object
      yearData[year].push({
        crop: item["Crop Name"],
        cropProduction: item["Crop Production (UOM:t(Tonnes))"],
        production: +production,
      });
    });
  
    // using reduce function to find max value from each year iterationg through the yeardata object
    const result = Object.keys(yearData).map((year) => {
      const crops = yearData[year];
      const maxCrop = crops.reduce(
        (max, crop) => (crop.production > max.production ? crop : max),
        crops[0]
      );
      const minCrop = crops.reduce(
        (min, crop) => (crop.production < min.production ? crop : min),
        crops[0]
      );
      const maxCropNumber = crops.reduce(
        (max, crop) => (crop?.cropProduction > max?.cropProduction ? crop : max),
        crops[0]
      );
  
      return {
        year,
        maxCrop: maxCrop.crop,
        minCrop: minCrop.crop,
        cropProduction: maxCropNumber?.cropProduction,
      };
    });
  
    return result;
  };
  
   
export const averageData = (data: CropDataProps[]): averageDataProps[] => {
    // created empty object
      const cropData: {
        [crop: string]: { totalYield: number; totalArea: number; count: number };
      } = {};
  
    // iterate through the aggriculture data from the json file
    data.forEach((item) => {
      const yieldStr = item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
      const areaStr = item["Area Under Cultivation (UOM:Ha(Hectares))"];
      const cropName = item["Crop Name"];
      const yieldValue = yieldStr;
      const areaValue = areaStr;
  
      if (yieldValue === "" || areaValue === "") return;
  
      if (!cropData[cropName]) {
        cropData[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
      }
//   adding the count variable every time a value repeats and also their yield and total area value
      cropData[cropName].totalYield += +yieldValue;
      cropData[cropName].totalArea += +areaValue;
      cropData[cropName].count += 1;
    });
  
    const result: averageDataProps[] = Object.keys(cropData).map((crop) => {
      const { totalYield, totalArea, count } = cropData[crop];
      return {
        crop,
        averageYield: totalYield / count,
        averageArea: totalArea / count,
      };
    });
  
    return result;
  };
  