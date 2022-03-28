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

function deleteTodos(id) {
  return db.getDelete(id).then(() => {
    console.log(`The ${id} has been deleted`)
    db.close()
  })
}

function addTask(task) {
  return db.addNewTask(task).then(() => {
    console.log('the task has been added.')
    db.close()
  })
}

function updateTodos(position, position2) {
  return db.updateNewTask(position, position2).then(() => {
    console.log(`the task ${position2} has been updated under id ${position}`)
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

module.exports = {
  list,
  deleteTodos,
  addTask,
  updateTodos,
}
