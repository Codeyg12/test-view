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

// Register components
echarts.use([
  PieChart, 
  TreemapChart, 
  TitleComponent, 
  TooltipComponent, 
  LegendComponent, 
  CanvasRenderer
]);

const TestScenariosChart = () => {
  const chartRef = useRef(null);

  // Sample test data
  const testData = {
    features: [
      {
        name: 'User Login Feature',
        total: 10,
        passed: 7,
        failed: 3,
        scenarios: [
          { name: 'Valid Login', status: 'pass', steps: 4 },
          { name: 'Invalid Password', status: 'fail', steps: 3 },
          { name: 'Password Reset', status: 'pass', steps: 5 },
          { name: 'User Lockout', status: 'fail', steps: 2 },
          { name: 'User Registration', status: 'pass', steps: 3 },
          { name: 'User Profile Update', status: 'pass', steps: 4 },
          { name: 'User Logout', status: 'pass', steps: 2 },
        ]
      }
    ]
  };

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // Donut chart option
    const donutOption = {
      title: {
        text: 'Test Scenarios Overview',
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
              value: testData.features[0].passed, 
              name: 'Passed', 
              itemStyle: { color: '#4CAF50' } 
            },
            { 
              value: testData.features[0].failed, 
              name: 'Failed', 
              itemStyle: { color: '#F44336' } 
            }
          ]
        }
      ]
    };

    // Treemap chart option
    const treemapOption = {
      title: {
        text: 'Scenario Breakdown',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Scenarios',
          type: 'treemap',
          roam: false,
          nodeClick: false,
          data: testData.features[0].scenarios.map(scenario => ({
            name: scenario.name,
            value: scenario.steps,
            itemStyle: {
              color: scenario.status === 'pass' ? '#4CAF50' : '#F44336'
            }
          }))
        }
      ]
    };

    // Toggle between donut and treemap
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