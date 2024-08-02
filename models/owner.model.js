const { default: mongoose } = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
    default: [],
  },
  picture: {
    type: String,
    required: true,
  },
  gstin: {
    type: String,
  },
});

const ownerModel = mongoose.model("owner", ownerSchema);
module.exports = ownerModel;
