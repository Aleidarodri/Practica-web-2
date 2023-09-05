import { Chart } from "chart.js";
import { useEffect } from "react";

const Graph = ({ porcentajes }) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Masa grasa", "Masa osea", "Masa residual", "Masa muscular"],
        datasets: [
          {
            label: "%",
            data: [...porcentajes],
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: ["#ecb176", "#a98360", "#9c6644", "#b08968"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
          },
          title: { display: true, text: "Porcentajes de masa" },
        },
        responsive: true,
      },
    });
  }, []);

  return (
    <div className="w-1/2">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Graph;
