const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const postController = require('../../controller/postController');
const multerController = require('../../controller/multerController');

// Post
router.post('/', upload.single('image'), postController.createPost);
router.get('/', postController.readAllPost);
router.get('/find', postController.findAllPost);

// PostDetailSelect
router.post('/detail/:postId/select', postController.createPostDetailSelect);

// PostDetail
router.post('/detail/:postId', upload.array('images', 5), postController.createPostDetail, multerController.uploadImages);
router.get('/detail/:postId', postController.findPostDetail);


module.exports = router;