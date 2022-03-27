/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        { id: 1, task: 'task' },
        { id: 2, task: 'rowValue2' },
        { id: 3, task: 'rowValue3' },
      ])
    })
}
