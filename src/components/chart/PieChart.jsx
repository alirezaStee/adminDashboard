import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
export default function PieChartComponent({data,dataKey}) {

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (

      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={120}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey={dataKey}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

  );
}
