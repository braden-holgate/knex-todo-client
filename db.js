const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

///function to delete todo item///

function deleteTodo(id, db = connection) {
  return db('todos').del().where('id', id)
}

function close(db = connection) {
  db.destroy()
}

function addTodo(itemName, db = connection){
  return db ('todos').insert({task:itemName})
}

///add deletedTask to exports
module.exports = {
  getTodos,
  close,
  deleteTodo,
  addTodo
}
