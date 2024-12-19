export const GetDataSquad = async () => {
  const URI_DATA_SQUAD = `https://fbref-data-api.vercel.app/data_players_squad/2024_2025`;
  try {
    const response = await fetch(URI_DATA_SQUAD);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data_squad = await response.json();
    if (!data_squad) {
      console.error("data_squad.features is not defined", data_squad);
      return [];
    }
    // console.log(data_squad["features_players"]);
    return data_squad;
  } catch (error) {
    console.error("Error fetching data from Pass Type:", error);
    return [];
  }
};
