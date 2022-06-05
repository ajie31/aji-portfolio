import { YAxisLines, YAxisText } from "./yAxisComponents";

export const YAxis = ({ yAxisScale, left, markWidth }) => {
  return (
    <g className="lines-axis-group" overflow="auto">
      {yAxisScale.ticks(10).map((tick, i) => (
        <g
          key={"yAxisTick" + i}
          className="x-axis-driver"
          transform={`translate(${0},${yAxisScale(tick)})`}
        >
          <YAxisLines markWidth={markWidth} left={left} />
          <YAxisText left={left} tick={miliscondToTime(tick)} />
        </g>
      ))}
    </g>
  );
};

const miliscondToTime = (duration) => {
  let milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds + "." + milliseconds;
};
