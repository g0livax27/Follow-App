// Model Code \\
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
    month: String,
    billAmount: String,
    billName: String,
    billPaid: Boolean,
    name: String
    }
);

const Bills = mongoose.model('Bills', billSchema);

module.exports = Bills;