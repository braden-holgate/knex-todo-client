const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function deleteTodos(id, db = connection) {
  return db('todos').where('id', id).del(id)
}

function addNewTask(task, db = connection) {
  return db('todos').insert({ task })
}

function addUpdatedTask(id, task, db = connection) {
  return db('todos').where('id', id).update({ task: task })
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  deleteTodos,
  addNewTask,
  addUpdatedTask,
}
