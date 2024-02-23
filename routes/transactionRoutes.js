const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

// router Object
const router = express.Router();

// route

router.post("/add-transaction", addTransaction);

router.post("/edit-transaction", editTransaction);
//Delete transection POST MEthod
router.post("/delete-transaction", deleteTransaction);

// get transactions
router.post("/get-transaction", getAllTransactions);

module.exports = router;
