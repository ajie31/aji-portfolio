import { scaleLinear, scaleBand, max, mean } from "d3";
import { dataProcess } from "../../../../Data/dataProcess";
import { Chart } from "./Mark/chart";
import { useState } from "react";
import { Layout } from "./Layout/layout";
import { Axis } from "./Axis/axis";
export const App = ({ data }) => {
  // const dataByDistance = progressByDistance(data);
  // console.log(dataByDistance);
  const [topic, setTopic] = useState("byDistance");

  const height = 900;
  const width = 750;

  const margin = { top: 100, right: 60, bottom: 20, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const yValue = (d) => d["Squad"];
  const xValuePass = (d) => dataProcess[topic].pass(d)[0].value();
  const xValueCarry = (d) => dataProcess[topic].carry(d)[0].value();

  const xScalePass = scaleLinear()
    .range([0, innerWidth / 2.5])
    .domain([0, max(data, xValuePass)])
    .nice();

  const xScaleCarry = scaleLinear()
    .range([0, innerWidth / 2.5])
    .domain([0, max(data, xValueCarry)])
    .nice();

  const yScale = scaleBand()
    .range([0, innerHeight])
    .domain(data.map(yValue))
    .padding(0.55);

  const meanPass = Number(mean(data, xValuePass).toFixed(2));
  const meanCarry = Number(mean(data, xValueCarry).toFixed(2));

  const handleTopicChange = (event) => setTopic(event.target.value);

  return (
    <Layout
      topic={topic}
      items={dataProcess}
      handleTopicChange={handleTopicChange}
      title="[title here later]"
      description="description here later"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          <Chart
            data={data}
            PassObject={dataProcess[topic].pass}
            CarryObject={dataProcess[topic].carry}
            yScale={yScale}
            xScaleCarry={xScaleCarry}
            xScalePass={xScalePass}
            xValuePass={xValuePass}
            xValueCarry={xValueCarry}
            yValue={yValue}
            margin={margin}
            innerWidth={innerWidth}
          />
          <Axis
            data={data}
            yScale={yScale}
            xScaleCarry={xScaleCarry}
            xScalePass={xScalePass}
            xValuePass={xValuePass}
            xValueCarry={xValueCarry}
            yValue={yValue}
            meanPass={meanPass}
            meanCArry={meanCarry}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
        </g>
      </svg>
    </Layout>
  );
};
