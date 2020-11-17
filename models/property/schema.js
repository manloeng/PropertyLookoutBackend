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
    units: {
      type: String,
    },
  },
  propertyTenure: {
    tenure: {
      type: String,
    },
    length: {
      type: Number,
    },
    startDate: {
      type: Date,
    },
    renewDate: {
      type: Date,
    },
    note: {
      type: String,
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
  rental: {
    currentRent: {
      rent: {
        type: Number,
      },
      units: {
        type: String,
      },
    },
    sinkingFunds: {
      amount: {
        type: Number,
      },
      units: {
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
      renewDate: {
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
      renewDate: {
        type: Date,
      },
    },
    electricCertificate: {
      startDate: {
        type: Date,
      },
      renewDate: {
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
