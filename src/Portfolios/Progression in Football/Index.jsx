import { Grid, Box, Container, Typography } from "@mui/material";
import { GetDataPass } from "./Data/getdata";
import { ScatterPlot } from "./Components/Scatter plot/scatterPlot";
import { ScatterPlotDynamic } from "./Components/Scatter Plot Dynamic/scatterPlotDynamic";
import styles from "./style/football.module.css";
import { margin } from "@mui/system";

const scatterPlotProp = { width: 720, height: 500 };

export const FootballPlot = () => {
  const passing_data = GetDataPass();
  if (!passing_data) {
    return <pre>Loading...</pre>;
  }

  return (
    <Container maxWidth="lg">
      <Grid spacing={2} container>
        <Grid item xs={12} md={12}>
          <Box
            style={{ backgroundColor: "grey", height: "200px", width: "100%" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            style={{
              backgroundColor: "grey",
              height: "auto",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <ScatterPlot data={passing_data} />
          </Box>
          <Box
            style={{ backgroundColor: "grey", height: "auto", width: "100%" }}
          >
            <ScatterPlotDynamic data={passing_data} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            style={{
              backgroundColor: "grey",

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
