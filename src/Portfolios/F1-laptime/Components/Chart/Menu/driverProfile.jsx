import { Grid } from "@mui/material";
export const DriverProfile = ({ standing, surname, forename, points }) => {
  return (
    <Grid container>
      <Grid
        xs={3}
        style={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          textAlign: "left",
          fontSize: "1.25rem",
          fontWeight: "bold",
        }}
        item
      >
        {`#${standing}`}
      </Grid>

      <Grid
        xs={6}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          justifyContent: "center",
        }}
        item
      >
        <span
          style={{
            fontSize: ".7rem",
            fontWeight: "light",
          }}
        >
          {forename}
        </span>
        <span
          style={{
            fontSize: ".86rem",
            fontWeight: "bold",
          }}
        >
          {surname}
        </span>
      </Grid>
      <Grid xs={3} style={{ display: "flex", flexDirection: "column" }} item>
        <span
          style={{
            fontSize: ".86rem",
            fontWeight: "light",
          }}
        >{`${points}`}</span>
        <span
          style={{
            fontSize: ".7rem",
            fontWeight: "800",
            backgroundColor: "#635f5d",
            color: "white",
            borderRadius: "3px",
          }}
        >{` pts`}</span>
      </Grid>
    </Grid>
  );
};
