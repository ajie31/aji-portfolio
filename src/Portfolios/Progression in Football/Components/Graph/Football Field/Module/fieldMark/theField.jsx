import styles from "../../../../../style/footballField.module.css";
import { PenaltyBox } from "./penaltyBox";
export const TheField = () => (
  <g>
    {/* <!-- grass --> */}
    <path d="M 0,0 h1150 v780 h-1150z" className={styles["turf"]} />
    {/* outer line */}
    <polyline
      points="575,730 575,50 1100,50 1100,730 50,730 50,50 575,50"
      className={styles["line"]}
    />

    {/* center circle */}
    <circle cx="575" cy="390" className={styles["line"]} r="91.5" />
    <circle cx="575" cy="390" className={styles["dot"]} r="2.5" />

    {/* Corner */}
    <path
      d="M 50 60 Q 60 60 60 50 M 1090 50 Q 1090 60 1100 60 M 50 720 Q 60 720 60 730 M 1090 730 Q 1090 720 1100 720"
      className={styles["line"]}
    />
    <PenaltyBox styles={styles} posX={0} posY={0} rot={0} />
    <PenaltyBox styles={styles} posX={"1150px"} posY={"780px"} rot={180} />
  </g>
);
