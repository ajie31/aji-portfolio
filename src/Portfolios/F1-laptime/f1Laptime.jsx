import { Container, Grid } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import {
  SetDataDriver,
  SetDataLapTime,
  driverParticipant,
  setPitStop,
  setCircuitData,
  SetStanding,
  driverParticipant_1,
} from "./Components/data/getData";

import { TopLayout } from "./Components/Layout/topLayout";
import { ChartLayout } from "./Components/Layout/chartLayout";

export const F1Laptime = () => {
  const [dataDriver, setDataDriver] = useState(null);
  const [dataLapTime, setLapTime] = useState(null);
  const [dataStanding, setDataStanding] = useState(null);
  const [driverToShow, setDriverToShow] = useState(null);
  const [selectedDrivers, setSelectedDrivers] = useState({
    drivers: [],
    difference: null,
    isAddition: false,
  });
  const [selectedRace, setSelectedRace] = useState(1075);
  const [pitStopData, setPitStopData] = useState(null);
  const [circuit, setCircuit] = useState(null);
  const xAxisRef = useRef(null);
  const markRef = useRef(null);

  useEffect(() => {
    SetDataDriver(setDataDriver);
    SetDataLapTime(setLapTime);
    setPitStop(setPitStopData);
    setCircuitData(setCircuit);
    SetStanding(setDataStanding);
  }, [
    SetDataDriver,
    SetDataLapTime,
    setPitStop,
    setDataDriver,
    setLapTime,
    setPitStopData,
    setCircuitData,
    setCircuit,
    setDataStanding,
    SetStanding,
  ]);
  if (
    !dataDriver ||
    !dataLapTime ||
    !pitStopData ||
    !circuit ||
    !selectedRace ||
    !dataStanding
  ) {
    return <pre>Loading...</pre>;
  }

  //? Filter Driver and race
  const filterredRace = dataLapTime.filter((d) => d["raceId"] === selectedRace);
  const recentDriverParticipants = driverParticipant_1(
    dataStanding,
    dataDriver
  );
  const lastRace = dataLapTime[dataLapTime.length - 1]["raceId"];

  const handleSelectDriver = (event, newDrivers) => {
    const drivers = selectedDrivers.drivers;
    const updateDriver = {
      drivers: newDrivers,
      difference:
        newDrivers.length > drivers.length
          ? newDrivers[newDrivers.length - 1]
          : drivers.filter((x) => !newDrivers.includes(x))[0],
      isAddition: !event.currentTarget.classList.contains("Mui-selected"),
    };
    setSelectedDrivers(updateDriver);
  };
  const handleSelectRace = (event) => {
    setSelectedRace(+event.target.value);
    setSelectedDrivers({
      drivers: [],
      difference: null,
      isAddition: false,
    });
  };
  const handleSelectDriverToShow = (event) => {
    const driverId = +event.target.dataset.id;
    setDriverToShow({
      standing: dataStanding.get(driverId),
      driver: dataDriver.get(driverId),
    });
  };

  const driverToRender = selectedDrivers.drivers.map((d) => dataDriver.get(d));
  // console.log(
  //   pitStopData.filter(
  //     (d) =>
  //       d["raceId"] === selectedRace && d["driverId"] === 844 && d["lap"] === 15
  //   ).length > 0
  // );
  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={1}>
        <TopLayout
          Grid={Grid}
          handleSelectRace={handleSelectRace}
          circuit={circuit}
          selectedRace={selectedRace}
          lastRace={lastRace}
        />
        <ChartLayout
          dataLapTime={filterredRace}
          dataDriver={dataDriver}
          driverToShow={driverToShow}
          recentDriverParticipants={recentDriverParticipants}
          Grid={Grid}
          selectedDrivers={selectedDrivers}
          handleSelectDriver={handleSelectDriver}
          handleSelectDriverToShow={handleSelectDriverToShow}
          driverToRender={driverToRender}
          pitStopData={pitStopData}
          xAxisRef={xAxisRef}
          markRef={markRef}
        />
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};
