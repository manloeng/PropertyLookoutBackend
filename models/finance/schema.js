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
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  property: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  account: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = Finance;
