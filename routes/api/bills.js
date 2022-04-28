const express = require('express');
const router = express.Router();
const billsCtlrs = require('../../controllers/api/bills');

router.get('/', billsCtlrs.index);
router.delete('/:id', billsCtlrs.Delete);
router.put('/:id', billsCtlrs.update);
router.post('/', billsCtlrs.create);
router.get('/:id/edit', billsCtlrs.edit);
router.get('/month/:id', billsCtlrs.show);


module.exports = router;