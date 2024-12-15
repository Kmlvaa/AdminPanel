"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = () => {

    const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales per Month",
        data: [120, 200, 150, 300, 500, 600, 450, 300, 350, 400, 500, 700],
        backgroundColor: "rgba(54, 162, 235, 0.6)", 
        borderColor: "rgba(54, 162, 235, 1)", 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Sales Statistics",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start Y-axis at zero
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sales Statistics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};  

export default SalesChart;
