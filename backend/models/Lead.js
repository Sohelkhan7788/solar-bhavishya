const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  naam: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, trim: true },
  sheher: { type: String, required: true, trim: true },
  zaroorat: { type: String, default: '' },
  sandesh: { type: String, default: '' },
  status: {
    type: String,
    enum: ['naya', 'contact_kiya', 'follow_up', 'convert', 'band'],
    default: 'naya'
  },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
