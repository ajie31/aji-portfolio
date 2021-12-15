import { useState, useEffect } from "react";
import { csv } from "d3";

const DATA_URI_PASS =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/6fa85080ee287c7be18c5d78c5a8064ce88f6b2b/progress%2520possession.csv";

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
//ScaPassLive,GcaPassLive,SCA,GCA,DrbSucc,DrbAtt,Poss
export const GetDataPass = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(DATA_URI_PASS, row).then((passing_data) => {
      console.log(passing_data);
      setData(passing_data);
    });
  }, []);

  return data;
};
