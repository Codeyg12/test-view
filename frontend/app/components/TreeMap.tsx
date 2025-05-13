'use client'

import React from 'react';
import ReactECharts from 'echarts-for-react';

const TreeMap: React.FC = () => {

    const option = {
        series: [
          {
            type: 'treemap',
            data: [
              {
                name: 'nodeA',
                value: 10,
                children: [
                  {
                    name: 'nodeAa',
                    value: 4
                  },
                  {
                    name: 'nodeAb',
                    value: 6,
                    link: 'http://echarts.apache.org/en/option.html#series-treemap.data.children.link'
                  }
                ]
              },
              {
                name: 'nodeB',
                value: 20,
                children: [
                  {
                    name: 'nodeBa',
                    value: 20,
                    children: [
                      {
                        name: 'nodeBa1',
                        value: 10
                      },
                      {
                        name: 'nodeBa2',
                        value: 10
                      }
                    ]
                  }
                ]
              }
            ],
            nodeClick: "link",
            roam: 'move',
            zoomLock: true
            // https://echarts.apache.org/en/option.html#series-treemap.nodeClick
          }
        ]
      };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
  />;
};

export default TreeMap;