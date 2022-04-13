export const LabelNumber = ({ axisValues }) => {
  return axisValues.map((v) => (
    <text
      key={v}
      dx={2}
      dy={-v + 12}
      fontSize={".6rem"}
      textAnchor="left"
      fill="black"
    >
      {v}
    </text>
  ));
};
