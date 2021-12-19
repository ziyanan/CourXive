const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("../../config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
// User Model
const User = require("../../models/User");

const JWT_SECRET = "sl_myJwtSecret";
// const { JWT_SECRET } = config;
const router = Router();


/**
 * @swagger
 * definitions:
 *  Register-User:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the user
 *     example: 'Annie'
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'Annie@gmail.com'
 *    InterestOfLearning:
 *     type: string
 *     description: What do you want to learn 
 *     example: 'Web development'
 *    password:
 *     type: string
 *     description: Password should be greater than 6 characters
 *     example: '12345678'
 *    phone:
 *     type: string
 *     description: Enter your phone number
 *     example: '+1345345343'
 *  Update-User:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the user
 *     example: 'Annie'

 *    InterestOfLearning:
 *     type: string
 *     description: What do you want to learn 
 *     example: 'Web development'
 *    image:
 *     type: string
 *     description: Cloudinary link of the image were its uploaded
 *     example: 'https://cloudinary.com/?utm_source=google&utm_medium=cpc&utm_campaign=Rbrand&utm_content=483362991544&utm_term=cloudinary&gclid=Cj0KCQiAnuGNBhCPARIsACbnLzpISFs1rkPjnZJ2CSMU-skE8Xe1qy7rSQj8NQ-6xNyUx4ylMYyXPG8aAnmsEALw_wcB'
 *    phone:
 *     type: string
 *     description: Enter your phone number
 *     example: '+1345345343'
 *  Login-User:
 *   type: object
 *   properties:
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'Annie@gmail.com'
 *    password:
 *     type: string
 *     description: Password should be greater than 6 characters
 *     example: '12345678'
 */



 /**
  * @swagger
  * /api/auth/login:
  *  post:
  *   summary: User Login
  *   description: Recieve user's infrormation after successfull login like jwt token
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Login-User'
  *   responses:
  *    200:
  *     description: Will return user's data like name,email and jwt token
  *    400:
  *     description: Enter all fields correctly OR User does't exist
  */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill out all the fields" });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error("User does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });
    if (!token) throw Error("Couldnt sign the token");

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        InterestOfLearning: user.InterestOfLearning,
        phone: user.phone,
      },
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */



/**
  * @swagger
  * /api/auth/register:
  *  post:
  *   summary: Create New User
  *   description: Create new user
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Register-User'
  *   responses:
  *    200:
  *     description: User created succesfully
  *    400:
  *     description: Enter all fields correctly OR User already exist
  */
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password, phone, InterestOfLearning } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) throw Error("User already exists");

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error("Something went wrong with bcrypt");

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error("Something went wrong hashing the password");

    const newUser = new User({
      name,
      email,
      password: hash,
      phone,
      InterestOfLearning,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Something went wrong saving the user");

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 */

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   GET api/auth/delete
 * @desc    Delete user
 * @access  Private
 */

router.post("/delete", async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please fill out all the fields" });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error("User does not exist");
    //Check if username and password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    User.remove({ email: email }, function (err) {
      if (!err) {
        res.status(200).json({ msg: "User Successfully got deleted" });
      } else {
        res.status(400).json({ msg: "User not deleted Something went wrong" });
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
