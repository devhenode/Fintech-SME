const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./config/database');
const app = express();

// Connect to database
connectDB();



module.exports = app;