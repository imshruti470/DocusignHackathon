import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <Link to="/" className="text-3xl font-bold"> {/* Wrap logo in Link */}
        AI Contract Risk Analyzer
      </Link>
      <p className="mt-2">Analyze contracts for potential risks and insights effortlessly.</p>
    </header>
  );
};

export default Header;
