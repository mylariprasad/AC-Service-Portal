import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const CustomerSatisfactionChart = () => {
  const data = [
    { name: "Satisfied", value: 108 },
    { name: "Slightly Satisfied", value: 52 },
    { name: "Not Satisfied", value: 25 },
  ];

  return (
    <div className="App">
      <h1>Customer Satisfaction</h1>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="hotpink"
          label={({ name, value }) => `${name}: ${value}`} // Displaying name and value near the chart
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CustomerSatisfactionChart;
