import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DetailedRiskInsights = () => {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState({});

  // Sample data
  const risks = [
    { clause: "Payment terms are ambiguous.", riskLevel: "High", explanation: "The contract lacks clear deadlines and amounts, which can lead to disputes.", recommendation: "Clarify payment terms with specific dates and amounts." },
    { clause: "Termination notice period is unclear.", riskLevel: "Medium", explanation: "A vague termination clause may create confusion when one party wants to end the contract.", recommendation: "Specify a clear notice period (e.g., 30 days) for termination." },
    { clause: "Indemnity clause is broad.", riskLevel: "Low", explanation: "An overly broad indemnity clause could expose one party to excessive liability.", recommendation: "Refine the indemnity clause to specify the scope of indemnification." },
  ];

  const filteredRisks = filter === 'All' ? risks : risks.filter(risk => risk.riskLevel === filter);

  // Chart data
  const chartData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Risk Count',
        data: ['High', 'Medium', 'Low'].map(level => risks.filter(risk => risk.riskLevel === level).length),
        backgroundColor: ['#dc2626', '#facc15', '#22c55e'], // Red, Yellow, Green
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Detailed Risk Insights</h1>
        <p className="mt-2">Clause breakdown with risks, explanations, and recommendations.</p>
      </header>

      <main className="p-6">
        {/* Chart Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <div className="mt-4">
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
          </div>
        </section>

        {/* Filtering Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Filter by Risk Level</h2>
          <div className="flex space-x-4 mt-2">
            {['All', 'High', 'Medium', 'Low'].map(level => (
              <button
                key={level}
                className={`py-2 px-4 rounded ${filter === level ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}
                onClick={() => setFilter(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </section>

        {/* Risks Section */}
        <section>
          <h2 className="text-xl font-semibold">Clause-by-Clause Breakdown</h2>
          <div className="mt-4 space-y-4">
            {filteredRisks.map((risk, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-xl font-semibold">{risk.clause}</h3>
                <div className="mt-2">
                  <span className={`text-sm font-semibold ${risk.riskLevel === "High" ? 'text-red-600' : risk.riskLevel === "Medium" ? 'text-yellow-600' : 'text-green-600'}`}>
                    Risk Level: {risk.riskLevel}
                  </span>
                </div>
                {expanded[index] && (
                  <>
                    <p className="mt-2 text-gray-700"><strong>Explanation:</strong> {risk.explanation}</p>
                    <p className="mt-2 text-gray-700"><strong>Recommendation:</strong> {risk.recommendation}</p>
                  </>
                )}
                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => setExpanded({ ...expanded, [index]: !expanded[index] })}
                >
                  {expanded[index] ? 'Collapse' : 'Expand'} Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default DetailedRiskInsights;
