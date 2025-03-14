"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

interface TestData {
  testType: string;
  testCase?: string;
  failures: number;
  passes: number;
}

interface TestChartProps {
  chartData: TestData[];
}

const COLOR_PALETTE = ["#81ef51", "#f44336"];
// const COLOR_PALETTE = ['#4CAF50', '#F44336'];

const PieChart: React.FC<TestChartProps> = ({ chartData }) => {
  const option = {
    title: {
      text: chartData.map((data) => data.testType).join(", "),
      subtext: chartData.map((data) => data.testCase).join(", "),
      x: "center",
      textStyle: {
        color: "white",
      },
    },
    legend: {
      top: chartData.some((data) => data.testCase != null) ? "15%" : "10%",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    series: [
      {
        name: "pass/fail",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "60%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
          formatter: "{b}: \n{d}%",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: chartData.reduce((acc, data) => acc + data.passes, 0),
            name: `Pass`,
          },
          {
            value: chartData.reduce((acc, data) => acc + data.failures, 0),
            name: "Fail",
          },
        ],
        color: COLOR_PALETTE,
      },
    ],
  };

  return (
    <>
      <ReactECharts className="w-1/3" option={option} style={{ height: 400 }} />
    </>
  );
};

export default PieChart;
