import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContractUpload from './contractUpload';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Main Content */}
      <main className="p-6 flex-grow">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
          <p className="mt-2">
            Quickly upload contracts for analysis or explore insights from previously analyzed contracts.
          </p>
        </section>

        {/* Contract Upload Section */}
        <ContractUpload />

        {/* Quick Links Section */}
        <section>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate('/results')}
                >
                  View Analysis Results
                </button>
              </li>
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate('/insights')}
                >
                  Detailed Risk Insights
                </button>
              </li>
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => navigate('/help')}
                >
                  Help & FAQ
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
