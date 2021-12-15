import { extent, scaleLinear } from "d3";
import { Grid } from "@mui/material";
import { Axis } from "./Mark/axis";
import { Chart } from "./Mark/chart";

// #region Basic Dimension
const height = 500;
const width = 700;

const margin = { top: 25, right: 20, bottom: 100, left: 100 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
//#endregion Basic Dimension

// #region axis Scale_Value
const xValue = (d) => d["Cmp"] / d["90s"];
const xAxisTitle = "Umpan Sukses p90";
const yValue = (d) => d["PrgDist"] / d["90s"] / (d["TotDist"] / d["90s"]);
const yAxisTitle = "ratio umpan progressif p90";

const xScale = scaleLinear().range([0, innerWidth]);
const yScale = scaleLinear().range([innerHeight, 0]);
//#endregion

// #region Mark/Chart properties
const circleRadius = 14;
//#endregion

export const App = (props) => {
  const { data } = props;

  xScale.domain(extent(data, xValue)).nice();
  yScale.domain(extent(data, yValue)).nice();

  // console.log(data[0]["Population"]);
  return (
    <Grid container>
      <Grid xs={12} item>
        <h1>Progression and passes</h1>
      </Grid>
      <Grid xs={12} item>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <Axis
              innerWidth={innerWidth}
              innerHeight={innerHeight}
              xScale={xScale}
              yScale={yScale}
              xAxisTitle={xAxisTitle}
              yAxisTitle={yAxisTitle}
            />

            <Chart
              data={data}
              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              r={circleRadius}
            />
          </g>
        </svg>
      </Grid>
    </Grid>
  );
};
