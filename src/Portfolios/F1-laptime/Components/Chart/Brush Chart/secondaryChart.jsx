import { select, brushX } from "d3";
import { useEffect, useRef } from "react";

export const SecondaryChart = () => {
  const width = 900;
  const height = 60;
  const margin = { top: 22, bottom: 12, right: 12, left: 22 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const brushRef = useRef();

  const brushed = ({ selection }) => {
    if (selection) {
      console.log(selection);
    }
  };
  const brushended = ({ selection }) => {
    if (selection) {
      console.log(selection);
    }
  };
  const brush = brushX()
    .extent([
      [0, 0],
      [innerWidth, height],
    ])
    .on("brush", brushed)
    .on("end", brushended);

  useEffect(() => {
    console.log("here");
    select(brushRef.current).call(brush).call(brush.move, [0, 400]);
  }, [brush, brushRef, height]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin"
      overflow="scroll"
    >
      <g ref={brushRef} transform={`translate(${margin.left},${margin.top})`}>
        <rect x={0} y={0} height={height} width={innerWidth} fill="blue"></rect>
      </g>
    </svg>
  );

  //
};
