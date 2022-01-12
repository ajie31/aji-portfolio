export const PassChart = ({
  d,
  PassObject,
  yScale,
  fill,
  yValue,
  xOffset,
  width,
}) => (
  <g
    transform={`translate(${xOffset},0)`}
    key={d["Squad"]}
    className={d["Squad"]}
  >
    <rect
      className="bar-chart-pass"
      key={"" + d["Squad"] + " " + PassObject(d).name}
      width={width}
      height={yScale.bandwidth()}
      fill={fill}
    >
      {/* {(widthTemp = xScale(xValue(d)))} */}
      <title>{`${yValue(d)} : ${PassObject(d).action}`}</title>
    </rect>
  </g>
);
