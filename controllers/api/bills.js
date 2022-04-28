// Dependencies \\
const Bills = require('../models/bill.js');
module.exports = {Index, Delete, Update, Create, Edit, Show};

// Index Route \\
async function Index(req, res) {
    try{
        const months = await Bills.find({});
        res.status(200).json(months)
    }catch(err){
        res.status(400).json(err);
    }
};

// New Routes \\
// router.get('/new', (req, res) => {
//     res.render('bills/New')
// });

// Delete Route \\
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Bills.findByIdAndDelete(id)
        .then((deletedBill) => {
            res.redirect(`/bills/${deletedBill.month}`);
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
});

// Update Route \\
router.put('/:id', (req, res) => {
    const { id } = req.params;
    req.body.billPaid = req.body.billPaid === 'on' ? true : false;
    Bills.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedBill) => {
            res.redirect(`/bills/${updatedBill.month}`);
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
});

// Create Route \\
router.post('/', (req, res) => {
    req.body.billPaid = req.body.billPaid === 'on' ? true : false;
    req.body.username = req.session.username;
    Bills.create(req.body)
        .then((createdBill) => {
            res.redirect(`/bills/${createdBill.month}`);
        })
        .catch((err) => {
            res.status(400).json({ err });
        })
});

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
async function Show(req, res) {
    try{
        const monthTwo = await req.params.month
        const months = await Bill.find({month: monthTwo});
        res.status(200).json(months);
    }catch(err){
        res.status(400).json(err)
    }
};


module.exports = router;