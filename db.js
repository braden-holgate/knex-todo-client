const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function completeToDo(task, db = connection) {
  return db('todos').delete(task)
}

// todo.id

module.exports = {
  getTodos,
  close,
  completeToDo,
}
