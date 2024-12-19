import { EplSquad } from "./eplSquad";
import styles from "../../../../../style/barChart.module.css";
//#region Labels Components
const CarryLabel = ({ xCenter, fill, strokeWidth = "1", handleSort }) => (
  <g className="axis-label pass-axis-label">
    <text
      dx={-xCenter / 2}
      dy="-1em"
      className={styles["axis-label"]}
      fill={fill}
      textAnchor="end"
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
      className={styles["axis-label"]}
      textAnchor="start"
      fill={fill}
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
      <pattern id={`epl-logo`} width={1} height={1}>
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
const NumberLabel = ({
  xCenter,
  yScale,
  yValue,
  r,
  fill,
  strokeWidth = 1,
  marginChart,
  marginAll,
  data,
}) => (
  <g
    className="axis-label number-axis-label"
    transform={`translate(${-xCenter - 16},0)`}
  >
    <text
      dx={(-marginChart.left + marginAll.left) / 2}
      dy="-1em"
      textAnchor="middle"
      fill={fill}
    >
      No.
    </text>

    <line
      x1={0}
      x2={-marginChart.left + marginAll.left}
      stroke={fill}
      strokeWidth={strokeWidth}
    />

    {data.map((d, i) => (
      <text
        key={i}
        dx={(-marginChart.left + marginAll.left) / 2}
        className={styles["axis-label"]}
        y={yScale(yValue(d)) + r * 2}
        dy="-.14em"
        textAnchor="middle"
        fill={fill}
      >
        {i + 1}
      </text>
    ))}
  </g>
);

const PossesionLabel = ({
  marginAll,
  xCenter,
  yScale,
  yValue,
  r,
  fill,
  strokeWidth = "1",
  marginChart,
  data,
  handleSort,
}) => (
  <g
    className="axis-label possession-axis-label"
    transform={`translate(${xCenter + 16},0)`}
  >
    <text
      dx={(marginChart.right - marginAll.right) / 2}
      dy="-1em"
      className={styles["axis-label"]}
      textAnchor="middle"
      fill={fill}
      cursor="pointer"
      onClick={() => handleSort.poss()}
    >
      Pos
    </text>
    <line
      x1={0}
      x2={marginChart.right - marginAll.right}
      stroke={fill}
      strokeWidth={strokeWidth}
    />
    {data.map((d, i) => (
      <text
        key={i}
        dx={(marginChart.left - marginAll.left) / 2}
        y={yScale(yValue(d)) + r * 2}
        className={styles["axis-value"]}
        dy="-.14em"
        textAnchor="middle"
        fill={fill}
        cursor="pointer"
      >
        {d["Poss"]} %
      </text>
    ))}
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
  originUrl,
  marginChart,
  marginAll,
}) => (
  <g transform={`translate(${0},${-r * 2})`} className="Labels">
    <g transform={`translate(${xCenter},${r})`} className="text-line">
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

      <NumberLabel
        xCenter={xCenter}
        yScale={yScale}
        yValue={yValue}
        r={r}
        fill={fillCaries}
        fontSize={fontSize}
        strokeWidth={strokeWidth}
        marginChart={marginChart}
        marginAll={marginAll}
        data={data}
      />
      <PossesionLabel
        xCenter={xCenter}
        yScale={yScale}
        yValue={yValue}
        r={r}
        fill={fillCaries}
        fontSize={fontSize}
        strokeWidth={strokeWidth}
        handleSort={handleSort}
        marginChart={marginChart}
        marginAll={marginAll}
        data={data}
      />
    </g>

    <g transform={`translate(${xCenter},${0})`} className="epl-squad-logo">
      {data.map((d, i) => (
        <EplSquad
          key={`${i}-epl-squad-logo`}
          yScale={yScale}
          yValue={yValue}
          d={d}
          r={r}
          originUrl={originUrl}
        />
      ))}

      <EplLogo rEpl={rEpl} />
    </g>
  </g>
);
