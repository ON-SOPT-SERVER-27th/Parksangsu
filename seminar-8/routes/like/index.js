const express = require('express');

const router = express.Router();
const likeController = require('../../controller/likeController');
const isLoggedIn = require('../util/isLoggedIn');

router.post('/', isLoggedIn, likeController.saveLike);
module.exports = router;
