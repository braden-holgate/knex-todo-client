const config = require('./knexfile').development
const connection = require('knex')(config)

function getTodos(db = connection) {
  return db('todos').select()
}

// Your DB functions go here

function close(db = connection) {
  db.destroy()
}

function deleteTaskFromDb(id, db = connection) {
  return db('todos')
    .delete()
    .where('id', id)
}

function addTaskToDb(task, db = connection) {
  return db('todos')
    .insert({task: task})
}

function editTaskInDb(id, task, db = connection) {
  return db('todos')
    .where('id', id)
    .update({task: task})
}

function searchInDb(string, db = connection) {
  return db('todos')
  .where('task', 'like', `%${string}%`)
}

module.exports = {
  getTodos,
  close,
  deleteTaskFromDb,
  addTaskToDb,
  editTaskInDb,
  searchInDb
}
