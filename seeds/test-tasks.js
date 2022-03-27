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
        { id: 1, task: 'vaccuum' },
        { id: 2, task: 'buy groceries' },
        { id: 3, task: 'tidy wardrobe' },
      ])
    })
}
