const express = require('express');
const router = express.Router();
const expensesCtlrs = require('../../controllers/api/expenses');

router.get('/', expensesCtlrs.index);
router.delete('/:id', expensesCtlrs.Delete);
router.put('/:id', expensesCtlrs.update);
router.post('/', expensesCtlrs.create);
router.get('/:id/edit', expensesCtlrs.edit);
router.get('/:month', expensesCtlrs.show);
// router.get('/:month/bills', expensesCtlrs.index);
// router.get('/:month/wishlists', expensesCtlrs.index);


module.exports = router;