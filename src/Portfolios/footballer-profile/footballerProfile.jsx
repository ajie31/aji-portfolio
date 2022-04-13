import { useEffect, useState } from "react";

import { BoxProfile } from "./Components/Layout/boxProfile";
import { BoxPlayerList } from "./Components/Layout/Player List/boxPlayerList";
import { GetDataProfile } from "./Components/Data/getData";

import { Container, Grid, useMediaQuery } from "@mui/material";

const FootballerProfile = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const mediaSmall = useMediaQuery("(max-width:1180px)");
  const mediaXtraSmall = useMediaQuery("(max-width:900px)");
  const mediaSmallHeight = useMediaQuery("(max-height:700px)");
  const dataProfiles = GetDataProfile();

  const handleSelect = (index) => {
    setSelectedPlayer(dataProfiles[index]);
  };

  useEffect(() => setLoaded(true), []);
  if (!dataProfiles) {
    return <pre>Loading...</pre>;
  }

  const bigPictureHeight = mediaSmall ? 400 : 440;
  const heightMark = mediaXtraSmall ? 352 : mediaSmall ? 280 : 330;
  const playerListHeight = mediaSmall ? 700 : 820;

  // TODO DATA still using test 0 need select data from UI
  return loaded ? (
    <Container
      maxWidth="md"
      style={{
        height: mediaXtraSmall || mediaSmallHeight ? "auto" : "100vh",
        padding: mediaXtraSmall ? 8 : mediaSmall ? "32px" : "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={1}>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxProfile
            data={selectedPlayer ? selectedPlayer : dataProfiles[0]}
            heightImage={bigPictureHeight}
            heightMark={heightMark}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxPlayerList
            data={dataProfiles}
            handleSelect={handleSelect}
            height={playerListHeight}
          />
        </Grid>
      </Grid>
    </Container>
  ) : null;
};
export default FootballerProfile;
