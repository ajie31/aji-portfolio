export const Catagory = ({ categories }) => {
  const axisLinePoints = categories.map((_, i) => Math.PI * (i * (2 / 5)));
  return categories.map((c, i) => (
    <text
      key={c}
      dx={Math.sin(axisLinePoints[i]) * 125}
      dy={Math.cos(axisLinePoints[i]) * -120}
      fontSize={".7rem"}
      textAnchor="middle"
      fill="black"
    >
      {c}
    </text>
  ));
};
