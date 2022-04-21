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
      `I'am an Under graduate and also a Web Developer, but the strongest point is a programming,using Javascript or C# ,I do have interest on Making Data Visual Webb App but also I make the UI/UX.
      also have experience with Game Programming using Unity , and Littlebit data science using Python.
      I can Handle simple database using mysql and PHP/graphQL/mongoDB`,
      `Currently I wanna take deep into Frontend developer and Data Visual for Web App.
      beside programming I also love Football, that is why my portfolios have related to football
      I hope to see and join your team to make something amazing web app.`,
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
      "https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/home%20page/image/previewHIVAIDS.png",
    description:
      "Perbandingan Data Visual antar club sepak bola Liga Inggris mana yang bermain lebih progressive ",
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
