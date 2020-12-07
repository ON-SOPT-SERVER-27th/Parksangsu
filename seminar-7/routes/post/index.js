const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const postController = require('../../controller/postController');

router.post('/', upload.single('image'), postController.createPost);
router.get('/', postController.readAllPost);
router.get('/find', postController.findAllPost);

module.exports = router;