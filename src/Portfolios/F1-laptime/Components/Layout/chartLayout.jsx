import { Chart } from "../Chart/Chart";
import { DriverMenu } from "../Chart/Menu/driverMenu";
// import { SecondaryChart } from "../Chart/Brush Chart/secondaryChart";

export const ChartLayout = ({
  dataLapTime,
  dataDriver,
  pitStopData,
  recentDriverParticipants,
  Grid,
  selectedDrivers,
  handleSelectDriver,
  driverToRender,
  xAxisRef,
  markRef,
}) => {
  return (
    <>
      <Grid item xs={12} style={{ width: "85%" }}>
        <Chart
          dataLapTime={dataLapTime}
          dataDriver={dataDriver}
          driverToRender={driverToRender}
          selectedDrivers={selectedDrivers}
          pitStopData={pitStopData}
          xAxisRef={xAxisRef}
          markRef={markRef}
        ></Chart>
      </Grid>
      <Grid item xs={12} style={{ maxWidth: "1250px", overflow: "auto" }}>
        {/* <BrushChart /> */}
        {/* <SecondaryChart /> */}

        <DriverMenu
          recentDriverParticipants={recentDriverParticipants}
          selectedDrivers={selectedDrivers}
          handleSelectDriver={handleSelectDriver}
        />
      </Grid>
    </>
  );
};
