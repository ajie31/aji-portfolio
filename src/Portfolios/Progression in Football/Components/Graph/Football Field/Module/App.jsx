import { TheField } from "./fieldMark/theField";
import { TouchesBox } from "./dataMark/touchesBox";

const menu = {
  touchesField: (d) => [
    d["Def 3rd"] / d["Touches"],
    d["Mid 3rd"] / d["Touches"],
    d["Att 3rd"] / d["Touches"],
  ],
  carries: [],
};

const rowData = new Map();

export const App = ({ data }) => {
  const touchData = data;
  //Poss,90s,Touches,Def 3rd,Mid 3rd,Att 3rd,Att Pen,Carries,CarrTotDist,CarrPrgDist,CarrProg,Carr1/3,CPA

  touchData.map((d) => {
    rowData.set(d.Squad, d);
  });

  const selectedSquad = rowData.get("Liverpool");
  const value = menu.touchesField;
  return (
    <svg
      viewBox="0 0 1150 780"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <TheField />
      {/* calculation */}
      <TouchesBox dataTouch={selectedSquad} value={value} />
    </svg>
  );
};
