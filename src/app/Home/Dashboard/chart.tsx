"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Anggota ",
    P: 400,
    amt: 500,
  },
  {
    name: "Perempuan",
    P: 200,
    amt: 500,
  },
  {
    name: "LakiLaki",
    L: 150,
    amt: 100,
  },
  {
    name: "Tidak aktif",
    P: 50,
    L: 50,
    amt: 500,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width={357} height={330}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="bg-white shadow-lg rounded-xl"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="P" fill="#EA1565" />
        <Bar dataKey="L" fill="#0065DB" />
        <Bar dataKey="jumlah" fill="#65DB00" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
