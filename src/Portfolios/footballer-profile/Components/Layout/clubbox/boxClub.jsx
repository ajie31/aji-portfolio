import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { PentagonChart } from "../../Chart/Radar Chart/pentagonChart";
import { getCountryToCode } from "../../Data/dataProcess";
import { HeaderClub } from "./Box club Profile/headerClub";
import { TableContentClub } from "./Box club Profile/tableContentClub";

const contentTableStyle = { paddingTop: 0, paddingBottom: 0, margin: "auto" };

export const BoxClub = ({
  heightImage,
  heightMark,
  club_selected,
  allClubData,
  data,
  handleSelectClub,
}) => {
  const mediaSctyle = {
    media: {
      objectFit: "scale-down",
      width: "100%",
    },
  };

  return (
    <Card elevation={5} sx={{ width: "100%", maxWidth: 400 }}>
      <img
        style={mediaSctyle.media}
        height={heightImage}
        src={`https://raw.githubusercontent.com/ajie31/aji-portfolio/refs/heads/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/${club_selected}.png`}
        alt={`${club_selected} logo`}
      />
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HeaderClub
          data={data}
          getCountryToCode={getCountryToCode}
          club_selected={club_selected}
          allClubData={allClubData}
          handleSelectClub={handleSelectClub}
        />
      </CardContent>
      <CardContent style={contentTableStyle}>
        <TableContentClub data={data} />
      </CardContent>
    </Card>
  );
};
