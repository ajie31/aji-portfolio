import { Chart } from "../Chart/Chart";
export const ChartLayout = ({ dataLapTime, dataDriver, Grid }) => {
  return (
    <Grid item>
      <Chart dataLapTime={dataLapTime} dataDriver={dataDriver}></Chart>
    </Grid>
  );
};
