//Connect to database
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
const User = require('./models/User');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

let user, item, category, order;
let users, items, categories, orders;