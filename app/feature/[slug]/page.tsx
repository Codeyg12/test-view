'use client'

import PieChart from "@/components/PieChart";
import { useState } from "react";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import TestScenariosChart from "@/components/TestScenario";
import Link from "next/link";
import TableHeader from "@/components/TableHeader";
import GithubUsers from "@/components/GithubUsers";
import LineGraph from "@/components/LineGraph";

// interface ChartData {
//   testType: string;
//   passes: number;
//   failures: number;
// }

interface pieToTreeData {
  testType: string;
  total: number;
  passed: number;
  failed: number;
  scenarios: {
    name: string;
    status: 'pass' | 'fail';
    steps?: number;
  }[];
}

// const pieCharts: ChartData[] = [
//   { testType: "Scenarios", passes: 60, failures: 40 },
//   { testType: "Steps", passes: 70, failures: 30 }
// ];

const pieToTreeCharts: pieToTreeData[] = [
  {
    testType: "Scenarios",
    total: 10,
    passed: 6,
    failed: 4,
    scenarios: [
      { name: 'Valid Login', status: 'pass', steps: 4 },
      { name: 'Invalid Password', status: 'fail', steps: 3 },
      { name: 'Password Reset', status: 'pass', steps: 5 },
      { name: 'User Lockout', status: 'fail', steps: 2 },
      { name: 'User Registration', status: 'pass', steps: 3 },
      { name: 'User Profile Update', status: 'pass', steps: 4 },
      { name: 'User Logout', status: 'pass', steps: 2 },
    ],
  },
  {
    testType: "Steps",
    total: 10,
    passed: 7,
    failed: 3,
    scenarios: [
      { name: 'Click input', status: 'pass' },
      { name: 'Update onChange', status: 'pass' },
      { name: 'Submit form', status: 'fail' },
      { name: 'Navigate to page', status: 'pass' },
      { name: 'Fetch data', status: 'fail' },
      { name: 'Render component', status: 'pass' },
      { name: 'Handle error', status: 'pass' },
      { name: 'Display message', status: 'pass' },
      { name: 'Log out', status: 'pass' },
      { name: 'Redirect user', status: 'fail' },
    ],
  },
];

export default function FeatureComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextChart = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pieToTreeCharts.length);
    console.log("Next chart index:", currentIndex);
  };

  const prevChart = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pieToTreeCharts.length - 1 : prevIndex - 1
    );
    console.log("Previous chart index:", currentIndex);
  };

  return (
    <>
      <h1 className="text-center text-xl font-semibold mb-6"><Link href={"/"}>User Login Feature</Link></h1>
      <div className="flex justify-evenly">
        <IconButton onClick={prevChart} className="text-gray-600 hover:text-gray-900">
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <div className="p-4 rounded-lg w-1/2 flex justify-center">
          <TestScenariosChart key={currentIndex} testData={pieToTreeCharts[currentIndex]} />
        </div>

        <IconButton onClick={nextChart} className="text-gray-600 hover:text-gray-900">
          <ArrowForwardIos fontSize="large" />
        </IconButton>
       
      </div>
      <div className="flex justify-evenly my-8">
  <div className="w-1/2">
    <LineGraph />
  </div>
  <div className="flex-1 max-w-md mx-4">

    <GithubUsers />
  </div>
</div>
      <TableContainer
            component={Paper}
            className="w-full"
            sx={{ maxHeight: '500px' }}
        >
      <Table>
      <TableHeader />
      <TableBody>
          <TableRow>
            <TableCell sx={{ borderRight: '1px solid black' }}>test/repo/UserLoginTests.feature</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>7</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>3</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>0</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>0</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>0</TableCell>
            <TableCell sx={{ borderRight: '1px solid black' }}>10</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>6</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>4</TableCell>
            <TableCell sx={{ borderRight: '1px solid black' }}>10</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>00:00:00</TableCell>
            <TableCell sx={{ borderRight: '1px solid #ddd' }}>Failed</TableCell>
          </TableRow>
      </TableBody>
      </Table>
      </TableContainer>
    </>
  );
}