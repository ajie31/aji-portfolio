import { Container, Grid, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { SetDataDriver, SetDataLapTime } from "./Components/data/getData";

import { TopLayout } from "./Components/Layout/topLayout";
import { ChartLayout } from "./Components/Layout/chartLayout";

export const F1Laptime = () => {
  const [dataDriver, setDataDriver] = useState(null);
  const [dataLapTime, setLapTime] = useState(null);

  useEffect(() => {
    SetDataDriver(setDataDriver);
    SetDataLapTime(setLapTime);
  }, []);
  if (!dataDriver || !dataLapTime) {
    return <pre>Loading...</pre>;
  }

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
        <TopLayout Grid={Grid} />
        <ChartLayout
          dataLapTime={dataLapTime}
          dataDriver={dataDriver}
          Grid={Grid}
        />
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};
