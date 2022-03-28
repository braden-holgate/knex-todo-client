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

function deleteTodo(target) {
  return db
    .deleteTask(target)
    .then(() => {
      console.log(`Task ${target} completed, keep up the good work :)`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function insertTodo(target) {
  return db
    .insertTask(target)
    .then(() => {
      console.log(`Task: "${target}", added to your todos`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function updateTodo(target, target2) {
  return db
    .updateTask(target, target2)
    .then(() => {
      console.log(` Task ${target} updated with ${target2}`)
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
  deleteTodo,
  insertTodo,
  updateTodo,
}
