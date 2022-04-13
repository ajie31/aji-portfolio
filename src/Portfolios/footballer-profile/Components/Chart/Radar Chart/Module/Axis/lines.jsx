export const AxisLines = ({ maxRadius, categories }) => {
  const axisLinePoints = categories.map((_, i) => Math.PI * (i * (2 / 5)));

  return (
    <g className="axis-line-group">
      {axisLinePoints.map((d, i) => (
        <line
          key={d}
          x1={0}
          x2={Math.sin(d) * maxRadius}
          y1={0}
          y2={Math.cos(d) * -maxRadius}
          stroke="black"
          strokeWidth={0.5}
          strokeDasharray="2"
        />
      ))}
    </g>
  );
};
//! 100 is the radius
