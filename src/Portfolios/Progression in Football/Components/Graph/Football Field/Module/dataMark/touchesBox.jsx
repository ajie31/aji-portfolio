export const TouchesBox = ({ dataTouch, value }) => {
  const values = value(dataTouch);

  return (
    <g>
      {values.map((t, i) => (
        <g key={i}>
          <rect
            key={t}
            width={(1100 - 50) / 3}
            height={730 - 50}
            x={1050 * (i / 3) + 50}
            y={50}
            fill="#88CBEB"
            opacity={t}
          />
          <text x={1050 * (i / 3) + 50} y={50} fill="white">
            {t}
          </text>
        </g>
      ))}
    </g>
  );
};
