const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Comments = require('../../models/comments');
const router = Router();

router.post('/add', async (req, res) => {
    const { msg,userId,courseId } = req.body;
    
    
    const newComments = new Comments({
        userId,
        message:msg,
        courseId
    })
    const savedComments = await newComments.save();
    if(!savedComments){
        res.status(400).json({ error: "Something went wrong adding comment" });
    }else{
        res.status(200).json(savedComments)
    }

});
router.post('/allComment', async (req, res) => {
    const { courseId } = req.body;
    Comments.find({courseId},(err,data)=>{
        if(!err){
            res.status(200).json(data)
        }else{
            res.status(400).json({ error: "Something went wrong getting the Favourites courses" });
        }
        
    })
});
module.exports = router;