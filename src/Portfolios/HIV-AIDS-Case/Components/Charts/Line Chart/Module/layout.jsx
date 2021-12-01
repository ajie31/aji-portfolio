import { TextTheme } from "../../../../Style/theme";
import { Typography, ThemeProvider, Box } from "@mui/material";
export const Layout = ({ children }) => {
  return (
    <Box className="chart-one-title">
      <ThemeProvider theme={TextTheme}>
        <Typography variant="contentTitle">
          Kasus Hiv And AIDS Tahun 2011 - 2020
        </Typography>
        <Typography variant="body2">
          jumlah kasus baru HIV positif pada tahun 2020 merupakan yang terendah
          sejak empat tahun terakhir, yaitu dilaporkan sebanyak 41.987 kasus.
          Sedang jumlah kasus baru AIDS cenderung menurun tetapi mengalami
          peningkatan dibanding tahun sebelumnya, dan jumlah kasus baru AIDS
          pada 2020 adalah 8.639 kasus.
        </Typography>
      </ThemeProvider>

      {children}
    </Box>
  );
};
