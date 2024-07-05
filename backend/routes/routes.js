const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');


router.post('/login', authController.loginUser);
router.get('/users', auth, userController.getAllUsers);
router.post('/register-user', userController.registerUser);
router.put('/user/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
module.exports = router;