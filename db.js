const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here
function getDelete(id, db = connection) {
  return db('todos').where('id', id).delete(id)
}

function close(db = connection) {
  db.destroy()
}

function addNewTask(task, db = connection) {
  return db('todos').insert({ task: task })
}

function updateNewTask(position, position1, db = connection) {
  return db('todos').where('id', position).update({ task: position1 })
}

module.exports = {
  getTodos,
  close,
  getDelete,
  addNewTask,
  updateNewTask,
}
