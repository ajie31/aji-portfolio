export const PenaltyBox = ({ styles, posX, posY, rot }) => (
  <g
    className="penaltyBox"
    style={{ transform: `translate(${posX},${posY}) rotate(${rot}deg)` }}
  >
    {/* penalty box */}
    <polyline
      points="50,481.6 105,481.6 105,298.4 50,298.4 50,591.6 215,591.6 215,188.4 50,188.4"
      className={styles["line"]}
    />

    <circle cx="160" cy="390" className={styles["dot"]} r="2.5" />
    {/*  M898.5,390 a91.5,95.5 0 0,0 36.5,73.4 M898.5,390 a91.5,95.5 0 0,1 36.5,-73.4 */}
    <path
      d="M251.5,390 a91.5,91.5 0 0,0 -36.5,-73.4 M251.5,390 a91.5,91.5 0 0,1 -36.5,73.4"
      className={styles["line"]}
    />
    {/* Goal net */}
    <polyline
      points="50,426.6 35,426.6 35,353.4 50,353.4"
      className={styles["line"]}
    />
  </g>
);
