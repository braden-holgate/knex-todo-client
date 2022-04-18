const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos')
  .join('id', 'colName')
  .select('id')
  .first('id')
}

// Your DB functions go here

function insertTodo (todoName, db = connection) {
return db('todos')
.insert ({colName: 'buy food'})

}

function updateTodo (updateTodoName, db = connection) {
  return db ('todos')
  .where({id: 4})
  .update ({colName: updateTodoName})
}


function deleteTodo (db = connection) {
  return db ('todos')
  .where({ id: 1 })
  .del()
}


function close(db = connection) {
  db.destroy()
}

module.exports = {
  insertTodo,
  updateTodo,
  deleteTodo,
  getTodos,
  close,
}
