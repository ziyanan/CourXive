const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Courses = require('../../models/course');
const getCourses = require("../../controllers/getCourses");
const router = Router();
router.get('/getCoursera',getCourses);
router.post('/add', async (req, res) => {
    const { id,title,rating,image_750x422,source } = req.body;
    const newCourses = new Courses({
       id,
       title,
       rating,
       image_750x422,
       source
    })
    const savedCourses = await newCourses.save();
    if(!savedCourses){
        res.status(400).json({ error: "Something went wrong saving the courses" });
    }else{
        res.status(200).json(savedCourses)
    }

});
router.get('/allCourse', async (req, res) => {
    
    Courses.find({},(err,data)=>{
        if(!err){
            res.status(200).json(data)
        }else{
            res.status(400).json({ error: "Something went wrong getting the courses" });
        }
        
    })
    // const savedCourses = await newCourses.save();
    // if(!savedCourses){
    //     res.status(400).json({ error: "Something went wrong saving the courses" });
    // }else{
    //     res.status(200).json(savedCourses)
    // }

});
module.exports =router;