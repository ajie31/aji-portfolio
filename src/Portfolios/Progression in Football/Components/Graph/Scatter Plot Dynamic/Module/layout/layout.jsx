import { Grid } from "@mui/material";
import { Menu } from "./menu";
import { Paragraph } from "./paragraph";

export const Layout = ({
  children,
  options,
  topic,
  handleChangeTopic,
  title,
  note,
  source,
  description,
}) => {
  return (
    <Grid spacing={2} container>
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
        <Paragraph description={description} />
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
