import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
export const HeaderClub = ({
  getCountryToCode,
  data,
  club_selected,
  allClubData,
  handleSelectClub,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <FormControl sx={{ minWidth: 80, width: "90%" }}>
          <InputLabel id="demo-simple-select-autowidth-label">Club</InputLabel>
          <Select
            sx={{ fontSize: "1.5em", fontWeight: 400 }}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={club_selected}
            onChange={handleSelectClub}
            autoWidth
            label="Clubs"
          >
            {allClubData.map((club, idx) => (
              <MenuItem
                key={`${idx}-list-club`}
                value={club["Squad"].replace(/^\s+/, "")}
              >
                {club["Squad"].replace(/^\s+/, "")}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          minWidth: "72px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontSize="1.02em" color="text.secondary">
          {data["Manager"]}
        </Typography>
      </Box>
    </Box>
  );
};
