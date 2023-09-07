import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

// A React component for rendering a pie chart based on percentage data.

export const ChartComp = ({ porcentajes }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const { bodyFat, boneMassPercentage, residualMassPercentage, muscleMass } =
      porcentajes;
    //console.log("Valores de porcentajes:", bodyFat, boneMassPercentage, residualMassPercentage, muscleMass);

    // Get the canvas element by its ID
    const ctx = document.getElementById("chartComp");

    // Destroy the existing chart instance to prevent memory leaks
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new pie chart using Chart.js
    const newChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Masa grasa", "Masas ósea", "Masa residual", "Masa muscular"],
        datasets: [
          {
            label: "Porcentaje respecto al peso",
            data: [
              bodyFat,
              boneMassPercentage,
              residualMassPercentage,
              muscleMass,
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Store the chart instance in the ref for future reference
    chartRef.current = newChart;
  }, [porcentajes]);

  return <canvas id="chartComp" width="200" height="200"></canvas>;
};
