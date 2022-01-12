import { Grid } from "@mui/material";

import { Menu } from "./menu";
export const Layout = ({
  topic,
  items,
  handleTopicChange,
  title,
  note,
  source,
  children,
}) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <div className="full-width">
          <h5 className="header-text">{title}</h5>
        </div>

        <div className="full-width">
          <Menu
            items={items}
            topic={topic}
            handleTopicChange={handleTopicChange}
          />
        </div>
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
