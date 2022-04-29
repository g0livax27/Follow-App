// Dependencies \\
const Bill = require('../../models/bill.js');
module.exports = {index, Delete, update, create, edit, show};


// Index Route \\
async function index(req, res) {
    try{
        const months = await Bill.find({});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err);
    }
};

// New Routes \\
// router.get('/new', (req, res) => {
//     res.render('bills/New')
// });

// Delete Route \\
async function Delete(req, res) {
    try{
        const { id } = await req.params;
        await Bill.findByIdAndDelete(id);
    }catch(err){
        res.status(400).json(err);
    }
};

// Update Route \\
async function update(req, res) {
    try{
        const { id } = await req.params;
        const { body } = await req;
        const updatedBill = await Bill.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json(updatedBill);
    }catch(err){
        res.status(400).json(err);
    }
};

// Create Route \\
async function create(req, res) {
    try{
        const createdBill = await Bill.create(req.body);
        res.status(200).json(createdBill);
    }catch(err){
        res.status(400).json(err);
    }
};

// Edit Route \\
async function edit( req, res) {
    try{
        const { id } = await req.params;
        const editedBill = await Bill.findById(id);
        res.status(200).json(editedBill);
    }catch(err){
        res.status(400).json(err);
    }
};

// Show Route \\
async function show(req, res) {
    try{
        const { month } = await req.params;
        const months = await Bill.find({month: month});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err);
    }
};