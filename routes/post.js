const express = require('express');
const postController = require('../controllers/post');

const router = express.Router(); //R

router.get('/', postController.getPosts); //only one rout, gives POST
router.post('/post', postController.createPost); // from frontend we are going to post to the backend

module.exports = router;

