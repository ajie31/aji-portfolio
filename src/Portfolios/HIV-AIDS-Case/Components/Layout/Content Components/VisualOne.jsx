export const VisualOne = ({
  Paper,
  LineChart,
  dataSum,
  visualProps,
  breakSmall,
}) => (
  <Paper
    sx={{
      pt: 2,
      borderTop: 2,
      borderRadius: 0,
      borderColor: "#635f5d",
    }}
    elevation={0}
  >
    <LineChart
      data={dataSum}
      figureProps={visualProps.one}
      breakSmall={breakSmall}
    />
  </Paper>
);
