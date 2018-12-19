const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ToDoSchema = new mongoose.Schema({
  userId: { type: ObjectId, ref: 'User' },
  todoList: [{
    todo: String,
    done: false
  }]
})

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;