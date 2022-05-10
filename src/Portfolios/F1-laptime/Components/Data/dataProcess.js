export const milisecondToTime = (duration) => {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds + "." + milliseconds;
};

export const setDriverList = (data, xAxisValue) => {
  let recentId = data[0]["driverId"];
  const listDriver = [xAxisValue(data[0])];
  data.map((d) => {
    if (recentId !== d["driverId"] && d["raceId"] === 1074) {
      recentId = d["driverId"];
      listDriver.push(xAxisValue(d));
    }
  });
  return listDriver;
};
