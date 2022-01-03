export const CarryChart = ({
  data,
  CarryObject,
  yScale,
  xScale,
  totalWidth,
  yValue,
}) => {
  return (
    <g transform="translate(-10,0)">
      {/* transform={`translate(-10,0) scale(-1,1)`} */}
      {data.map((d, i) => {
        const chart = CarryObject(d)[0];
        const widthVal = chart.value() * totalWidth * chart.multiplier;
        const chart2 = CarryObject(d)[1];
        let xOffset = xScale(100);

        return (
          <g key={d["Squad"]} className={d["Squad"]}>
            <rect
              key={"" + d["Squad"] + " " + chart.name}
              x={xOffset - widthVal}
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
              x={xOffset - totalWidth + widthVal}
              y={yScale(yValue(d))}
              width={totalWidth - widthVal}
              height={yScale.bandwidth()}
              fill={chart2.color}
            >
              {(xOffset -= totalWidth - widthVal)}

              <title>{`${yValue(d)} : ${chart2.action}`}</title>
            </rect>
            <text
              x={xOffset}
              y={yScale(yValue(d))}
              dx="-0.7em"
              dy="1.2em"
              fill="#98998E"
              textAnchor="end"
            >
              {d["Poss"]}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export const CarryChart1 = ({
  d,
  CarryObject,
  yScale,
  xScale,
  yValue,
  xValue,
  xOffset,
}) => {
  xScale();
  const chart = CarryObject(d)[0];

  return (
    <g
      transform={`translate(${xOffset},0) scale(-1,1)`}
      key={d["Squad"]}
      className={d["Squad"]}
    >
      <rect
        key={"" + d["Squad"] + " " + chart.name}
        x={0}
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
