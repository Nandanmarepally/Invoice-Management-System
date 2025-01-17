import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/invoice-form" element={<InvoiceForm />} />
      </Routes>
    </Router>
  );
};

export default App;
