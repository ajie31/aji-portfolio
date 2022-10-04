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
    job: breakML ? "Frontend Developer" : "    Frontend Developer",
    paragraphs: [
      `I'am an Data Scientist, strongest point is a programming,using Javascript or Python and Used tobe learn C# ,I do have interest on Making Data Visual Web App, Data Engineering ,and Machine Learning.
      also able to make data visual using D3.js and React js , and data science using Python.
      I can Handle simple database using sql`,
      `Finished Hactive8 Data Science Bootcamp in 2022,and Hopefully can work as data scientist or data analyst or software engineer that implementing machine learning in it in the future`,
      `This Website is just to show my Data visuals projects, for my data science projects please checkout my Github ,and please Checkout my Linkedin for more about me`
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
      "Data visual tentang HIV dan AIDS secara umum dan peninjauan kasus di Indonesia ",
  },
  {
    title: "Grafik Progressifitas dan Pola Mengumpan Pada Liga Premier Inggris",
    url: "/portfolio/football_progression",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/football_progression_thumbnail.jpg",
    description:
      "Perbandingan Data Visual antar club sepak bola Liga Inggris mana yang bermain lebih progressive ",
  },
  {
    title: "Premier League Player Profiles",
    url: "/portfolio/footballer_profile",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/profile%20player_thumbnail.jpg",
    description:
      "Tampilan data visual profile performa para pemain bola Liga Inggris",
  },
  {
    title: "Meninjau Event Setiap Lap Pada Kompetisi F1",
    url: "/portfolio/f1_laptime",
    imgUrl:
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/F1%20laptime.jpg",
    description:
      "Melihat apa saja yang terjadi pada setiap lap pada ajang balapan F1 Musim 2022",
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
