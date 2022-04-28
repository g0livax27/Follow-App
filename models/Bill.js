// Model Code \\
const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
    month: String,
    billAmount: Number,
    billName: String,
    billPaid: Boolean
    }
);

const Bills = mongoose.model('Bills', billSchema);

module.exports = Bills;