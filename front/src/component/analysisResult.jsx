// src/components/AnalysisResults.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalysisResults = () => {
  // Assuming `isContractUploaded` is a state variable that tracks if the contract is uploaded
  const [isContractUploaded, setIsContractUploaded] = useState(false);

  // Example data for the chart (only shown if a contract is uploaded)
  const data = {
    labels: ['High', 'Medium', 'Low'],  // Labels for the bars
    datasets: [
      {
        label: 'Risk Severity',
        data: [8, 5, 12],  // Example data points
        backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Bar color for High
        borderColor: 'rgba(255, 99, 132, 1)',  // Border color for High
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
        font: {
          size: 20,
        },
        color: '#333',
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Risk Level',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Clauses',
        },
        min: 0,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Risk Analysis Results</h2>

      {/* Conditional rendering based on whether a contract is uploaded */}
      {!isContractUploaded ? (
        <div className="text-center text-gray-600">
          <h3 className="text-xl font-semibold mb-4">No Contract Uploaded</h3>
          <p className="mb-4">Please upload a contract for analysis.</p>
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            onClick={() => setIsContractUploaded(true)} // Simulate uploading contract
          >
            Upload Contract
          </button>
        </div>
      ) : (
        <>
          {/* If contract is uploaded, show the chart and insights */}
          <div className="mb-8">
            <Bar data={data} options={options} />
          </div>

          <div className="text-gray-700">
            <h3 className="text-2xl font-semibold">Key Insights</h3>
            <p className="mt-4">
              The chart above highlights the risk severity of various clauses in the contract. Based on the analysis:
            </p>

            <ul className="mt-4 space-y-2">
              <li>
                <span className="font-bold text-red-600">High Risk:</span> A total of 8 clauses were flagged as high risk due to critical terms that may result in unfavorable outcomes.
              </li>
              <li>
                <span className="font-bold text-yellow-600">Medium Risk:</span> 5 clauses were identified with moderate risk, which could potentially lead to issues if left unchecked.
              </li>
              <li>
                <span className="font-bold text-green-600">Low Risk:</span> 12 clauses have been marked as low risk. These are mostly routine terms with minimal impact.
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Recommendations</h3>
              <p className="mt-4">
                - Review the high-risk clauses immediately and consider renegotiating or seeking legal advice.<br />
                - Medium-risk clauses should be closely monitored to ensure they do not escalate.<br />
                - Low-risk clauses are generally safe but should be included in future audits for assurance.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalysisResults;
