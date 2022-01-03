import { Indicators } from "./indicators";
import { EplSquad } from "./eplSquad";
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
  innerHeight,
}) => {
  const fixedPass = (d) => xScalePass(xValuePass(d));
  const fixedCarry = (d) => xScaleCarry(xValueCarry(d));

  const xCenter = innerWidth / 2;
  const r = 18;
  const xOffsetR = xCenter + r,
    xOffsetL = xCenter - r;

  return (
    <g className="axis-group">
      <g className="Labels">
        <g className="epl-logo">
          {/* <defs>
            <pattern id={`epl-logo`} width={r} height={r}>
              <image
                href={`https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/${encodeURIComponent(
                  d["Squad"]
                )}.png`}
                x="0"
                y="0"
                width={r * 2}
                height={r * 2}
              />
            </pattern>
          </defs> */}
          <circle cx={xCenter} cy={-r * 2} r={r * 2} />
        </g>
        <g className="pass-axis-label">
          <line
            x1={xCenter}
            x2={innerWidth}
            y1={-r * 2}
            y2={-r * 2}
            stroke="black"
          />
        </g>
        <g className="carry-axis-label">
          <line x1={0} x2={xCenter} y1={-r * 2} y2={-r * 2} stroke="black" />
        </g>
        <g className="epl-squad-logo">
          {data.map((d) => (
            <EplSquad
              yScale={yScale}
              yValue={yValue}
              xCenter={xCenter}
              d={d}
              r={r}
            />
          ))}
        </g>
      </g>
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
      />
    </g>
  );
};
