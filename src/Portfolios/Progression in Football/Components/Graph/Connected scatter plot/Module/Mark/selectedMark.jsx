import { Tooltip } from "@mui/material";
export const SelectedMark = ({
  selectedData,
  selectedSquad,
  xScale,
  yScaleObj,
  yValue,
  selectedProps,
  styles,
}) => {
  let nodeX = 0;
  let nodeY = 0;
  return selectedData ? (
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
  ) : null;
};
