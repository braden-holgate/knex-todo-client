const db = require('./db')

function list() {
  return db
    .getTodos()
    .then((todos) => {
      // printTodos(todos)
      console.log(todos)
      return null
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function deleteTask(record) {
  return db
    .getTodos()
    .then(() => {
      return db.deleteRecord('id', record)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      list()
    })
}

function addNewRecord(taskName) {
  const task = {
    task: taskName,
  }
  return db.addRecord(task).then(() => {
    console.log('Your task has been added :)')
    list()
  })
}

function updateTask(id, task) {
  return db
    .updateNewTask(id, task)
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
  deleteTask,
  addNewRecord,
  updateTask,
}
