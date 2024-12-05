import { Grid, Container, Slider, Box } from "@mui/material";
import { useState } from "react";
import { Chart } from "./Components/Chart/chart";
import { getData } from "./Components/data/get_data";
// const hourMarks = [
//   {
//     value: 6,
//     label: "6 AM",
//   },
//   {
//     value: 12,
//     label: "12 PM",
//   },
//   {
//     value: 18,
//     label: "6 PM",
//   },
// ];
const title = "Jumlah Kecelakaan Setiap Bulan";
export const Ridgeline = () => {
  const data = getData();
  // const [hour, setHour] = useState([1, 24]);

  if (!data) {
    return <pre>Loading Data ...</pre>;
  }
  const onHourChange = (event, newHour) => {
    setHour(newHour);
  };

  return (
    <Container>
      <Grid container>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          item
        >
          <h1> {title} </h1>
          <Box style={{ width: "300px" }}>
            <Slider
              getAriaLabel={() => "Hours"}
              value={hour}
              onChange={onHourChange}
              marks={hourMarks}
              valueLabelDisplay="auto"
              getAriaValueText={(hour) => `${hour}`}
              max={24}
              min={1}
            />
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Chart data={data} hours={hour} />
        </Grid>
        <Grid item>{/* caption footer */}</Grid>
      </Grid>
    </Container>
  );
};
