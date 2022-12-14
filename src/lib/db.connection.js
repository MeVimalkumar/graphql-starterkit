const { default: mongoose } = require("mongoose");
const { DB_URL } = require("../data/config");

const connection = mongoose.connect(DB_URL);

module.exports = connection;
