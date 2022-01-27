import { Grid } from "@mui/material";
import { Menu } from "./menu";

export const Layout = ({
  children,
  options,
  topic,
  handleChangeTopic,
  title,
  note,
  source,
}) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <h5 className="header-text">{title}</h5>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Menu
          handleChangeTopic={handleChangeTopic}
          topic={topic}
          options={options}
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
