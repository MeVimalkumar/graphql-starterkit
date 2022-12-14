const UserModel = require("../models/user.model");

const createUser = (body) => new UserModel(body).save();
const getAllUser = (query = {}) => UserModel.find(query).exec();

module.exports = { getAllUser, createUser };
