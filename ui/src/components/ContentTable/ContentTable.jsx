import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export const ContentTable = ({ content }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plan kursu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((el) => (
            <TableRow key={el}>
              <TableCell>{el}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
