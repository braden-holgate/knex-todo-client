const db = require('./db')

// function list() {
//   return db
//     .getTodos()
//     .then((todos) => {
//       printTodos(todos)
//       return null
//     })
//     .catch((err) => {
//       logError(err)
//     })
//     .finally(() => {
//       db.close()
//     })
// }

async function list() {
  try {
    const todos = await db.getTodos()
    printTodos(todos)
    // TODO return null, can it be ignored?
  } catch (error) {
    logError(error)
  } finally {
    db.close()
  }
}

async function deleteTask(id) {
  try {
    await db.deleteTodos(id)
    await list()
  } catch (error) {
    logError(error)
  }
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
}
