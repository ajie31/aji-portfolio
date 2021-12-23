export const Chart = (props) => {
  const {
    data,
    progressByDistance,
    progressByActions,
    yScale,
    xScale,
    xValue,
    yValue,
    margin,
    innerWidth,
  } = props;
  // TODO : EDIT STYLE!!!
  return (
    <g transform={`translate(${margin.left},${margin.top})`}>
      <ChartByDistance
        data={data}
        progressByDistance={progressByDistance}
        yScale={yScale}
        xScale={xScale}
        xValue={xValue}
        yValue={yValue}
        margin={margin}
      />
      <ChartByAction
        data={data}
        progressByActions={progressByActions}
        yScale={yScale}
        xScale={xScale}
        xValue={xValue}
        yValue={yValue}
        margin={margin}
      />
    </g>
  );
};

const ChartByDistance = ({
  data,
  progressByDistance,
  yScale,
  xScale,
  xValue,
  yValue,
  margin,
}) => {
  return (
    <g>
      {data.map((d, i) => {
        const totalWidth = xScale(xValue(d));
        const widthVal = (c) => c.value() * totalWidth;
        let xOffset = xScale(100);
        return (
          <g key={d["Squad"]} className={d["Squad"]}>
            {progressByDistance(d).map((chart) => (
              <rect
                key={"" + d["Squad"] + " " + chart.name}
                x={xOffset}
                y={yScale(yValue(d))}
                width={widthVal(chart)}
                height={yScale.bandwidth()}
                fill={chart.color}
              >
                {(xOffset += widthVal(chart))}
                <title>{`${yValue(d)} : ${chart.action}`}</title>
                {/* <title>{numberFormat(xValue(d) * 1000)}</title> */}
              </rect>
            ))}
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

const ChartByAction = ({
  data,
  progressByActions,
  yScale,
  xScale,
  xValue,
  yValue,
  margin,
}) => {
  return (
    <g transform="translate(-10,0)">
      {/* transform={`translate(-10,0) scale(-1,1)`} */}
      {data.map((d, i) => {
        const totalWidth = xScale(xValue(d));
        const widthVal = (c) => c.value() * totalWidth;

        let xOffset = xScale(100);
        return (
          <g key={d["Squad"]} className={d["Squad"]}>
            {progressByActions(d).map((chart) => (
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
                {/* <title>{numberFormat(xValue(d) * 1000)}</title> */}
              </rect>
            ))}
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
