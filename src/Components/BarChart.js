import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import "../Styles/Analytics.css";
export default function BarChart(props) {
  Chart.register(CategoryScale);
  Chart.register(...registerables);
  return (
    <div className="bar-chart">
      <Bar
        data={{
          labels: ["Pending", "Reserved", "Cancelled"],
          datasets: [
            {
              label: "count for each ticket status",
              data: [props.data, props.data2, props.data3],
              backgroundColor: [
                "rgba(223, 255, 0,0.8)",
                "rgba(255, 191, 0,0.8)",
                "rgba(255, 127, 80,0.8)",
              ],

              borderColor: [
                "rgba(223, 255, 0)",
                "rgba(255, 191, 0)",
                "rgba(255, 127, 80)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}
