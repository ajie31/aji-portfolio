import { extent, scaleLinear } from "d3";
import React from "react";
import { Axis } from "./axis";
import { Chart } from "./chart";

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
const yValue = (d) => d["PrgDist"] / d["90s"];
const yAxisTitle = "Jarak Umpan Progresif p90";

const xScale = scaleLinear().range([0, innerWidth]);
const yScale = scaleLinear().range([innerHeight, 0]);
//#endregion

// #region Mark/Chart properties
const circleRadius = 7;
//#endregion

export const App = (props) => {
  const { data } = props;

  xScale.domain(extent(data, xValue)).nice();
  yScale.domain(extent(data, yValue)).nice();

  // console.log(data[0]["Population"]);
  return (
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
  );
};
