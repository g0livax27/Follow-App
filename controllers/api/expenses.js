// Dependencies \\
const Expenses = require('../../models/Expense.js');
module.exports = {index, Delete, update, create, edit, show};

// Index Route \\
async function index(req, res) {
    try{
        const months = await Expenses.find({});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err);
    }
};

// Delete Route \\
async function Delete(req, res) {
    try{
        const { id } = await req.params;
        await Expenses.findByIdAndDelete(id);
    }catch(err){
        res.status(400).json(err);
    }
};

// Update Route \\
async function update(req, res) {
    try{
        const { id } = await req.params;
        const { body } = await req;
        const updatedExpenses = await Expenses.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json(updatedExpenses);
    }catch(err){
        res.status(400).json(err);
    }
};

// Create Route \\
async function create(req, res) {
    try{
        const createdExpenses = await Expenses.create(req.body);
        res.status(200).json(createdExpenses);
    }catch(err){
        res.status(400).json(err);
    }
};

// Edit Route \\
async function edit( req, res) {
    try{
        const { id } = await req.params;
        const editedExpenses = await Expenses.findById(id);
        res.status(200).json(editedExpenses);
    }catch(err){
        res.status(400).json(err);
    }
};

// Show Routes \\
async function show(req, res) {
    try{
        const { month } = await req.params;
        const months = await Expenses.find({month: month});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err);
    }
};