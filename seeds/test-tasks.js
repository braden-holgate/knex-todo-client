

exports.seed = function(knex) {
  return knex('todos').del()
    .then(() => {
      return knex('todos').insert([
        {id: 1, task: 'Wash dishes'},
        {id: 2, task: 'Sweep floor'},
        {id: 3, task: 'Vacuum'},
        {id: 4, task: 'Clean toliet'},
      ])
    })
}