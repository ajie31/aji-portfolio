import { scaleLog, scaleBand, extent } from "d3";

import { Axis } from "./Axis/axis";
import { Layout } from "./Layout/layout";
import { Chart } from "./Mark/chart";
import {
  dataProcessPassXValue,
  handleSort,
} from "../../../../Data/dataProcess";
import { useState } from "react";
// #region Basic Dimension
const height = 700;
const width = 700;

const margin = { top: 50, right: -110, bottom: 150, left: 20 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
//#endregion Basic Dimension

// #region axis Scale_Value

const xAxisRows = Object.keys(dataProcessPassXValue);
const yValue = (k, d) => dataProcessPassXValue[k].value(d);

const xAxisTitle = "Umpan Sukses p90";
const yAxisTitle = "ratio umpan progressif p90";

const xScale = scaleBand()
  .range([0, innerWidth])
  .domain(xAxisRows)
  .paddingOuter(0.2);
const yScale = scaleLog().range([innerHeight, 0]);
//#endregion

// #region Mark/Chart properties
const circleRadius = 7.14;
const selectedProps = { radius: 15, stroke: 3.7, color: "#8e6c8a" };
//#endregion

export const App = (props) => {
  const { data } = props;
  const [selectedSquad, setSquad] = useState(null);
  // yScale.domain(extent(data, yValue)).nice();

  // *Set Squad Rows
  let yAxisRows = [];
  let selectedData;
  xAxisRows.map((k) =>
    data.map((d) => {
      if (d["Squad"] === selectedSquad) {
        selectedData = d;
      }
      return yAxisRows.push(yValue(k, d));
    })
  );

  const yScaleObj = {
    Ground: scaleLog()
      .range([innerHeight, 0])
      .domain(extent(data, dataProcessPassXValue["Ground"].value)),
    Low: scaleLog()
      .range([innerHeight, 0])
      .domain(extent(data, dataProcessPassXValue["Low"].value)),
    High: scaleLog()
      .range([innerHeight, 0])
      .domain(extent(data, dataProcessPassXValue["High"].value)),
    Short: scaleLog()
      .range([innerHeight, 0])
      .domain(extent(data, dataProcessPassXValue["Short"].value)),
    Medium: scaleLog()
      .range([innerHeight, 0])
      .domain(extent(data, dataProcessPassXValue["Medium"].value)),
    Long: scaleLog()
      .range([innerHeight, 0])
      .domain(extent(data, dataProcessPassXValue["Long"].value)),
  };

  const sortedData = {
    Ground: handleSort(data, dataProcessPassXValue["Ground"].value),
    Low: handleSort(data, dataProcessPassXValue["Low"].value),
    High: handleSort(data, dataProcessPassXValue["High"].value),
    Short: handleSort(data, dataProcessPassXValue["Short"].value),
    Medium: handleSort(data, dataProcessPassXValue["Medium"].value),
    Long: handleSort(data, dataProcessPassXValue["Long"].value),
  };

  yScale.domain(extent(yAxisRows));

  const onChangeSquadHandler = (event, value) => {
    setSquad(value);
  };
  console.log(selectedSquad);
  return (
    <Layout
      selectedSquad={selectedSquad}
      data={data}
      onChangeSquadHandler={onChangeSquadHandler}
      title="Macam-Macam Umpan per 90 Menit"
      note="Pebandingan ditinjau dari sentuhan saat menggiring bola(Carries) dan sentuhan saat menerima umpan (Passing)"
      source="Advanced data provided by StatsBomb Presented by fbref.com"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
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
            yScaleObj={yScaleObj}
            yValue={yValue}
            r={circleRadius}
            selectedProps={selectedProps}
            selectedSquad={selectedSquad}
            selectedData={selectedData}
          />
        </g>
      </svg>
    </Layout>
  );
};
