const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function removeTodo(id, db = connection) {
  return db('todos').delete().where('id', id)
}

function addTodo(task, db = connection) {
  return db('todos').insert({ task: task })
}

function updateTodo(id, update, db = connection) {
  return db('todos').update({ task: update }).where('id', id)
}

module.exports = {
  getTodos,
  close,
  removeTodo,
  addTodo,
  updateTodo,
}
