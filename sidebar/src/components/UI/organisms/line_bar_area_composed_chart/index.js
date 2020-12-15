import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const LineBarAreaComposedChart = ({ burnDownChart }) => {
  const [data, setData] = useState(burnDownChart);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <ComposedChart
        // width={windowWidth - 465 > 400 ? windowWidth - 465 : 400}
        // width={windowWidth}
        // height={400}
        data={data}
        margin={{
          // left: 20,
          top: 20,
          right: 20,
          bottom: 20,
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
        <Legend
          wrapperStyle={{
            paddingLeft: '40px',
          }}
        />
        <Bar dataKey="Completed_tasks" barSize={20} fill="#454552" />
        <Line type="monotone" dataKey="Ideal_burndown" stroke="#e85a71" />
        <Line type="monotone" dataKey="Remaining_tasks" stroke="#4ea1d3" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineBarAreaComposedChart;
