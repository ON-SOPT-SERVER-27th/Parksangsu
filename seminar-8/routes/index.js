const express = require('express');

const router = express.Router();

router.use('/user', require('./users'));
router.use('/recommend', require('./recommend'));
router.use('/like', require('./like'));

module.exports = router;
