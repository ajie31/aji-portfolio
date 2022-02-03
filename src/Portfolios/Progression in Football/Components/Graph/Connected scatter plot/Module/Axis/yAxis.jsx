export const YAxis = ({ yScale, innerWidth, fill }) => (
  <g transform={`translate(${0},${0})`}>
    {yScale.ticks(2).map((tick) =>
      tick === 100 || tick === 500 ? (
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
      ) : null
    )}

    {/* <text
  transform={`rotate(-90)`}
  className="x-axis-title"
  x={-innerHeight / 2}
  y={-70}
  textAnchor="middle"
>
  {yAxisTitle}
</text> */}
  </g>
);
