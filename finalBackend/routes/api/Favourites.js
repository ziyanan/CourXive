const { Router } = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const Favourites = require("../../models/Favourites");
const router = Router();



/**
 * @swagger
 * definitions:
 *  Add-to-favorite-list:
 *   type: object
 *   properties:
 *    courseId:
 *     type: string
 *     description: Courseid of that course which should be unique
 *     example: '12cd3434cggv234254'
 *    userId:
 *     type: string
 *     description: UserId from user's model from our local/cloud database
 *     example: '12cd3434cggv234254'
 *    title:
 *     type: string
 *     description: Title of that course
 *     example: 'Learn Full stack web development using MERN stacks'
 *    status:
 *     type: string
 *     description: Status can be read or unread which mean course has been watched or not
 *     example: 'unread'
 *  All-Courses:
 *
 */
/**
 * @swagger
 * /api/Favourite/add:
 *  post:
 *   summary: Add new favorite course into user's list
 *   description:  Add new favorite course into user's list
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Add-to-favorite-list'
 *   responses:
 *    200:
 *     description: Saved Favorite course will be returned
 *    400:
 *     description: Something went wrong saving the favorite course
 */
router.post("/add", async (req, res) => {
  const { courseId, userId, title, status } = req.body;

  const newFavourites = new Favourites({
    userId,
    courseId,
    title,
    status,
  });

  const savedFavourites = await newFavourites.save();

  if (!savedFavourites) {
    res.status(400).json({ error: "Something went wrong saving the user" });
  } else {
    res.status(200).json(savedFavourites);
  }
});




/**
 * @swagger
 * definitions:
 *  Update-favorite-course-read-unread:
 *   type: object
 *   properties:
 *    id:
 *     type: string
 *     description: Unique if from favorite Model that mongodb has been assigned
 *     example: '12cd3434cggv23425423cgs'
 *    status:
 *     type: string
 *     description: what status you want to set read or unread
 *     example: 'unread'
 *
 */
/**
 * @swagger
 * /api/Favourite/update:
 *  post:
 *   summary: Update Favorite course status read or unread means user have watched that course or not
 *   description:   Delele the course from favorite list of one user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Update-favorite-course-read-unread'
 *   responses:
 *    200:
 *     description: List of all favorite courses against that user will be retrieved after deleting the that one course
 *    400:
 *     description: course did't exst in favourite list or Something went wrong saving the delete favourite
 */
router.post("/update", async (req, res) => {
  const { id, status } = req.body;

  Favourites.findOneAndUpdate({ _id: id }, { status: status }, (err, data) => {
    if (!err) {
      Favourites.findOne({ _id: id }, (error, newData) => {
        console.log("data after update", newData);
        res.status(200).json(newData);
      });
    } else {
      res.status(400).json(err);
      console.log("Error: could not update Favourite course " + err);
    }
  });
});
router.post("/check", async (req, res) => {
  const { courseId, userId } = req.body;

  const user = await Favourites.findOne({ userId });
  if (user) {
    const course = await Favourites.findOne({ courseId });
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(400).json({ error: "not favourite course" });
    }
  } else {
    res.status(400).json({ error: "no favourite course" });
  }
  // const savedFavourites = await newFavourites.save();
  // if(!savedFavourites){
  //     res.status(400).json({ error: "Something went wrong saving the user" });
  // }else{
  //     res.status(200).json(savedFavourites)
  // }
});


/**
 * @swagger
 * definitions:
 *  Delete-favorite-courses-from-list:
 *   type: object
 *   properties:
 *    userId:
 *     type: string
 *     description: This is exact courseid which has been assigned by mongodb which have user information and courseif of favorite course both
 *     example: '12cd3434cggv23425423cgs'
 *
 */
/**
 * @swagger
 * /api/Favourite/delete:
 *  post:
 *   summary: Delele the course from favorite list of one user
 *   description:   Delele the course from favorite list of one user
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Delete-favorite-courses-from-list'
 *   responses:
 *    200:
 *     description: List of all favorite courses against that user will be retrieved after deleting the that one course
 *    400:
 *     description: course did't exst in favourite list or Something went wrong saving the delete favourite
 */
router.post("/delete", async (req, res) => {
  const { _id } = req.body;
  const course = await Favourites.findOne({ _id });
  if (course) {
    Favourites.findByIdAndRemove(_id, function (err, data) {
      if (!err) {
        res.status(200).json(data);
      } else {
        res
          .status(400)
          .json({ error: "Something went wrong saving the delete favourite" });
      }
    });
  } else {
    res.status(400).json({ error: "course does't exist in favourite list" });
  }
});

router.post("/allCourse", async (req, res) => {
  const { userId } = req.body;
  Favourites.find({ userId }, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res
        .status(400)
        .json({ error: "Something went wrong getting the Favourites courses" });
    }
  });
});
module.exports = router;
