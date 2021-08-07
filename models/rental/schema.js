const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Rental = new Schema({
  property: { type: mongoose.Types.ObjectId, required: true },
  account: { type: mongoose.Types.ObjectId, required: true },
  currentRental: {
    rent: {
      type: Number,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    isRented: {
      type: Boolean,
    },
  },
  EPC: {
    rating: {
      type: String,
    },
    startDate: {
      type: Date,
    },
  },
  gasCertificate: {
    isRequired: {
      type: Boolean,
    },
    startDate: {
      type: Date,
    },
  },
  electricCertificate: {
    startDate: {
      type: Date,
    },
  },
});

module.exports = Rental;
