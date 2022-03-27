exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        { id: 1, task: 'Learn JavaScript' },
        { id: 2, task: 'Eat lunch' },
        { id: 3, task: 'Go walking' },
      ])
    })
}
