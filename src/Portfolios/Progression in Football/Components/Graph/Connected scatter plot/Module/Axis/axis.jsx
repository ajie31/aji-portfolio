import { XAxis } from "./xAxis";
import { YAxis } from "./yAxis";
export const Axis = (props) => {
  const { innerWidth, innerHeight, xScale, yScale, xAxisTitle, yAxisTitle } =
    props;
  return (
    <g>
      <XAxis xScale={xScale} innerHeight={innerHeight} fill={"black"} />
      {/* <YAxis yScale={yScale} innerWidth={innerWidth} fill={"black"} /> */}
    </g>
  );
};
