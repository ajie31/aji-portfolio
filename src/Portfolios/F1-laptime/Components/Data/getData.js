import { csv } from "d3";

const DATA_DRIVER_URI =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/DriverId.csv";
const DATA_LAPTIME_URI =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/F1%2520lap%2520time%25202022.csv";
// ?dATA cOLUMNS No,Name,Squad,Post,Nation,Age,Height,Appr,Goal,Asst,PassCMP%,AttPen,NpXgXa,SCA,Tkl,Inter,Block,PPass,Pcarry,Press,URIPict
export const SetDataLapTime = (setData) => {
  /**  Data Columns
     0: "raceId"
    1: "driverId"
    2: "lap"
    3: "position"
    4: "time"
    5: "milliseconds"*/

  const newRow = (d) => {
    d["raceId"] = +d["raceId"];
    d["driverId"] = +d["driverId"];
    d["lap"] = +d["lap"];
    d["position"] = +d["position"];
    d["milliseconds"] = +d["milliseconds"];
    return d;
  };

  csv(DATA_LAPTIME_URI, newRow).then((laptime) => {
    console.log(laptime[0]);
    setData(laptime);
  });
};
export const SetDataDriver = (setData) => {
  const driverDictionary = new Map();
  /** Columns Data
    0: "driverId"
    1: "driverRef"
    2: "number"
    3: "code"
    4: "forename"
    5: "surname"
    6: "dob"
    7: "nationality"
    8: "url"*/

  const newRow = (d) => {
    d["number"] = +d["number"];
    d["driverId"] = +d["driverId"];
    return d;
  };

  csv(DATA_DRIVER_URI, newRow).then((driver) => {
    console.log(driver[0]);
    driver.map((d) => driverDictionary.set(d["driverId"], d));
    setData(driverDictionary);
  });
};
