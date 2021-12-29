const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let PropertiesSchema = new Schema({
  account: {
    type: String,
  },
  propertyName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
    required: true,
  },
  purchasePrice: {
    type: Number,
  },
  purchaseDate: {
    type: Date,
  },
  propertyTenure: {
    tenure: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    leaseLength: {
      type: Number,
    },
    insuranceStartDate: {
      type: Date,
    },
  },
  propertySize: {
    size: {
      type: Number,
    },
    units: {
      type: String,
    },
  },
  propertyType: {
    type: String,
  },
  propertyRooms: {
    type: Number,
  },
  propertyBathrooms: {
    type: Number,
  },
  keyFeatures: {
    type: String,
  },
  description: {
    type: String,
  },
  propertySaleHistory: {
    type: Number,
  },
});

module.exports = PropertiesSchema;
