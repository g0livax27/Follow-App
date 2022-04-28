// Model Code \\
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
    {
    month: String,
    itemAmount: String,
    itemName: String,
    mustHave: Boolean,
    name: String
    }
);

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;