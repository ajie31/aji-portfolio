export const YAxis = ({ title, yScale, right, fontSize }) => (
  <g transform="translate(0,0)" className="y-label-group">
    <g className="y-labels">
      {yScale.domain().map((d) => (
        <text
          fontSize={fontSize}
          key={d}
          x={right}
          dy={yScale(d)}
          textAnchor="end"
        >
          {d}
        </text>
      ))}
    </g>
  </g>
);
