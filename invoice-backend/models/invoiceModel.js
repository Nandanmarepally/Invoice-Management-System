const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  client: { type: String, required: true },
  status: { type: String, default: 'Unpaid' },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
