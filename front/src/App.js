import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/dashboard';
import AnalysisResults from './component/analysisResult';
import Header from './component/header';
import Footer from './component/footer';
import DetailedRiskInsights from './component/detailedriskInsights';
import HelpFaq from './component/helpfaq';
import SignUp from './component/signup';
import Login from './component/login';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results" element={<AnalysisResults/>} />
        <Route path="/insights" element={ <DetailedRiskInsights/>} />
        <Route path="/help" element={ <HelpFaq/>} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
