import { FormControl, InputLabel, NativeSelect } from "@mui/material";
export const CircuitMenu = ({
  handleSelectRace,
  circuit,
  selectedRace,
  lastRace,
}) => {
  return (
    <div style={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Grand Prix
        </InputLabel>
        <NativeSelect
          defaultValue={selectedRace}
          inputProps={{
            name: "Select Race",
            id: "Race-Menu",
          }}
          onChange={handleSelectRace}
        >
          {circuit.map((c) =>
            c["raceId"] <= lastRace ? (
              <option key={`GP-${c["raceId"]}`} value={c["raceId"]}>
                {c["name"]}
              </option>
            ) : (
              <option key={`GP-${c["raceId"]}`} value={c["raceId"]} disabled>
                {c["name"]}
              </option>
            )
          )}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
