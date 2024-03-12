const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    mobileNumber: {
      type: String,
      default: "",
    },
    project: {
      type: String,
      default: "",
    },
    delete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const clientModel = mongoose.model("clients", ClientSchema);

module.exports = clientModel;
