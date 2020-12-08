import React, { useState, useEffect } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: '2020.11.06',
    Ideal_burndown: 10,
    Completed_tasks: 1,
    Remaining_tasks: 9,
  },
  {
    name: '2020.11.09',
    Ideal_burndown: 10 - 1 * (10 / 5),
    Completed_tasks: 2,
    Remaining_tasks: 7,
  },
  {
    name: '2020.11.13',
    Ideal_burndown: 10 - 2 * (10 / 5),
    Completed_tasks: 1,
    Remaining_tasks: 6,
  },
  {
    name: '2020.11.15',
    Ideal_burndown: 10 - 3 * (10 / 5),
    Completed_tasks: 1,
    Remaining_tasks: 5,
  },
  {
    name: '2020.11.19',
    Ideal_burndown: 10 - 4 * (10 / 5),
    Completed_tasks: 2,
    Remaining_tasks: 3,
  },
  {
    name: '2020.11.23',
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

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
  }, []);

  return (
    <ComposedChart
      width={windowWidth - 465 > 400 ? windowWidth - 465 : 400}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      style={{
        display: 'inline-block',
        margin: '12px auto',
        border: '1px solid #eee',
        borderRadius: '10px',
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
