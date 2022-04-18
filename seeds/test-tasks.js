/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 2, colName: 'buy groceries'},
    {id: 3, colName: 'tidy wardrope'},
    {id: 4, colName: 'buy food'}
  ]);
};
