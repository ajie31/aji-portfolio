import { Render } from "./Map/render";

export const Choropleth = ({
  dataPerProvince,
  dataTopology,
  figureProps,
  dataByAge,
  breakingPointSm,
  breakingPointMd,
}) => {
  return (
    <Render
      dataTopology={dataTopology}
      dataPerProvince={dataPerProvince}
      figureProps={figureProps}
      dataByAge={dataByAge}
      breakingPointSm={breakingPointSm}
      breakingPointMd={breakingPointMd}
    />
  );
};
