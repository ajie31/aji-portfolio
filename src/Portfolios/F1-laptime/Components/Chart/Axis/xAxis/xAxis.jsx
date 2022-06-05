import { XAxisDriver } from "./xAxisDriver";
import { XAxisLine } from "./xAxisLine";

//TODO : animation transition
export const XAxis = ({
  markHeight,
  top,
  xAxisCode,
  xAxisSurname,
  xAxisId,
  xAxisRef,
  allData,
  initTransform,
}) => {
  return (
    <g className="x-axis-group" overflow="auto" ref={xAxisRef}>
      {allData.map((k, i) => (
        <g
          key={"driver" + i}
          className="x-axis-driver"
          // transform={initTransform(k)}
        >
          <XAxisLine markHeight={markHeight} top={top} />
          <XAxisDriver
            id={xAxisId(k)}
            code={xAxisCode(k)}
            surname={xAxisSurname(k)}
          />
        </g>
      ))}
    </g>
  );
};
