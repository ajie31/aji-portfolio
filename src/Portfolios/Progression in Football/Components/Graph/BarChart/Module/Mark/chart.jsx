import { PassChart } from "./passChart";
import { CarryChart } from "./carryChart";
export const Chart = (props) => {
  const {
    data,
    PassObject,
    CarryObject,
    yScale,
    xScale,
    xValue,
    yValue,
    margin,
    innerWidth,
  } = props;
  // const totalWidth = xScale(xValue(d));
  const totalWidth = xScale(80);

  // TODO : EDIT STYLE!!!
  return (
    <g transform={`translate(${margin.left},${margin.top})`}>
      <PassChart
        data={data}
        PassObject={PassObject}
        totalWidth={totalWidth}
        yScale={yScale}
        xScale={xScale}
        xValue={xValue}
        yValue={yValue}
      />
      <CarryChart
        data={data}
        CarryObject={CarryObject}
        totalWidth={totalWidth}
        yScale={yScale}
        xScale={xScale}
        xValue={xValue}
        yValue={yValue}
      />
    </g>
  );
};
