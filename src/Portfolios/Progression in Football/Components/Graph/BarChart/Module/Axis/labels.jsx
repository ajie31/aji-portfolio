import { EplSquad } from "./eplSquad";

//#region Labels Components
const CarryLabel = ({ xCenter, fill, strokeWidth = "1", handleSort }) => (
  <g className="axis-label pass-axis-label">
    <text
      dx={-xCenter / 2}
      dy="-1em"
      fill={fill}
      textAnchor="end"
      fontWeight={500}
      cursor="pointer"
      onClick={() => handleSort.carry()}
    >
      Carries
    </text>
    <line x1={0} x2={-xCenter} stroke={fill} strokeWidth={strokeWidth} />
  </g>
);

const PassLabel = ({ xCenter, fill, strokeWidth = "1", handleSort }) => (
  <g className="axis-label carry-axis-label">
    <text
      dx={xCenter / 2}
      dy="-1em"
      textAnchor="start"
      fill={fill}
      fontWeight={500}
      cursor="pointer"
      onClick={() => handleSort.pass()}
    >
      Passing
    </text>
    <line x1={0} x2={xCenter} stroke={fill} strokeWidth={strokeWidth} />
  </g>
);

const EplLogo = ({ rEpl }) => (
  <g className="epl-logo">
    <defs>
      <pattern id={`epl-logo`} width={rEpl} height={rEpl}>
        <image
          href="https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/premier-league.png"
          x="0"
          y="0"
          width={rEpl * 2}
          height={rEpl * 2}
        />
      </pattern>
    </defs>
    <circle cx={0} cy={0} r={rEpl} fill="url(#epl-logo)" />
  </g>
);

//#endregion

export const Labels = ({
  data,
  yScale,
  yValue,
  xCenter,
  r,
  rEpl,
  fillPass,
  fillCaries,
  fontSize,
  strokeWidth,
  handleSort,
}) => (
  <g transform={`translate(${xCenter},${-r * 2})`} className="Labels">
    <g transform={`translate(0,${r})`} className="text-line">
      <CarryLabel
        xCenter={xCenter}
        fill={fillCaries}
        fontSize={fontSize}
        strokeWidth={strokeWidth}
        handleSort={handleSort}
      />
      <PassLabel
        xCenter={xCenter}
        fill={fillPass}
        fontSize={fontSize}
        strokeWidth={strokeWidth}
        handleSort={handleSort}
      />
    </g>

    <g className="epl-squad-logo">
      {data.map((d, i) => (
        <EplSquad
          key={`${i}-epl-squad-logo`}
          yScale={yScale}
          yValue={yValue}
          d={d}
          r={r}
        />
      ))}

      <EplLogo rEpl={rEpl} />
    </g>
  </g>
);
