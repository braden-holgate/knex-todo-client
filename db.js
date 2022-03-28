const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function todoDone(id, db = connection) {
  return db('todos').delete().where('id', id)
}

module.exports = {
  getTodos,
  close,
  todoDone,
}
