export const EplSquad = ({ d, yScale, yValue, r }) => {
  return (
    <g transform={`translate(0,${r * 2.5})`}>
      <defs>
        <pattern
          id={`${d["Squad"].replace(/\s/g, "")}-bar`}
          width={1}
          height={1}
        >
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
        cx={0}
        cy={yScale(yValue(d))}
        fill={`url(#${d["Squad"].replace(/\s/g, "")}-bar)`}
        r={r}
      >
        <title>{d["Squad"]}</title>
      </circle>
    </g>
  );
};
