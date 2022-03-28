exports.seed = function(knex) {
  return knex('todo').del()
    .then(() => {
      return knex('todo').insert([
    {id: 1, task: 'vacuum'},
    {id: 2, task: 'buy groceries'}
  ])
})
}