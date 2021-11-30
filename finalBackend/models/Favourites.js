const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
// Create Schema
const UserSchema = new Schema({
  userId: [
    {type: mongoose.Schema.Types.ObjectId,ref:'User'}
],
  courseId: {
    type: String,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  status:{
    type:String,
  }
 
});

const Favourites = model('Favourites', UserSchema);

module.exports =  Favourites;