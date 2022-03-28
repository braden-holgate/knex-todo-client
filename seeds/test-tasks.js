exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        { id: 1, task: 'Vaccuum' },
        { id: 2, task: 'Dishes' },
      ])
    })
}
