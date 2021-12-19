const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const router = Router();


 /**
  * @swagger
  * /api/profile/update:
  *  post:
  *   summary: Updated User 
  *   description: Update user's profile information
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Update-User'
  *   responses:
  *    200:
  *     description: Will return user's updated data like like name, profile image and interest of learning
  *    400:
  *     description: Could't save the user's information
  */

router.post('/update', async  (req, res) => {
    const { name,phone,InterestOfLearning,image,userId } = req.body;
    const  prevData = {
       
       name:name,
       phone:phone,
       InterestOfLearning:InterestOfLearning, 
       image:image
    }
      
     User.findOneAndUpdate({ _id:userId },prevData,(err,data)=>{
           if(!err){
            User.findOne({_id:userId},(error,newData)=>{
               
                res.status(200).json(newData)
            })
               
        
           } else {
            console.log("Error: could not save user update " + contact.phone);
        }
    });

});
module.exports = router