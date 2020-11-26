import React, { useState, useEffect } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Day 1',
    Ideal_burndown: 10,
    Completed_tasks: 1,
    Remaining_tasks: 9,
  },
  {
    name: 'Day 2',
    Ideal_burndown: 10 - 1 * (10 / 5),
    Completed_tasks: 2,
    Remaining_tasks: 7,
  },
  {
    name: 'Day 3',
    Ideal_burndown: 10 - 2 * (10 / 5),
    Completed_tasks: 1,
    Remaining_tasks: 6,
  },
  {
    name: 'Day 4',
    Ideal_burndown: 10 - 3 * (10 / 5),
    Completed_tasks: 1,
    Remaining_tasks: 5,
  },
  {
    name: 'Day 5',
    Ideal_burndown: 10 - 4 * (10 / 5),
    Completed_tasks: 2,
    Remaining_tasks: 3,
  },
  {
    name: 'Day 6',
    Ideal_burndown: 0,
    Completed_tasks: 3,
    Remaining_tasks: 0,
  },
];

const LineBarAreaComposedChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener('resize', resizeHandler);
  return (
    <ComposedChart
      width={(windowWidth * 80) / 100}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      style={{
        margin: '0 auto',
        border: '1px solid #eee',
        'border-radius': '10px',
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Completed_tasks" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Ideal_burndown" stroke="#ff7300" />
      <Line type="monotone" dataKey="Remaining_tasks" stroke="#8884d8" />
    </ComposedChart>
  );
};
export default LineBarAreaComposedChart;
