const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
// Create Schema
const UserSchema = new Schema({
  userId: [
    {type: mongoose.Schema.Types.ObjectId,ref:'User'}
],
  message: {
    type: String,
    // required: true,
  },
  rating:{
    type: String,
  },
  courseId:{
    type: String,
  }
 
});

const Comments = model('Comments', UserSchema);

module.exports =  Comments;