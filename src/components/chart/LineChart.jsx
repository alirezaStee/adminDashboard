import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function LineChartComponent({ data, grid ,dataKey}) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart data={data} width={500} height={300}>
        <XAxis interval="preserveStartEnd" dataKey={"name"}  />
        <YAxis  />
        <Line type={"monotone"} dataKey={dataKey} stroke="#1e40af" strokeWidth={'2px'}/>
        {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
