import { breaks } from "../../../styles/globalTheme";

const headStyle = {
  stars: {
    width: "100%",
    backgroundColor: "#222733",
    flexBasis: "250px",
  },
  wrapProfile: {
    zIndex: 3,
    margin: "0 auto",
    transform: "translate(0,-20%)",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    [breaks.breakpoints.down("lg")]: {
      marginLeft: "10%",
      transform: "translate(0,-15%)",
    },
    [breaks.breakpoints.down("ml")]: {
      margin: "0",
    },
  },
  wrapTopProfile: {
    display: "flex",
    alignItems: "center",
    [breaks.breakpoints.down("ml")]: {
      flexDirection: "column",
      textAlign: "center",
      marginBottom: "1rem",
    },
  },
  profile: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    backgroundColor: "#828",
    [breaks.breakpoints.down("lg")]: { width: "170px", height: "170px" },
    [breaks.breakpoints.down("ml")]: {
      width: "200px",
      height: "200px",
    },
    [breaks.breakpoints.down("sm")]: {
      width: "180px",
      height: "180px",
    },
  },
  name: {
    fontFamily: "Roboto,sans-serif",
    color: "#fbfbfb",
    fontWeight: 300,
    fontSize: "2.75rem",
    transform: "translate(9%,-100%)",
    whiteSpace: "pre-wrap",
    [breaks.breakpoints.down("ml")]: {
      color: "#222733",
      margin: "0",
      padding: "1rem .3rem",
      borderBottom: "2px solid #222733",
      transform: "translate(0,0)",
    },
    [breaks.breakpoints.down("sm")]: {
      fontSize: "2.2rem",
    },
  },
  job: {
    color: "#fbfbfb",
    fontWeight: 300,
    fontSize: "1.25rem",
    fontFamily: "Noto Sans JP,sans-serif",
    [breaks.breakpoints.down("ml")]: { color: "#222733", padding: "1rem" },
  },
  introducing: {
    maxWidth: "60rem",
    paddingLeft: "300px",
    transform: "translate(0,-30%)",
    [breaks.breakpoints.down("lg")]: { paddingLeft: "220px" },
    [breaks.breakpoints.down("ml")]: {
      transform: "translate(0,0)",
      paddingLeft: 0,
      margin: "0 auto",
    },
    [breaks.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "0",
    },
  },
  Hello: {
    fontFamily: "Roboto,sans-serif",
    color: "#222733",
    fontWeight: 700,
    fontSize: "4.7rem",
    marginBottom: "1.7rem",
    [breaks.breakpoints.down("ml")]: {
      margin: "0 1rem",
      textAlign: "center",
      fontSize: "4rem",
    },
    [breaks.breakpoints.down("sm")]: {
      margin: "0 1rem",
      textAlign: "center",
      fontSize: "2.7rem",
    },
  },

  There: {
    color: "#222733",
    fontWeight: 300,
    fontSize: "4rem",
    fontFamily: "Noto Sans JP,sans-serif",
    [breaks.breakpoints.down("ml")]: {
      margin: "0 1rem",
      textAlign: "center",
      fontSize: "3.3rem",
    },
    [breaks.breakpoints.down("sm")]: {
      margin: "0 1rem",
      textAlign: "center",
      fontSize: "2.7rem",
    },
  },
  paragraph: {
    fontFamily: "Noto Sans JP,sans-serif",
    color: "#222733",
    fontWeight: 300,
    fontSize: "1.1rem",
    [breaks.breakpoints.down("ml")]: {
      textAlign: "justify",
    },
    [breaks.breakpoints.down("sm")]: {
      fontSize: ".98rem",
    },
  },
  quotesWrap: {
    backgroundColor: "#2f3b52",
    flexBasis: "200px",
    transform: "translate(0,-70%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 8rem",
    [breaks.breakpoints.down("ml")]: {
      transform: "translate(0,-30%)",
      padding: "1rem 1rem",
    },
  },
  quote: {
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 300,
    fontSize: "1.1rem",
    color: "#fbfbfb",
    marginTop: "1em",
    [breaks.breakpoints.down("sm")]: {
      fontSize: ".98rem",
    },
  },
  quoteAuthor: {
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 300,
    fontSize: "1.1rem",
    width: "100%",
    color: "#fbfbfb",
    marginTop: "1em",
    textAlign: "end",
    [breaks.breakpoints.down("sm")]: {
      fontSize: ".98rem",
    },
  },
  MyWork: {
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 300,
    fontSize: "1.1rem",
    color: "#fbfbfb",
    marginTop: "1em",
    textAlign: "end",
  },
};
export default headStyle;
