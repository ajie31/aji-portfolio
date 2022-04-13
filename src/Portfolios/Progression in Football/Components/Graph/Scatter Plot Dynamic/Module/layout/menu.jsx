import { ToggleButtonGroup, ToggleButton } from "@mui/material";

export const Menu = ({ handleChangeTopic, topic }) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={topic}
      exclusive
      onChange={handleChangeTopic}
    >
      <ToggleButton value="passing" disabled={topic === "passing"}>
        Passing
      </ToggleButton>
      <ToggleButton value="dribling" disabled={topic === "dribling"}>
        Dribling
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
