'use client'

import PieChart from "@/components/PieChart";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface ChartData {
  testType: string;
  passes: number;
  failures: number;
}

const pieCharts: ChartData[] = [
  { testType: "Scenarios", passes: 50, failures: 50 },
  { testType: "Steps", passes: 63, failures: 37 }
];

export default function FeatureComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextChart = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pieCharts.length);
  };

  const prevChart = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pieCharts.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h1 className="text-center text-xl font-semibold mb-6">Feature Name</h1>
      <div className="flex items-center justify-center gap-4">
        <IconButton onClick={prevChart} className="text-gray-600 hover:text-gray-900">
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <div className="outline p-4 rounded-lg">
          <PieChart chartData={[pieCharts[currentIndex]]} />
        </div>

        <IconButton onClick={nextChart} className="text-gray-600 hover:text-gray-900">
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </div>
    </>
  );
}