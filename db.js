const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here
function getDelete(task, db = connection) {
  return db('todos').delete(task)
}

function close(db = connection) {
  db.destroy()
}

function addNewTask(task, db = connection) {
  return db('todos').insert(task)
}

module.exports = {
  getTodos,
  close,
  getDelete,
  addNewTask,
}
