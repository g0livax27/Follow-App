// // Dependencies \\
// const Wishlist = require('../../models/wishlist.js');
// module.exports = {index, Delete, update, create, edit, show};

// // Index Route \\

// // Index Route \\
// async function index(req, res) {
//     try{
//         const months = await Bills.find({});
//         res.status(200).json(months);
//     }catch(err){
//         res.status(400).json(err);
//     }
// };
// router.get('/', (req, res) => {
//     const { months } = req.params;
//     Wishlist.find({ months, username: req.session.username })
//         .then((months) => {
//             res.render('wishlist/Index', { months });
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });

// // New Routes \\
// // router.get('/new', (req, res) => {
// //     res.render('wishlist/New')
// // });

// // router.get('/:month/new', (req, res) => {
// //     res.render('wishlist/Month')
// // });

// // Delete Route \\
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     Wishlist.findByIdAndDelete(id)
//         .then((deletedItem) => {
//             res.redirect(`/wishlist/${deletedItem.month}`);
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });

// // Update Route \\
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     req.body.mustHave = req.body.mustHave === 'on' ? true : false;
//     Wishlist.findByIdAndUpdate(id, req.body, { new: true })
//         .then((updatedItem) => {
//             res.redirect(`/wishlist/${updatedItem.month}`);
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });

// // Create Route \\
// router.post('/', (req, res) => {
//     req.body.mustHave = req.body.mustHave === 'on' ? true : false;
//     req.body.username = req.session.username;
//     Wishlist.create(req.body)
//         .then((createdItem) => {
//             res.redirect(`/wishlist/${createdItem.month}`);
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });

// // Edit Route \\
// router.get('/:id/edit', (req, res) => {
//     const { id } = req.params;
//     Wishlist.findById(id)
//         .then((wishlist) => {
//             res.render('wishlist/Edit', { wishlist });
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });

// // Show Routes \\
// router.get('/expense/:id', (req, res) => {
//     const { id } = req.params;
//     Wishlist.findById({ id })
//         .then((wishlist) => {
//             res.render('wishlist/Show', { wishlist });
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });

// router.get('/:month', (req, res) => {
//     const { month } = req.params;
//     Wishlist.find({ month: month, username: req.session.username })
//         .then((wishlist) => {
//             res.render('wishlist/Month', { wishlist, month });
//         })
//         .catch((err) => {
//             res.status(400).json({ err });
//         })
// });





// // Delete Route \\
// async function Delete(req, res) {
//     try{
//         const { id } = await req.params;
//         await Bills.findByIdAndDelete(id);
//     }catch(err){
//         res.status(400).json(err);
//     }
// };

// // Update Route \\
// async function update(req, res) {
//     try{
//         const { id } = await req.params;
//         const { body } = await req;
//         const updatedBill = await Bills.findByIdAndUpdate(id, body, { new: true });
//         res.status(200).json(updatedBill);
//     }catch(err){
//         res.status(400).json(err);
//     }
// };

// // Create Route \\
// async function create(req, res) {
//     try{
//         const createdBill = await Bills.create(req.body);
//         res.status(200).json(createdBill);
//     }catch(err){
//         res.status(400).json(err);
//     }
// };

// // Edit Route \\
// async function edit( req, res) {
//     try{
//         const { id } = await req.params;
//         const editedBill = await Bills.findById(id);
//         res.status(200).json(editedBill);
//     }catch(err){
//         res.status(400).json(err);
//     }
// };

// // Show Route \\
// async function show(req, res) {
//     try{
//         const { month } = await req.params;
//         const months = await Bill.find({month: month});
//         res.status(200).json(months);
//     }catch(err){
//         res.status(400).json(err);
//     }
// };