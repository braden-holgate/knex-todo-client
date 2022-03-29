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
  } finally {
    db.close()
  }
}

async function addTask(task) {
  try {
    const newTask = {
      task: task,
    }
    await db.addTodos(newTask)
    await list()
  } catch (error) {
    logError(error)
  } finally {
    db.close()
  }
}

// function updateTask(id, task) {
//   const updateTask = {
//     id: id,
//     task: task,
//   }
//   return db
//     .updateTodos(updateTask)
//     .then(() => {
//       return list()
//     })
//     .catch((error) => logError(error))
//     .finally(() => db.close())
// }
async function updateTask(id, updateTask) {
  // const updateTask = {
  //   task: task,
  // }
  try {
    await db.updateTodos(id, updateTask)
    await list()
  } catch (error) {
    logError(error)
  } finally {
    db.close()
  }
}

// function deleteTask(id) {
//   return db
//     .deleteTodos(id)
//     .then(() => {
//       // list()
//       // return null
//       return db.getTodos()
//     })
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

async function searchTask(keyword) {
  try {
    const todos = await db.findTodos(`%${keyword}%`)
    printTodos(todos)
  } catch (error) {
    logError(error)
  } finally {
    db.close()
  }
}

async function completeTask(id) {
  try {
    await db.completeTodos(id)
    await list()
  } catch (error) {
    logError(error)
  } finally {
    db.close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}, complete: ${todo.complete}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  deleteTask,
  addTask,
  updateTask,
  searchTask,
  completeTask,
}
