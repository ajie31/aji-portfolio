import {
  scaleLinear,
  scaleBand,
  max,
  mean,
  descending,
  select,
  selectAll,
  easeExpOut,
} from "d3";
import { dataProcess } from "../../../../Data/dataProcess";
import { Chart } from "./Mark/chart";
import { useState, useEffect } from "react";
import { Layout } from "./Layout/layout";
import { Axis } from "./Axis/axis";
import { margin } from "@mui/system";

let passWidthbarMemo;
let carriesWidthbarMemo;

export const App = ({ data }) => {
  // const dataByDistance = progressByDistance(data);
  // console.log(dataByDistance);
  const [topic, setTopic] = useState("byDistance");
  const [sorted, setSorted] = useState(data);

  const height = 900;
  const width = 750;

  const marginAll = { top: 76, right: 12, bottom: 0, left: 12 };
  const marginChart = { top: 0, right: 82, bottom: 0, left: 82 };
  const innerWidth = width - marginAll.left - marginAll.right;
  const innerWidthChart =
    width -
    (marginAll.left + marginChart.left) -
    (marginAll.right + marginChart.right);
  const innerHeight = height - marginAll.top - marginAll.bottom;

  const yValue = (d) => d["Squad"];
  const xValuePass = (d) => dataProcess[topic].pass(d).value();
  const xValueCarry = (d) => dataProcess[topic].carry(d).value();

  const xScalePass = scaleLinear()
    .range([0, innerWidthChart / 2.5])
    .domain([0, max(sorted, xValuePass)])
    .nice();

  const xScaleCarry = scaleLinear()
    .range([0, innerWidthChart / 2.5])
    .domain([0, max(sorted, xValueCarry)])
    .nice();

  const yScale = scaleBand()
    .range([0, innerHeight])
    .domain(sorted.map(yValue))
    .padding(0.55);

  const meanPass = Number(mean(sorted, xValuePass).toFixed(3));
  const meanCarry = Number(mean(sorted, xValueCarry).toFixed(3));

  const handleTopicChange = (event) => setTopic(event.target.value);
  const handleSort = {
    carry: () =>
      setSorted(
        data.slice().sort((a, b) => descending(xValueCarry(a), xValueCarry(b)))
      ),
    pass: () =>
      setSorted(
        data.slice().sort((a, b) => descending(xValuePass(a), xValuePass(b)))
      ),
    poss: () =>
      setSorted(data.slice().sort((a, b) => descending(a["Poss"], b["Poss"]))),
  };

  const passWidthBarTemp = [];
  const carryWidthBarTemp = [];

  useEffect(() => {
    select(".indicator-group")
      .attr("opacity", 0)
      .transition()
      .duration(500)
      .delay(200)
      .attr("opacity", 1);

    selectAll(".bar-chart-pass")
      .data(sorted)
      .transition()
      .duration(600)
      .ease(easeExpOut)
      .attr("width", (d) => {
        passWidthBarTemp.push(xScalePass(xValuePass(d)));
        return xScalePass(xValuePass(d));
      });

    selectAll(".bar-chart-carry")
      .data(sorted)
      .transition()
      .duration(600)
      .ease(easeExpOut)
      .attr("width", (d) => {
        carryWidthBarTemp.push(xScaleCarry(xValueCarry(d)));
        return xScaleCarry(xValueCarry(d));
      });
    passWidthbarMemo = passWidthBarTemp;
    carriesWidthbarMemo = carryWidthBarTemp;
  });

  return (
    <Layout
      topic={topic}
      items={dataProcess}
      handleTopicChange={handleTopicChange}
      title="Perbandingan Antara Passing Dan Carries Progresif "
      note="Pebandingan ditinjau dari sentuhan saat menggiring bola(Carries) dan sentuhan saat menerima umpan (Passing)"
      source="Advanced data provided by StatsBomb Presented by fbref.com"
      innerWidth={innerWidth}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform={`translate(${marginAll.left + marginChart.left},${
            marginAll.top + marginChart.top
          })`}
        >
          <Chart
            data={sorted}
            PassObject={dataProcess[topic].pass}
            CarryObject={dataProcess[topic].carry}
            yScale={yScale}
            yValue={yValue}
            margin={marginChart}
            innerWidth={innerWidthChart}
            passWidthbar={passWidthbarMemo}
            carryWidthBar={carriesWidthbarMemo}
          />
          <Axis
            data={sorted}
            yScale={yScale}
            xScaleCarry={xScaleCarry}
            xScalePass={xScalePass}
            xValuePass={xValuePass}
            xValueCarry={xValueCarry}
            yValue={yValue}
            meanPass={meanPass}
            meanCArry={meanCarry}
            innerWidth={innerWidthChart}
            innerHeight={innerHeight}
            handleSort={handleSort}
            marginChart={marginChart}
            marginAll={marginAll}
          />
        </g>
      </svg>
    </Layout>
  );
};
