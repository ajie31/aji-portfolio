import { useState, useEffect } from "react";
import { csv } from "d3";

const DATA_URI_PASS =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/7aa6e156d6d3a434d6b178d3f142edc10b46f976/progress%2520possession.csv";
const DATA_URI_TOUCH =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/touchesCarries.csv";

const DATA_URI_CP =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/processedPassCarries18thWeek.csv";
//ScaPassLive,GcaPassLive,SCA,GCA,DrbSucc,DrbAtt,Poss
export const GetDataPass = () => {
  const [data, setData] = useState(null);
  const row = (d) => {
    d["90s"] = +d["90s"];
    d["Att"] = +d["Att"];
    d["Cmp"] = +d["Cmp"];
    d["Cmp%"] = +d["Cmp%"];
    d["TotDist"] = +d["TotDist"];
    d["PrgDist"] = +d["PrgDist"];
    d["Prog"] = +d["Prog"];
    d["ScaPassLive"] = +d["ScaPassLive"];
    d["GcaPassLive"] = +d["GcaPassLive"];
    d["SCA"] = +d["SCA"];
    d["GCA"] = +d["GCA"];
    d["DrbSucc"] = +d["DrbSucc"];
    d["DrbAtt"] = +d["DrbAtt"];
    d["Poss"] = +d["Poss"];
    return d;
  };
  useEffect(() => {
    csv(DATA_URI_PASS, row).then((passing_data) => {
      // console.log(passing_data);
      setData(passing_data);
    });
  }, []);

  return data;
};

export const GetDataTouchCarries = () => {
  const [data, setData] = useState(null);
  const row = (d) => {
    d["90s"] = +d["90s"];
    d["Touches"] = +d["Touches"];
    d["Def 3rd"] = +d["Def 3rd"];
    d["Mid 3rd"] = +d["Mid 3rd"];
    d["Att 3rd"] = +d["Att 3rd"];
    d["Att Pen"] = +d["Att Pen"];
    d["Carries"] = +d["Carries"];
    d["CarrTotDist"] = +d["CarrTotDist"];
    d["CarrPrgDist"] = +d["CarrPrgDist"];
    d["CarrProg"] = +d["CarrProg"];
    d["Carr1/3"] = +d["Carr1/3"];
    d["CPA"] = +d["CPA"];
    d["Poss"] = +d["Poss"];
    return d;
  };
  //Squad,Poss,90s,Touches,Def 3rd,Mid 3rd,Att 3rd,Att Pen,Carries,
  //CarrTotDist,CarrPrgDist,CarrProg,Carr1/3,CPA
  useEffect(() => {
    csv(DATA_URI_TOUCH, row).then((touch_data) => {
      // console.log(touch_data);
      setData(touch_data);
    });
  }, []);

  return data;
};

export const GetProcessedData = () => {
  const [data, setData] = useState(null);
  let val = 0;
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
      console.log(selected_data);
      setData(selected_data);
    });
  }, []);

  return data;
};
