export const TopLayout = ({ Grid }) => {
  return (
    <Grid
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      item
    >
      <h3 className="title">
        Pencapaian Waktu Pada setiap Pembalap dalam Kompetisi F1
      </h3>
      <p className="description">
        Pencapaian waktu akan diperlihatkan pada sebuah data visual sesuai
        dengan sirkuit balap yang dipilih
      </p>
    </Grid>
  );
};
