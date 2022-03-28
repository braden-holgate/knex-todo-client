/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/*
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'Paint the house' },
    { id: 2, task: 'Make dinner' },
    { id: 3, task: 'Get a pet cat' },
  ])
}
*/

exports.seed = function (knex) {
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        { id: 1, task: 'Paint the house' },
        { id: 2, task: 'Make dinner' },
        { id: 3, task: 'Get a pet cat' },
      ])
    })
}
