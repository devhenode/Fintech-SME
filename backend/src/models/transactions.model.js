const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema(
  {
   user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
   },
   transactionId:{
    type: String,
   },
   transactionReference:{
    type: String,
   },
   status:{
    type: String,
    enum: ["pending", "successful", "failed", "cancelled", "initiated"],
    default: "pending",
   },
   amount:{
    type: Number,
   },
   charges:{
    type: Number,
   },
   transactionType:{
    type: String,
    enum: ["transfer", "deposit", "withdrawal"],
   },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionsSchema);
