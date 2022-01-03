import { UpArrowIcon, DnArrowIcon, DashIcon } from "./arrowIcon";

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
}) => {
  const indicator = (val, mean, pos) =>
    val < mean ? (
      <DnArrowIcon fill="red" post={pos} />
    ) : val > mean ? (
      <UpArrowIcon fill="green" post={pos} />
    ) : (
      <DashIcon fill="grey" post={pos} />
    );

  const positionPass = (d) =>
    `translate(${fixedPass(d) + xOffsetR},${yScale(yValue(d))})`;
  const positionCarry = (d) =>
    `translate(${-fixedCarry(d) + xOffsetL},${yScale(yValue(d))})`;

  return (
    <>
      <g className="pass-axis-group">
        <g className="arrow-indicator-pass">
          {data.map((d) => (
            <g
              transform={positionPass(d)}
              className={`${d["Squad"]}-indicator-pass`}
            >
              {indicator(xValuePass(d), meanPass)}
            </g>
          ))}
        </g>
      </g>

      <g className="carry-axis-group">
        <g className="arrow-indicator-pass">
          {data.map((d) => (
            <g
              transform={positionCarry(d) + " scale(-1,1)"}
              className={`${d["Squad"]}-indicator-carry`}
            >
              {indicator(xValueCarry(d), meanCArry)}
            </g>
          ))}
        </g>
      </g>
    </>
  );
};
