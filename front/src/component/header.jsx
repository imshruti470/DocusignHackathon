// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white p-4">
      <h1
        className="text-3xl font-bold cursor-pointer"
        onClick={() => navigate('/')}
      >
        AI Contract Risk Analyzer
      </h1>
      <p className="mt-2">Analyze contracts for potential risks and insights effortlessly.</p>
    </header>
  );
};

export default Header;
