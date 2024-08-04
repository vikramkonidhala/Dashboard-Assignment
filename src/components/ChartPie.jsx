import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Line, Legend } from 'recharts';

const pieData = [
  { name: 'WooCommerce Store', value: 1484 },
  { name: 'Shopify Store', value: 1175 },
];

const COLORS = ['#fa7e7e', '#2cded5'];

const ChartPie = () =>{ 
  const calculatePercentage = (value, totalValue) => {
    return ((value / totalValue) * 100).toFixed(2);
  }
  const totalValue = pieData.reduce((total, item) => total + item.value, 0)
  
  return(
  <PieChart width={350} height={370}>
    <Pie
      data={pieData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      label={({ value }) => `${calculatePercentage(value, totalValue)}%`}
    >
      {pieData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend verticalAlign="bottom" height={36} iconType="circle"/>
    <Line type="monotone" dataKey="WooCommerce Store" stroke="#fa7e7e" />
    <Line type="monotone" dataKey="Shopify Store" stroke="#2cded5" />
  </PieChart>
);
}

export default ChartPie;
