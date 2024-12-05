import { useState, useEffect } from "react";
import { csv } from "d3";

const ACCIDENT_URL =
  "https://gist.githubusercontent.com/ajie31/4bd3c11af2a2ae09acf82f0601c35f85/raw/e0fda5bda3c36733d78085564e7f5db8de0a14df/accident_usa_2016.csv";

export const GetData = () => {
  const [dataset, setdataset] = useState();

  const row = (d) => {
    delete d[""];
    d["accident_id"] = +d["accident_id"];
    d["time"] = Date.parse(d["time"]);
    d["latitude"] = +d["latitude"];
    d["longitude"] = +d["longitude"];
    d["month"] = +d["month"];
    d["hour"] = +d["hour"];
    d["day"] = +d["day"];
    d["speed"] = +d["speed"];
    return d;
  };

  useEffect(() => {
    csv(ACCIDENT_URL, row).then((accident) => {
      const sorted = accident.sort((a, b) => a.time - b.time);
      setdataset(sorted);
    });
  }, []);
  return dataset;
};
// ""
// accident_id: "63236"
// d_distraction: "Not Distracted"
// d_impairment: "None/Apparently Normal"
// d_vision: "No Obstruction Noted"
// day: "23"
// hour: "6"
// is_speeding: "No"
// latitude: "34.04844444"
// light_condition: "Daylight"
// longitude: "-118.44804167"
// month: "11"
// pop_area: "Urban"
// rd_allignment: "Curve Left"
// rd_grade: "Downhill"
// speed: "65"
// state: "California"
// surface_cond: "Dry"
// surface_type: "Concrete"
// time: "2016-11-23 06:43:00+00:00"
// weather: "Clear"
