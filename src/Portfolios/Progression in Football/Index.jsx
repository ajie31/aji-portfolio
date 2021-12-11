import { Grid, Box, Container } from "@mui/material";
import { GetDataPass } from "./Data/getdata";
import { ScatterPlot } from "./Components/Scatter plot/scatterPlot";
export const FootballPlot = () => {
  const passing_data = GetDataPass();
  if (!passing_data) {
    return <pre>Loading...</pre>;
  }

  return (
    <Container>
      <Grid spacing={2} container>
        <Grid item xs={12} md={12}>
          <Box
            style={{ backgroundColor: "grey", height: "200px", width: "100%" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            style={{ backgroundColor: "grey", height: "auto", width: "100%" }}
          >
            <ScatterPlot data={passing_data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            style={{ backgroundColor: "grey", height: "200px", width: "100%" }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
};
