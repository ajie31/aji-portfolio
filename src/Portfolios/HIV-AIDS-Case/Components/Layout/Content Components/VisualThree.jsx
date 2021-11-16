export const VisualThree = ({
  Paper,
  Choropleth,
  mostRecentProvinceData,
  dataTopology,
  dataByAge,
  visualProps,
  breakSmall,
  breakMedium,
}) => (
  <Paper
    sx={{
      borderTop: 2,
      borderBottom: 2,
      borderRadius: 0,
      borderColor: "#635f5d",
    }}
    elevation={0}
  >
    <Choropleth
      dataPerProvince={mostRecentProvinceData}
      dataTopology={dataTopology}
      dataByAge={dataByAge}
      figureProps={visualProps.three}
      breakingPointSm={breakSmall}
      breakingPointMd={breakMedium}
    />
  </Paper>
);
