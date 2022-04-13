import { SelectedMark } from "./selectedMark";
import { NonSelectedMark } from "./nonSelectedMark";
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
            width={1}
            height={1}
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
      {/* marks non selected */}
      <NonSelectedMark
        data={data}
        selectedSquad={selectedSquad}
        xScale={xScale}
        yScaleObj={yScaleObj}
        yValue={yValue}
        r={r}
      />
      {/* marks selected */}
      <SelectedMark
        selectedData={selectedData}
        selectedSquad={selectedSquad}
        xScale={xScale}
        yScaleObj={yScaleObj}
        yValue={yValue}
        selectedProps={selectedProps}
        styles={styles}
      />
    </g>
  );
};
