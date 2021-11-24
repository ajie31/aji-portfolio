export const Title = ({ Grid, ThemeProvider, Typography, theme }) => (
  <Grid justifyContent="center" sx={{ mb: 2 }} container>
    <ThemeProvider theme={theme}>
      <Grid xl={7} md={10} xs={12} sx={{ textAlign: "center" }} item>
        <Typography sx={{ px: 0 }} variant="h1">
          HIV dan AIDS Di Indonesia Jumlah Kasus Dan Peta Kasus 2020
        </Typography>
        <Typography variant="boldCaption">By Wirawan Setio Aji</Typography>
        <Typography variant="caption"> ,19 okt 2021</Typography>
      </Grid>
    </ThemeProvider>
  </Grid>
);
