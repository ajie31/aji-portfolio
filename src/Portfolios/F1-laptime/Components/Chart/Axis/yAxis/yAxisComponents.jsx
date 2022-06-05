export const YAxisText = ({ tick, left }) => {
  return (
    <g className="y-axis-tick">
      <line x1={left} x2={80} stroke="#C1BAA9" strokeWidth={2.7} />
      <text
        x={left}
        dx={left + 23}
        dy="-.40em"
        fill="#978F80"
        fontSize="1rem"
        style={{ textAnchor: "end", fontSize: ".8rem" }}
      >
        {tick}
      </text>
    </g>
  );
};

export const YAxisLines = ({ left, markWidth }) => {
  return (
    <line
      x1={left}
      x2={markWidth}
      stroke="#C1BAA9"
      strokeDasharray={3.2}
      strokeWidth={2.1}
    />
  );
};
