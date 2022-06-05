export const createDriverListt = (
  data,
  xAxisValue,
  dirverSurename,
  driverLastname
) => {
  let recentId = data[0]["driverId"];
  const listDriver = [
    {
      code: xAxisValue(data[0]),
      id: recentId,
      sureName: dirverSurename(data[0]),
      lastName: driverLastname(data[0]),
    },
  ];
  data.map((d) => {
    if (recentId !== d["driverId"]) {
      recentId = d["driverId"];
      listDriver.push({
        code: xAxisValue(d),
        id: recentId,
        sureName: dirverSurename(d),
        lastName: driverLastname(d),
      });
    }
  });
  return listDriver;
};
