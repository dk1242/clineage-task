const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// routes
const YTRoutes = require("./routes/YTRoutes");

// middlewares
app.use(cors());
app.use(express.json());

// initializing mongoose connection for database
mongoose.connect(process.env.DATABASE, (err, data) => {
  if (err) {
    console.log(err);
  } else console.log("Databse connected");
});

// calling routes
app.use("/api", YTRoutes);

const PORT = process.env.PORT || 8000;

// for sending error messages
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
