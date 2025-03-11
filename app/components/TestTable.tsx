import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper } from "@mui/material";
import dummyData from "../../dummyData.json"

const TestTable = () => {
    // Header background colors
    const headerStyles = {
        features: { backgroundColor: "#e3f2fd" }, 
        steps: { backgroundColor: "#e8f5e9" },     
        scenarios: { backgroundColor: "#fff3e0" }, 
        status: { backgroundColor: "#f3e5f5" }     
    };

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
                                ...headerStyles.features,
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
                                ...headerStyles.steps,
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
                                ...headerStyles.scenarios,
                                fontWeight: 'bold'
                            }}
                        >
                            Scenarios
                        </TableCell>

                        <TableCell 
                            colSpan={2} 
                            align="center"
                            sx={{
                                ...headerStyles.status,
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
                            ...headerStyles.features
                        }}>
                            Feature
                        </TableCell>

                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.steps }}>Passed</TableCell>
                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.steps }}>Failed</TableCell>
                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.steps }}>Skipped</TableCell>
                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.steps }}>Pending</TableCell>
                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.steps }}>Undefined</TableCell>
                        <TableCell sx={{ borderRight: '2px solid black', borderBottom: '2px solid black', ...headerStyles.steps }}>Total</TableCell>

                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.scenarios }}>Passed</TableCell>
                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.scenarios }}>Failed</TableCell>
                        <TableCell sx={{ borderRight: '2px solid black', borderBottom: '2px solid black', ...headerStyles.scenarios }}>Total</TableCell>

                        <TableCell sx={{ borderRight: '1px solid #ddd', borderBottom: '2px solid black', ...headerStyles.status }}>Duration</TableCell>
                        <TableCell sx={{ borderBottom: '2px solid black', ...headerStyles.status }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dummyData.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ borderRight: '2px solid black' }}>{data.feature}.feature</TableCell>
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