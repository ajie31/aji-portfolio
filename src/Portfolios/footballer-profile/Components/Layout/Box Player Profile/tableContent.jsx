import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const TableContent = ({ data }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Appearances</TableCell>
            <TableCell align="center">Goals</TableCell>
            <TableCell align="center">Assist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">{data["Age"]}</TableCell>
            <TableCell align="center">{data["Appr"]}</TableCell>
            <TableCell align="center">{data["Goal"]}</TableCell>
            <TableCell align="center">{data["Asst"]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
