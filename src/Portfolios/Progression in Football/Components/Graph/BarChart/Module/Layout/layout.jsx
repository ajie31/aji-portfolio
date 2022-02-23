import { Grid } from "@mui/material";
import { Pragraph } from "./paragraph";
export const Layout = ({
  topic,
  items,
  handleTopicChange,
  title,
  note,
  source,
  children,
  topicKeys,
  description,
}) => {
  return (
    <Grid container justifyContent="center">
      <Grid xs={12} item>
        <h5 className="header-text">{title}</h5>
      </Grid>
      <Grid item xs={12}>
        <Pragraph
          items={items}
          topic={topic}
          handleTopicChange={handleTopicChange}
          topicKeys={topicKeys}
          description={description}
        />
      </Grid>
      <Grid item xs={12}>
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
    </Grid>
  );
};
