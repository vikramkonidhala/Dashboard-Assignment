import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: '6/30/2023 - 7/6/2024', orders: 1600, sales: 1404 },
  { date: '7/7/2023 - 7/13/2024', orders: 800, sales: 800 },
  { date: '7/21/2023 - 7/27/2024', orders: 800, sales: 455 },
];

const ChartLine = () =>{
    const DataFormatter = (number) => {
          return `${(number / 1000).toString()}k`.toString()
      }

 return(
  <LineChart width={630} height={370} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis tickFormatter={DataFormatter} />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="orders" stroke="#fa7e7e" />
    <Line type="monotone" dataKey="sales" stroke="#2cded5" />
  </LineChart>
);
}

export default ChartLine;
