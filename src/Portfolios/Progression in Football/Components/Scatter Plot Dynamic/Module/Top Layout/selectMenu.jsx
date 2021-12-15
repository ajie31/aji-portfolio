import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
export const SelectMenu = ({
  label,
  options,
  selectedAttr,
  onChangeAttribute,
}) => {
  const idExt = label.replace(" ", "-");
  return (
    <FormControl style={{ margin: "1rem", minWidth: "120px" }}>
      <InputLabel id={`${idExt}-label`}>{label}</InputLabel>
      <Select
        labelId={`${idExt}-label`}
        id={`${idExt}-select`}
        value={selectedAttr}
        label={label}
        onChange={onChangeAttribute}
        autoWidth
      >
        {/* TODO loop menu item */}
        {options.map((l, i) => (
          <MenuItem key={l.label} value={i}>
            {l.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// {options.map(({ value, label }) =>
// label !== "Species" ? (
//   <MenuItem key={value} value={value}>
//     {label}
//   </MenuItem>
// ) : null
// )}
