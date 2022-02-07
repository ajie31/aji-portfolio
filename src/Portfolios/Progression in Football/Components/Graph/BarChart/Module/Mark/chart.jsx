import { PassChart } from "./passChart";
import { CarryChart } from "./carryChart";

// delte soon

export const Chart = (props) => {
  const {
    data,
    PassObject,
    CarryObject,
    yScale,
    yValue,
    innerWidth,
    passWidthbar,
    carryWidthBar,
  } = props;
  // const totalWidth = xScale(xValue(d));
  const xCenter = innerWidth / 2;
  const xOffsetR = xCenter,
    xOffsetL = xCenter;
  const fillPass = "#8E6C8A";
  const fillCarry = "#B396AD";

  return (
    <g className="group-chart">
      {data.map((d, i) => (
        <g
          transform={`translate(0,${yScale(yValue(d))})`}
          key={`bar ${d["Squad"]}`}
          id={` chart-${d["Squad"]}`}
          className={`bar-chart`}
        >
          <PassChart
            d={d}
            PassObject={PassObject}
            totalWidth={innerWidth}
            yScale={yScale}
            yValue={yValue}
            xOffset={xOffsetR}
            fill={fillPass}
            width={passWidthbar ? passWidthbar[i] : 0}
          />

          <CarryChart
            d={d}
            CarryObject={CarryObject}
            totalWidth={innerWidth}
            yScale={yScale}
            yValue={yValue}
            xOffset={xOffsetL}
            fill={fillCarry}
            width={carryWidthBar ? carryWidthBar[i] : 0}
          />
        </g>
      ))}
    </g>
  );
};
