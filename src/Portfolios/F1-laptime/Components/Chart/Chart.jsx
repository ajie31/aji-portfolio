import { scalePoint, scaleLog, extent, max, selectAll } from "d3";
import { Axis } from "./Axis/axis";
import { useEffect } from "react";
// import { XAxisLine } from "./Axis/xAxisLine";
// import { XAxisDriver } from "./Axis/xAxisDriver";
// import { XAxis } from "./Axis/xAxis/xAxis";
// import { YAxisLine } from "./Axis/yAxis/yAxis";
import { CircleMark } from "./Mark/circleMark";
import { Legend } from "./legend/legend";

let oldxScale, oldDriver, tempRaceId;

const width = 900;
const height = 600;
const axisMargin = { top: 22, bottom: 12, right: 12, left: 22 };
const markMargin = {
  top: 22 + axisMargin.top,
  bottom: 22 + axisMargin.bottom,
  right: 22 + axisMargin.right,
  left: 22 + axisMargin.left,
};
const rad = 4.8;
const markProperties = {
  lapTime: { rad: 4.8, color: "#688BAB", name: "Lap Time" },
  finishTime: { rad: 4.8 * 2.5, color: "#688BAB", name: "Finish Lap" },
  pitStop: { rad: 4.8 * 2.5, color: "#A0B700", name: "Pit Stop" },
  retire: { rad: 4.8 * 2.5, color: "#E25A42", name: "Retire" },
};

export const Chart = ({
  dataLapTime,
  pitStopData,
  driverToRender,
  selectedDrivers,
  xAxisRef,
  markRef,
}) => {
  const markWidth = width - markMargin.left - markMargin.right;
  const markHeight = height - markMargin.top - markMargin.bottom;

  // ?filter cicuit const filterredData = dataLapTime.filter((d) => d["raceId"] === selectedRace);

  const xAxisCode = (d) => d["code"];
  const xAxisId = (d) => d["driverId"];
  const xAxisSurname = (d) => d["surname"];
  const yAxisValue = (d) => d["milliseconds"];
  const yAxisLap = (d) => d["lap"];
  const yAxisTime = (d) => d["time"];
  const lapValue = (d) => d["lap"];
  const isAddition = selectedDrivers.isAddition;
  const difference = selectedDrivers.difference;
  const allData = !isAddition && oldDriver ? oldDriver : driverToRender;

  const xAxisScale = scalePoint()
    .domain(driverToRender.map(xAxisCode))
    .range([markMargin.left, markWidth])
    .padding(1);
  const yAxisScale = scaleLog()
    .domain(extent(dataLapTime, yAxisValue))
    .range([markMargin.top, markHeight]);

  if (tempRaceId && tempRaceId !== dataLapTime[0]["raceId"]) {
    oldxScale = xAxisScale;
    oldDriver = driverToRender;
  }
  console.log(tempRaceId && tempRaceId !== dataLapTime[0]["raceId"]);
  const transitions = (d) =>
    difference === xAxisId(d) && !isAddition
      ? `translate(900,${axisMargin.top})`
      : `translate(${xAxisScale(xAxisCode(d))},${axisMargin.top})`;
  const initTransform = (k) => {
    return isAddition && xAxisId(k) === difference //difference === null || (xAxisId(k) === difference && isAddition)
      ? `translate(-100,${axisMargin.top})`
      : `translate(${oldxScale(xAxisCode(k))},${axisMargin.top})`;
  };
  /* : !isAddition && xAxisId(k) === difference && oldxScale
   `translate(${oldxScale(xAxisCode(k))},${axisMargin.top})`*/

  const initTransformMark = (k) =>
    isAddition && xAxisId(k) === difference
      ? `translate(-100,${0})`
      : `translate(${oldxScale(xAxisCode(k))},${0})`;
  const transitionsMark = (d) =>
    difference === xAxisId(d) && !isAddition
      ? `translate(900,${0})`
      : `translate(${xAxisScale(xAxisCode(d))},${0})`;

  const maxLap = max(dataLapTime, lapValue);
  // console.log(
  //   driverToRender.map((driver, iDriver) =>
  //     dataLapTime.filter((race) => xAxisId(race) === xAxisId(driver))
  //   )
  // );
  useEffect(() => {
    const xAxis = selectAll(xAxisRef.current.children)
      .data(allData)
      .join("g")
      .attr("transform", (d) => initTransform(d));
    const mark = selectAll(markRef.current.children)
      .data(allData)
      .join("g")
      .attr("transform", (d) => initTransformMark(d));

    xAxis
      .transition()
      .duration(400)
      .attr("transform", (d) => transitions(d));
    mark
      .transition()
      .duration(400)
      .attr("transform", (d) => transitionsMark(d));

    tempRaceId = dataLapTime[0]["raceId"];
    oldxScale = xAxisScale;
    oldDriver = driverToRender;
  }, [
    driverToRender,
    xAxisScale,
    oldxScale,
    oldDriver,
    transitionsMark,
    transitions,
  ]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin"
      overflow="scroll"
    >
      <g
        className="MainGroup"
        transform={`translate(${axisMargin.left},${axisMargin.top})`}
      >
        <Axis
          driverToRender={driverToRender}
          markHeight={markHeight - axisMargin.top}
          top={axisMargin.top}
          xAxisCode={xAxisCode}
          xAxisId={xAxisId}
          xAxisSurname={xAxisSurname}
          xAxisScale={xAxisScale}
          left={axisMargin.left}
          yAxisScale={yAxisScale}
          markWidth={markWidth}
          xAxisRef={xAxisRef}
          allData={allData}
          initTransform={initTransform}
        />

        <CircleMark
          xAxisScale={xAxisScale}
          yAxisScale={yAxisScale}
          xAxisCode={xAxisCode}
          xAxisId={xAxisId}
          yAxisValue={yAxisValue}
          lapValue={lapValue}
          isAddition={selectedDrivers.isAddition}
          difference={selectedDrivers.difference}
          driverToRender={driverToRender}
          dataLapTime={dataLapTime}
          pitStopData={pitStopData}
          maxLap={maxLap}
          markProperties={markProperties}
          initTransform={initTransformMark}
          allData={allData}
          markRef={markRef}
        />
        <Legend
          top={markMargin.top}
          right={markWidth}
          markProperties={markProperties}
        />
      </g>
    </svg>
  );
};
