import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'a', foo: [-10, 10] },
  { name: 'b', foo: [-4, 8] },
  { name: 'c', foo: [0, 9] },
  { name: 'd', foo: [2, 15] },
];

function HorizontalBarChart(props) {
  const height=150;
  const width=500;
  return (
    <BarChart width={width} height={height} data={data} layout="vertical">
      <XAxis type="number" hide />
      <YAxis type="category" hide />
      <Bar background label dataKey="foo" fill="#8884d8" />
    </BarChart>
  )
}

export default HorizontalBarChart