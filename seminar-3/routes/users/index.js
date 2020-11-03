const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const routes = require('../../routes');

router.post(routes.signup, userController.postSignup)
router.post(routes.signin, userController.postSignin)
router.get(routes.home, userController.getUsersInfo)

module.exports = router;