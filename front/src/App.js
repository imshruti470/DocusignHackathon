import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/dashboard';
import AnalysisResults from './component/analysisResult';
import Header from './component/header';
import Footer from './component/footer';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results" element={<AnalysisResults/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
