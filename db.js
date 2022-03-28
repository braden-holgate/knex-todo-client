const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todo').select()
}

// Your DB functions go here

function deleteTodos(id, db = connection) {
  console.log(db('todo').select())
  return db('todo').select()
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
}
