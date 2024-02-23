const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: [true, "Please add a user id"],
    },
    amount: {
      type: Number,
      required: [true, "Please add a positive number"],
    },
    type: {
      type: String,
      required: [true, "Please add a type"],
    },
    catagory: {
      type: String,
      required: [true, "Please add a catagory"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Please add a date"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);

module.exports = transactionModel;
