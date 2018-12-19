const express = require('express');
const userController = require('../controllers/user.controller');
const todoController = require('../controllers/todo.controller');
const auth = require('../modules/auth');

var router = express.Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/isLoggedin', auth.isLoggedIn, userController.isLoggedIn)

router.post('/addTodo', auth.isLoggedIn, todoController.addTodo)

module.exports = router;