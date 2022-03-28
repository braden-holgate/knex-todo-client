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

function deleteTask(id) {
  return db.removeTodo(id).then(() => {
    console.log(`Delete from Todos ID: ${id}`)
    db.close()
  })
}

function newTask(task) {
  return db.addTodo(task).then(() => {
    console.log(`Task added successfully: ${task}`)
    db.close()
  })
}

function updateTask(id, update) {
  return db.updateTodo(id, update).then(() => {
    console.log(`Task updated: ${update}, at ID: ${id}`)
    db.close()
  })
}

function searchTask(task) {
  return db.searchTodo(task).then((searchedTask) => {
    console.log(searchedTask)
    db.close()
  })
}

module.exports = {
  list,
  deleteTask,
  newTask,
  updateTask,
  searchTask,
}
