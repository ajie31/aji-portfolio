import { Grid } from "@mui/material";
import { SquadMenu } from "./squadMenu";

export const Layout = ({
  children,
  selectedSquad,
  data,
  onChangeSquadHandler,
}) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <h1>Tipe Mengumpan Bola</h1>
      </Grid>
      <Grid xs={12} item>
        <SquadMenu
          data={data}
          selectedSquad={selectedSquad}
          onChangeSquadHandler={onChangeSquadHandler}
        />
      </Grid>
      <Grid xs={12} item>
        {children}
      </Grid>
    </Grid>
  );
};
