// Dependencies \\
const Wishlist = require('../../models/wishlist.js');
module.exports = {index, Delete, update, create, edit, show};

// Index Route \\
async function index(req, res) {
    try{
        const months = await Wishlist.find({});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err);
    }
};

// New Routes \\
// router.get('/new', (req, res) => {
//     res.render('wishlist/New')
// });

// router.get('/:month/new', (req, res) => {
//     res.render('wishlist/Month')
// });

// Delete Route \\
async function Delete(req, res) {
    try{
        const { id } = await req.params;
        await Wishlist.findByIdAndDelete(id);
    }catch(err){
        res.status(400).json(err);
    }
};

// Update Route \\
async function update(req, res) {
    try{
        const { id } = await req.params;
        const { body } = await req;
        const updatedItem = await Wishlist.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json(updatedItem);
    }catch(err){
        res.status(400).json(err);
    }
};

// Create Route \\
async function create(req, res) {
    try{
        const createdItem = await Wishlist.create(req.body);
        res.status(200).json(createdItem);
    }catch(err){
        res.status(400).json(err);
    }
};

// Edit Route \\
async function edit( req, res) {
    try{
        const { id } = await req.params;
        const editedItem = await Wishlist.findById(id);
        res.status(200).json(editedItem);
    }catch(err){
        res.status(400).json(err);
    }
};

// Show Route \\
async function show(req, res) {
    try{
        const { month } = await req.params;
        const months = await Wishlist.find({month: month});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err);
    }
};