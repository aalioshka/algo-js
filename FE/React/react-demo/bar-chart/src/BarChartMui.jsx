import React from "react";
import "./BarChart.css";

const data = [
  { label: "Jan", value: 40 },
  { label: "Feb", value: 30 },
  { label: "Mar", value: 50 },
  { label: "Apr", value: 20 },
  { label: "May", value: 35 },
];

const BarChart = () => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="chart">
      {data.map(item => {
        const barHeight = (item.value / maxValue) * 100;

        return (
          <div key={item.label} className="bar-wrapper">
            <div className="tooltip-wrapper">
              <div
                className="bar"
                style={{ height: `${barHeight}%` }}
              />
              <span className="tooltip">{item.value}</span>
            </div>

            <div className="label">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
