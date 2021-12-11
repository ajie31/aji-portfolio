import { useState, useEffect } from "react";
import { csv } from "d3";

const DATA_URI_PASS =
  "https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/progress%2520pass%2520only.csv";

const row = (d) => {
  d["90s"] = +d["90s"];
  d["Att"] = +d["Att"];
  d["Cmp"] = +d["Cmp"];
  d["Cmp%"] = +d["Cmp%"];
  d["TotDist"] = +d["TotDist"];
  d["PrgDist"] = +d["PrgDist"];
  d["Prog"] = +d["Prog"];
  return d;
};
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
