const mongoose = require("mongoose");

const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
  }
};

module.exports = connectDb;
