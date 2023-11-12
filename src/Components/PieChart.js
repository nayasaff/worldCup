import React from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import "../Styles/Analytics.css";

const PieChart = (props) => {
  Chart.register(CategoryScale);
  Chart.register(...registerables);
  return (
    <div className="pie-chart">
      <Pie
        data={{
          labels: ["Price 75", "Price 125", "Price 195"],
          datasets: [
            {
              label: "count for each category",
              data: [props.data, props.data2, props.data3],
              backgroundColor: [
                "rgba(64, 224, 208,0.5)",
                "rgba(100, 149, 237,0.5)",
                "rgba(204, 204, 255,0.5)",
              ],

              borderColor: [
                "rgba(64, 224, 208,0.5)",
                "rgba(100, 149, 237,0.5)",
                "rgba(204, 204, 255,0.5)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={30}
        width={30}
      />
    </div>
  );
};

export default PieChart;
