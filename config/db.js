const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { UserModel } = require("../models/user.model");
dotenv.config();

// const connection = mongoose.connect(process.env.MONGOURL);
async function connection() {
    await mongoose.connect(process.env.MONGO_URL);
    mongoose.model('user', UserModel);
  
    await mongoose.model('user').findOne();
  }
// const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection }; 





