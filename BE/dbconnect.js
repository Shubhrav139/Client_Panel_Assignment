const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
    });

    return Promise.resolve("DB Connection Established!");
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

module.exports = dbConnect;