const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const postController = require('../../controller/postController');
const multerController = require('../../controller/multerController');

// Post
router.post('/', upload.single('image'), postController.createPost);
router.get('/', postController.readAllPost);
router.get('/find', postController.findAllPost);

// PostDetail
router.post('/detail/:postId', upload.array('images', 5), postController.createPostDetail, multerController.uploadImages);
router.get('/detail/:postId', postController.findPostDetail);

// PostDetailSelect
router.post('/detail/:postId/select', postController.createPostDetailSelect);
router.get('/detail/:postId/select', postController.findPostDetailSelect);

// Facilities
router.post('/upload', upload.single('image') ,postController.createFacilities);

module.exports = router;