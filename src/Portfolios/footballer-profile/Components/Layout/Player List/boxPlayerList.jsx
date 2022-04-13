import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  Paper,
} from "@mui/material";

export const BoxPlayerList = ({ data, handleSelect, height }) => {
  return (
    <List
      dense
      sx={{
        p: 0,
        width: "100%",
        maxWidth: 420,
      }}
    >
      <ListSubheader
        sx={{ textAlign: "center" }}
      >{`PLayer List`}</ListSubheader>
      <Paper elevation={5} sx={{ height: { height }, overflow: "auto" }}>
        {data.map((d, i) => {
          const labelId = `checkbox-list-secondary-label-${i}`;
          return (
            <ListItem key={labelId} disablePadding>
              <ListItemButton onClick={() => handleSelect(i)}>
                <ListItemAvatar>
                  <Avatar
                    alt={d["Name"]}
                    src={`https://resources.premierleague.com/premierleague/photos/players/40x40/${d["URIPict"]}`}
                    sx={{ width: 50, height: 50, p: 0 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={d["Name"]}
                  secondary={d["Squad"]}
                />
                <ListItemText
                  id={labelId}
                  primary={<h4>{d["Post"]}</h4>}
                  style={{ textAlign: "right" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </Paper>
    </List>
  );
};
