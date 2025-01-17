import React, { useState, useEffect } from 'react';
import './InvoiceForm.css';

function InvoiceForm({ match }) {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Unpaid');
  const [invoices, setInvoices] = useState([]);

  // Load invoices from localStorage if available
  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    setInvoices(storedInvoices);
  }, []);

  // Form validation logic
  const validateForm = () => {
    return invoiceNumber && clientName && date && amount && status;
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all fields.');
      return;
    }

    const newInvoice = {
      invoiceNumber,
      clientName,
      date,
      amount,
      status,
    };

    // Save new invoice to localStorage or update if invoice already exists
    const updatedInvoices = [...invoices, newInvoice];
    setInvoices(updatedInvoices);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));

    alert('Invoice saved successfully!');
    // Clear the form
    setInvoiceNumber('');
    setClientName('');
    setDate('');
    setAmount('');
    setStatus('Unpaid');
  };

  return (
    <div className="invoice-form-container">
      <h2>{match?.params?.id ? 'Update Invoice' : 'Add Invoice'}</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Invoice Number"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
        <button type="submit">{match?.params?.id ? 'Update Invoice' : 'Add Invoice'}</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
