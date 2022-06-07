let tempPosition, tempDriver;
export const CircleMark = ({
  xAxisScale,
  yAxisScale,
  xAxisCode,
  xAxisId,
  yAxisValue,
  lapValue,
  allData,
  dataLapTime,
  pitStopData,
  maxLap,
  markProperties,
  markRef,
}) => {
  let tempPosition, oldPositionText, tempDriver;
  const isBoxBox = (raceId, driverId, lap) =>
    pitStopData.filter(
      (d) =>
        d["raceId"] === raceId && d["driverId"] === driverId && d["lap"] === lap
    ).length > 0;

  const isTakenOver = (d) => {
    const compare = d["position"] !== tempPosition && xAxisId(d) === tempDriver;
    if (compare) {
      oldPositionText = tempPosition;
    }
    tempPosition = d["position"];
    tempDriver = xAxisId(d);
    return compare;
  };

  const isFinalPost = (d) => maxLap === lapValue(d);
  const isRetire = (arr, i) => arr.length < maxLap && i === arr.length - 1;

  return (
    <g className="mark-g" ref={markRef}>
      {allData.map((driver, iDriver) => (
        <g key={"mark-" + iDriver} id={`mark-${xAxisCode(driver)}`}>
          {dataLapTime
            .filter((race) => xAxisId(race) === xAxisId(driver))
            .map((result, iCircle, arr) => (
              <CircleType
                key={"circle-" + iCircle}
                isBoxBox={isBoxBox(
                  result["raceId"],
                  xAxisId(driver),
                  result["lap"]
                )}
                isRetire={isRetire(arr, iCircle)}
                isFinalPost={isFinalPost}
                result={result}
                yAxisScale={yAxisScale}
                yAxisValue={yAxisValue}
                markProperties={markProperties}
                isTakenOver={isTakenOver(result)}
                oldPositionText={oldPositionText}
              />
            ))}
        </g>
      ))}
    </g>
  );
};

const CircleType = ({
  isBoxBox,
  isRetire,
  isFinalPost,
  isTakenOver,
  result,
  yAxisScale,
  yAxisValue,
  markProperties,
  oldPositionText,
}) => {
  const isFinale = isFinalPost(result);

  return isRetire ? (
    <g>
      <circle
        cx={0}
        cy={yAxisScale(yAxisValue(result))}
        r={markProperties.retire.rad}
        stroke="#F5F3F2"
        fill={markProperties.retire.color}
        strokeWidth={2}
        opacity={1}
      >
        <title>{`retire, Lap: ${result["lap"]}, ${result["time"]}`}</title>{" "}
      </circle>
      <text
        x={0}
        y={yAxisScale(yAxisValue(result)) + 6}
        textAnchor="middle"
        fontSize={18}
        fontWeight={700}
        fill="#F5F3F2"
        cursor="default"
        pointerEvents="none"
      >
        !
      </text>
    </g>
  ) : isBoxBox ? (
    <g>
      <circle
        cx={0}
        cy={yAxisScale(yAxisValue(result))}
        r={markProperties.pitStop.rad}
        fill={markProperties.pitStop.color}
        stroke="#F5F3F2"
        strokeWidth={2}
        opacity={0.9}
      >
        <title>{`Pit Stop, Lap: ${result["lap"]}, ${result["time"]}`}</title>{" "}
      </circle>
      <text
        x={0}
        y={yAxisScale(yAxisValue(result)) + 5}
        textAnchor="middle"
        fontSize={16}
        fontWeight={700}
        fill="#F5F3F2"
        cursor="default"
        pointerEvents="none"
      >
        P
      </text>
    </g>
  ) : isTakenOver ? (
    <g>
      <circle
        cx={0}
        cy={yAxisScale(yAxisValue(result))}
        r={markProperties.positionChange.rad}
        fill={markProperties.positionChange.color}
        stroke="#F5F3F2"
        strokeWidth={2}
        opacity={0.9}
      >
        <title>{`${
          result["position"] < oldPositionText ? "Take Over" : "Taken Over"
        } : from ${oldPositionText} to ${result["position"]}, Lap: ${
          result["lap"]
        }, ${result["time"]}`}</title>{" "}
      </circle>
    </g>
  ) : (
    <g>
      <circle
        cx={0}
        cy={yAxisScale(yAxisValue(result))}
        r={
          isFinale ? markProperties.finishTime.rad : markProperties.lapTime.rad
        }
        fill={markProperties.lapTime.color}
        opacity={1}
        stroke={isFinale ? "#F5F3F2" : "none"}
        strokeWidth={2}
      >
        <title>{`Post: ${result["position"]}, Lap: ${result["lap"]}, ${result["time"]}`}</title>{" "}
      </circle>
      {isFinale ? (
        <text
          x={0}
          y={yAxisScale(yAxisValue(result)) + 4}
          textAnchor="middle"
          fontSize={12}
          fontWeight={700}
          fill="#F5F3F2"
          cursor="default"
          pointerEvents="none"
        >
          {`#${result["position"]}`}
        </text>
      ) : null}
    </g>
  );
};
