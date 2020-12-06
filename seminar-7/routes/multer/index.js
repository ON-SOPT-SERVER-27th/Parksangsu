const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const multerController = require('../../controller/multerController');

router.post('/single', upload.single('image'), multerController.uploadImage);

module.exports = router;