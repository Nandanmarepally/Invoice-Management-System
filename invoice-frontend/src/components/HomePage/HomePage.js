import React, { useState, useEffect } from 'react';

import './HomePage.css';

function HomePage() {
  const [invoices, setInvoices] = useState([]);
  const [invoiceId, setInvoiceId] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');
  
  // Load invoices from localStorage on component mount
  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    setInvoices(storedInvoices);
  }, []);

  // Save invoices to localStorage whenever invoices state changes
  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  // Handle the addition of a new invoice
  const handleAddInvoice = () => {
    if (!invoiceId || !invoiceDate || !invoiceAmount) {
      alert('Please fill in all fields');
      return;
    }

    const newInvoice = {
      id: invoiceId,
      date: invoiceDate,
      amount: invoiceAmount,
    };

    setInvoices([...invoices, newInvoice]);
    setInvoiceId('');
    setInvoiceDate('');
    setInvoiceAmount('');
  };

  return (
    <div className="home-container">
      <h2>Welcome to the Invoice Management System</h2>

     
      

      {/* Invoice Form to add a new invoice */}
      <div className="invoice-form">
        <input
          type="text"
          placeholder="Invoice ID"
          value={invoiceId}
          onChange={(e) => setInvoiceId(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={invoiceAmount}
          onChange={(e) => setInvoiceAmount(e.target.value)}
        />
        <button onClick={handleAddInvoice}>Add Invoice</button>
      </div>

      {/* Display the list of invoices */}
      <ul className="invoice-list">
        {invoices.map((invoice, index) => (
          <li key={index} className="invoice-item">
            <p><strong>Invoice ID:</strong> {invoice.id}</p>
            <p><strong>Date:</strong> {invoice.date}</p>
            <p><strong>Amount:</strong> Rs. {invoice.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
