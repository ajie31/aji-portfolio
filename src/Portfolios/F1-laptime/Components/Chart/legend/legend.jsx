export const Legend = ({ top, right, markProperties }) => {
  const paddingLegend = 2.5;
  const paddingGroup = top / 2;
  const paddingLeft = 10;
  return (
    <g transform={`translate(${right - 80},${top})`} className="legendG">
      <rect
        x={0}
        y={0}
        width={130}
        height={140}
        fill="white"
        stroke="#635F5D"
        strokeWidth={2}
        rx="6"
      />
      <g
        className="markLegends"
        transform={`translate(${
          paddingLeft + markProperties.pitStop.rad
        },${paddingGroup})`}
      >
        {Object.keys(markProperties).map((k, i) => (
          <g className={"legend"} key={`legend${i}`}>
            <circle
              cx={0}
              cy={markProperties[k].rad * i * paddingLegend}
              r={markProperties[k].rad}
              fill={markProperties[k].color}
            />
            <text
              x={0}
              y={markProperties[k].rad * i * paddingLegend}
              dx={markProperties["pitStop"].rad + paddingLeft}
              dy=".37em"
              fill="#635F5D"
            >
              {markProperties[k].name}
            </text>
          </g>
        ))}
      </g>
    </g>
  );
};
