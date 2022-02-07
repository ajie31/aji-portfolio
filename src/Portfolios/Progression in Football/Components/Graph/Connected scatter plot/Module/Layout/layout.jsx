import { Grid } from "@mui/material";
import { SquadMenu } from "./squadMenu";

export const Layout = ({
  children,
  selectedSquad,
  data,
  onChangeSquadHandler,
  title,
  source,
  note,
}) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <h5 className="header-text">{title}</h5>
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
      <Grid xs={12} item>
        <div className="full-width">
          <span className="footer-text footer-credit">{source}</span>
          <span className="footer-text">{note}</span>
        </div>
      </Grid>
    </Grid>
  );
};
