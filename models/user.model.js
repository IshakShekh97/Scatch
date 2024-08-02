const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  contact: Number,
  profilePic: String,
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
