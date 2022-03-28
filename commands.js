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

function deleteTodo(id) {
  return db
    .deleteTodos(id)
    .then(() => {
      console.log('Item has been deleted')
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function newTask(task) {
  return db
    .addNewTask(task)
    .then(() => {
      console.log('Item has been added')
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function updateTask(id, task) {
  return db
    .addUpdatedTask(id, task)
    .then(() => {
      console.log('Item has been updated')
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  deleteTodo,
  newTask,
  updateTask,
}
