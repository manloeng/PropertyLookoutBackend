const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let PropertiesSchema = new Schema({
  uuid: {
    type: String,
  },
  propertyName: {
    type: String,
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
  purchasePrice: {
    type: Number,
  },
  purchaseDate: {
    type: Date,
  },
  deposit: {
    type: Number,
  },
  stampDutyLandTax: {
    cost: {
      type: Number,
    },
    unit: {
      type: String,
    },
  },
  propertyTenure: {
    tenure: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    insuranceStartDate: {
      type: Date,
    },
  },
  propertySize: {
    size: {
      type: Number,
    },
    unit: {
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
  rental: {
    currentRent: {
      rent: {
        type: Number,
      },
      unit: {
        type: String,
      },
    },
    sinkingFunds: {
      amount: {
        type: Number,
      },
      unit: {
        type: String,
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
  },
  broadbandSpeed: {
    type: String,
  },
  propertySaleHistory: {
    type: Number,
  },
  estimatedPriceToDate: {
    type: Number,
  },
});

module.exports = PropertiesSchema;
