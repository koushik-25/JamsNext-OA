//import mongoose from "mongoose";
var mongoose = require('mongoose');
var authcode = "mongodb+srv://koushik:coderkoushik@cluster0.g8akw3s.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(authcode, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
     // useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;