const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

function findTodos(keyword, db = connection) {
  return db('todos').select().whereLike('task', keyword)
}

// Your DB functions go here
function deleteTodos(id, db = connection) {
  return db('todos').delete().where('id', id)
}

function addTodos(newTask, db = connection) {
  return db('todos').insert(newTask)
}

function updateTodos(id, updateTask, db = connection) {
  return db('todos').update('task', updateTask).where('id', id)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  findTodos,
  deleteTodos,
  addTodos,
  updateTodos,
  close,
}
