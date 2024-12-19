// import {nextConne}
// const MongoClient = require('mongodb').MongoClient;
const DATA_URI_PASS_TYPE =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/passtype18th%2520week.csv";

const DATA_URI_CP =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/processedPassCarries18thWeek.csv";
//ScaPassLive,GcaPassLive,SCA,GCA,DrbSucc,DrbAtt,Poss

export const GetDataPassTypeMongo = async (season) => {
  const URI_DATA_PASS_TYPE = `https://fbref-data-api.vercel.app/data_pass_type/${season}`;
  try {
    const response = await fetch(URI_DATA_PASS_TYPE);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data_pass_type = await response.json();
    if (!data_pass_type.features) {
      console.error("data_pass_type.features is not defined", data_pass_type);
      return [];
    }
    return data_pass_type.features;
  } catch (error) {
    console.error("Error fetching data from Pass Type:", error);
    return [];
  }
};

export const GetPCGDataMongo = async (season) => {
  const URI_DATA_PCG = `https://fbref-data-api.vercel.app/data_pcg/${season}`;
  try {
    const response = await fetch(URI_DATA_PCG);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data_pcg = await response.json();
    if (!data_pcg.features) {
      console.error("data_pcg.features is not defined", data_pcg);
      return [];
    }
    return data_pcg.features;
  } catch (error) {
    console.error("Error fetching data from PCG:", error);
    return [];
  }
};
