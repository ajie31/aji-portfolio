import { useState, useEffect } from "react";
import { csv, json } from "d3";

// import {nextConne}
// const MongoClient = require('mongodb').MongoClient;
const DATA_URI_PASS_TYPE =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/passtype18th%2520week.csv";

const DATA_URI_CP =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/processedPassCarries18thWeek.csv";
//ScaPassLive,GcaPassLive,SCA,GCA,DrbSucc,DrbAtt,Poss
const URI_DATA_PT =
  "https://fbref-data-api.vercel.app/data_pass_type/2022_2023";
const URI_DATA_PCG = "https://fbref-data-api.vercel.app/data_pcg/2022_2023";

export const GetDataPassTypeMongo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(URI_DATA_PT).then((pass_type) => {
      console.log(pass_type);
      setData(pass_type["features"]);
    });
    // fetchDataPCG();
  }, []);

  return data;
};

export const GetPCGDataMongo = () => {
  const [data, setData] = useState(null);

  // Squad,# Pl,Poss,90s,Carries,CTotDist,CPrgDist,CProg,C 1/3,CPA
  // ,CMis,CDis,DSucc,DAtt,DPassed,PCmp,PAtt,PTotDist,PPrgDist,PProg,P 1/3,PPA,CrsPA

  useEffect(() => {
    // fetchDataPCG();
    json(URI_DATA_PCG).then((data_pcg) => {
      console.log(data_pcg);
      setData(data_pcg["features"]);
    });
  }, []);

  return data;
};
