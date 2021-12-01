export const TopLayout = ({
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  onTopicChange,
  topic,
  toggleStyle,
}) => {
  return (
    <>
      <Typography variant="contentTitle">
        {`Kasus ${topic} Di Setiap Provinsi Di Tahun 2020`}
      </Typography>
      <Typography variant="body2">
        Terdapat 5 provinsi dengan jumlah kasus HIV tertinggi pada tahun 2020
        adalah Jawa Timur , diikuti Jawa Barat , Jawa Tengah , DKI Jakarta , dan
        Papua. Dan 5 provinsi dengan jumlah AIDS terbanyak adalah Papua , Jawa
        Tengah, Jawa Barat, Bali , dan Jawa Timur.
      </Typography>
      <ToggleButtonGroup
        sx={{ mt: 2 }}
        value={topic}
        exclusive
        onChange={onTopicChange}
      >
        <ToggleButton
          disabled={topic === "HIV"}
          style={toggleStyle}
          value="HIV"
        >
          Kasus HIV
        </ToggleButton>
        <ToggleButton
          disabled={topic === "AIDS"}
          style={toggleStyle}
          value="AIDS"
        >
          Kasus AIDS
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
