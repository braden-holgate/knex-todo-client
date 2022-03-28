const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here
function deleteTask(id, db = connection) {
  return db('todos').where('id', id).del()
}

function insertTask(target, db = connection) {
  return db('todos').insert({ task: target })
}
function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  deleteTask,
  insertTask,
}
