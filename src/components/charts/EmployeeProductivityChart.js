import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const EmployeeProductivityChart = () => {
  const data = [
    { name: "Employee 1", value: 35 },
    { name: "Employee 2", value: 40 },
    { name: "Employee 3", value: 32 },
    { name: "Employee 4", value: 36 },
    { name: "Employee 5", value: 42 },
  ];

  return (
    <div className="App1">
      <h1>Employee Productivity</h1>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="45%"
          cy="40%"
          outerRadius={100}
          fill="seagreen"
          label={({ name, value }) => `${name}: ${value}`} // Displaying name and value near the chart
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default EmployeeProductivityChart;
