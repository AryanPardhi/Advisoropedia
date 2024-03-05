const express = require('express');
const router = express.Router();
const auth = require("../Middleware/check-auth")
const postController = require('../Controller/postController');

// Route for creating a new post
router.post('/createpost', postController.createPost,auth);
router.get('/getpost', postController.getAllPosts,auth);

module.exports = router;
