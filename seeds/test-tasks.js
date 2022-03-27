/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ToDo')
    .del()
    .then(() => {
      return knex('ToDo').insert([
        { id: 1, task: 'Vaccuum' },
        { id: 2, task: 'Dishes' },
      ])
    })
}
