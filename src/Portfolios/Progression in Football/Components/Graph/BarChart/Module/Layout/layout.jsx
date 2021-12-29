import { Grid, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import styles from "../../../../../style/barChart.module.css";

export const Layout = ({
  topic,
  items,
  handleTopicChange,
  title,
  description,
  children,
}) => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <div className="full-width title">{title}</div>
        <div className="full-width description">{description}</div>
        <div className="full-width menu-axis">
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
    </Grid>
  );
};

const Menu = ({ items, topic, handleTopicChange }) => (
  <div className={styles["dropdown-menu"]}>
    <FormControl fullWidth>
      <InputLabel id="select-topic-progression-label">Topik</InputLabel>
      <Select
        labelId="select-topic-progression-label"
        id="select-topic"
        value={topic}
        label="Topik"
        onChange={handleTopicChange}
      >
        <MenuItem value={"byDistance"}>Berdasarkan Jarak</MenuItem>
        <MenuItem value={"byAction"}>Berdasarkan Aksi</MenuItem>
      </Select>
    </FormControl>
  </div>
);
