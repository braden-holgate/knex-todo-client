const db = require('./db')

function list() {
  return db
    .getTodos()
    .then((todos) => {
      printTodos(todos)
      return null
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

function deleteToDo(id) {
  return db
    .deleteTaskFromDb(id)
    .then(() => {
      console.log('Task complete! Task removed from list.')
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function addToDo(task) {
  return db
    .addTaskToDb(task)
    .then(() => {
      console.log('New task has been added!')
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

module.exports = {
  list,
  deleteToDo,
  addToDo,
}
