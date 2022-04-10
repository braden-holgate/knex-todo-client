
exports.up = function(knex) {
  return knex.schema.createTable('Todos', (table) => {
    table.increments('id')
    table.string('task')
  }) 
};


exports.down = function(knex) {
  return knex.schema.dropTable('Todos')
};
