const  express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const config = require('./config');
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const PORT= 5000;
const    JWT_SECRET= "sl_myJwtSecret";
const    MONGO_URI= "mongodb+srv://CourXive:nh2conh2cuso4@cluster0.bcdjc.mongodb.net/SearchEngine";
const     MONGO_DB_NAME= "courseSearchEngine";

const authRoutes = require('./routes/api/auth');
const profileRoutes = require('./routes/api/Profile');
const favouriteRoutes = require('./routes/api/Favourites');
const courseRoutes = require('./routes/api/course');
const commentRoutes = require('./routes/api/comment');
// import userRoutes from './routes/api/users';
// Testing our commit



const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CourXive",
      version: "1.0.0",
      description: "User and Courses apis",

      servers: ["https://courxive.herokuapp.com"],
    },
  },
  apis: [
    "./routes/api/auth.js",
    "./routes/api/Profile.js",
    "./routes/api/comment.js",
    "./routes/api/course.js",
    "./routes/api/Favourites.js",
  ],
};

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
// app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

// const { MONGO_URI, MONGO_DB_NAME, PORT } = config;

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// DB Config
// /${MONGO_DB_NAME
const db = `${MONGO_URI}}`;

// Connect to Mongo

mongoose
  .connect(db, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
// app.use('/api/users', userRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/profile', profileRoutes);
  app.use('/api/Favourite', favouriteRoutes);
  app.use('/api/course', courseRoutes);
  app.use('/api/comment', commentRoutes);



app.listen(PORT,()=>console.log("server started"));
module.exports= app;