const express = require('express');
const postController = require('../controllers/post');
// const validator = require('../validator/index');
const validator = require('../validator'); // benefit of index: do not need to write it at the end of the path

const router = express.Router(); //R

router.get('/', postController.getPosts); //only one rout, gives POST
//! only if this validation: .. passed, it goes next to  createPost
router.post('/post', validator.createPostValidator, postController.createPost); // from frontend we are going to post to the backend

module.exports = router;

