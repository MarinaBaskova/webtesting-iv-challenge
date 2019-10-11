exports.seed = function(knex, Promise) {
	return knex('smurfs').truncate().then(function() {
		return knex('smurfs').insert([ { name: 'Smurfette' }, { name: 'Sweepy' }, { name: 'Brainy' } ]);
	});
};
