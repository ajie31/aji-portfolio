import { extent, scaleLinear } from "d3";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Axis } from "./Mark/axis";
import { Chart } from "./Mark/chart";
import { SelectMenu } from "./Top Layout/selectMenu";
// #region Basic Dimension
const height = 500;
const width = 700;

const margin = { top: 25, right: 20, bottom: 100, left: 100 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
//#endregion Basic Dimension

const attributes = [
  { index: 0, value: (d) => d["DrbSucc"] / d["90s"], label: "Dribling p90" },
  { index: 1, value: (d) => d["Poss"], label: "Penguasaan Bola" },
  {
    index: 2,
    value: (d) => d["PrgDist"] / d["90s"] / (d["TotDist"] / d["90s"]),
    label: "ratio Jarak Umpan Progressif p90",
  },
  {
    index: 3,
    value: (d) => d["ScaPassLive"] / d["90s"],
    label: "SCA Pada Umpan Bola Hidup p90",
  },
  { index: 4, value: (d) => d["Cmp"] / d["90s"], label: "Umpan Sukses p90" },
  { index: 5, value: (d) => d["SCA"] / d["90s"], label: "SCA p90" },
  { index: 6, value: (d) => d["GCA"] / d["90s"], label: "GCA p90" },
];
//Squad,90s,Cmp,Att,Cmp%,TotDist,PrgDist,Prog,ScaPassLive,GcaPassLive,SCA,GCA,DrbSucc,DrbAtt,Poss

// #region Mark/Chart properties
const circleRadius = 14;
//#endregion

export const App = (props) => {
  const { data } = props;
  const [xAxis, setXAxis] = useState(attributes[4]);
  const [yAxis, setYAxis] = useState(attributes[2]);

  // #region axis Scale_Value
  const xValue = xAxis.value;
  const xAxisTitle = xAxis.label;
  const yValue = yAxis.value;
  const yAxisTitle = yAxis.label;

  const xScale = scaleLinear()
    .range([0, innerWidth])
    .domain(extent(data, xValue))
    .nice();
  const yScale = scaleLinear()
    .range([innerHeight, 0])
    .domain(extent(data, yValue))
    .nice();

  const callbackChangeXAxis = (event) => {
    setXAxis(attributes[event.target.value]);
  };
  const callbackChangeYAxis = (event) => {
    setYAxis(attributes[event.target.value]);
  };
  //#endregion

  // console.log(data[0]["Population"]);
  return (
    <Grid container>
      <Grid xs={12} item>
        <SelectMenu
          label="X Axis"
          options={attributes}
          selectedAttr={xAxis.index}
          onChangeAttribute={callbackChangeXAxis}
        />
        <SelectMenu
          label="Y Axis"
          options={attributes}
          selectedAttr={yAxis.index}
          onChangeAttribute={callbackChangeYAxis}
        />
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
