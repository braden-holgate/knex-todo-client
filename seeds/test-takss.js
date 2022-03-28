/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'clone the repo' },
    { id: 2, task: 'ckeckout a new branch' },
    { id: 3, task: 'set up and install dependencies' },
  ])
}
