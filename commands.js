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
  // const id = todo.id
  return db.completeToDo(id).then(() => {
    console.log(`task ${id} is deleted`)
    db.close()
  })
}

module.exports = {
  list,
  deleteToDo,
}
