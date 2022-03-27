/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        { id: 1, task: 'groceries' },
        { id: 2, task: 'laundry' },
        { id: 3, task: 'gardening' },
      ])
    })

  // // Deletes ALL existing entries
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
}
