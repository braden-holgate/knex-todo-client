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

function deleteTask(key, record) {
  return db
    .getTodos()
    .then(() => {
      return db.deleteRecord(key, record)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      list()
    })
}

function updateTask(key, record, updated) {
  return db
    .getTodos()
    .then(() => {
      return db.updateRecord(key, record, updated)
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

  db.addRecord(task)
    .then(() => {
      console.log('Your task has been added :)')
      list()
  })
}

function searchTasks(key, record) {
  return db
    .getTodos()
    .then(() => {
      return db.searchRecords(key, record)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
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
  searchTasks
}
