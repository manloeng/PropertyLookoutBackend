const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Finance = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cost: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  property: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  account: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = Finance;
