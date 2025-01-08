import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalysisResults = () => {
  const data = {
    labels: ['High', 'Medium', 'Low'],  // Labels for the bars
    datasets: [
      {
        label: 'Risk Severity',
        data: [8, 5, 12],  // Example data points
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Bar color
        borderColor: 'rgba(255, 99, 132, 1)',  // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Contract Risk Analysis',  // Chart title
      },
    },
  };

  return (
    <div>
      <h2>Risk Analysis Results</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AnalysisResults;
