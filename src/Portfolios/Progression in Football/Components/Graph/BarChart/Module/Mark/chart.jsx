import { PassChart1 } from "./passChart";
import { CarryChart1 } from "./carryChart";
export const Chart = (props) => {
  const {
    data,
    PassObject,
    CarryObject,
    yScale,
    xScaleCarry,
    xScalePass,
    xValuePass,
    xValueCarry,
    yValue,
    margin,
    innerWidth,
  } = props;
  // const totalWidth = xScale(xValue(d));
  const xCenter = innerWidth / 2;
  const r = 18;
  const xOffsetR = xCenter + r,
    xOffsetL = xCenter - r;
  // TODO : EDIT STYLE!!!
  return (
    <g className="group-chart">
      {data.map((d) => (
        <g
          transform={`translate(0,${yScale(yValue(d))})`}
          key={`bar ${d["Squad"]}`}
          id={` chart-${d["Squad"]}`}
          className={`bar-chart`}
        >
          <PassChart1
            d={d}
            PassObject={PassObject}
            totalWidth={innerWidth}
            yScale={yScale}
            xScale={xScalePass}
            xValue={xValuePass}
            yValue={yValue}
            xOffset={xOffsetR}
          />

          <CarryChart1
            d={d}
            CarryObject={CarryObject}
            totalWidth={innerWidth}
            yScale={yScale}
            xScale={xScaleCarry}
            xValue={xValueCarry}
            yValue={yValue}
            xOffset={xOffsetL}
          />
        </g>
      ))}
    </g>
  );
};
