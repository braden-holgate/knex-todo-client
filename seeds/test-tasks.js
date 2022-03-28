exports.seed =  function(knex) {
	return knex('todos').del()
		.then(() => {
			return knex('todos').insert([
				{id: 1, task: 'vacuum'},
				{id: 2, task: 'buy groceries'},
				{id: 3, task: 'clean bathroom'},
			])
		})
}
