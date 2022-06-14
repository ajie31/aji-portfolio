import { csv } from "d3";
import { createDriverListt } from "./dataProcess";

const DATA_DRIVER_URI =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/DriverId.csv";
const DATA_LAPTIME_URI =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/F1%2520lap%2520time%25202022.csv";
const DATA_STANDING_SEASON =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/standing.csv";
const DATA_CIRCUIT_URI =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/raceAndCircuit.csv";
const PITSTOPDATA_URI =
  "https://gist.githubusercontent.com/ajie31/1eb7b91b8e16a072bcda1454e954dab1/raw/pitStopData.csv";
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
    // console.log(laptime[0]);

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
    // console.log(driver);

    driver.map((d) => driverDictionary.set(d["driverId"], d));

    setData(driverDictionary);
  });
};

export const setCircuitData = (setData) => {
  /**  Data Columns
    raceId,
    driverId,
    stop
    ,lap
    ,time
    ,duration
    ,milliseconds*/

  const newRow = (d) => {
    d["raceId"] = +d["raceId"];
    d["year"] = +d["year"];
    d["round"] = +d["round"];
    d["circuitId"] = +d["circuitId"];

    return d;
  };

  csv(DATA_CIRCUIT_URI, newRow).then((circuit) => {
    const selection = circuit.filter((d) => d["year"] === 2022);
    // console.log(selection);
    setData(selection);
  });
};

export const setPitStop = (setData) => {
  /**  Data Columns
    raceId,
    driverId,
    stop
    ,lap
    ,time
    ,duration
    ,milliseconds*/

  const newRow = (d) => {
    d["raceId"] = +d["raceId"];
    d["driverId"] = +d["driverId"];
    d["stop"] = +d["stop"];
    d["lap"] = +d["lap"];
    d["duration"] = +d["duration"];
    d["milliseconds"] = +d["milliseconds"];
    return d;
  };

  csv(PITSTOPDATA_URI, newRow).then((pitStop) => {
    setData(pitStop);
  });
};

export const driverParticipant = (dataLapTime, dataDriver) => {
  const driverSurname = (d) => dataDriver.get(d["driverId"])["surname"];
  const driverForeName = (d) => dataDriver.get(d["driverId"])["forename"];
  const driverId = (d) => dataDriver.get(d["driverId"])["code"];
  const list = createDriverListt(
    dataLapTime,
    driverId,
    driverSurname,
    driverForeName
  );
  return list;
};
export const driverParticipant_1 = (dataStanding, dataDriver) => {
  const list = Array.from(dataStanding, ([key, value]) => {
    return {
      ...dataDriver.get(key),
      points: value["points"],
      standing: value["position"],
    };
  }).sort((a, b) => b.points - a.points);

  return list;
};
export const SetStanding = (setData) => {
  const selectedStanding = new Map();
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
    d["position"] = +d["position"];
    d["raceId"] = +d["raceId"];
    d["points"] = +d["points"];
    return d;
  };

  csv(DATA_STANDING_SEASON, newRow).then((standing) => {
    const select = standing.filter(
      (d) => d["raceId"] === standing[standing.length - 1]["raceId"]
    );
    select.map((d) => selectedStanding.set(d["driverId"], d));
    setData(selectedStanding);
  });
};
