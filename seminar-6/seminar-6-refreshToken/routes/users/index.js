const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');
const authUtils = require('../../middlewares/authUtil');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', userController.getUser);
router.get('/profile', authUtils.checkToken, userController.getProfile);
router.get('/:id', userController.getId);
router.delete('/:id', userController.deleteId);
router.put('/:id', userController.putId);

module.exports = router;