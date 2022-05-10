import { scaleBand, scaleLog, extent } from "d3";

import { setDriverList } from "../Data/dataProcess";

export const Chart = ({ dataLapTime, dataDriver }) => {
  const width = 900;
  const height = 600;

  const axisMargin = { top: 22, bottom: 12, right: 12, left: 22 };
  const markMargin = {
    top: 22 + axisMargin.top,
    bottom: 22 + axisMargin.bottom,
    right: 22 + axisMargin.right,
    left: 22 + axisMargin.left,
  };

  const markWidth = width - markMargin.left - markMargin.right;
  const markHeight = height - markMargin.top - markMargin.bottom;

  const xAxisValue = (d) => dataDriver.get(d["driverId"])["code"];
  const yAxisValue = (d) => d["milliseconds"];

  const driverSurname = (d) => dataDriver.get(d["driverId"])["surname"];
  const driverForeName = (d) => dataDriver.get(d["driverId"])["forename"];

  const driverList = setDriverList(dataLapTime, xAxisValue);

  const xAxisScale = scaleBand()
    .domain(driverList)
    .range([markMargin.left, markWidth]);
  const yAxisScale = scaleLog()
    .domain(extent(dataLapTime, yAxisValue))
    .range([markMargin.top, markHeight]);

  console.log(driverList);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMin">
      <g
        className="MainGroup"
        transform={`translate(${width / 2},${height / 2})`}
      ></g>
    </svg>
  );
};
