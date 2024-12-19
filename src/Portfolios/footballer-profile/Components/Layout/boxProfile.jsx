import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { PentagonChart } from "../Chart/Radar Chart/pentagonChart";
import { getCountryToCode } from "../Data/dataProcess";
import { HeaderProfile } from "./Box Player Profile/headerProfile";
import { TableContent } from "./Box Player Profile/tableContent";

const contentTableStyle = { paddingTop: 0, paddingBottom: 0, margin: "auto" };

export const BoxProfile = ({ data, heightImage, heightMark }) => {
  const contentSVGStyle = {
    paddingTop: 0,
    paddingBottom: 0,
    margin: "auto",
    width: heightMark,
  };

  return (
    <Card elevation={5} sx={{ width: "100%", maxWidth: 400 }}>
      <CardMedia
        component="img"
        height={heightImage}
        image={`https://resources.premierleague.com/premierleague/photos/players/250x250/${data["URIPict"]}`}
        alt="green iguana"
      />
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HeaderProfile data={data} getCountryToCode={getCountryToCode} />
      </CardContent>
      <CardContent style={contentTableStyle}>
        <TableContent data={data} />
      </CardContent>
      <CardContent style={contentSVGStyle}>
        <PentagonChart data={data} />
      </CardContent>
    </Card>
  );
};
