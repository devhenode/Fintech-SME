const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlenght: 3,
    },
    password: {
      type: String,
      required: true,
      minlenght: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlenght: 3,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    accountNumber: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
