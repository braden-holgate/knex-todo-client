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
    // console.log(todo)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

function deleteTodo(id) {
  return db.todoDone(id).then(() => {
    console.log('Task completed')
    db.close()
  })
}
//then -> we call the todoDone
//catch -> handle any errors
//finally -> close the database connection

module.exports = {
  list,
  deleteTodo,
}
