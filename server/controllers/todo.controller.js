const ToDo = require('../models/ToDo');

module.exports = {
  addTodo : (req, res) => {
    console.log(req.body, req.user, "in add todo")
    ToDo.findOneAndUpdate({ userId: req.user._id }, { $push : { todoList : req.body.data}}, { upsert: true }, (err, data) => {
      console.log(err, data, 'debug 2');
      ToDo.find({ userId: req.user._id }, (err, data) => {
        res.json(data);
      })
    })
  },

  displayTodos : (req, res) => {
    ToDo.findOne({userId : req.params.id}, (err, data) => {
      res.json({data: data})
    })
  }
}