import { Fragment } from "react";
export const NonSelectedMark = ({
  data,
  selectedSquad,
  xScale,
  yScaleObj,
  yValue,
  r,
}) => {
  let nodeX = 0;
  let nodeY = 0;
  return data.map((d, id) => (
    <g
      className={`node n-${d["Squad"]}`}
      key={id + " " + d.Squad}
      opacity={!selectedSquad ? 1 : 0.4}
    >
      {xScale.domain().map((k, ik) => (
        <Fragment key={ik}>
          {ik > 0 ? (
            <line
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
        </Fragment>
      ))}
      {xScale.domain().map((k) => (
        <Fragment key={k}>
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
        </Fragment>
      ))}
    </g>
  ));
};
