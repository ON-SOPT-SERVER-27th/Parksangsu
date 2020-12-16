const express = require('express');

const router = express.Router();
const userController = require('../../controller/userController');
const isLoggedIn = require('../util/isLoggedIn');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/history', isLoggedIn, userController.history);
router.get('/profile', isLoggedIn, userController.profile);
router.get('/', userController.readAll);
router.get('/:id', userController.readOne);
module.exports = router;
