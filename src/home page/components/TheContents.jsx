import { Grid, Typography } from "@mui/material";
import { TheCard } from "./contents/TheCard";

export const TheContents = ({ headClasses, myWorks }) => {
  return (
    <Grid container style={{ padding: "0 1rem" }} spacing={4}>
      <Grid item xs={12}>
        <Typography
          style={{ textAlign: "center", fontWeight: 300 }}
          variant="h3"
          component="h2"
          gutterBottom
        >
          My Works
        </Typography>
      </Grid>
      {myWorks.map((d) => (
        <TheCard headClasses={headClasses} properties={d} />
      ))}
    </Grid>
  );
};
