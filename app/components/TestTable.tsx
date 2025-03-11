import { Table, TableCell, TableContainer, TableRow, TableBody, Paper, TableHead } from "@mui/material";
import Link from "next/link";

const TestTable = ({dummyData}: any) => {

    return (
        <TableContainer
            component={Paper}
            className="w-full"
            sx={{ maxHeight: '500px' }}
        >
            <Table stickyHeader>
            <TableHead>
            <TableRow>
                <TableCell
                    colSpan={1}
                    align="center"
                    sx={{
                        borderRight: '2px solid black',
                        width: '250px',
                        minWidth: '250px',
                        backgroundColor: '#e3f2fd',
                        fontWeight: 'bold'
                    }}
                >
                    Features
                </TableCell>

                <TableCell
                    colSpan={6}
                    align="center"
                    sx={{
                        borderRight: '2px solid black',
                        backgroundColor: '#e3f2fd',
                        fontWeight: 'bold'
                    }}
                >
                    Steps
                </TableCell>

                <TableCell
                    colSpan={3}
                    align="center"
                    sx={{
                        borderRight: '2px solid black',
                        backgroundColor: '#e3f2fd',
                        fontWeight: 'bold'
                    }}
                >
                    Scenarios
                </TableCell>

                <TableCell
                    colSpan={2}
                    align="center"
                    sx={{
                        backgroundColor: '#e3f2fd',
                        fontWeight: 'bold',
                    }}
                >
                    Status
                </TableCell>
            </TableRow>
            <TableRow sx={{ borderBottom: '2px solid black' }}>
                <TableCell sx={{
                    borderRight: '2px solid black',
                    borderBottom: '2px solid black',
                    textAlign: 'center',
                }}>
                    Feature
                </TableCell>

                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', backgroundColor: "#8ee29a"}}>Passed</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', backgroundColor: "#fba3ab" }}>Failed</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', backgroundColor: "#80b7df" }}>Skipped</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', backgroundColor: "#f3f787" }}>Pending</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', backgroundColor: "#f8d68f" }}>Undefined</TableCell>
                <TableCell sx={{ borderRight: '2px solid black', borderBottom: '2px solid black', backgroundColor: "#bab9bd" }}>Total</TableCell>

                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black',  backgroundColor: "#8ee29a"}}>Passed</TableCell>
                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black',  backgroundColor: "#fba3ab" }}>Failed</TableCell>
                <TableCell sx={{ borderRight: '2px solid black', borderBottom: '2px solid black', backgroundColor: "#bab9bd" }}>Total</TableCell>

                <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black'}}>Duration</TableCell>
                <TableCell sx={{ borderBottom: '2px solid black' }}>Status</TableCell>
            </TableRow>
        </TableHead>

                <TableBody>
                    {dummyData.map((data: any, index: number) => (
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
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.steps.passed >= 1 ? "#8ee29a" : undefined }}>{data.steps.passed}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.steps.failed >= 1 ? '#fba3ab': undefined }}>{data.steps.failed}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.steps.skipped >= 1 ? '#80b7df' : undefined }}>{data.steps.skipped}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.steps.pending >= 1 ? '#f3f787' : undefined }}>{data.steps.pending}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.steps.undefined >= 1 ? '#f8d68f' : undefined }}>{data.steps.undefined}</TableCell>
                            <TableCell sx={{ borderRight: '2px solid black', backgroundColor: data.steps.total >= 1 ? '#bab9bd' : undefined }}>{data.steps.total}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.scenarios.passed >= 1 ? "#8ee29a" : undefined }}>{data.scenarios.passed}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd', backgroundColor: data.scenarios.failed >= 1 ? '#fba3ab': undefined }}>{data.scenarios.failed}</TableCell>
                            <TableCell sx={{ borderRight: '2px solid black', backgroundColor: data.scenarios.total >= 1 ? '#bab9bd' : undefined}}>{data.scenarios.total}</TableCell>
                            <TableCell sx={{ borderRight: '1px solid #ddd' }}>{data.duration}</TableCell>
                            <TableCell sx={{ backgroundColor: data.status == "Passed" ? '#8ee29a' : '#fba3ab' }}>{data.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TestTable;