const express = require('express');
const router = express.Router();
const wishlistCtlrs = require('../../controllers/api/wishlist');

router.get('/', wishlistCtlrs.index);
router.delete('/:id', wishlistCtlrs.Delete);
router.put('/:id', wishlistCtlrs.update);
router.post('/', wishlistCtlrs.create);
router.get('/:id/edit', wishlistCtlrs.edit);
router.get('/month/:id', wishlistCtlrs.show);


module.exports = router;