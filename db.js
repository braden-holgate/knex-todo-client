const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todo').select()
}

// Your DB functions go here

function deleteItem(id, db = connection) {
  return db('todo').where('id', id).del(id)
}

function close(db = connection) {
  db.destroy()
}

function addItem(task, db = connection) {
  return db('todo').insert(task)
}

function updateItem(id, task, db = connection) {
  return db('todo').where(`id`, id).update('task', task)
}

module.exports = {
  getTodos,
  deleteItem,
  close,
  addItem,
  updateItem,
}
