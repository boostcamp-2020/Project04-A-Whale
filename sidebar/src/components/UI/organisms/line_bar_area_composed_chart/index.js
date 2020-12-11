import React, { useState, useEffect } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineBarAreaComposedChart = ({ burnDownChart }) => {
  const [data, setData] = useState(burnDownChart);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    setData(burnDownChart);
  }, [burnDownChart]);

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
