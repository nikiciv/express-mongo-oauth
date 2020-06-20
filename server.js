const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Load config
dotenv.config({
  path: "./config/config.env",
});

connectDB();

const app = express();

// Logging - use only in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
