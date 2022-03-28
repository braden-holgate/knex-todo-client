const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function completeToDo(id, db = connection) {
  return db('todos').where('id', id).delete(id)
}

// todo.id
// id
// .where('id', id)
//npx knex seed:run to add the deleted to do back

module.exports = {
  getTodos,
  close,
  completeToDo,
}
