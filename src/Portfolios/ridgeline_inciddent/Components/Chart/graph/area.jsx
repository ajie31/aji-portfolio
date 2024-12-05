export const AreaMark = ({ data, areaMark, lineMark, yScale, xOffset }) => (
  <g transform={`translate(${xOffset},0)`} className="area-mark-group">
    <defs>
      <linearGradient id="myGradient" gradientTransform="rotate(90)">
        <stop offset="2%" stop-color="black" />
        <stop offset="85%" stop-color="lightgrey" />
        <stop offset="100%" stop-color="white" />
      </linearGradient>
    </defs>
    <g className="mars-group">
      {yScale.domain().map((d, i) => {
        return (
          <g key={d + "-group" + i}>
            <path
              key={d + "-area" + i}
              className="area_mark"
              pointerEvents="none"
              fill="url(#myGradient)"
              stroke="none"
              d={areaMark(data[d])}
            />
            <path
              key={d + "-line" + i + 2}
              className="area_mark"
              pointerEvents="none"
              fill="none"
              stroke="black"
              strokeWidth={1.5}
              d={lineMark(data[d])}
            />
          </g>
        );
      })}
    </g>
  </g>
);
