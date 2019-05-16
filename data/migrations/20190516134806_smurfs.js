exports.up = function(knex, Promise) {
	return knex.schema.createTable('smurfs', (table) => {
		table.increments();
		table.string('name', 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('smurfs');
};
