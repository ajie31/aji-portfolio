export const Chart = (props) => {
  const { data, yScale, xScale, xValue, yValue, r } = props;

  return (
    <g>
      {data.map((d, i) => (
        <g key={i}>
          <defs>
            <pattern id={d[`Squad`].replace(/\s/g, "")} width={r} height={r}>
              <image
                href={`https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/${encodeURIComponent(
                  d["Squad"]
                )}.png`}
                x="0"
                y="0"
                width={r * 2}
                height={r * 2}
              />
            </pattern>
          </defs>
          <circle
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            fill={`url(#${d["Squad"].replace(/\s/g, "")})`}
            r={2}
          >
            <title>{d["Squad"]}</title>
          </circle>
        </g>
      ))}
    </g>
  );
};
