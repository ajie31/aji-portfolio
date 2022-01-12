import { Grid, Box, Container, Typography } from "@mui/material";
import {
  GetDataPass,
  GetDataTouchCarries,
  GetProcessedData,
} from "./Data/getdata";
import { ScatterPlot } from "./Components/Graph/Scatter plot/scatterPlot";
import { ScatterPlotDynamic } from "./Components/Graph/Scatter Plot Dynamic/scatterPlotDynamic";
import styles from "./style/football.module.css";
import { FootballField } from "./Components/Graph/Football Field/FootballField";
import { BarChart } from "./Components/Graph/BarChart/barChart";

const scatterPlotProp = { width: 720, height: 500 };
const layOutStyle = {
  BgColor: "white",
  textColor: { main: "#98998E", secondary: "#BFB699" },
};

export const FootballPlot = () => {
  const passing_data = GetDataPass();
  const touches = GetDataTouchCarries();
  const selected_data = GetProcessedData();
  if (!passing_data || !touches || !selected_data) {
    return <pre>Loading...</pre>;
  }

  return (
    <Container style={{ padding: 0 }} maxWidth="lg">
      <Grid spacing={0} container>
        <Grid item xs={12} md={12}>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "200px",
              width: "100%",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={8}>
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
            <ScatterPlotDynamic data={passing_data} />
          </Box>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "auto",
              width: "100%",
            }}
          >
            <FootballField data={touches} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              width: "100%",
              padding: "1rem",
            }}
          >
            <h5 className={styles["keterangan"]}>Keterangan</h5>

            <ul className={styles["konten-keterangan-ul"]}>
              <li className={styles["konten-keterangan-li"]}>
                <span>Umpan Sukses p90</span>
                <ul>
                  <li>
                    <p>
                      Merupakan operan yang sukses terhadap sesama member satu
                      tim di setiap 90 menit pertandingan.
                    </p>
                  </li>
                </ul>
              </li>

              <li className={styles["konten-keterangan-li"]}>
                <span>Ratio Jarak Umpan Progressif p90</span>
                <ul>
                  <li>
                    <p>
                      Merupakan rasio dari total jarak pergerakan bola dari aksi
                      umpan sukses setiap 90 menit pertandingan dan total jarak
                      pergerakan bola dari umpan progresif setiap 90 menit
                      pertandingan.
                    </p>
                    <p>
                      Umpan progresif, merupakan umpan sukses dimana pergerakan
                      bola mendekati gawang lawan.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
