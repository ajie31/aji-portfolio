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
            {/* {CarryObject(d).map((chart) => (
              <rect
                key={"" + d["Squad"] + " " + chart.name}
                x={xOffset - widthVal(chart)}
                y={yScale(yValue(d))}
                width={widthVal(chart)}
                height={yScale.bandwidth()}
                fill={chart.color}
              >
                {(xOffset -= widthVal(chart))}

                <title>{`${yValue(d)} : ${chart.action}`}</title>
              </rect>
            ))} */}

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
