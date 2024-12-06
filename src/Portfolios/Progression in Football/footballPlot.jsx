import {
  Grid,
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
// import { GetProcessedData, GetDataPassType } from "./Data/getdata";
import { GetPCGDataMongo, GetDataPassTypeMongo } from "./Api/get_data";
import { ScatterPlotDynamic } from "./Components/Graph/Scatter Plot Dynamic/scatterPlotDynamic";
import { ConnectedScatterPlot } from "./Components/Graph/Connected scatter plot/connectedScatterPlot";
import { BarChart } from "./Components/Graph/BarChart/barChart";

const scatterPlotProp = { width: 720, height: 500 };
const layOutStyle = {
  BgColor: "white",
  textColor: { main: "#98998E", secondary: "#BFB699" },
};

export const FootballPlot = () => {
  // const selected_data = GetProcessedData();
  // const selectedPassType = GetDataPassType();
  const [season, setSeason] = useState("2022_2023");
  const [isRender, setIsRender] = useState(false);
  const [allData, setAllData] = useState([]);
  // var selected_data = GetPCGDataMongo(season);
  // var selectedPassType = GetDataPassTypeMongo(season);
  var onChangeSeasonHandler = (event, value) => {
    setSeason(event.target.value);
    setIsRender(false);
  };
  // if (!selected_data || !selectedPassType) {
  //   return <pre>Loading...</pre>;
  // }

  useEffect(() => {
    const fetchData = async () => {
      console.log("here");
      try {
        const response_1 = await GetPCGDataMongo(season);
        console.log("response_1 fetched");
        const response_2 = await GetDataPassTypeMongo(season);
        console.log("response_2 fetched");
        if (Array.isArray(response_1) && Array.isArray(response_2)) {
          setAllData([response_1, response_2]);
        } else {
          console.error("One of the responses is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsRender(true);
      }
    };
    if (!isRender) {
      fetchData();
    }
  }, [isRender, season]);
  // if (allData && !isRender) {
  //   console.log("please render");
  //   setIsrRender(true);
  // }
  // console.log(selected_data);
  if (!isRender) {
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
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Season</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={season}
                label="season"
                onChange={onChangeSeasonHandler}
              >
                <MenuItem value="2022_2023">2022/2023</MenuItem>
                <MenuItem value="2023_2024">2023/2024</MenuItem>
                <MenuItem value="2024_2025">2024/2025</MenuItem>
              </Select>
            </FormControl>
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
            <BarChart data={allData[0]} />
          </Box>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "auto",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <ConnectedScatterPlot data={allData[1]} />
          </Box>
          <Box
            style={{
              backgroundColor: layOutStyle.BgColor,
              height: "auto",
              width: "100%",
            }}
          >
            <ScatterPlotDynamic data={allData[0]} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
