export const XAxisDriver = ({ id, code, surname }) => {
  return (
    <g className="x-axis-code">
      <rect
        x={-20}
        y={-20 + 2}
        width={40}
        height={25}
        stroke="#F5F3F2"
        strokeWidth={2}
        fill="#635F5D"
        rx="6"
      />

      <text y={0} x={0} textAnchor="middle" fill="#F5F3F2" fontSize=".9rem">
        {code}
      </text>
      <rect
        x={-30}
        y={-20 + 6}
        width={60}
        height={20}
        opacity={0}
        data-id={id + ""}
      >
        <title>{surname}</title>
      </rect>
    </g>
  );
};
