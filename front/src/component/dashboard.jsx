import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContractUpload from './contractUpload';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check token from local storage
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []);

  // Redirect to login page
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  // Redirect to signup page
  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Main Content */}
      <main className="p-6 flex-grow">
        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <section className="text-center">
            <h2 className="text-2xl font-semibold">Please Log In</h2>
            <p className="mt-2">To access the dashboard, please log in or sign up.</p>
            <div className="mt-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleLoginRedirect}
              >
                Log In
              </button>
              <button
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleSignUpRedirect}
              >
                Sign Up
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
