import axios from 'axios';

const API_URL = 'http://localhost:5000/api/invoices';

export const fetchInvoices = () => axios.get(API_URL);
export const createInvoice = (invoice) => axios.post(API_URL, invoice);
export const updateInvoice = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteInvoice = (id) => axios.delete(`${API_URL}/${id}`);
