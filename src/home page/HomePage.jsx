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
      `Dolor morbi non arcu risus quis varius quam. Feugiat pretium nibh ipsum
    consequat nisl vel pretium lectus quam. Sit amet luctus venenatis lectus
    magna fringilla. Lacus vel facilisis volutpat est velit egestas. Sit amet
    mattis vulputate enim nulla aliquet porttitor lacus luctus. Feugiat in
    ante metus dictum at tempor commodo ullamcorper.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa
      eget egestas purus viverra accumsan. Aliquam sem fringilla ut morbi
      tincidunt augue interdum. Egestas dui id ornare arcu.`,
    ],
    Quote: `It’s a feeling that says you have a responsibility. It’s not for
    yourself. The eye that doesn’t see doesn’t do justice to the body. That’s
    why it’s there. That’s why you are out there. And somehow you recognize
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
