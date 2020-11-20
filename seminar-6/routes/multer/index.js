const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const multerController = require('../../controller/multerController');


router.post('/single', upload.single('image'), multerController.uploadImage);

router.post('/array', upload.array('images', 3), async (req, res) => {
    const imageUrls = req.files.map(file => file.location);
    console.log(req.files);
    console.log(req.body);
    res.send({
        imageUrls: imageUrls,
        file: req.files,
        body: req.body
    });
});

module.exports = router;