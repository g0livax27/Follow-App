//Connect to database
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
const User = require('./models/User');

let user;
let users;