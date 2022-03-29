/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'set up the database', complete: 'no' },
    { id: 2, task: 'display tasks and IDs', complete: 'no' },
    { id: 3, task: 'delete a task by ID', complete: 'no' },
  ])
}
