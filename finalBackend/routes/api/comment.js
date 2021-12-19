const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const Comments = require('../../models/comments');
const router = Router();
/**
 * @swagger
 * definitions:
 *  Add-Comment:
 *   type: object
 *   properties:
 *    msg:
 *     type: string
 *     description: message of the user
 *     example: 'This course is great'
 *    userId:
 *     type: string
 *     description: UserId from database of mongo from user's schema otherwise you will get the error
 *     example: '12x4353bce4543xxv23'
 *    courseId:
 *     type: string
 *     description: course Id of that course
 *     example: 'web-development-react-with-react'
 *  All-Comments:
 *   type: object
 *   properties:
 *    courseId:
 *     type: string
 *     description: CourseId from database which is unique for all courses
 *     example: 'web-development-react-with-react'
 */

/**
 * @swagger
 * /api/comment/add:
 *  post:
 *   summary: Add new comment for one course that a user have posted
 *   description: Add new comment for one course that a user have posted
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Add-Comment'
 *   responses:
 *    200:
 *     description: Saved comments with all other comments
 *    400:
 *     description: Something went wrong adding comment
 */
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
// API to get the comments on that specific course 



/**
 * @swagger
 * /api/comment/allComment:
 *  post:
 *   summary: Get all the comments against your given courseId
 *   description: Get all the comments against your given courseId
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/All-Comments'
 *   responses:
 *    200:
 *     description: All comments have done agains this courseID will be returned
 *    400:
 *     description: Something went wrong retrieving comments from this courseid
 */
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