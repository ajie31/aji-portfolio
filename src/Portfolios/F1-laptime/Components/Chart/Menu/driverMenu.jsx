import { ToggleButtonGroup, ToggleButton } from "@mui/material";
export const DriverMenu = ({
  recentDriverParticipants,
  handleSelectDriver,
  selectedDrivers,
}) => {
  return (
    <ToggleButtonGroup
      value={selectedDrivers.drivers}
      onChange={handleSelectDriver}
      aria-label="text formatting"
    >
      {recentDriverParticipants.map((d, i) => (
        <ToggleButton
          key={d + "asdas" + i}
          value={d["id"]}
          aria-label={d["code"]}
        >
          {d["sureName"]}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
