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
  return db('todos')
  .where(key, record)
  .del()
}

function addRecord(newRecord, db = connection) {
  return db('todos')
  .insert(newRecord)
}

function updateRecord(key, record, db = connection) {
  return db('todos')
  .where(key, record)
}

function searchRecords(key, record, db = connection) {
  return db('todos')
  .where(key, record)
  
}

module.exports = {
  getTodos,
  close,
  deleteRecord,
  addRecord,
  updateRecord,
  searchRecords
}
