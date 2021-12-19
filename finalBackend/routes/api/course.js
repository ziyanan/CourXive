const { Router } = require("express"); 
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
// This is model/Schema of our course 
const Courses = require("../../models/course");

const getCourses = require("../../controllers/getCourses");
const router = Router();
router.get("/getCoursera", getCourses);


/**
 * @swagger
 * definitions:
 *  Add-Single-Course:
 *   type: object
 *   properties:
 *    id:
 *     type: string
 *     description: unique if for that course
 *     example: 'web-develpment-react'
 *    title:
 *     type: string
 *     description: Title for that course that user can see
 *     example: 'Mern stach development for begginers'
 *    rating:
 *     type: string
 *     description: Average rating of that course
 *     example: '4.5'
 *    image_750x422:
 *     type: string
 *     description: Image url of that course thumnail hosted on cloud
 *     example: 'https://cloudinary.com/image-thumnails/web-development-with-react'
 *    source:
 *     type: string
 *     description: From which website that course has been extracted
 *     example: 'udemy'
 *    description:
 *     type: string
 *     description: Description of that course which dig deep into what userwill learn after taking this course
 *     example: 'You will learn Redux, React and .......'
 *    url:
 *     type: string
 *     description: Original url of that coruse so user can go there and enroll in that course
 *     example: 'https://udemy.com/course/web-development-using-react'
 *  All-Courses:
 *
 */

/**
 * @swagger
 * /api/course/add:
 *  post:
 *   summary: Add new course from api into our local database
 *   description: Add new course from api into our local database
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Add-Single-Course'
 *   responses:
 *    200:
 *     description: Course will be returned after when it gets saved
 *    400:
 *     description: Something went wrong saving the course
 */

// Add course end point 
router.post("/add", async (req, res) => {
  const {
    id,
    title,
    rating,
    image_750x422,
    source,
    description,
    url,
    visible_instructors,
  } = req.body;
  const newCourses = new Courses({
    id,
    title,
    rating,
    image_750x422,
    source,
    description,
    url,
    visible_instructors,
  });
//   Store new course in database
  const savedCourses = await newCourses.save();
  if (!savedCourses) {
    res.status(400).json({ error: "Something went wrong saving the courses" });
  } else {
    res.status(200).json(savedCourses);
  }
});

 /**
 * @swagger
 * /api/course/allCourse:
 *  get:
 *   summary: Get all Corses list from local database with all information
 *   description: Get all Corses list from local database with all information
 *   requestBody:
 *    content:
 *     application/json:
 *   responses:
 *    200:
 *     description: list of all saved courses will be returned
 *    400:
 *     description: Something went wrong getting the courses
 */
// https://courxive.herokuapp.com/api/course/allCourse
router.get("/allCourse", async (req, res) => {
  Courses.find({}, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res
        .status(400)
        .json({ error: "Something went wrong getting the courses" });
    }
  });
  // const savedCourses = await newCourses.save();
  // if(!savedCourses){
  //     res.status(400).json({ error: "Something went wrong saving the courses" });
  // }else{
  //     res.status(200).json(savedCourses)
  // }
  // test
});

/**
 * @route   GET api/course/delete
 * @desc    Delete course
 * @access  Public
 */

router.post("/delete", async (req, res) => {
  const { id } = req.body;

  // Simple validation
  if (!id) {
    return res.status(400).json({ msg: "Please give a course id" });
  }

  try {
    Courses.remove({ id: id }, function (err) {
      if (!err) {
        res.status(200).json({ msg: "Coruse successfully got deleted" });
      } else {
        res
          .status(400)
          .json({ msg: "Coruse not deleted Something went wrong" });
      }
    });
  } catch (e) {
    res.status(400).json({ msg: "Course does not exist" });
  }
});

module.exports = router;
