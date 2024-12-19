import { CirclesAxis } from "./Axis/circles";
import { RadarMark } from "./Mark/radarMark";
import { AxisLines } from "./Axis/lines";
import { Catagory } from "./Axis/catagory";
import { LabelNumber } from "./Axis/labelNumber";
import {
  progression,
  shooting,
  takeOn,
  deffense,
  support,
} from "../../../Data/dataProcess";

const height = 270;
const width = 320;

const maxRadius = 100;

const axisValues = [100, 75, 50, 25];

const categories_nonGk = [
  "Progression",
  "Shooting",
  "Take On",
  "Deffense",
  "Support",
];

const catagories_gk = ["Save", "Cl Sheet", "Launch", "Deffense", "Crs Block"];

export const App = ({ data }) => {
  // TODO [Top,right,bottR,BottL,Left,Top]
  const dataValueNonGk = [
    progression(data),
    shooting(data),
    takeOn(data),
    deffense(data),
    support(data),
  ];

  const dataValueGk = [
    data["Save"],
    data["CleanSheet"],
    data["Launch"],
    data["DefAction"],
    data["CrossesStopped"],
  ];

  const categories = data["Post"] == "GK" ? catagories_gk : categories_nonGk;

  const dataValue = data["Post"] == "GK" ? dataValueGk : dataValueNonGk;

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
