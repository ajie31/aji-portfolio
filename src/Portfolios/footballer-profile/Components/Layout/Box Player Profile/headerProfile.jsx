import { Box, Typography } from "@mui/material";
export const HeaderProfile = ({ getCountryToCode, data }) => {
  return (
    <>
      <Typography margin={0} gutterBottom variant="h5" component="div">
        {data["Name"]}
      </Typography>

      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "space-between",
          minWidth: "72px",
        }}
      >
        <img
          style={{ width: 26, height: "auto" }}
          alt={data["Nation"]}
          src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${getCountryToCode(
            data["Nation"]
          )}.svg`}
        />
        <Typography variant="h5" component="div" color="text.secondary">
          |
        </Typography>
        <Typography variant="h6" component="div" color="text.secondary">
          {data["Post"]}
        </Typography>
      </Box>
    </>
  );
};
