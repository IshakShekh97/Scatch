const { default: mongoose, mongo } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
  stock: Boolean,
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
