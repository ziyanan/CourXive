const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
// Create Schema
const UserSchema = new Schema({
  id:{
    type: String,
   
  },
  title: {
    type: String,
    
  },
  image_750x422: {
    type: String,
    
  },
  rating:{
      type:String,
  },
  description:{
    type:String,
},
url:{
  type:String,
},
visible_instructors:{
  type:String,
},
  source: {
    type:String,
  },
  
 
});

const Courses = model('Courses', UserSchema);

module.exports =  Courses;