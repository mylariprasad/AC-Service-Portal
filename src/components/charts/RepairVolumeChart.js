import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const RepairVolumeChart = () => {
  const data = [
    { name: "January", value: 150 },
    { name: "February", value: 185 },
    { name: "March", value: 200 },
    { name: "April", value: 235 },
    { name: "May", value: 350 },
    { name: "June", value: 400 },
    { name: "July", value: 310 },
    { name: "August", value: 215 },
    { name: "September", value: 185 },
    { name: "October", value: 190 },
    { name: "November", value: 120 },
    { name: "December", value: 100 },
  ];

  return (
    <div className="App">
      <h1>Repair Volume</h1>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#DC143C"
          label={({ name, value }) => `${name}: ${value}`} // Displaying name and value near the chart
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default RepairVolumeChart;
