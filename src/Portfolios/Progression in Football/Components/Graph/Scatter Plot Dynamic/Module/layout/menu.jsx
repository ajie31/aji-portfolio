import { ToggleButtonGroup, ToggleButton } from "@mui/material";

export const Menu = ({ options, handleChangeTopic, topic }) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={topic}
      exclusive
      onChange={handleChangeTopic}
    >
      <ToggleButton value="passing">Passing</ToggleButton>
      <ToggleButton value="dribling">Dribling</ToggleButton>
    </ToggleButtonGroup>
  );
};
