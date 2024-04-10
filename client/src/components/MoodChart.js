import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const MoodChart = ({ moodHistory }) => {
  const labels = moodHistory.map((entry) =>
    new Date(entry.timestamp).toLocaleDateString()
  );

  const moodValues = moodHistory.map((entry) => {
    switch (entry.mood) {
      case "Excited":
        return 6;
      case "Happy":
        return 5;
      case "Neutral":
        return 4;
      case "Anxious":
        return 3;
      case "Sad":
        return 2;
      case "Angry":
        return 1;
      default:
        return 0;
    }
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Mood Over Time",
        data: moodValues,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default MoodChart;
