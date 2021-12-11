export const Chart = (props) => {
  const { data, yScale, xScale, xValue, yValue, r } = props;

  return (
    <g>
      {data.map((d, i) => (
        <circle key={i} cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={r}>
          <title>{d["Squad"]}</title>
        </circle>
      ))}
    </g>
  );
};
