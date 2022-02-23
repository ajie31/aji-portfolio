import styles from "../../../../../style/barChart.module.css";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

export const Menu = ({ topic, handleTopicChange, dataProcess }) => (
  <div className={styles["dropdown-menu"]}>
    <FormControl variant="standard" fullWidth>
      {/* <InputLabel id="select-topic-progression-label">Perbandingan</InputLabel> */}
      <Select
        labelId="select-topic-progression-label"
        id="select-topic"
        value={topic}
        label="Perbandingan"
        onChange={handleTopicChange}
      >
        {Object.keys(dataProcess).map((k) => (
          <MenuItem key={k} value={dataProcess[k].topic}>
            {dataProcess[k].label}
          </MenuItem>
        ))}
        {/* <MenuItem value={"byDistance"}>Berdasarkan Jarak</MenuItem>
          <MenuItem value={"byAction"}>Berdasarkan Aksi</MenuItem> */}
      </Select>
    </FormControl>
  </div>
);
