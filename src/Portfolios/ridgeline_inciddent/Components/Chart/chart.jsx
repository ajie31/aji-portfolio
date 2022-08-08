import {
  scaleBand,
  scaleLinear,
  area,
  timeFormat,
  max,
  curveBasis,
  rollup,
  line,
} from "d3";
// "Under the Influence of Alcohol, Drugs or Medication"
import { XAxis } from "./axis/xAxis";
import { YAxis } from "./axis/yAxis";
import { AreaMark } from "./graph/area";

const height = 230;
const width = 550;

const margin = { top: 50, right: 20, bottom: 20, left: 65 };
// const marginChart = { top: 0, right: 82, bottom: 0, left: 82 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
// ? here xAxis page
const yOffset = 25;
const axisFontSize = ".38rem";

// ? Area chart
const dOverlap = 8;
const xOffset = 20;

const formatDate = timeFormat("%b");

const stateList = [
  "Utah",
  "Pennsylvania",
  "North Carolina",
  "Arizona",
  "Alabama",
  "California",
  "Kentucky",
  "New York",
  "Louisiana",
  "Ohio",
  "Wisconsin",
  "Illinois",
  "Nevada",
];
const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Okt",
  11: "Nov",
  12: "Dec",
};

export const Chart = ({ data, hours }) => {
  const data_list = [];
  const stateObject = {};
  const xValueM = (d) => months[d.month];
  const xValue = (d) => d["month"];
  const yValue = (d) => d["state"];
  const dValue = (d) => d["count"];
  const filterPremData = data.filter(
    (d) =>
      stateList.includes(yValue(d)) &&
      d["hour"] >= hours[0] &&
      d["hour"] <= hours[1]
  );

  const unique_state = [
    ...new Set(filterPremData.map((d) => yValue(d))),
  ].sort();
  const unique_month = [...new Set(filterPremData.map((d) => xValueM(d)))];

  const aggMean = rollup(filterPremData, (d) => d.length, yValue, xValueM);
  unique_state.map((s) => {
    unique_month.map((m) => {
      data_list.push({
        state: s,
        month: m,
        count: isNaN(aggMean.get(s).get(m)) ? 0 : aggMean.get(s).get(m),
      });
    });
  });
  unique_state.map((key) => {
    stateObject[key] = !stateObject[key]
      ? data_list.filter((k) => yValue(k) == key)
      : stateObject[key];
  });
  const yScale = scaleBand()
    .domain(unique_state)
    .range([margin.top, innerHeight])
    .paddingInner(0.1);
  const xScale = scaleBand()
    .domain(unique_month)
    .range([margin.left, width - margin.right]);

  const dScale = scaleLinear()
    .domain([0, max(data_list, dValue)])
    .range([0, 6 * 3.5]);

  const areaMark = area()
    .curve(curveBasis)
    .x((d) => xScale(xValue(d)))
    .y0((d) => yScale(yValue(d)))
    .y1((d) => yScale(yValue(d)) - dScale(dValue(d)));
  const lineMark = line()
    .curve(curveBasis)
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)) - dScale(dValue(d)));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <YAxis
        yScale={yScale}
        yValue={yValue}
        fontSize={axisFontSize}
        right={margin.left}
      />
      <XAxis
        innerHeight={innerHeight}
        xScale={xScale}
        formatDate={formatDate}
        yOffset={yOffset}
        fontSize={axisFontSize}
        xOffset={xOffset}
      />
      <AreaMark
        data={stateObject}
        areaMark={areaMark}
        lineMark={lineMark}
        yScale={yScale}
        xOffset={xOffset / 3}
      />
    </svg>
  );
};
