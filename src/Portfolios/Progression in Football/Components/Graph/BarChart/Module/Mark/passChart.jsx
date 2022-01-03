export const PassChart = ({
  data,
  PassObject,
  yScale,
  xScale,
  totalWidth,
  yValue,
}) => {
  return (
    <g>
      {data.map((d, i) => {
        const chart = PassObject(d)[0];
        const widthVal = chart.value() * totalWidth * chart.multiplier;
        const chart2 = PassObject(d)[1];
        let xOffset = xScale(100);
        return (
          <g key={d["Squad"]} className={d["Squad"]}>
            <rect
              key={"" + d["Squad"] + " " + chart.name}
              x={xOffset}
              y={yScale(yValue(d))}
              width={widthVal}
              height={yScale.bandwidth()}
              fill={chart.color}
            >
              {(xOffset -= widthVal)}
              <title>{`${yValue(d)} : ${chart.action}`}</title>
            </rect>
            <rect
              key={"" + d["Squad"] + " " + chart2.name}
              x={xOffset + widthVal * 2}
              y={yScale(yValue(d))}
              width={totalWidth - widthVal}
              height={yScale.bandwidth()}
              fill={chart2.color}
            >
              {(xOffset += totalWidth + widthVal)}

              <title>{`${yValue(d)} : ${chart2.action}`}</title>
            </rect>
            <text
              x={xOffset}
              y={yScale(yValue(d))}
              dx="0.7em"
              dy="1.2em"
              fill="#98998E"
            >
              {d["Poss"]}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export const PassChart1 = ({
  d,
  PassObject,
  yScale,
  xScale,
  totalWidth,
  xValue,
  yValue,
  xOffset,
}) => {
  const chart = PassObject(d)[0];

  return (
    <g
      transform={`translate(${xOffset},0)`}
      key={d["Squad"]}
      className={d["Squad"]}
    >
      <rect
        key={"" + d["Squad"] + " " + chart.name}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
        fill={chart.color}
      >
        <title>{`${yValue(d)} : ${chart.action}`}</title>
      </rect>
      {/* <rect
        key={"" + d["Squad"] + " " + chart2.name}
        x={widthVal}
        width={totalWidth - widthVal}
        height={yScale.bandwidth()}
        fill={chart2.color}
      >
        <title>{`${yValue(d)} : ${chart2.action}`}</title>
      </rect> */}
    </g>
  );
};
