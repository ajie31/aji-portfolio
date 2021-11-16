import {
  Toolbar,
  AppBar,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";
import { breaks } from "../../styles/globalTheme";

const styleToolbars = (breakPoint) => {
  return {
    flexWrap: "wrap",
    textAlign: breakPoint ? "center" : "left",
    justifyContent: breakPoint ? "space-evenly" : "flex-end",
  };
};
export const Header = () => {
  const breakSmall = useMediaQuery(breaks.breakpoints.down("sm"));
  const breakMedium = useMediaQuery(breaks.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ bgcolor: "white" }}
      >
        <Toolbar sx={styleToolbars(breakSmall)}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Aji Portfolio
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};
