export const Axis = (props) => {
  const { innerWidth, innerHeight, xScale, yScale, xAxisTitle, yAxisTitle } =
    props;

  return (
    <>
      <g transform={`translate(${0},${0})`}>
        {xScale.ticks(5).map((tick) => (
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
        <text
          className="x-axis-title"
          x={innerWidth / 2}
          y={innerHeight}
          dy="2.84em"
          textAnchor="middle"
        >
          {xAxisTitle}
        </text>
      </g>

      <g transform={`translate(${0},${0})`}>
        {yScale.ticks(5).map((tick) => (
          <g key={tick} transform={`translate(${0},${yScale(tick)})`}>
            <line stroke="black" strokeWidth=".5" x2={innerWidth} />
            <text
              dx="-.71em"
              dy=".32em"
              style={{ textAnchor: "end", fontSize: ".8rem" }}
            >
              {tick}
            </text>
          </g>
        ))}

        <text
          transform={`rotate(-90)`}
          className="x-axis-title"
          x={-innerHeight / 2}
          y={-70}
          textAnchor="middle"
        >
          {yAxisTitle}
        </text>
      </g>
    </>
  );
};
