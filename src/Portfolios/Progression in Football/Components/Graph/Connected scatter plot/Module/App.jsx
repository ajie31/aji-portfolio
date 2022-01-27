import { scaleLog, scaleBand, extent, line } from "d3";

import { Axis } from "./Axis/axis";
import { Layout } from "./Layout/layout";
import { Chart } from "./Mark/chart";
import { dataProcessPassXValue } from "../../../../Data/dataProcess";
// #region Basic Dimension
const height = 500;
const width = 700;

const margin = { top: 25, right: 30, bottom: 100, left: 80 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
//#endregion Basic Dimension

// #region axis Scale_Value
const squadRows = new Map();

const xAxisRows = Object.keys(dataProcessPassXValue);
const yValue = (k, d) => dataProcessPassXValue[k].value(d);

const xAxisTitle = "Umpan Sukses p90";
const yAxisTitle = "ratio umpan progressif p90";

const xScale = scaleBand()
  .range([0, innerWidth])
  .domain(xAxisRows)
  .padding(0.5);
const yScale = scaleLog().range([innerHeight, 0]);
//#endregion

// #region Mark/Chart properties
const circleRadius = 14;
//#endregion

export const App = (props) => {
  const { data } = props;

  // yScale.domain(extent(data, yValue)).nice();
  let yAxisRows = [];

  xAxisRows.map((k) =>
    data.map((d) => {
      squadRows.set(d["Squad"], d);
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

  yScale.domain(extent(yAxisRows)).nice();

  const markLine = (k) =>
    line()
      .x(() => xScale(k))
      .y((d) => yScale(yValue(k, d)));

  return (
    <Layout>
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
            yValue={yValue}
            yScaleObj={yScaleObj}
            markLine={markLine}
            squadRows={squadRows}
            r={circleRadius}
          />
        </g>
      </svg>
    </Layout>
  );
};
