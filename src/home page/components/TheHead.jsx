import { Grid } from "@mui/material";
import { TheName } from "./head/TheName";
import { Introduction } from "./head/Introduction";
import { Quotes } from "./head/Quotes";

export const TheHead = ({ breakML, headWrap, headClasses, contents }) => (
  <Grid style={headWrap(breakML)} sm={12} md={12} lg={12} item>
    <div className={headClasses.stars}></div>
    <div className={headClasses.wrapProfile}>
      <TheName
        contents={contents}
        breakML={breakML}
        headClasses={headClasses}
      />
      <Introduction
        headClasses={headClasses}
        paragraphs={contents(breakML).paragraphs}
      />
    </div>
    <Quotes headClasses={headClasses} Quote={contents(breakML).Quote} />
  </Grid>
);
