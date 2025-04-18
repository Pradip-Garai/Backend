const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  fName:{
    type: String,
    required:true,
    minLength:3,
    maxLength:25
  },
  lName:{
    type: String
  },
  age:{
    type: Number,
    min:15, // minimum age 
    max:75
  },
  gender:{
    type: String,
    // enum:["male","female","Male","Female","others"]
    validate(value){
      if (!["male", "female", "Male", "Female", "others"].includes(value))
        throw new Error("Invalid Gender");
    }
  },
  emailId:{
    type: String,
    required:true,
    unique:true,
    lowercase:true,
    immutable:true
  },
  password:{

    type: String,
    required:true
  },
  photo:{
    type: String,
    default:"this is the photo"
  }
},{timestamps:true});

const User = mongoose.model("users", userSchema);

module.exports = User;