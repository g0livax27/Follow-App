// Model Code \\
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
    {
    month: String,
    itemAmount: Number,
    itemName: String,
    purchased: Boolean
    }
);

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;