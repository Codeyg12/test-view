'use client'

import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineGraph: React.FC = () => {
  const option = {
    title: {
      text: 'Error Chart in Days'
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {}
        }
    },
    tooltip: {},
    legend: {
      data:['leg']
    },
    xAxis: {
      data: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
      name: 'Errors',
      type: 'line',
      data: [150, 200, 360, 100, 100, 120],
        smooth: true
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default LineGraph;