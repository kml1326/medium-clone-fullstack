const express = require('express');
const todoController = require('../controllers/todo.controller');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/signup', (req, res) => {
  res.render('index');
});

router.get('/dashboard', (req, res) => {
  res.render('index');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).redirect('/')
});

router.get('/:id/todos', todoController.displayTodos )

module.exports = router;