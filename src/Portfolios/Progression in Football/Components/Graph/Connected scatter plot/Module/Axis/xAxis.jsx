export const XAxis = ({ xScale, innerHeight, fill }) => (
  <g transform={`translate(${0},${0})`}>
    {xScale.domain().map((tick) => (
      <g key={tick} transform={`translate(${xScale(tick)},${0})`}>
        <line
          stroke="black"
          strokeWidth=".5"
          y1={innerHeight}
          y2={7 + innerHeight}
        />
        <text
          y={innerHeight + 15}
          dy=".71em"
          style={{ textAnchor: "middle", fontSize: ".8rem" }}
        >
          {tick}
        </text>
      </g>
    ))}
    {/* <text
  className="x-axis-title"
  x={innerWidth / 2}
  y={innerHeight}
  dy="2.84em"
  textAnchor="middle"
>
  {xAxisTitle}
</text> */}
  </g>
);
