import { Grid } from "@mui/material";
import { scaleLinear, scaleBand } from "d3";
import {
  progressByDistance,
  progressByActions,
} from "../../../../Data/dataProcess";
import { Chart } from "./Mark/chart";

const yValue = (d) => d["Squad"];
const xValue = (d) => d["Poss"];

export const App = ({ data }) => {
  // const dataByDistance = progressByDistance(data);
  // console.log(dataByDistance);

  const height = 700;
  const width = 750;

  const margin = { top: 50, right: 20, bottom: 50, left: 20 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleLinear().range([0, innerWidth]).domain([0, 200]).nice();

  const yScale = scaleBand()
    .range([0, innerHeight])
    .domain(data.map(yValue))
    .padding(0.15);

  return (
    <Grid container>
      <Grid xs={12} item></Grid>
      <Grid xs={12} item>
        <svg width={width} height={height}>
          <Chart
            data={data}
            progressByDistance={progressByDistance}
            progressByActions={progressByActions}
            yScale={yScale}
            xScale={xScale}
            xValue={xValue}
            yValue={yValue}
            margin={margin}
            innerWidth={innerWidth}
          ></Chart>
        </svg>
      </Grid>
    </Grid>
  );
};
