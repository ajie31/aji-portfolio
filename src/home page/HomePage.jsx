import { Grid, Typography, useMediaQuery } from "@mui/material";

import { makeStyles } from "@mui/styles";
import headStyle from "./styles/styles";
import { breaks } from "../../styles/globalTheme";
import { TheHead } from "./components/TheHead";
import { TheContents } from "./components/TheContents";

const headWrap = (breakML) => {
  return {
    backgroundColor: "#fff",
    color: "#635F5D",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    marginBottom: breakML ? "-2rem" : "-6rem",
  };
};

const contents = (breakML) => {
  return {
    name: breakML ? "Wirawan Setio Aji" : "Wirawan Setio Aji  |",
    job: breakML ? "Web Developer" : "    Web Developer",
    paragraphs: [
      `I am a passionate Web Developer with additional expertise as a Data Engineer. My strongest skills lie in programming with Node.jsand Python, and I have foundational
       knowledge in C#. I am particularly interested in creating data visual web applications,and data engineering. I am proficient in developing data
        visualizations using D3.js and React.js, as well as performing data processing tasks with Python. I am also capable of handling  databases using SQL or noSQL like mongo db.`,
    ],
    Quote: `It’s a feeling that says you have a responsibility. It’s not for
    yourself. That’s why it’s there. That’s why you are out there. And somehow you recognize
    that you’re a piece of this total life.`,
  };
};
const myWorks = [
  {
    title: "HIV dan AIDS Di Indonesia",
    url: "/portfolio/HIV_AIDS_case",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/previewHIVAIDS.png",
    description:
      "Data Visual about HIV AIDS in Indonesia in Every province, using Node.js, d3.js and material UI ",
  },
  {
    title: "Grafik Progressifitas dan Pola Mengumpan Pada Liga Premier Inggris",
    url: "/portfolio/football_progression",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/football_progression_thumbnail.jpg",
    description:
      "Progressive Football Play in premiere league, using Node.js, d3.js, mongoDB, material UI, and python API backend ",
  },
  {
    title: "Premier League Player Profiles",
    url: "/portfolio/footballer_profile?club_selected=arsenal",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/profile%20player_thumbnail.jpg",
    description:
      "Data Visual for football player profiling in premier league using using Node.js, d3.js, mongoDB, material UI, and data scraping python API backend ",
  },
  {
    title: "F1 Race Overview V 1.0",
    url: "/portfolio/f1_laptime",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/F1%20laptime.jpg",
    description:
      "unique data visuals for F1 in seasson 2022  Node.js, d3.js, material UI",
  },
  {
    title: "F1 Race Overview V2.0",
    url: "https://f1-overview-new.vercel.app/f1_visual",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/refs/heads/main/src/home%20page/image/f1_overview.jpg",
    description:
      "unique data visuals for F1 seasson 2024 Node.js, d3.js, material UI, and open f1 data API",
  },
];
export const HomePage = () => {
  const useStyles = makeStyles((theme) => headStyle);

  const headClasses = useStyles();
  const breakML = useMediaQuery(breaks.breakpoints.down("ml"));
  return (
    <Grid container>
      <TheHead
        breakML={breakML}
        headWrap={headWrap}
        headClasses={headClasses}
        contents={contents}
      />

      <TheContents headClasses={headClasses} myWorks={myWorks} />
    </Grid>
  );
};
