import { UpArrowIcon, DnArrowIcon, DashIcon } from "./arrowIcon";
import styles from "../../../../../style/barChart.module.css";
export const Indicators = ({
  data,
  yScale,
  xOffsetR,
  xOffsetL,
  fixedPass,
  fixedCarry,
  xValueCarry,
  xValuePass,
  yValue,
  meanPass,
  meanCArry,
  upFill,
  dnFill,
}) => {
  const indicator = (val, mean, pos) =>
    val < mean ? (
      <DnArrowIcon fill={dnFill} post={pos} />
    ) : val > mean ? (
      <UpArrowIcon fill={upFill} post={pos} />
    ) : (
      <DashIcon fill="grey" post={pos} />
    );

  const positionPass = (d) =>
    `translate(${fixedPass(d) + xOffsetR},${yScale(yValue(d))})`;
  const positionCarry = (d) =>
    `translate(${-fixedCarry(d) + xOffsetL},${yScale(yValue(d))})`;

  return (
    <g className="indicator-group" opacity={0}>
      <g className="arrow-indicator-pass">
        {data.map((d, i) => (
          <g key={`${i}-indicator-pass`} transform={positionPass(d)}>
            {indicator(Number(xValuePass(d).toFixed(3)), meanPass)}
          </g>
        ))}
      </g>

      <g className="arrow-indicator-carry">
        {data.map((d, i) => (
          <g
            key={`${i}-indicator-carry`}
            transform={positionCarry(d) + " scale(-1,1)"}
          >
            {indicator(Number(xValueCarry(d).toFixed(3)), meanCArry)}
          </g>
        ))}
      </g>
    </g>
  );
};
