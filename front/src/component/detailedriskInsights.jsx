import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailedRiskInsights = () => {
  const navigate = useNavigate();
  
  // Sample data - this would usually come from an API or a database
  const [risks, setRisks] = useState([
    {
      clause: "Payment terms are ambiguous.",
      riskLevel: "High",
      explanation: "The contract lacks clear deadlines and amounts, which can lead to disputes.",
      recommendation: "Clarify payment terms with specific dates and amounts."
    },
    {
      clause: "Termination notice period is unclear.",
      riskLevel: "Medium",
      explanation: "A vague termination clause may create confusion when one party wants to end the contract.",
      recommendation: "Specify a clear notice period (e.g., 30 days) for termination."
    },
    {
      clause: "Indemnity clause is broad.",
      riskLevel: "Low",
      explanation: "An overly broad indemnity clause could expose one party to excessive liability.",
      recommendation: "Refine the indemnity clause to specify the scope of indemnification."
    }
  ]);

  useEffect(() => {
    // Here, you can fetch actual data from your API or service if needed
    // For example: fetch('/api/get-risk-insights').then(res => setRisks(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Detailed Risk Insights</h1>
        <p className="mt-2">Detailed breakdown of the contract risks, explanations, and recommendations.</p>
      </header>

      <main className="p-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Clause-by-Clause Breakdown</h2>
          
          <div className="space-y-4">
            {risks.map((risk, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-xl font-semibold">{risk.clause}</h3>
                <div className="mt-2">
                  <span className={`text-sm font-semibold ${risk.riskLevel === "High" ? 'text-red-600' : risk.riskLevel === "Medium" ? 'text-yellow-600' : 'text-green-600'}`}>
                    Risk Level: {risk.riskLevel}
                  </span>
                </div>
                <p className="mt-2 text-gray-700"><strong>Explanation:</strong> {risk.explanation}</p>
                <p className="mt-2 text-gray-700"><strong>Recommendation:</strong> {risk.recommendation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => navigate('/help')} // Example to navigate to Help & FAQ page
          >
            Need Help with the Analysis?
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 AI Contract Risk Analyzer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DetailedRiskInsights;
