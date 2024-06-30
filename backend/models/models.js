const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  public_key: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});


module.exports = mongoose.model("Universities", UserSchema);

console.log(mongoose.model("Universities", UserSchema))


