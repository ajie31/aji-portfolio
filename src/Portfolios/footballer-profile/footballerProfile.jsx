import { useEffect, useState } from "react";

import { BoxProfile } from "./Components/Layout/boxProfile";
import { BoxPlayerList } from "./Components/Layout/Player List/boxPlayerList";

import BoxClub from "./Components/Layout/club box/BoxClub";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { GetDataSquad } from "./Components/API/get_data";
import { rankByPoints } from "./Components/Data/dataProcess";
const FootballerProfile = ({ club_selected }) => {
  const [loaded, setLoaded] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const mediaSmall = useMediaQuery("(max-width:1180px)");
  const mediaXtraSmall = useMediaQuery("(max-width:900px)");
  const mediaSmallHeight = useMediaQuery("(max-height:700px)");
  // const dataProfiles = await GetDataSquad();
  const [allData, setAllData] = useState();

  const [club, setClub] = useState();

  useEffect(() => {
    console.log(loaded);
    const fetchData = async () => {
      console.log("here");
      try {
        const response = await GetDataSquad();

        console.log("data fetched");
        setAllData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoaded(true);
      }
    };

    if (!loaded) {
      fetchData();
    }
    if (!club) {
      setClub(club_selected);
      console.log("Updated club state:", club);
    }
  }, [loaded, allData, club_selected, club]);
  if (!loaded || !club) {
    return <pre>Loading...</pre>;
  }
  console.log("selected club is " + club + club_selected);
  const dataProfiles = allData["features_players"].filter(
    (player) => player.squads == club
  );

  const dataSquad = rankByPoints(allData).filter(
    (club_item) => club_item["Squad"].replace(/^\s+/, "") == club
  );

  const handleSelect = (index) => {
    console.log(index);
    setSelectedPlayer(dataProfiles[index]);
  };
  const handleSelectClub = (event) => {
    setSelectedPlayer(null);
    setClub(event.target.value);
  };
  const allClubData = allData["features_CLubs"];

  const mdGrid = 3;
  const bigPictureHeight = mediaSmall ? 400 : 440;
  const heightMark = mediaXtraSmall ? 352 : mediaSmall ? 280 : 330;
  const playerListHeight = mediaSmall ? 700 : 820;

  // TODO DATA still using test 0 need select data from UI
  return loaded ? (
    <Container
      maxWidth="xl"
      style={{
        height: mediaXtraSmall || mediaSmallHeight ? "auto" : "100vh",
        padding: mediaXtraSmall ? 8 : mediaSmall ? "32px" : "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid
          item
          md={mdGrid}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxClub
            data={dataSquad[0]}
            heightImage={bigPictureHeight}
            heightMark={heightMark}
            club_selected={club}
            allClubData={allClubData}
            handleSelectClub={handleSelectClub}
          />
        </Grid>
        <Grid
          item
          md={mdGrid}
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
          md={mdGrid}
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
