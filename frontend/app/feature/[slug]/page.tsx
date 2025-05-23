'use client'

import PieChart from "@/components/PieChart";
import { useState } from "react";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import TestScenariosChart from "@/components/TestScenario";
import Link from "next/link"; 
import GithubUsers from "@/components/GithubUsers";
import LineGraph from "@/components/LineGraph";
import FeatureDetails from "@/components/FeatureDetails";
import TestTable from "@/components/TestTable";

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
    total: 20,
    passed: 17,
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
      { name: 'Update profile', status: 'pass' },
      { name: 'Delete account', status: 'pass' },
      { name: 'Update settings', status: 'pass' },
      { name: 'Change password', status: 'pass' },
      { name: 'Reset password', status: 'pass' },
      { name: 'Send email', status: 'pass' },
      { name: 'Verify email', status: 'pass' },
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
      <h1 className="text-center text-xl font-semibold mb-6"><Link href={"/"} className="visited:text-white no-underline">User Login Feature</Link></h1>
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

      <TestTable dummyData={[{
        feature: "LoginAuthentication",
        steps: {
          passed: 12,
          failed: 2,
          skipped: 1,
          pending: 0,
          undefined: 0,
          total: 15
        },
        scenarios: { passed: 3, failed: 1, total: 4 },
        duration: "2.5s",
        status: "Failed"
      }]} />
      <FeatureDetails />
    </>
  );
}