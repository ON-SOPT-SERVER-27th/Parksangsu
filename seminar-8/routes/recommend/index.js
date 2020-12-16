const express = require('express');

const router = express.Router();
const recommendController = require('../../controller/recommendController');

router.post('/', recommendController.getRecommendVideo);
module.exports = router;
