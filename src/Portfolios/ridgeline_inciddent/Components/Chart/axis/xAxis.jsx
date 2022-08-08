export const XAxis = ({
  title,
  xScale,
  innerHeight,
  formatDate,
  yOffset,
  fontSize,
  xOffset,
}) => (
  <g
    transform={`translate(${xOffset},${innerHeight + yOffset})`}
    className="x-label-group"
  >
    {xScale.domain().map((d, i) => (
      <g
        key={d + "-axis" + i}
        className="x-labels"
        transform={`translate(${xScale(d)},0)`}
      >
        <line
          x1={-13}
          x2={-13}
          y1={-20}
          y2={-24}
          stroke="black"
          strokeWidth={0.4}
        />
        <text
          key={d}
          y={0}
          x={0}
          dx={-8}
          dy={-10}
          fontSize={fontSize}
          textAnchor="end"
        >
          {d}
        </text>
      </g>
    ))}
  </g>
);
