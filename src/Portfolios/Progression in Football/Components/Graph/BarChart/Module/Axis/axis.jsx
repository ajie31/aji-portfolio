import { Indicators } from "./indicators";
import { Labels } from "./labels";
export const Axis = ({
  data,
  yScale,
  xScaleCarry,
  xScalePass,
  xValueCarry,
  xValuePass,
  yValue,
  meanPass,
  meanCArry,
  innerWidth,
  handleSort,
}) => {
  const fixedPass = (d) => xScalePass(xValuePass(d));
  const fixedCarry = (d) => xScaleCarry(xValueCarry(d));

  const xCenter = innerWidth / 2;
  const r = 18;
  const rEpl = r * 2;
  const xOffsetR = xCenter + 7;
  const xOffsetL = xCenter - 7;
  const upFill = "#ABC22D";
  const dnFill = "#C22719";

  const fillPass = "#8E6C8A";
  const fillCaries = "#B396AD";

  const strokeWidth = "2.5px";

  // TODO separate label with new file
  return (
    <g className="axis-group">
      <Labels
        data={data}
        yScale={yScale}
        yValue={yValue}
        xCenter={xCenter}
        r={r}
        rEpl={rEpl}
        fillPass={fillPass}
        fillCaries={fillCaries}
        strokeWidth={strokeWidth}
        handleSort={handleSort}
      />
      <Indicators
        data={data}
        yScale={yScale}
        xOffsetR={xOffsetR}
        xOffsetL={xOffsetL}
        fixedPass={fixedPass}
        fixedCarry={fixedCarry}
        xValueCarry={xValueCarry}
        xValuePass={xValuePass}
        yValue={yValue}
        meanPass={meanPass}
        meanCArry={meanCArry}
        upFill={upFill}
        dnFill={dnFill}
      />
    </g>
  );
};
