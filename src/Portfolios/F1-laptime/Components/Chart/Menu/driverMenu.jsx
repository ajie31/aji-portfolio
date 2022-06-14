import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { DriverProfile } from "./driverProfile";
export const DriverMenu = ({
  recentDriverParticipants,
  handleSelectDriver,
  selectedDrivers,
}) => {
  console.log(recentDriverParticipants);
  return (
    <ToggleButtonGroup
      value={selectedDrivers.drivers}
      onChange={handleSelectDriver}
      aria-label="text formatting"
    >
      {recentDriverParticipants.map((d, i) => (
        <ToggleButton
          key={d["code"] + "driver" + i}
          style={{ width: "230px" }}
          value={d["driverId"]}
          aria-label={d["code"]}
        >
          <DriverProfile
            standing={d["standing"]}
            surname={d["surname"]}
            forename={d["forename"]}
            points={d["points"]}
          />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
