const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  city: String,
  gender: String
});

const User = mongoose.model("users", userSchema);

module.exports = User;

