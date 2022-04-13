import { lineRadial } from "d3";
const radialLineGenerator = lineRadial();

export const RadarMark = ({ dataValue }) => {
  const pointsData = dataValue.map((val, i) => [Math.PI * (i * (2 / 5)), val]);
  // console.log(pointsData);
  return (
    <path
      d={radialLineGenerator(pointsData)}
      style={{ transition: ".2s" }}
      fill="grey"
      opacity={0.4}
      stroke="black"
    />
  );
};
