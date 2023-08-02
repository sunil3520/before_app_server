const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const connection = mongoose.connect(process.env.MONGOURL);
async function connection() {
    await mongoose.connect(process.env.MONGO_URL);
    mongoose.model('user', schema);
  
    await mongoose.model('user').findOne();
  }
// const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection }; 





