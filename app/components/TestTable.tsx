import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TestTable = () => {
    return (
        <TableContainer className="w-full outline-emerald-400">
            <Table stickyHeader>
                <TableHead>
                    <TableRow className="grid grid-flow-col w-full">
                        <TableCell className="col-span-4"></TableCell>
                        <TableCell className="col-span-3 border-x-2 border-black">Steps</TableCell>
                        <TableCell className="col-span-2">Scenarios</TableCell>
                        <TableCell className="col-span-1">Features</TableCell>
                    </TableRow>
                    {/* https://mui.com/material-ui/react-table/ */}
                    {/* DATAGRID/DATATABLE */}
           
                    {/* <TableRow>
                        <TableCell>Feature</TableCell>
                        <TableCell>Passed</TableCell>
                        <TableCell>Failed</TableCell>
                        <TableCell>Skipped</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>Undefined</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Passed</TableCell>
                        <TableCell>Failed</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow> */}
                </TableHead>
                </Table>
        </TableContainer>
    )
}

export default TestTable;