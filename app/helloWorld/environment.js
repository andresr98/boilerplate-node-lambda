const dotenv = require('dotenv');

// Load envrionment variables from a .env file
dotenv.config();

module.exports = {
    MESSAGE: process.env.MESSAGE
}