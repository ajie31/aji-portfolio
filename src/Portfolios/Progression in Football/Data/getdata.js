import { useState, useEffect } from "react";
import { csv } from "d3";
import { MongoClient } from "mongodb";
// const MongoClient = require('mongodb').MongoClient;
const DATA_URI_PASS_TYPE =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/passtype18th%2520week.csv";

const DATA_URI_CP =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/processedPassCarries18thWeek.csv";
//ScaPassLive,GcaPassLive,SCA,GCA,DrbSucc,DrbAtt,Poss
const URL_MONGO = "mongodb://localhost:27017/fbref_data";
export const GetDataPassType = () => {
  const [data, setData] = useState(null);
  const row = (d) => {
    d["90s"] = +d["90s"];
    d["Short"] = +d["Short"];
    d["Medium"] = +d["Medium"];
    d["Long"] = +d["Long"];
    // d["Ground"] = +d["Ground"];
    // d["Low"] = +d["Low"];
    // d["High"] = +d["High"];
    d["Cmp%"] = +d["Cmp%"];
    return d;
  };

  useEffect(() => {
    client = MongoClient.connect((err, db) => {
      if (err) throw err;
      var dbo = db.db("fbref_data").collection("pass_carry_gca");
    });

    // csv(DATA_URI_PASS_TYPE, row).then((pass_type) => {
    //   console.log(pass_type);
    //   setData(pass_type);
    // });
  }, []);

  return data;
};

export const GetProcessedData = () => {
  const [data, setData] = useState(null);
  const row = (d) => {
    const keys = [
      "Squad",
      "# Pl",
      "Poss",
      "90s",
      "Carries",
      "CTotDist",
      "CPrgDist",
      "CProg",
      "C 1/3",
      "CPA",
      "CMis",
      "CDis",
      "DSucc",
      "DAtt",
      "DPassed",
      "PCmp",
      "PAtt",
      "PTotDist",
      "PPrgDist",
      "PProg",
      "P 1/3",
      "PPA",
      "CrsPA",
      "SCA",
      "SCADrib",
      "SCAPassLive",
      "SCAPassDead",
      "GCA",
      "GCADrib",
      "GCAPassLive",
      "GCAPassDead",
      "xG",
      "Pts",
    ];
    keys.map((key) => (key !== "Squad" ? (d[key] = +d[key]) : d[key]));

    return d;
  };
  // Squad,# Pl,Poss,90s,Carries,CTotDist,CPrgDist,CProg,C 1/3,CPA
  // ,CMis,CDis,DSucc,DAtt,DPassed,PCmp,PAtt,PTotDist,PPrgDist,PProg,P 1/3,PPA,CrsPA
  useEffect(() => {
    csv(DATA_URI_CP, row).then((selected_data) => {
      setData(selected_data);
    });
  }, []);

  return data;
};
