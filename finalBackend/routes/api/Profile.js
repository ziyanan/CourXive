const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const router = Router();

router.post('/update', async  (req, res) => {
    const { name,phone,InterestOfLearning,image,userId } = req.body;
    const  prevData = {
       
       name:name,
       phone:phone,
       InterestOfLearning:InterestOfLearning, 
       image:image
    }
      console.log("data to update", prevData)
     User.findOneAndUpdate({ _id:userId },prevData,(err,data)=>{
           if(!err){
            User.findOne({_id:userId},(error,newData)=>{
                console.log("data after update", newData)
                res.status(200).json(newData)
            })
               
        
           } else {
            console.log("Error: could not save user update " + contact.phone);
        }
    });

});
module.exports = router