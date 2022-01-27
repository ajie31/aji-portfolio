import { Grid } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <h1>Progression and passes</h1>
      </Grid>
      <Grid xs={12} item>
        {children}
      </Grid>
    </Grid>
  );
};
