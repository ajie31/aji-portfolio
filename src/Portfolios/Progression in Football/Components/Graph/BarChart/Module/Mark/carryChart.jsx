export const CarryChart = ({
  d,
  CarryObject,
  yScale,
  yValue,
  xOffset,
  fill,
  width,
}) => (
  <g
    transform={`translate(${xOffset},0) scale(-1,1)`}
    key={d["Squad"]}
    className={d["Squad"]}
  >
    <rect
      // className={styles["bar-chart"]}
      key={"" + d["Squad"] + " " + CarryObject(d).name}
      className="bar-chart-carry"
      x={0}
      width={width}
      height={yScale.bandwidth()}
      fill={fill}
    >
      <title>{`${yValue(d)} : ${CarryObject(d).action}`}</title>
    </rect>
  </g>
);
