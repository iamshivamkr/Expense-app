const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

// router Object
const router = express.Router();

// router

// POST||login
router.post("/login", loginController);

// POST||register
router.post("/register", registerController);

module.exports = router;
