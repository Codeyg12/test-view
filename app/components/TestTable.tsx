import { Table, TableCell, TableContainer, TableRow, TableBody, Paper } from "@mui/material";
import dummyData from "../../dummyData.json"
import Link from "next/link";
import TableHeader from "./TableHeader";

const TestTable = () => {

    return (
        <TableContainer
            component={Paper}
            className="w-full"
            sx={{ maxHeight: '500px' }}
        >
            <Table stickyHeader>
                <TableHeader />

                <TableBody>
                    {dummyData.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>
                                <Link
                                    href={`/feature/${data.feature}`}
                                    style={{
                                        color: '#1976d2',
                                        textDecoration: 'none'
                                    }}
                                >
                                    test/repo/{data.feature}Tests.feature
                                </Link>
                            </TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.steps.passed}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.steps.failed}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.steps.skipped}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.steps.pending}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.steps.undefined}</TableCell>
                            <TableCell sx={{ borderRight: '2px solid black' }}>{data.steps.total}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.scenarios.passed}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.scenarios.failed}</TableCell>
                            <TableCell sx={{ borderRight: '2px solid black' }}>{data.scenarios.total}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.duration}</TableCell>
                            <TableCell>{data.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TestTable;