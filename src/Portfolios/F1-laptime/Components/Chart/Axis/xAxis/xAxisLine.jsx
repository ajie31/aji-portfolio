export const XAxisLine = ({ markHeight, top }) => {
  return (
    <line
      x1={0}
      y1={top}
      x2={0}
      y2={markHeight}
      stroke="#C1BAA9"
      strokeWidth={4.5}
      strokeLinecap="round"
    />
  );
};
