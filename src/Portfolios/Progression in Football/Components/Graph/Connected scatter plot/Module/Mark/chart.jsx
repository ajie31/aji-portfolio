import { Tooltip } from "@mui/material";
import styles from "../../../../../style/connectingPlot.module.css";
export const Chart = (props) => {
  const {
    data,
    yScale,
    xScale,
    yValue,
    yScaleObj,
    r,
    selectedProps,
    selectedData,
  } = props;
  const selectedSquad = selectedData ? selectedData["Squad"] : null;

  let nodeX = 0;
  let nodeY = 0;
  return (
    <g className="texture-pass-type-group">
      {data.map((d, i) => (
        <defs key={i}>
          <pattern
            id={d[`Squad`].replace(/\s/g, "") + "_pass"}
            width={r}
            height={r}
          >
            <image
              href={`https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/${encodeURIComponent(
                d["Squad"]
              )}.png`}
              className={
                selectedSquad === d["Squad"]
                  ? styles["animated-skin"]
                  : "static-texture"
              }
              width={(selectedSquad === d["Squad"] ? 19 : r) * 2}
              height={(selectedSquad === d["Squad"] ? 19 : r) * 2}
            />
          </pattern>
        </defs>
      ))}
      {data.map((d, id) => (
        <g
          className={`node n-${d["Squad"]}`}
          key={id + " " + d.Squad}
          opacity={!selectedSquad ? 1 : 0.4}
        >
          {xScale.domain().map((k, ik) => (
            <>
              {ik > 0 ? (
                <line
                  key={ik}
                  className={`line l-${d["Squad"]}`}
                  x1={nodeX}
                  y1={nodeY}
                  x2={xScale(k)}
                  // y2={yScale(yValue(k, d))}
                  y2={yScaleObj[k](yValue(k, d))}
                  stroke={"grey"}
                  strokeWidth={0.5}
                />
              ) : null}
              {(nodeX = xScale(k))}
              {/* {(nodeY = yScale(yValue(k, d)))} */}
              {(nodeY = yScaleObj[k](yValue(k, d)))}
            </>
          ))}
          {xScale.domain().map((k, ik) => (
            <>
              <circle
                key={id}
                className="mark-pass-type"
                cx={xScale(k)}
                // cy={yScale(yValue(k, d))}
                cy={yScaleObj[k](yValue(k, d))}
                fill={`url(#${d["Squad"].replace(/\s/g, "")}_pass)`}
                r={r}
              >
                <title>{d["Squad"]}</title>
              </circle>
            </>
          ))}
        </g>
      ))}
      //#region SelectedSquadVisual
      {selectedData ? (
        <g className="selected-squad">
          <g className={`node n-selected-${selectedSquad}`} opacity={1}>
            {xScale.domain().map((k, ik) => (
              <>
                {ik > 0 ? (
                  <line
                    key={yScaleObj[k](yValue(k, selectedData))}
                    className={`${styles["animation-line"]} l-${selectedSquad}`}
                    x1={nodeX}
                    y1={nodeY}
                    x2={xScale(k)}
                    // y2={yScale(yValue(k, d))}
                    y2={yScaleObj[k](yValue(k, selectedData))}
                    stroke={selectedProps.color}
                    strokeWidth={selectedProps.stroke}
                  />
                ) : null}
                {(nodeX = xScale(k))}
                {/* {(nodeY = yScale(yValue(k, d)))} */}
                {(nodeY = yScaleObj[k](yValue(k, selectedData)))}
              </>
            ))}
            {xScale.domain().map((k, ik) => (
              <g key={ik + "selected"}>
                <Tooltip
                  title={`${Number(yValue(k, selectedData).toFixed(1))}`}
                  open={true}
                >
                  <circle
                    key={yScaleObj[k](yValue(k, selectedData))}
                    className={styles["animated-circle"]}
                    cx={xScale(k)}
                    // cy={yScale(yValue(k, d))}
                    cy={yScaleObj[k](yValue(k, selectedData))}
                    fill={`url(#${selectedSquad.replace(/\s/g, "")}_pass)`}
                  ></circle>
                </Tooltip>
              </g>
            ))}
          </g>
        </g>
      ) : null}
      //#endregion SelectedSquadVisual
    </g>
  );
};
