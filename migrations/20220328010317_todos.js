/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('todos', (table) => {
    table.string('task')
    table.increments('id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('todos')
}
