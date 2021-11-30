const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Favourites = require('../../models/Favourites');
const router = Router();

router.post('/add', async (req, res) => {
    const { courseId,userId, title,status } = req.body;
    
    
    const newFavourites = new Favourites({
        userId,
        courseId,
        title,
        status
    })
    const savedFavourites = await newFavourites.save();
    if(!savedFavourites){
        res.status(400).json({ error: "Something went wrong saving the user" });
    }else{
        res.status(200).json(savedFavourites)
    }

});
router.post('/update', async (req, res) => {
    const { id,status } = req.body;
    
    
    Favourites.findOneAndUpdate({ _id:id },{status:status},(err,data)=>{
        if(!err){
            Favourites.findOne({_id:id},(error,newData)=>{
             console.log("data after update", newData)
             res.status(200).json(newData)
         })
            
     
        } else {
            res.status(400).json(err)
         console.log("Error: could not update Favourite course " + err);
     }

});
})
router.post('/check', async (req, res) => {
    const { courseId,userId } = req.body;
    
    const user = await Favourites.findOne({ userId });
    if(user){
        const course = await Favourites.findOne({ courseId });
        if(course){
            res.status(200).json(course)
        }else{
            res.status(400).json({error:"not favourite course"})
        }
    }else{
        res.status(400).json({error:"no favourite course"})
    }
    // const savedFavourites = await newFavourites.save();
    // if(!savedFavourites){
    //     res.status(400).json({ error: "Something went wrong saving the user" });
    // }else{
    //     res.status(200).json(savedFavourites)
    // }

});
router.post('/delete', async (req, res) => {
    const { _id } = req.body;
    Favourites.findByIdAndRemove(_id, function(err,data){
        if(!err){
            res.status(200).json(data)
        } else {
            res.status(400).json({ error: "Something went wrong saving the delete favourite" });
        }
     });
})
router.post('/allCourse', async (req, res) => {
    const { userId } = req.body;
    Favourites.find({userId},(err,data)=>{
        if(!err){
            res.status(200).json(data)
        }else{
            res.status(400).json({ error: "Something went wrong getting the Favourites courses" });
        }
        
    })
});
module.exports = router