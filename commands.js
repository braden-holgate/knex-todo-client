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

function deleteTodo(id) {
  return db.removeTodo(id).then(() => {
    console.log(`Delete from Todos ID: ${id}`)
    db.close()
  })
}

function newTodo(task) {
  return db.addTodo(task).then(() => {
    console.log(`Task added successfully: ${task}`)
    db.close()
  })
}

module.exports = {
  list,
  deleteTodo,
  newTodo,
}
