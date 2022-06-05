import { XAxis } from "./xAxis/xAxis";
import { YAxis } from "./yAxis/yAxis";
export const Axis = ({
  xAxisScale,
  markHeight,
  top,
  xAxisCode,
  xAxisSurname,
  xAxisId,
  yAxisScale,
  left,
  markWidth,
  isAddition,
  difference,
  xAxisRef,
  allData,
  initTransform,
}) => (
  <g className="axis-g">
    <YAxis left={left} yAxisScale={yAxisScale} markWidth={markWidth} />
    <XAxis
      markHeight={markHeight}
      top={top}
      xAxisCode={xAxisCode}
      xAxisId={xAxisId}
      xAxisSurname={xAxisSurname}
      xAxisScale={xAxisScale}
      isAddition={isAddition}
      difference={difference}
      xAxisRef={xAxisRef}
      allData={allData}
      initTransform={initTransform}
    />
  </g>
);
