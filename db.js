const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function deleteRecord(key, record, db = connection) {
  return db('todos').where(key, record).del()
}

module.exports = {
  getTodos,
  close,
  deleteRecord,
}
