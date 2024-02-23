const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

const colors = require("colors");
const connectDb = require("./config/connectDb.js");

// DOT File
dotenv.config();

// Database Connection
connectDb();

// rest object
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

// routes
// user routes
app.use("/api/v1/users", require("./routes/userRoute"));
// transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
