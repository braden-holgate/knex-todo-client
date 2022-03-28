const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todo').select()
}

// Your DB functions go here

function deleteItem(task, db = connection) {
  return db('todo').del(task)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  deleteItem,
  close,
}
