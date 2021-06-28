const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let Accounts = new Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  propertyNumber: {
    type: Number,
    required: true,
  },
  streetName: {
    type: String,
  },
  area: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
    required: true,
  },
  propertyList: {
    type: Array,
  },
  propertiesManaged: {
    type: Array,
  },
});

module.exports = Accounts;
