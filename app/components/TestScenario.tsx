'use client'

import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { 
  PieChart, 
  TreemapChart 
} from 'echarts/charts';
import { 
  TitleComponent, 
  TooltipComponent, 
  LegendComponent 
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  PieChart, 
  TreemapChart, 
  TitleComponent, 
  TooltipComponent, 
  LegendComponent, 
  CanvasRenderer
]);

interface TestData {
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

interface TestScenariosChartProps {
  testData: TestData;
}

// const COLOR_PALETTE = ["#81ef51", "#f44336"];
const COLOR_PALETTE = ['#4CAF50', '#F44336'];

const TestScenariosChart: React.FC<TestScenariosChartProps> = ({ testData }) => {
  const chartRef = useRef(null);

  // const testData = {
  //       testType: 'Scenarios',
  //       total: 10,
  //       passed: 7,
  //       failed: 3,
  //       scenarios: [
  //         { name: 'Valid Login', status: 'pass', steps: 4 },
  //         { name: 'Invalid Password', status: 'fail', steps: 3 },
  //         { name: 'Password Reset', status: 'pass', steps: 5 },
  //         { name: 'User Lockout', status: 'fail', steps: 2 },
  //         { name: 'User Registration', status: 'pass', steps: 3 },
  //         { name: 'User Profile Update', status: 'pass', steps: 4 },
  //         { name: 'User Logout', status: 'pass', steps: 2 },
  //       ]
  // };

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const donutOption = {
      title: {
        text: `Test ${testData.testType} Overview`,
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Test Results',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { 
              value: testData.passed, 
              name: 'Passed',
            },
            { 
              value: testData.failed, 
              name: 'Failed',
            }
          ],
          color: COLOR_PALETTE
        }
      ]
    };

    // Treemap chart option
    const treemapOption = {
      title: {
        text: `${testData.testType} Breakdown`,
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: `${testData.testType}`,
          type: 'treemap',
          roam: false,
          nodeClick: false,
          data: testData.scenarios.map(scenario => ({
            name: scenario.name,
            value: testData.testType === 'Steps' ? testData.scenarios.length : scenario.steps,
            itemStyle: {
              color: scenario.status === 'pass' ? '#4CAF50' : '#F44336'
            }
          }))
        }
      ]
    };

    let isDonut = true;
    myChart.on('click', () => {
      isDonut = !isDonut;
      myChart.setOption(isDonut ? donutOption : treemapOption);
    });

    myChart.setOption(donutOption);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div 
      ref={chartRef} 
      style={{ 
        width: '600px', 
        height: '400px' 
      }} 
      className='m-auto'
    />
  );
};

export default TestScenariosChart;