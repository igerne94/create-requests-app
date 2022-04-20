const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
// const bodyParser = require('body-parser');
// load env variables
const dotenv = require('dotenv');
dotenv.config()

//db connection
// MONGO_URI=mongodb://localhost/node-api for local
//! everything created by requests will be visible at terminal with ID due to mongoDB
mongoose
  .connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true }
    )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  }
);
  
const postRoutes = require('./routes/post');

//TODO: simple widdleware
// const myOwnMiddleware = (req, res, next) => {
//     console.log('middleware applied');
//     next();
// }

//middleware
app.use(morgan("dev"));

// ORDER MATTERS!
// use bodyParser as middleware
// app.use(bodyParser.json()); //! deprecated. instead:
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// app.use(myOwnMiddleware);
// app.get("/", getPosts);
app.use("/", postRoutes); // callback? YES





const port = 8080;
app.listen(port, () => {
    console.log(`A node js API is listening on port ${port}`);
});