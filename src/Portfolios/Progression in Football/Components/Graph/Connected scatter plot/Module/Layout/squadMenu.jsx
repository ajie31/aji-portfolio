import { Tab, Tabs, tabsClasses } from "@mui/material";

export const SquadMenu = ({ data, selectedSquad, onChangeSquadHandler }) => {
  return (
    <div>
      <Tabs
        value={selectedSquad}
        onChange={onChangeSquadHandler}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {data.map((d, i) => (
          <Tab
            key={i}
            className="axis-note"
            value={d["Squad"]}
            label={d["Squad"]}
          />
        ))}
      </Tabs>
    </div>
  );
};
