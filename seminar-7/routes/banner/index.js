const express = require('express');
const router = express.Router();
const bannerController = require('../../controller/bannerController');

router.get('/', bannerController.readAllBanner);

module.exports = router;
