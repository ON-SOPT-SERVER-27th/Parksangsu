const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const postController = require('../../controller/postController');

// Post
router.post('/', upload.single('image'), postController.createPost);
router.get('/', postController.readAllPost);
router.get('/find', postController.findAllPost);


// PostDetail
router.post('/detail/:postId', upload.array('images'), postController.createPostDetail);
router.get('/detail/:postId', postController.findPostDetail);


module.exports = router;