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

////function to delete todos ////

function deleteTodo (id) {
  return db.deleteTodo(id)
    .then(()=>{})
    .catch(logError)
    .finally(db.close)
}

///////////////////////////////////

function logError(err) {
  console.error('Uh oh!', err.message)
}


function addItem (itemName) {
  return db.addTodo(itemName)
  .then(()=>{})
  .catch(logError)
  .finally(db.close)
} 


module.exports = {
  list,
  deleteTodo,
  addItem
}
