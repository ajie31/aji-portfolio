export const Chart = (props) => {
  const { data, yScale, xScale, yValue, yScaleObj, squadRows, markLine, r } =
    props;
  let nodeX = 0;
  let nodeY = 0;
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
        </g>
      ))}
      {data.map((d, id) => (
        <g className={`node n-${d["Squad"]}`} key={id + " " + d.Squad}>
          {xScale.domain().map((k, ik) => (
            <>
              <circle
                cx={xScale(k)}
                cy={yScaleObj[k](yValue(k, d))}
                fill={`url(#${d["Squad"].replace(/\s/g, "")})`}
                r={r}
              >
                <title>{d["Squad"]}</title>
              </circle>
              {ik > 0 ? (
                <line
                  className={`line l-${d["Squad"]}`}
                  x1={nodeX}
                  y1={nodeY}
                  x2={xScale(k)}
                  y2={yScaleObj[k](yValue(k, d))}
                  stroke="black"
                />
              ) : null}
              {(nodeX = xScale(k))}
              {(nodeY = yScaleObj[k](yValue(k, d)))}
            </>
          ))}
        </g>
      ))}
    </g>
  );
};
