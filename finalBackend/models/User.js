const { Schema, model } = require('mongoose');

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  InterestOfLearning:{
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  image:{
    type: String,
  }
});

const User = model('user', UserSchema);

module.exports =  User;