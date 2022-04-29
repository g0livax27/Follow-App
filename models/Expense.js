// Model Code \\
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
    {
    month: {
        type: String,
        required: true
        },
    amount: Number,
    name: String,
    complete: Boolean,
    list: {
        type: String,
        required: true,
        enum: ["Bills", "Wish List"]
        }
    }
);

const Expenses = mongoose.model('Expenses', expenseSchema);

module.exports = Expenses;