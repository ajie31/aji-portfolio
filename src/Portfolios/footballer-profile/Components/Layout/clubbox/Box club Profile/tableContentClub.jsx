import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const TableContentClub = ({ data }) => {
  return (
    <TableContainer>
      <Table
        sx={{ marginBottom: "1em", minWidth: 250 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">W</TableCell>
            <TableCell align="center">D</TableCell>
            <TableCell align="center">L</TableCell>
            <TableCell align="center">GF</TableCell>
            <TableCell align="center">GA</TableCell>
            <TableCell align="center">GD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">{data["Wins"]}</TableCell>
            <TableCell align="center">{data["Draws"]}</TableCell>
            <TableCell align="center">{data["Losses"]}</TableCell>
            <TableCell align="center">{data["GF"]}</TableCell>
            <TableCell align="center">{data["GA"]}</TableCell>
            <TableCell align="center">{data["GD"]}</TableCell>
          </TableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align="center">
              Points
            </TableCell>
            <TableCell colSpan={3} align="center">
              Position
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell colSpan={3} align="center">
              {data["Points"]}
            </TableCell>
            <TableCell colSpan={3} align="center">
              # {data["rank"]}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
