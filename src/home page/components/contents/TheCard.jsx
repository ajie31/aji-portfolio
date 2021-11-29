import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

export const TheCard = ({ headClasses, properties }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <Link href={properties.url}>
          <a>
            <CardMedia
              component="img"
              sx={{
                maxHeight: "300px",
              }}
              image={properties.imgUrl}
              alt="random"
            />
          </a>
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={properties.url} underline="hover">
              <a>{properties.title}</a>
            </Link>
          </Typography>
          <p className={headClasses.paragraph}>{properties.description}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};
