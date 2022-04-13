export const Paragraph = ({ xAxisRows, dataProcessPassXValue }) => {
  return (
    <div className="full-width">
      <p className="keterangan-left">
        {"Macam-macam umpan berdasarkan jarak dan dan tinggi pergerakan bola "}
        {xAxisRows.map((k) => {
          return (
            <span key={k}>
              <strong>
                <i>{k}</i>
              </strong>
              {` ${dataProcessPassXValue[k].description}. `}
            </span>
          );
        })}
      </p>
    </div>
  );
};
