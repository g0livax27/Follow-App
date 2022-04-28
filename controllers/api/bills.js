// Dependencies \\
const Bills = require('../models/bill.js');
module.exports = {index, Delete, update, create, edit, Show};

// Index Route \\
async function index(req, res) {
    try{
        const months = await Bills.find({});
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
        const { id } = req.params;
        await Bills.findByIdAndDelete(id);
    }catch(err){
        res.status(400).json(err);
    }
};

// Update Route \\
async function update(req, res) {
    try{
        const { id } = req.params;
        const updatedBill = await Bills.findByIdAndUpdate(id);
        res.status(200).json(updatedBill)
    }catch(err){
        res.status(400).json(err);
    }
};

// Create Route \\
async function create(req, res) {
    try{
        const createdBill = await Bills.create(req.body);
        res.status(200).json(createdBill);
    }catch(err){
        res.status(400).json(err);
    }
};

// Edit Route \\
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    Bills.findById(id)
        .then((bills) => {
            res.render('bills/Edit', { bills });
        })
        .catch((err) => {
            res.status(400.).json({ err });
        })
});

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


module.exports = router;