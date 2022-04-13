import { Grid, Box, Container, Typography } from "@mui/material";
import { GetProcessedData, GetDataPassType } from "./Data/getdata";
import { ScatterPlotDynamic } from "./Components/Graph/Scatter Plot Dynamic/scatterPlotDynamic";
import { ConnectedScatterPlot } from "./Components/Graph/Connected scatter plot/connectedScatterPlot";
import { BarChart } from "./Components/Graph/BarChart/barChart";

const scatterPlotProp = { width: 720, height: 500 };
const layOutStyle = {
  BgColor: "white",
  textColor: { main: "#98998E", secondary: "#BFB699" },
};

export const FootballPlot = () => {
  const selected_data = GetProcessedData();
  const selectedPassType = GetDataPassType();
  if (!selected_data || !selectedPassType) {
    return <pre>Loading...</pre>;
  }

  return (
    <Container style={{ px: 1 }} maxWidth="lg">
      <Grid spacing={0} justifyContent="center" alignItems="center" container>
        <Grid item xs={11} md={9}>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              margin: "16px auto",
            }}
          >
            <h2 className="main-text">
              Grafik Progressifitas dan Pola Mengumpan Pada Liga Premier Inggris
            </h2>
            <p className="regular-text">
              Perbandingan data dengan 3 visual yang berbeda dan
              mempresentasikan Progresifitas permainan, Pola mengumpan bola
              ditinjau dari jarak dan tinggi umpanan, dan aksi dari permainan
              terbuka yang terlibat dalam sebuah tembakan atau goal.
            </p>
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "auto",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            {/* <ScatterPlot data={passing_data} /> */}
            <BarChart data={selected_data} />
          </Box>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "auto",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <ConnectedScatterPlot data={selectedPassType} />
          </Box>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "auto",
              width: "100%",
            }}
          >
            <ScatterPlotDynamic data={selected_data} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
