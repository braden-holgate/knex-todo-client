exports.up = function (knex) {
  return knex.schema.createTable('ToDo', (table) => {
    table.increments('id')
    table.string('task')
  })
}

exports.down = function (knex) {}
