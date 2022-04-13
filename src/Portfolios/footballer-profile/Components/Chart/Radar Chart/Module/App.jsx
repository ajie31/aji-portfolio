import { CirclesAxis } from "./Axis/circles";
import { RadarMark } from "./Mark/radarMark";
import { AxisLines } from "./Axis/lines";
import { Catagory } from "./Axis/catagory";
import { LabelNumber } from "./Axis/labelNumber";
import {
  progression,
  offensive,
  pressure,
  deffense,
  passCmp,
} from "../../../Data/dataProcess";

const height = 270;
const width = 320;

const maxRadius = 100;

const axisValues = [100, 75, 50, 25];

const categories = [
  "Progression",
  "Offensive",
  "Preasure",
  "Deffense",
  "Pass Cmp",
];

export const App = ({ data }) => {
  // TODO [Top,right,bottR,BottL,Left,Top]
  const dataValue = [
    progression(data),
    offensive(data),
    pressure(data),
    deffense(data),
    passCmp(data),
    progression(data),
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMin">
      {/* <rect width="100%" height="100%" fill="red" /> */}
      <g className="main" transform={`translate(${width / 2},${height / 1.8})`}>
        <g className="axis-group">
          <CirclesAxis />
          <LabelNumber axisValues={axisValues} />
          <AxisLines categories={categories} maxRadius={maxRadius} />
          <Catagory categories={categories} />
        </g>
        <g className="plot-group">
          <RadarMark dataValue={dataValue} />
        </g>
      </g>
    </svg>
  );
};
