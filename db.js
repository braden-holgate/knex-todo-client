const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here
function deleteTodos(id, db = connection) {
  return db('todos').delete().where('id', id)
}

function addTodos(newTask, db = connection) {
  return db('todos').insert(newTask)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  deleteTodos,
  addTodos,
  close,
}
