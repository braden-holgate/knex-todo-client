const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here
function deleteTask(target, db = connection) {
  return db('todos').where('id', target).del()
}

function insertTask(target, db = connection) {
  return db('todos').insert({ task: target })
}

function updateTask(target, target2, db = connection) {
  return db('todos').where('id', target).update({ task: target2 })
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  deleteTask,
  insertTask,
  updateTask,
}
